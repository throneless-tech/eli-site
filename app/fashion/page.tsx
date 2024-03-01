"use client"
import React, { useEffect, useState } from 'react';
import { Masonry } from 'react-masonry'
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
import { CardImage } from '../Components/CardImage';
import Nav from '../Components/Nav';

// icons and images
import { SignatureIcon } from '../icons/Signature';

export default function FashionPage() {
  const ref1 = React.createRef();
  const ref2 = React.createRef();
  const ref3 = React.createRef();
  const ref4 = React.createRef();
  const ref5 = React.createRef();
  const ref6 = React.createRef();
  const ref7 = React.createRef();

  // media query
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  return (
    <main>
      <Box className={styles.background}>
        <Box
          id={styles.fashion}
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
          <Nav selected="fashion" />
        </VStack>
      </Center>
      <Container marginTop={8} maxW={'container.2xl'}>
        {matches ? (
          <Masonry>
            <Box padding={4}>
              <CardImage
                height={300}
                ref={ref1}
                src='/eli-fashion-01.jpg'
                width={300}
              />
            </Box>
            <Box padding={4}>
              <CardImage
                height={500}
                ref={ref2}
                src='/eli-fashion-02.jpg'
                width={350}
              />
            </Box>
            <Box padding={4}>
              <CardImage
                height={300}
                src='/eli-fashion-03.jpg'
                ref={ref3}
                width={300}
              />
            </Box>
            <Box padding={4}>
              <CardImage
                height={300}
                src='/eli-fashion-04.jpg'
                ref={ref4}
                width={300}
              />
            </Box>
            <Box padding={4}>
              <CardImage
                height={500}
                src='/eli-fashion-05.jpg'
                ref={ref5}
                width={500}
              />
            </Box>
            <Box padding={4}>
              <CardImage
                height={300}
                src='/eli-fashion-06.jpg'
                ref={ref6}
                width={300}
              />
            </Box>
            <Box padding={4}>
              <CardImage
                height={600}
                src='/eli-fashion-07.jpg'
                ref={ref7}
                width={400}
              />
            </Box>
          </Masonry>
        ) : (
          <>
            <Box padding={4}>
              <CardImage
                height={300}
                ref={ref1}
                src='/eli-fashion-01.jpg'
                width={300}
              />
            </Box>
            <Box padding={4}>
              <CardImage
                height={500}
                ref={ref2}
                src='/eli-fashion-02.jpg'
                width={350}
              />
            </Box>
            <Box padding={4}>
              <CardImage
                height={300}
                src='/eli-fashion-03.jpg'
                ref={ref3}
                width={300}
              />
            </Box>
            <Box padding={4}>
              <CardImage
                height={300}
                src='/eli-fashion-04.jpg'
                ref={ref4}
                width={300}
              />
            </Box>
            <Box padding={4}>
              <CardImage
                height={500}
                src='/eli-fashion-05.jpg'
                ref={ref5}
                width={500}
              />
            </Box>
            <Box padding={4}>
              <CardImage
                height={300}
                src='/eli-fashion-06.jpg'
                ref={ref6}
                width={300}
              />
            </Box>
            <Box padding={4}>
              <CardImage
                height={600}
                src='/eli-fashion-07.jpg'
                ref={ref7}
                width={400}
              />
            </Box>
          </>
        )}
      </Container>
    </main>
  )
}