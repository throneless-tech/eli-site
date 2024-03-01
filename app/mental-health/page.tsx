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


export default function MentalHealthPage() {

  return (
    <main>
      <Box className={styles.background}>
        <Box
          id={styles.mentalHealth}
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
            Mental health was essential to Eli.
          </Text>
          <Nav selected="mental-health" />
        </VStack>
      </Center>
      <Container maxW={'2xl'} marginTop={12}>
        <Flex direction={['column', 'row']} alignItems='center' gap='6'>
          <Box as='h2' textStyle='h2' className={chivo.className}>
            Check out these resources
          </Box>
          <VStack align='flex-start' className={chivo.className} fontSize={24}>
            <Link href='https://www.besselvanderkolk.com/resources/the-body-keeps-the-score'>
              The Body Keeps the Score
            </Link>
            <Link href='https://www.enneagraminstitute.com/the-traditional-enneagram'>
              Traditional Enneagram
            </Link>
          </VStack>
        </Flex>
      </Container>
    </main>
  )
}