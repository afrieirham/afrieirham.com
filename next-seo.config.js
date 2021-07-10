const title = 'Afrie Irham'
const description = 'Software developer who loves to create and build stuff.'

const SEO = {
  title,
  description,
  canonical: 'https://afrieirham.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://afrieirham.com',
    title,
    description,
    images: [
      {
        url: 'https://afrieirham.com/og.png',
        alt: title,
      },
    ],
    site_name: 'Afrie Irham',
  },
  twitter: {
    handle: '@afrieirham_',
    cardType: 'summary_large_image',
  },
}

export { SEO }
