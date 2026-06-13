import { ImageResponse } from "next/og";
import {
  FaMark,
  getNewsreaderFont,
  newsreaderFontConfig,
} from "@/lib/favicon-mark";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default async function AppleIcon() {
  const font = await getNewsreaderFont();

  return new ImageResponse(<FaMark fontSize={108} />, {
    ...size,
    fonts: [{ ...newsreaderFontConfig, data: font }],
  });
}
