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

function generateCustomInstruction(
  framework: Framework,
  tier: "small" | "serious"
): string {
  const targetBlocks = [
    "Golden Standard Architecture",
    "Small Project Architecture",
    "Small Project Directory Structure",
    "Data & State Flow",
    "Directory Structure Blueprint",
    "Why It's The Best Match",
    "Complementary Stack",
  ];

  const sections = framework.blocks.filter((block) => {
    if (!targetBlocks.includes(block.title)) return false;
    if (tier === "small") {
      return !block.tier || block.tier === "all" || block.tier === "small";
    } else {
      return !block.tier || block.tier === "all" || block.tier === "serious";
    }
  });

  const tierLabel = tier === "small" ? "Small Project" : "Serious Project";

  let instruction = `# ${framework.name} - ${tierLabel} Architecture\n\n`;
  instruction += `## Framework: ${framework.name}\n`;
  instruction += `## Pattern: ${framework.archBadge}\n`;
  instruction += `## Project Size: ${tierLabel}\n\n`;

  for (const section of sections) {
    instruction += `### ${section.title}\n\n`;
    instruction += stripHtml(section.contentHtml) + "\n\n";
  }

  instruction += `---\n\n`;
  instruction += `Use this architecture as the foundation for implementing the ${framework.name} ${tierLabel.toLowerCase()} application. `;
  instruction += `Follow the patterns described above for a production-grade, maintainable application.`;

  return instruction;
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
              title="Copy Small Project Instruction"
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
              title="Copy Serious Project Instruction"
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
