import Head from 'next/head'
import Image from 'next/image'

import { Flex, Heading, Text, Link, Box, Stack, useBreakpointValue, Icon } from '@chakra-ui/react'
import { GitHub, Linkedin, Mail } from 'react-feather'

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
  const heading = useBreakpointValue({ base: 'xl' })
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
        minHeight='100vh'
        justifyContent={{ base: 'start', md: 'center' }}
        alignItems={{ base: 'start', md: 'center' }}
        direction={{ base: 'column', md: 'row' }}
        paddingX={{ base: 4, md: 0 }}
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
          <Text color='gray.500' textTransform='uppercase' fontSize={{ base: 'xs', sm: 'sm' }}>
            Hi, I'm Afrie Irham 👋
          </Text>
          <Heading
            size={heading}
            fontWeight='extrabold'
            mb={{ base: 4, sm: 6 }}
            letterSpacing='tight'
          >
            Software developer who loves to create and build stuff.
          </Heading>
          <Text mb={8} color='gray.600'>
            I'm based in Malaysia, currently at{' '}
            <LinkText href='https://snappymob.com'>Snappymob</LinkText> as a software developer and
            I love React. Built{' '}
            <LinkText href='https://bukugraduan.afrieirham.com'>BukuGraduan</LinkText> and{' '}
            <LinkText href='https://bayarsini.link'>BayarSini</LinkText> with Next.js. Ohh –
            sometimes I <LinkText href='https://blog.afrieirham.com'>write</LinkText> and make{' '}
            <LinkText href='https://youtube.com/c/madebyafrie'>videos</LinkText> but I do{' '}
            <LinkText href='https://twitter.com/afrieirham_'>tweet</LinkText> a lot.
          </Text>

          <Text mb={2} color='gray.600'>
            Say hi to me – or{' '}
            <LinkText href='https://ko-fi.com/afrieirham'>buy me a coffee</LinkText>.
          </Text>
          <Stack direction='row' spacing='4'>
            <LinkIcon name={Mail} href='mailto:afrieirham@outlook.com' />
            <LinkIcon name={Linkedin} href='https://linkedin.com/in/afrieirham' />
            <LinkIcon name={GitHub} href='https://github.com/afrieirham' />
          </Stack>
        </Flex>
      </Flex>
    </>
  )
}
