import type { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Budget Android Tablets vs. the Cheapest iPad: Where the Price Gap Actually Comes From",
  description:
    "The entry iPad's price looks competitive with budget Android tablets — until you price out the stylus and keyboard Apple sells separately.",
};

export default function Page() {
  return <Content />;
}
