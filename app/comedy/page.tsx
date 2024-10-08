"use client"
import React from 'react';
import Image from 'next/image';
import { chivo } from '../styles/fonts';
import {
  Box,
  Center,
  Container,
  Flex,
  Image as ChakraImage,
  Link,
  Text,
  VStack,
  Heading,
  VisuallyHidden,
} from '@chakra-ui/react';
import styles from '../styles/page.module.css';

// components
import Nav from '../Components/Nav';

// icons and images
import { SignatureIcon } from '../icons/Signature';


export default function ComedyPage() {

  return (
    <main>
      <Box className={styles.background}>
        <Box
          id={styles.comedy}
          className={styles.backgroundStatic}
        />
      </Box>
      <Center marginTop={8}>
        <VStack>
          <Link href="/">
            <SignatureIcon sx={{ height: ['60px', 149], width: [300, 867] }} />
          </Link>
          <VisuallyHidden>
            <Heading as='h1'>
              Eli Fife Cragin
            </Heading>
          </VisuallyHidden>
          <Text className={chivo.className} color='#FFF' fontSize={[20, 36]} fontWeight={600} textAlign={'center'} marginTop={[4, 8]} width={760}>
            Comedy.
          </Text>
          <Nav selected="comedy" />
        </VStack>
      </Center>
      <Container maxW={'6xl'} marginTop={12}>
        <Flex direction={['column', 'row']} alignItems='center' gap={20}>
          <Box as='h2' textStyle='h2' className={chivo.className}>
            Some favorites:
          </Box>
          <VStack align='flex-start' className={chivo.className} fontSize={24}>
            <Link href='https://www.youtube.com/c/EndlessHoneymoon'>
              Moshe Kasher & Natasha Leggero: Endless Honeymoon podcast
            </Link>
            <Link href='https://www.netflix.com/title/81289483'>
              Bo Burnham: Inside
            </Link>
          </VStack>
        </Flex>
      </Container>
    </main>
  )
}