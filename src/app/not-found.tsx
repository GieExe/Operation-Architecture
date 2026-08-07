import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      padding: "40px 20px",
      textAlign: "center",
      fontFamily: "var(--font-body)",
      background: "var(--bg)",
      color: "var(--text-primary)",
    }}>
      <h1 style={{
        fontSize: "clamp(60px, 12vw, 140px)",
        fontFamily: "var(--font-display)",
        color: "var(--accent)",
        lineHeight: 1,
        marginBottom: "16px",
      }}>
        404
      </h1>
      <p style={{
        fontSize: "18px",
        color: "var(--text-secondary)",
        marginBottom: "32px",
        maxWidth: "400px",
      }}>
        This page doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "12px 24px",
          background: "var(--accent)",
          color: "#080808",
          borderRadius: "8px",
          fontWeight: 600,
          fontSize: "15px",
          textDecoration: "none",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to Architectura
      </Link>
    </div>
  );
}
