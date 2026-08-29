import type { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Portable SSDs: Advertised Speeds vs. the Interface Bottleneck That Caps Them",
  description:
    "A 2,000MB/s external SSD can run at 400MB/s on the wrong port. USB generation naming, real throughput data, and a real same-drive-two-ports example.",
};

export default function Page() {
  return <Content />;
}
