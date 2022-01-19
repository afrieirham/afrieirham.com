import React from 'react'
import { Flex, Grid, Heading, Img, Link, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { ChevronRight } from 'react-feather'

function Articles({ articles }) {
  return (
    <Flex direction='column' mt='8' mx='auto' w='3xl' direction='column'>
      <Heading size='md' fontWeight='extrabold' mb={{ base: 4 }} letterSpacing='tight'>
        Latest articles
      </Heading>

      <Grid templateColumns='repeat(2, 1fr)' gap={6} w='full'>
        {articles.slice(0, 2).map((a) => (
          <LinkBox
            key={a.slug}
            borderWidth='1px'
            rounded='base'
            _hover={{ bg: 'gray.50', boxShadow: 'base' }}
          >
            <Img rounded='base' src={a.coverImage} w='100%' objectFit='cover' />
            <Flex direction='column' p='3'>
              <Link
                as={LinkOverlay}
                isExternal
                href={`https://blog.afrieirham.com/${a.slug}`}
                fontWeight='bold'
                _hover={{ textDecoration: 'none' }}
              >
                {a.title}
              </Link>
            </Flex>
          </LinkBox>
        ))}
      </Grid>

      <Flex mt='6' alignItems='center'>
        <Link isExternal fontWeight='semibold' href='https://blog.afrieirham.com'>
          Read more articles
        </Link>
        <ChevronRight size='15' />
      </Flex>
    </Flex>
  )
}

export default Articles
