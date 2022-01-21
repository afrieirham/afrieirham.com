import Head from 'next/head'
import {
  Flex,
  Heading,
  Text,
  Link,
  Box,
  Stack,
  useBreakpointValue,
  Icon,
  Img,
} from '@chakra-ui/react'
import { GitHub, Linkedin, Mail, Twitter, Youtube } from 'react-feather'

import Projects from '../components/Projects'
import Articles from '../components/Articles'
import { fetchArticles } from '../utils/hashnode'

function LinkIcon({ name, href }) {
  return (
    <Link href={href} isExternal>
      <Icon as={name} color='gray.400' _hover={{ color: 'red.300' }} boxSize='1.5em' focusable />
    </Link>
  )
}

function LinkText({ children, href }) {
  return (
    <Link textDecoration='underline' _hover={{ color: 'red.400' }} href={href} isExternal>
      {children}
    </Link>
  )
}

export default function Home({ articles }) {
  const heading = useBreakpointValue({ base: 'lg' })
  const size = useBreakpointValue({ base: '125px', md: '200px' }) || '125px'

  const meta = {
    title: 'Afrie Irham',
    description: 'Software developer who loves to create and build stuff.',
    image: 'https://afrieirham.com/og.png',
    type: 'website',
    twitter: {
      handle: '@afrieirham_',
      cardType: 'summary_large_image',
    },
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
          rel='stylesheet'
        ></link>
        <meta name='robots' content='follow, index' />
        <meta name='description' content={meta.description} />
        <meta property='og:url' content='https://afrieirham.com' />
        <link rel='canonical' href='https://afrieirham.com' />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content={meta.title} />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        <meta name='twitter:card' content={meta.twitter.cardType} />
        <meta name='twitter:site' content={meta.twitter.handle} />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />
      </Head>

      <Flex
        alignItems='center'
        mx='auto'
        w={{ base: 'full', md: '2xl' }}
        mt={{ base: 8, md: 16 }}
        paddingX={{ base: 4, md: 0 }}
        direction={{ base: 'column', md: 'row' }}
        justifyContent={{ base: 'start', md: 'center' }}
      >
        <Box
          ml={{ base: 0, md: 4 }}
          mr={{ base: 0, md: 16 }}
          mb={{ base: 2, md: 0 }}
          pt='{{ base: 0, md: 0 }}'
        >
          <Img src='/portrait.png' htmlHeight={size} htmlWidth={size} />
        </Box>
        <Flex maxWidth='550px' direction='column' alignItems={{ base: 'center', md: 'flex-start' }}>
          <Heading
            size={heading}
            fontWeight='extrabold'
            mb={{ base: 0, md: 4 }}
            letterSpacing='tight'
          >
            Hi, I'm Afrie Irham 👋
          </Heading>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            textAlign={{ base: 'center', md: 'left' }}
            mb='4'
          >
            Software developer who loves to create and build stuff.
          </Text>

          <Stack direction='row' spacing='4'>
            <LinkIcon name={Mail} href='mailto:afrieirham.work@gmail.com' />
            <LinkIcon name={Linkedin} href='https://linkedin.com/in/afrieirham' />
            <LinkIcon name={GitHub} href='https://github.com/afrieirham' />
            <LinkIcon name={Twitter} href='https://twiiter.com/afrieirham_' />
            <LinkIcon name={Youtube} href='https://www.youtube.com/c/madebyafrie' />
          </Stack>
        </Flex>
      </Flex>
      <Articles articles={articles} />
      <Projects />
    </>
  )
}

export async function getStaticProps() {
  const { data } = await fetchArticles()

  return {
    props: { articles: data.user.publication.posts },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - Every minute
    revalidate: 60,
  }
}
