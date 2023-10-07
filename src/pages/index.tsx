import Head from "next/head";

const title = "Afrie Irham";
const description = "builder, creator, developer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Afrie Irham</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:site_name" content={title} />
        <meta property="og:url" content={`https://afrieirham.com`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://afrieirham.com/og.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="afrieirham.com" />
        <meta property="twitter:url" content={`https://afrieirham.com`} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://afrieirham.com/og.png" />
      </Head>
      <iframe
        src="https://bento.me/afrieirham"
        className="min-h-screen w-full border-none"
      />
    </>
  );
}
