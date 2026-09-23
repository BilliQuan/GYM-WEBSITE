"use client"
import React from 'react'
import NavItem from './NavItem'
import NextLink from 'next/link'
import { Box, Flex, HStack, Heading, Spacer, Container } from '@chakra-ui/react'

export default function Navbar() {
  return (
    <Box
      as="nav"
      role="navigation"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex={50}
      bg="rgba(0,0,0,0.45)"
      color="white"
      style={{ backdropFilter: 'saturate(140%) blur(6px)' }}
    >
      <Container maxW="8xl">
        <Flex align="center" py={3}>
          <Heading as="h2" size="md" sx={{ fontWeight: 800 }}>
            <NextLink href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <span style={{ display: 'inline-block' }}>IRON</span>
              <span
                style={{
                  display: 'inline-block',
                  marginLeft: 6,
                  background: 'linear-gradient(90deg, rgba(233,150,25,1), rgba(233,150,25,1))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                HAUS
              </span>
            </NextLink>
          </Heading>
          <Spacer />
          <HStack as="ul" gap={6} display={{ base: 'none', md: 'flex' }}  align="center">
            <li style={{ listStyle: 'none', marginRight: 12 }}>
              <NavItem href="/" color="rgba(255,255,255,0.9)" textTransform="uppercase" letterSpacing="1px" fontSize="sm">
                Programs
              </NavItem>
            </li>
            <li style={{ listStyle: 'none', marginRight: 12 }}>
              <NavItem href="/#features" color="rgba(255,255,255,0.9)" textTransform="uppercase" letterSpacing="1px" fontSize="sm">
                Schedule
              </NavItem>
            </li>
            <li style={{ listStyle: 'none', marginRight: 12 }}>
              <NavItem href="/#testimonials" color="rgba(255,255,255,0.9)" textTransform="uppercase" letterSpacing="1px" fontSize="sm">
                Trainers
              </NavItem>
            </li>
            <li style={{ listStyle: 'none', marginRight: 12 }}>
              <NavItem href="/#pricing" color="rgba(255,255,255,0.9)" textTransform="uppercase" letterSpacing="1px" fontSize="sm">
                Pricing
              </NavItem>
            </li>
            <li style={{ listStyle: 'none' }}>
              <NavItem href="/contact" px={6} py={2} bg="rgb(233, 150, 25)" color="black" borderRadius="md" textDecoration="none" fontWeight="bold">
                JOIN NOW
              </NavItem>
            </li>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
