import Head from 'next/head'
import Image from 'next/image'

import { Flex, Heading, Text, Link, Box, Stack, useBreakpointValue, Icon } from '@chakra-ui/react'
import { GitHub, Linkedin, Mail, Twitter, Youtube } from 'react-feather'
import Projects from '../components/projects'

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

export default function Home() {
  const heading = useBreakpointValue({ base: 'lg' })
  const size = useBreakpointValue({ base: 125, md: 200 }) || 125

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
        justifyContent={{ base: 'start', md: 'center' }}
        alignItems={{ base: 'start', md: 'center' }}
        direction={{ base: 'column', md: 'row' }}
        paddingX={{ base: 4, md: 0 }}
        mt={{ base: 8, md: 16 }}
        mx='auto'
        w='2xl'
      >
        <Box
          ml={{ base: 0, md: 4 }}
          mr={{ base: 0, md: 16 }}
          mb={{ base: 8, md: 0 }}
          pt={{ base: 16, md: 0 }}
        >
          <Image src='/portrait.png' height={size} width={size} />
        </Box>
        <Flex maxWidth='550px' direction='column'>
          <Heading size={heading} fontWeight='extrabold' mb={{ base: 4 }} letterSpacing='tight'>
            Hi, I'm Afrie Irham 👋
          </Heading>
          <Text fontSize='lg' mb='4'>
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
      <Flex
        alignItems={{ base: 'start', md: 'center' }}
        direction={{ base: 'column', md: 'row' }}
        paddingX={{ base: 4, md: 0 }}
        mt={{ base: 8, md: 16 }}
        mx='auto'
        w='2xl'
      >
        <Heading size='md' fontWeight='extrabold' mb={{ base: 4 }} letterSpacing='tight'>
          Latest articles
        </Heading>
      </Flex>
      <Projects />
    </>
  )
}
