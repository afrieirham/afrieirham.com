import Head from 'next/head'
import { Button, Flex, Heading, Image, Text, Link, Box, IconButton, HStack } from '@chakra-ui/react'
import { ArrowRight, GitHub, Linkedin, Mail, Twitter, Youtube } from 'react-feather'

function Icon({ name: IconName, href }) {
  return (
    <IconButton
      as={Link}
      icon={<IconName />}
      variant='ghost'
      borderRadius='999px'
      color='gray.400'
      href={href}
      isExternal
    />
  )
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Afrie Irham</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
          rel='stylesheet'
        ></link>
      </Head>

      <Flex minHeight='100vh' width='100%' justifyContent='center' alignItems='center'>
        <Box mr={16}>
          <Image src='/portrait.png' height='200' />
        </Box>
        <Box maxWidth='500px'>
          <Heading size='2xl' fontWeight='extrabold' mb={6}>
            Hi, I'm Afrie Irham 🇲🇾
          </Heading>
          <Text fontSize='2xl' mb={4}>
            <Text
              as='span'
              fontWeight='bold'
              background='radial-gradient( circle 870px at 5.8% 56%,  rgba(255,3,3,1) 0%, rgba(249,232,27,1) 89.2% )'
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Software Developer
            </Text>{' '}
            who loves to create and build stuff.
          </Text>
          <Text mb={8} fontSize='sm' color='gray.700'>
            Currently at{' '}
            <Link href='https://snappymob.com' isExternal>
              Snappymob
            </Link>{' '}
            👨🏻‍💻
          </Text>
          <HStack>
            <Button
              color='white'
              backgroundColor='black'
              borderRadius='999px'
              padding='4'
              fontWeight='bold'
              rightIcon={<ArrowRight size='15' />}
              boxShadow='rgb(0, 0, 0) 0px 10px 20px -10px'
              _hover={{
                backgroundColor: 'black',
                boxShadow: 'rgb(0, 0, 0) 0px 5px 10px -5px',
                textDecoration: 'none',
              }}
              _active={{ backgroundColor: 'black', boxShadow: 'rgb(0, 0, 0) 0px 3px 5px -3px' }}
              mr='4'
              as={Link}
              href='https://blog.afrieirham.com'
              isExternal
            >
              Read my blog
            </Button>
            <Icon name={Mail} href='mailto:afrieirham@outlook.com' />
            <Icon name={Linkedin} href='https://linkedin.com/in/afrieirham' />
            <Icon name={Twitter} href='https://twitter.com/afrieirham_' />
            <Icon name={Youtube} href='https://youtube.com/c/madebyafrie' />
            <Icon name={GitHub} href='https://github.com/afrieirham' />
          </HStack>
        </Box>
      </Flex>
    </div>
  )
}
