import type { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Dash Cam Night Footage: Sensor Size and Aperture, Not Megapixels, Explain the Difference",
  description:
    "A 4K dash cam can still produce unreadable license plates at night. Sony STARVIS 2 sensor gain data, aperture f-numbers, and how to read a spec sheet.",
};

export default function Page() {
  return <Content />;
}
