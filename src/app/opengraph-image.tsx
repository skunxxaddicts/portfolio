import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — Frontend Developer`;

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#07070a",
        padding: "72px 80px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ color: "#5b5964", fontSize: 24, letterSpacing: 6 }}>
          ~/morkie
        </span>
        <span
          style={{
            color: "#07070a",
            background: "#e8b653",
            fontSize: 18,
            letterSpacing: 4,
            padding: "8px 14px",
          }}
        >
          {site.domain}
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <span
          style={{
            color: "#ece9e2",
            fontSize: 96,
            lineHeight: 1.02,
            letterSpacing: -2,
          }}
        >
          Interfaces that feel
        </span>
        <span
          style={{
            color: "#e8b653",
            fontSize: 96,
            lineHeight: 1.02,
            letterSpacing: -2,
          }}
        >
          inevitable.
        </span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ color: "#9b98a3", fontSize: 24 }}>
          frontend developer — next.js · typescript · tailwind
        </span>
        <span style={{ color: "#5b5964", fontSize: 24 }}>
          github.com/{site.handle}
        </span>
      </div>
    </div>,
    size,
  );
}
