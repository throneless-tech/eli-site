"use client"
import React, { useEffect, useRef, useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { chivo } from '../styles/fonts';
import { useDraggable } from "@neodrag/react";
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

// hooks
import useWindowDimensions from '../hooks/useWindowDimensions';

// components
import CardImage from '../Components/CardImage';
import Nav from '../Components/Nav';

// icons and images
import { SignatureIcon } from '../icons/Signature';

export default function FashionPage() {
  const { height, width } = useWindowDimensions();

  // random numbers generator for positioning
  function randomHeight() {
    if (height) {
      return Math.floor(Math.random() * height + 1);
    } else {
      return Math.floor(Math.random() * 500 + 1);
    }
  }

  function randomWidth() {
    if (width) {
      return Math.floor(Math.random() * width + 1);
    } else {
      return Math.floor(Math.random() * 500 + 1);
    }
  }

  // draggable items
  const refImage001 = useRef(null);
  useDraggable(refImage001, { bounds: '.grid', cancel: '.cancel', defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const refImage002 = useRef(null);
  useDraggable(refImage002, { bounds: '.grid', cancel: '.cancel', defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const refImage003 = useRef(null);
  useDraggable(refImage003, { bounds: '.grid', cancel: '.cancel', defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const refImage004 = useRef(null);
  useDraggable(refImage004, { bounds: '.grid', cancel: '.cancel', defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const refImage005 = useRef(null);
  useDraggable(refImage005, { bounds: '.grid', cancel: '.cancel', defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const refImage006 = useRef(null);
  useDraggable(refImage006, { bounds: '.grid', cancel: '.cancel', defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const refImage007 = useRef(null);
  useDraggable(refImage007, { bounds: '.grid', cancel: '.cancel', defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const refImage008 = useRef(null);
  useDraggable(refImage008, { bounds: '.grid', cancel: '.cancel', defaultPosition: { x: randomWidth(), y: randomHeight() } });

  // media query
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (width && width >= 768) {
      setMatches(true);
    } else {
      setMatches(false);
    }
  }, []);

  useEffect(() => { }, [matches])

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
            Fashun
          </Text>
          <Nav selected="fashion" />
        </VStack>
      </Center>
      <Container marginTop={8} maxW={'container.2xl'}>
        {matches ? (
          <Masonry>
            <Box
              height={480}
              padding={4}
              ref={!matches ? null : refImage001}
              width={!matches ? '100%' : 450}
            >
              <CardImage
                date='9/11/2016'
                height={300}
                src='/eli-fashion-01.jpg'
                width={300}
              />
            </Box>
            <Box
              height={480}
              padding={4}
              ref={!matches ? null : refImage002}
              width={!matches ? '100%' : 450}
            >
              <CardImage
                date='12/5/2014'
                height={500}
                src='/eli-fashion-02.jpg'
                width={350}
              />
            </Box>
            <Box
              height={480}
              padding={4}
              ref={!matches ? null : refImage003}
              width={!matches ? '100%' : 450}
            >
              <CardImage
                date='11/12/2018'
                height={300}
                src='/eli-fashion-03.jpg'
                width={300}
              />
            </Box>
            <Box
              height={480}
              padding={4}
              ref={!matches ? null : refImage004}
              width={!matches ? '100%' : 450}
            >
              <CardImage
                date='10/29/2016'
                height={300}
                src='/eli-fashion-04.jpg'
                width={300}
              />
            </Box>
            <Box
              height={480}
              padding={4}
              ref={!matches ? null : refImage005}
              width={!matches ? '100%' : 450}
            >
              <CardImage
                date='6/8/2009'
                height={500}
                src='/eli-fashion-05.jpg'
                width={500}
              />
            </Box>
            <Box
              height={480}
              padding={4}
              ref={!matches ? null : refImage006}
              width={!matches ? '100%' : 450}
            >
              <CardImage
                date='6/7/2009'
                height={300}
                src='/eli-fashion-06.jpg'
                width={300}
              />
            </Box>
            <Box
              height={480}
              padding={4}
              ref={!matches ? null : refImage007}
              width={!matches ? '100%' : 450}
            >
              <CardImage
                date='3/13/2009'
                height={600}
                src='/eli-fashion-07.jpg'
                width={400}
              />
            </Box>
            <Box
              height={480}
              padding={4}
              ref={!matches ? null : refImage008}
              width={!matches ? '100%' : 450}
            >
              <CardImage
                date='2009'
                height={300}
                src='/eli-02.jpg'
                width={300}
              />
            </Box>
          </Masonry>
        ) : (
          <>
            <Box
              height={480}
              padding={4}
              ref={!matches ? null : refImage001}
              width={!matches ? '100%' : 450}
            >
              <CardImage
                date='9/11/2016'
                height={300}
                src='/eli-fashion-01.jpg'
                width={300}
              />
            </Box>
            <Box
              height={480}
              padding={4}
              ref={!matches ? null : refImage002}
              width={!matches ? '100%' : 450}
            >
              <CardImage
                date='12/5/2014'
                height={500}
                src='/eli-fashion-02.jpg'
                width={350}
              />
            </Box>
            <Box
              height={480}
              padding={4}
              ref={!matches ? null : refImage003}
              width={!matches ? '100%' : 450}
            >
              <CardImage
                date='11/12/2018'
                height={300}
                src='/eli-fashion-03.jpg'
                width={300}
              />
            </Box>
            <Box
              height={480}
              padding={4}
              ref={!matches ? null : refImage004}
              width={!matches ? '100%' : 450}
            >
              <CardImage
                date='10/29/2016'
                height={300}
                src='/eli-fashion-04.jpg'
                width={300}
              />
            </Box>
            <Box
              height={480}
              padding={4}
              ref={!matches ? null : refImage005}
              width={!matches ? '100%' : 450}
            >
              <CardImage
                date='6/8/2009'
                height={500}
                src='/eli-fashion-05.jpg'
                width={500}
              />
            </Box>
            <Box
              height={480}
              padding={4}
              ref={!matches ? null : refImage006}
              width={!matches ? '100%' : 450}
            >
              <CardImage
                date='6/7/2009'
                height={300}
                src='/eli-fashion-06.jpg'
                width={300}
              />
            </Box>
            <Box
              height={480}
              padding={4}
              ref={!matches ? null : refImage007}
              width={!matches ? '100%' : 450}
            >
              <CardImage
                date='3/13/2009'
                height={600}
                src='/eli-fashion-07.jpg'
                width={400}
              />
            </Box>
            <Box
              height={480}
              padding={4}
              ref={!matches ? null : refImage008}
              width={!matches ? '100%' : 450}
            >
              <CardImage
                date='2009'
                height={300}
                src='/eli-02.jpg'
                width={300}
              />
            </Box>
          </>
        )}
      </Container>
    </main>
  )
}