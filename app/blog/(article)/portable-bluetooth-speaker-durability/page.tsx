import type { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Bluetooth Speaker IP Ratings, Explained: What IP67 Actually Promises You",
  description:
    "IP67, IPX7, IP68 — each digit is a specific, standardized IEC 60529 test. What each rating actually certifies, with a real JBL Flip generational example.",
};

export default function Page() {
  return <Content />;
}
