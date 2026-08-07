"use client";

import { useState } from "react";
import { Framework, FrameworkBlock } from "../data/frameworks";

interface FrameworkCardProps {
  framework: Framework;
}

function stripHtml(html: string): string {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

function stripHtmlToStructured(html: string): string {
  const div = document.createElement("div");
  div.innerHTML = html;

  let output = "";

  const walk = (node: Node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent?.replace(/\s+/g, " ").trim();
      if (text) output += text;
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const el = node as HTMLElement;
    const tag = el.tagName.toLowerCase();

    if (tag === "br") {
      output += "\n";
      return;
    }

    if (tag === "li") {
      output += "- ";
      el.childNodes.forEach(walk);
      output += "\n";
      return;
    }

    if (tag === "strong" || tag === "b") {
      output += "**" + (el.textContent || "").trim() + "**";
      return;
    }

    if (tag === "code") {
      output += "`" + (el.textContent || "").trim() + "`";
      return;
    }

    // Handle tree divs (directory structures) - preserve formatting
    if (el.classList.contains("fw-tree")) {
      output += "\n```\n";
      output += (el.textContent || "");
      output += "\n```\n";
      return;
    }

    // Handle tables
    if (tag === "table") {
      const rows = el.querySelectorAll("tr");
      const headers: string[] = [];
      const data: string[][] = [];

      rows.forEach((row, ri) => {
        const cells = row.querySelectorAll("th, td");
        const cellTexts: string[] = [];
        cells.forEach((cell) => cellTexts.push((cell.textContent || "").trim()));
        if (ri === 0 && cells[0]?.tagName === "TH") {
          headers.push(...cellTexts);
        } else {
          data.push(cellTexts);
        }
      });

      if (headers.length) {
        output += "| " + headers.join(" | ") + " |\n";
        output += "|" + headers.map(() => "---").join("|") + "|\n";
        data.forEach((row) => {
          output += "| " + row.join(" | ") + " |\n";
        });
      }
      output += "\n";
      return;
    }

    el.childNodes.forEach(walk);
  };

  div.childNodes.forEach(walk);
  return output.trim();
}

function generateCustomInstruction(
  framework: Framework,
  tier: "small" | "serious"
): string {
  const tierLabel = tier === "small" ? "Small Project" : "Serious Project";

  const architectureBlock = framework.blocks.find((b) => {
    if (tier === "small") return b.title === "Small Project Architecture";
    return b.title === "Golden Standard Architecture";
  });

  const dirBlock = framework.blocks.find((b) => {
    if (tier === "small") return b.title.includes("Small Project Directory") || b.title.includes("Small Project Structure");
    return b.title === "Directory Structure Blueprint" || b.title.includes("Monorepo Directory Structure");
  });

  const dataFlowBlock = framework.blocks.find((b) =>
    b.title.includes("Data &") || b.title.includes("Data Flow")
  );

  const whyBlock = framework.blocks.find((b) =>
    b.title.includes("Why It's") || b.title.includes("Why This")
  );

  const stackBlock = framework.blocks.find((b) =>
    b.title === "Complementary Stack"
  );

  const whenNotBlock = framework.blocks.find((b) =>
    b.title.includes("When Not To Use")
  );

  // ── Token-efficient AI agent prompt ──
  let prompt = "";

  // HEADER: Minimal, scannable
  prompt += `ARCHITECTURE: ${framework.name} — ${tierLabel}\n`;
  prompt += `PATTERN: ${framework.archBadge}\n`;
  prompt += `FRAMEWORK: ${framework.name}\n`;
  prompt += `TIER: ${tierLabel}\n`;
  prompt += `\n---\n\n`;

  // ROLE
  prompt += `## ROLE\n`;
  prompt += `You are implementing a ${tierLabel.toLowerCase()} ${framework.name} application. Follow these architectural rules exactly. Every deviation must be explicitly justified.\n\n`;

  // ARCHITECTURE RULES
  if (architectureBlock) {
    prompt += `## ARCHITECTURE RULES\n`;
    prompt += stripHtmlToStructured(architectureBlock.contentHtml) + "\n\n";
  }

  // DIRECTORY SCAFFOLD
  if (dirBlock) {
    prompt += `## DIRECTORY SCAFFOLD\n`;
    prompt += `Create files matching this structure exactly:\n\n`;
    // Extract the tree content
    const treeMatch = dirBlock.contentHtml.match(/<div class="fw-tree">([\s\S]*?)<\/div>/);
    if (treeMatch) {
      prompt += "```\n";
      prompt += stripHtml(treeMatch[1]).trim();
      prompt += "\n```\n\n";
    } else {
      prompt += stripHtmlToStructured(dirBlock.contentHtml) + "\n\n";
    }
  }

  // DATA FLOW
  if (dataFlowBlock && tier === "serious") {
    prompt += `## DATA FLOW CONTRACT\n`;
    prompt += stripHtmlToStructured(dataFlowBlock.contentHtml) + "\n\n";
  }

  // STACK REQUIREMENTS
  if (stackBlock) {
    prompt += `## REQUIRED STACK\n`;
    prompt += stripHtmlToStructured(stackBlock.contentHtml) + "\n\n";
  }

  // DESIGN RATIONALE
  if (whyBlock && tier === "serious") {
    prompt += `## DESIGN RATIONALE\n`;
    prompt += stripHtmlToStructured(whyBlock.contentHtml) + "\n\n";
  }

  // CONSTRAINTS
  if (whenNotBlock && tier === "serious") {
    prompt += `## CONSTRAINTS\n`;
    prompt += stripHtmlToStructured(whenNotBlock.contentHtml) + "\n\n";
  }

  // IMPLEMENTATION DIRECTIVE
  prompt += `---\n\n`;
  prompt += `## INSTRUCTIONS\n\n`;
  prompt += `1. Scaffold the directory structure shown above\n`;
  prompt += `2. Implement each layer following the architecture rules\n`;
  prompt += `3. Use the specified libraries from the required stack\n`;
  prompt += `4. Follow the data flow contract for all data movement\n`;
  prompt += `5. Do NOT add layers not specified here\n`;
  prompt += `6. Do NOT deviate from the naming conventions in the directory scaffold\n`;
  prompt += `7. Write this guideline into your project's AGENTS.md file so future agents follow the same architecture\n`;

  return prompt;
}

export default function FrameworkCard({ framework }: FrameworkCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [tier, setTier] = useState<"small" | "serious">("serious");
  const [copiedSmall, setCopiedSmall] = useState(false);
  const [copiedSerious, setCopiedSerious] = useState(false);

  const filteredBlocks = framework.blocks.filter((block: FrameworkBlock) => {
    if (!block.tier || block.tier === "all") return true;
    return block.tier === tier;
  });

  const handleCopy = async (
    e: React.MouseEvent,
    targetTier: "small" | "serious"
  ) => {
    e.stopPropagation();
    const instruction = generateCustomInstruction(framework, targetTier);
    try {
      await navigator.clipboard.writeText(instruction);
      if (targetTier === "small") {
        setCopiedSmall(true);
        setTimeout(() => setCopiedSmall(false), 2000);
      } else {
        setCopiedSerious(true);
        setTimeout(() => setCopiedSerious(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div
      className={`fw-card ${isOpen ? "open" : ""}`}
      data-cat={framework.cat}
      data-name={framework.name.toLowerCase()}
      id={framework.id}
    >
      <div className="fw-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="fw-header-left">
          <div className={`fw-icon ${framework.cat}`}>{framework.icon}</div>
          <div>
            <div className="fw-name">{framework.name}</div>
            <div className="fw-arch-badge">{framework.archBadge}</div>
          </div>
        </div>
        <div className="fw-header-right">
          <span className={`fw-cat-tag ${framework.cat}`}>{framework.cat}</span>
          <div className="fw-toggle">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>
      <div className="fw-body">
        <div className="tier-toggle" onClick={(e) => e.stopPropagation()}>
          <div className="tier-btn-group">
            <button
              className={`tier-btn ${tier === "small" ? "active" : ""}`}
              onClick={() => setTier("small")}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              Small Project
            </button>
            <button
              className={`tier-copy-btn ${copiedSmall ? "copied" : ""}`}
              onClick={(e) => handleCopy(e, "small")}
              title="Copy AI Agent Prompt (Small)"
            >
              {copiedSmall ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
              )}
            </button>
          </div>
          <div className="tier-btn-group">
            <button
              className={`tier-btn ${tier === "serious" ? "active" : ""}`}
              onClick={() => setTier("serious")}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              Serious Project
            </button>
            <button
              className={`tier-copy-btn ${copiedSerious ? "copied" : ""}`}
              onClick={(e) => handleCopy(e, "serious")}
              title="Copy AI Agent Prompt (Serious)"
            >
              {copiedSerious ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className="fw-content">
          {filteredBlocks.map((block: FrameworkBlock, idx: number) => (
            <div
              key={`${tier}-${idx}`}
              className={`fw-block ${block.fullWidth ? "fw-content-full" : ""} ${block.tier === "small" ? "fw-block-small" : ""}`}
            >
              <div className="fw-block-title">
                <span dangerouslySetInnerHTML={{ __html: block.svgIcon }} />
                {block.title}
              </div>
              <div dangerouslySetInnerHTML={{ __html: block.contentHtml }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
