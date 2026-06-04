import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#CC0000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Top rule */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#000",
            display: "flex",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            fontSize: "96px",
            fontWeight: "bold",
            color: "#fff",
            letterSpacing: "-4px",
            lineHeight: 1,
            marginBottom: "16px",
            display: "flex",
          }}
        >
          QZR
        </div>

        {/* Company name */}
        <div
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "#fff",
            letterSpacing: "8px",
            textTransform: "uppercase",
            marginBottom: "24px",
            display: "flex",
          }}
        >
          QuaZarR Security
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "22px",
            color: "rgba(255,255,255,0.85)",
            letterSpacing: "2px",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          AI Risk Assessments for UK SMBs
        </div>

        {/* Bottom rule */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#000",
            display: "flex",
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
