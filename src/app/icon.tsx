import { ImageResponse } from "next/og";
import {
  FaMark,
  getNewsreaderFont,
  newsreaderFontConfig,
} from "@/lib/favicon-mark";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default async function Icon() {
  const font = await getNewsreaderFont();

  return new ImageResponse(<FaMark fontSize={19} />, {
    ...size,
    fonts: [{ ...newsreaderFontConfig, data: font }],
  });
}
