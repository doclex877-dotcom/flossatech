import type { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "True Wireless Earbuds: How Battery-Life Numbers on the Box Are Measured",
  description:
    "Every brand tests battery life differently. A look at the standards, the fine print, and how to compare across brands fairly, with real testing-methodology sources.",
};

export default function Page() {
  return <Content />;
}
