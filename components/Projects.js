import React from 'react'
import { Flex, Grid, Heading, Img, Link, LinkBox, LinkOverlay, Tag, Text } from '@chakra-ui/react'

import projects from '../data/project.json'

function ProjectItem({ p }) {
  const tagColor = {
    Personal: 'green',
    Volunteer: 'purple',
    University: 'blue',
  }

  return (
    <LinkBox borderWidth='1px' rounded='base' _hover={{ bg: 'gray.50', boxShadow: 'base' }}>
      <Img src={p.cover} w='full' h='200px' objectFit='cover' objectPosition='center top' />
      <Flex direction='column' borderTopWidth='1px' p='4'>
        <Flex>
          <Tag size='sm' fontSize='xs' colorScheme={tagColor[p.tags]}>
            {p.tags}
          </Tag>
        </Flex>
        <Link
          as={LinkOverlay}
          isExternal
          href={p.url}
          mt='2'
          fontSize='sm'
          _hover={{ textDecoration: 'none' }}
          fontWeight='bold'
        >
          {p.title}
        </Link>
        <Text mt='2' fontSize='xs' noOfLines='2'>
          {p.description}
        </Text>
      </Flex>
    </LinkBox>
  )
}

function Projects() {
  return (
    <Flex direction='column' mt='8' mx='auto' w='3xl' pb='8'>
      <Heading size='md' fontWeight='extrabold' mb={{ base: 4 }} letterSpacing='tight'>
        Projects I've build
      </Heading>
      <Grid templateColumns='repeat(2, 1fr)' gap={6}>
        {projects.map((p) => (
          <ProjectItem key={p.url} p={p} />
        ))}
      </Grid>
    </Flex>
  )
}

export default Projects
