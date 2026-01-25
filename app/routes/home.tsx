import type { Route } from "./+types/home";
import { PageLayout } from "../components/page-layout";
import HomeContent from "../content/home.mdx";

const title = "Afrie Irham";
const description = "builder, creator, developer";
const domain = "https://afrieirham.com";
const ogImage = "/og.png";
const twitterSite = "@afrieirham_";
const favicon = "/favicon.ico";

export function meta({}: Route.MetaArgs) {
  return [
    { title },
    { name: "description", content: description },
    { name: "og:title", content: title },
    { name: "og:description", content: description },
    { name: "og:image", content: ogImage },
    { name: "og:url", content: domain },
    { name: "og:type", content: "website" },
    { name: "og:locale", content: "en_US" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
    { name: "twitter:url", content: domain },
    { name: "twitter:site", content: twitterSite },
    { name: "twitter:creator", content: twitterSite },
    { name: "twitter:image:alt", content: title },
    { name: "favicon", href: favicon },
  ];
}

export default function Home() {
  return (
    <PageLayout>
      <HomeContent />
    </PageLayout>
  );
}
