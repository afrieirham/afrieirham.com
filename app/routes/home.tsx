import type { Route } from "./+types/home";

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
    <div className="max-w-md mx-auto py-8 sm:py-16 font-serif px-6">
      <div>
        <h1 className="text-xl font-bold">afrie irham</h1>
        <ul className="list-disc list-inside">
          <li>web dev / typescript, react</li>
          <li>
            <a href="https://stronglifts.com/stronglifts-5x5/lite">
              stronglifts 5x5 lite
            </a>
          </li>
          <li>
            <a href="https://github.com/afrieirham/homelab">homelab notes</a>
          </li>
          <li>
            <a href="https://blog.afrieirham.com">writing</a>
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h2 className="">products</h2>
        <div className="grid grid-cols-1 gap-2 mt-2">
          {[
            {
              name: "whatsapp link rotator",
              link: "wasepje.com",
            },
            {
              name: "catchiest temporary url shortener",
              link: "typit.in",
            },
            {
              name: "tech jobs in malaysia",
              link: "kerja-it.com",
            },
            {
              name: "stadium bukit jalil seat view",
              link: "bukitjalilstadium.com",
            },
            {
              name: "koleksi resepi @khairulaming",
              link: "resepika.com",
            },
          ].map((product) => (
            <a
              key={product.link}
              href={`https://${product.link}`}
              className="border p-4 rounded-xl border-zinc-200 hover:bg-zinc-50"
            >
              <div className="flex gap-2">
                <img
                  src={`https://${product.link}/favicon.ico`}
                  className="w-10 h-10 rounded-lg border-zinc-200 border p-1"
                />
                <div className="font-sans flex flex-col">
                  <p className="text-sm text-black">{product.name}</p>
                  <p className="text-xs text-zinc-500">{product.link}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h2 className="">socials</h2>
        <ul className="list-disc list-inside">
          <li>
            <a href="https://github.com/afrieirham">github.com/afrieirham</a>
          </li>
          <li>
            <a href="https://linkedin.com/in/afrieirham">
              linkedin.com/in/afrieirham
            </a>
          </li>
          <li>
            <a href="https://twitter.com/afrieirham_">
              twitter.com/afrieirham_
            </a>
          </li>
          <li>
            <a href="https://youtube.com/afrieirham_">
              youtube.com/afrieirham_
            </a>
          </li>
          <li>
            <a href="https://tiktok.com/@afrieirham">tiktok.com/@afrieirham</a>
          </li>
        </ul>
      </div>
      <p></p>
    </div>
  );
}
