import { Box, Flex, Text, Code } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex minH="100vh" direction="column" align="center" justify="center" p="6rem">
      <Box w="100%" maxW="5xl">
        <Box
          pos="fixed"
          left={0}
          top={0}
          w="100%"
          display="flex"
          justifyContent="center"
          borderBottomWidth="1px"
          bgGradient="linear(to-b, gray.200, transparent)"
          py={6}
          px={4}
          backdropFilter="blur(8px)"
        >
          <Text fontFamily="mono" fontSize="sm">
            Get started by editing&nbsp;
            <Code fontFamily="mono" fontWeight="bold">app/page.tsx</Code>
          </Text>
          <Text fontFamily="mono" fontSize="sm" ml={4}>
            <a
              href="https://beta.nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the docs
            </a>
          </Text>
        </Box>
      </Box>
      <Box w="100%" maxW="5xl" mt={24}>
        <Text fontSize="4xl" fontWeight="bold" mb={4}>
          Welcome to Next.js!
        </Text>
        <Text fontSize="lg">
          This is a simple starter template for building a Next.js application with Chakra UI and TypeScript.
        </Text>
      </Box>
      <Box w="100%" maxW="5xl" mt={12}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Features
        </Text>
        <Box as="ul" pl={4} listStyleType="disc">
          <Box as="li" mb={2}>
            TypeScript support only comes once and you can use it in your components and pages.
          </Box>
          <Box as="li" mb={2}></Box>
            Chakra UI integration built-in with a custom provider and color mode support.
          </Box>
          <Box as="li" mb={2}>
            A simple layout with a header and footer that you can customize without any hassle.
          </Box>
        </Box>
      
    </Flex>
  );
}
