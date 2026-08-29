import type { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "E-Readers Compared: Screen Tech, Storage, and Ecosystem Lock-In",
  description:
    "E-ink battery life, color E Ink resolution trade-offs, and the file-format lock-in decision that matters more than the screen spec.",
};

export default function Page() {
  return <Content />;
}
