import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#07070a",
        border: "2px solid #1f1f28",
      }}
    >
      <span
        style={{
          color: "#e8b653",
          fontSize: 34,
          fontWeight: 700,
          fontFamily: "monospace",
        }}
      >
        M
      </span>
    </div>,
    size,
  );
}
