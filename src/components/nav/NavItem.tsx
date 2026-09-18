'use client';
import React from 'react';
import NextLink from 'next/link';
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react';

type Props = ChakraLinkProps & {
  href: string;
  children: React.ReactNode;
};

export default function NavItem({ href, children, ...rest }: Props) {
  return (
    <ChakraLink as={NextLink} href={href} {...rest}>
      {children}
    </ChakraLink>
  );
}
