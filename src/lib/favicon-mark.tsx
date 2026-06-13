import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function getNewsreaderFont() {
  return readFile(
    join(process.cwd(), "public/fonts/newsreader-italic-500.woff"),
  );
}

export function FaMark({ fontSize }: { fontSize: number }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0a0a",
        color: "#fafafa",
        fontSize,
        fontFamily: "Newsreader",
        fontStyle: "italic",
        fontWeight: 500,
        letterSpacing: "-0.06em",
      }}
    >
      FA
    </div>
  );
}

export const newsreaderFontConfig = {
  name: "Newsreader",
  style: "italic" as const,
  weight: 500 as const,
};
