"use client"
import React from 'react'
import NavItem from './NavItem'
import NextLink from 'next/link'
import { Box, Flex, HStack, Heading, Spacer } from '@chakra-ui/react'

export default function Navbar() {
  return (
    <Box as="nav" role="navigation">
      <Flex align="center" py={4} px={{ base: 4, md: 8 }}>
        <Heading as="h2" size="md">
          <NextLink href="/">IRONHAUS</NextLink>
        </Heading>
        <Spacer />
        <HStack gap={8} display={{ base: 'none', md: 'flex' }}>
          <NavItem href="/"  _hover={{
        color: "#ffff",
      }} textDecoration="none">Programs</NavItem>
          <NavItem href="/#features" _hover={{
        color: "#ffff",
      }} textDecoration="none">Schedule</NavItem>
          <NavItem href="/#testimonials" _hover={{
        color: "#ffff",
      }} textDecoration="none">Trainers</NavItem>
          <NavItem href="/#pricing" _hover={{
        color: "#ffff",
      }} textDecoration="none">Pricing</NavItem>
          <NavItem href="/contact" px={6} py={2} bg="rgb(233, 150, 25)" color="black" borderRadius="md" textDecoration="none" fontWeight="bold">
            JOIN NOW
          </NavItem>
        </HStack>
      </Flex>
    </Box>
  )
}
