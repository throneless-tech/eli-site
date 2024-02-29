"use client"
import React from 'react';
import Image from 'next/image';
import { chivo } from '../styles/fonts';
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  HStack,
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


export default function YogaPage() {

  return (
    <main>
      <Box className={styles.background}>
        <ChakraImage
          src='/background-yoga.jpg'
        />
      </Box>
      <Center marginTop={8}>
        <VStack>
          <Link href="/">
            <SignatureIcon sx={{ height: 149, width: 867 }} />
          </Link>
          <VisuallyHidden>
            <Heading as='h1'>
              Eli Fife Cragin
            </Heading>
          </VisuallyHidden>
          <Text className={chivo.className} color='#FFF' fontSize={36} fontWeight={600} textAlign={'center'} marginTop={8} width={760}>
            Yoga for healing was essential to Eli. 
          </Text>
          <Nav selected="yoga" />
        </VStack>
      </Center>
      <Container marginTop={12}>
        <Flex direction={['column', 'row']} alignItems='center' gap='2'>
          <Box as='h2' textStyle='h2' className={chivo.className}>
            Check out these resources
          </Box>
          <VStack align='flex-start' className={chivo.className} fontSize={24} width={300}>
            <Link href='https://www.patriciawaldenyoga.com/'>
              Patricia Walden Yoga
            </Link>
            <Link href='https://iynaus.org/'>
              Iynaus
            </Link>
            <Link href='http://corawen.com/'>
              Cora Wen
            </Link>
          </VStack>
        </Flex>
      </Container>
    </main>
  )
}