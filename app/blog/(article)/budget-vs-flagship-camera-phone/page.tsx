import type { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Budget Phone Cameras vs. Flagships: What the Sensor Specs Actually Explain",
  description:
    "A 200MP budget camera and a 48MP flagship camera aren't competing on the same axis. Sensor size, pixel binning, and aperture explained with real examples.",
};

export default function Page() {
  return <Content />;
}
