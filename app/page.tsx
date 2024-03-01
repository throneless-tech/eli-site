"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { chivo } from './styles/fonts';
import Draggable from 'react-draggable';
import { Masonry } from 'react-masonry';
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Link,
  Text,
  VisuallyHidden,
  VStack,
} from '@chakra-ui/react';
import styles from './styles/page.module.css';

import CardAudio from './Components/CardAudio';
import CardImage from './Components/CardImage';
import CardLink from './Components/CardLink';
import CardWord from './Components/CardWord';
import Nav from './Components/Nav';

export default function Home() {
  const ref = React.createRef();

  // check if images should be randomized or form a collage
  const [collage, setCollage] = useState(false);

  const handleCollage = () => {
    return setCollage(!collage)
  }

  // media query
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    if (window) {
      window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setMatches(e.matches));
    }
  }, []);

  useEffect(() => { }, [collage, matches])

  return (
    <main>
      <Box>
        <Box className={styles.background}>
          <Box
            id={styles.p1}
            className={styles.backgroundPic}
          />
          <Box
            id={styles.p2}
            className={styles.backgroundPic}
          />
          <Box
            id={styles.p3}
            className={styles.backgroundPic}
          />
          <Box
            id={styles.p4}
            className={styles.backgroundPic}
          />
          <Box
            id={styles.p5}
            className={styles.backgroundPic}
          />
          <Box
            id={styles.p6}
            className={styles.backgroundPic}
          />
          <Box
            id={styles.p7}
            className={styles.backgroundPic}
          />
          <Box
            id={styles.p8}
            className={styles.backgroundPic}
          />
          <Box
            id={styles.p9}
            className={styles.backgroundPic}
          />
          <Box
            id={styles.p10}
            className={styles.backgroundPic}
          />
          <Box
            id={styles.p11}
            className={styles.backgroundPic}
          />
          <Box
            id={styles.p12}
            className={styles.backgroundPic}
          />
        </Box>
        {matches ? (
          <Box>
            <Text
              as={"button"}
              onClick={handleCollage}
              className={chivo.className}
              color="#FFFFFF"
              display={"block"}
              fontSize={24}
              fontWeight="bold"
              marginLeft={"auto"}
              marginRight={0}
              style={{ filter: "drop-shadow(0px 4px 2px #4C4E52)" }}
              width={130}
            >
              Collage
            </Text>
          </Box>
        ) : null}
        <Center marginY={10}>
          <VStack>
            <Link width={[300, 'unset']}>
              <Image
                src='/signature.svg'
                alt='Eli Fife Cragin signature'
                height={300}
                priority
                width={600}
              />
            </Link>
            <VisuallyHidden>
              <Heading as='h1'>
                Eli Fife Cragin
              </Heading>
            </VisuallyHidden>
            <Text className={chivo.className} fontSize={20} fontWeight={600} textAlign={'center'} marginTop={8} width={[300, 760]}>
              lived in Cape Cod, New York and California. He broke every rule he could and was notoriously late for everything, always with an iced coffee and at least two other beverages in hand. He loved yoga, cloudy days, swimming in all bodies of water, clothing (ranging from thrift stores to designer wear), and travel, as long as it didn&#39;t include too many planned activities.
            </Text>
            {collage ? (<Nav />) : (
              <>
                <Draggable defaultPosition={{ x: 124, y: 124 }}>
                  <Button
                    as="a"
                    background={"red.500"}
                    className={`${styles.nav} ${chivo.className}`}
                    fontWeight="bold"
                    fontSize={24}
                    href='/yoga'
                    textAlign="center"
                    _hover={{
                      background: "red.900",
                    }}
                  >
                    Yoga
                  </Button>
                </Draggable>
                <Draggable defaultPosition={{ x: 225, y: 225 }}>
                  <Button
                    as="a"
                    background={"red.500"}
                    className={`${styles.nav} ${chivo.className}`}
                    fontWeight="bold"
                    fontSize={24}
                    href='/mental-health'
                    textAlign="center"
                    _hover={{
                      background: "red.900",
                    }}
                  >
                    Mental Health
                  </Button>
                </Draggable>
                <Draggable defaultPosition={{ x: -625, y: -425 }}>
                  <Button
                    as="a"
                    background={"red.500"}
                    className={`${styles.nav} ${chivo.className}`}
                    fontWeight="bold"
                    fontSize={24}
                    href='/comedy'
                    textAlign="center"
                    _hover={{
                      background: "red.900",
                    }}
                  >
                    Comedy
                  </Button>
                </Draggable>
                <Draggable defaultPosition={{ x: -250, y: -25 }}>
                  <Button
                    as="a"
                    background={"red.500"}
                    className={`${styles.nav} ${chivo.className}`}
                    fontWeight="bold"
                    fontSize={24}
                    href='/fashion'
                    textAlign="center"
                    _hover={{
                      background: "red.900",
                    }}
                  >
                    Fashion
                  </Button>
                </Draggable>
              </>
            )}
          </VStack>
        </Center>
        {matches ? (
          <>
            {collage ? (
              <Container maxW={'container.2xl'}>
                <Masonry>
                  <Box padding={4}>
                    <CardImage
                      height={300}
                      ref={ref}
                      src='/eli-fam.jpg'
                      width={500}
                    />
                  </Box>
                  <Box padding={4}>
                    <CardImage
                      height={300}
                      ref={ref}
                      src='/eli-yoga-01.jpg'
                      width={300}
                    />
                  </Box>
                  <Box padding={4}>
                    <CardImage
                      height={300}
                      ref={ref}
                      src='/eli-fashion-01.jpg'
                      width={300}
                    />
                  </Box>
                  <Box padding={4}>
                    <CardImage
                      height={300}
                      ref={ref}
                      src='/eli-03.jpg'
                      width={300}
                    />
                  </Box>
                </Masonry>
              </Container>
            ) : (
              <>
                <Draggable defaultPosition={{ x: 25, y: 25 }}>
                  <Box className={styles.card}>
                    <CardImage
                      height={300}
                      ref={ref}
                      src='/eli-fam.jpg'
                    // width={500}
                    />
                  </Box>
                </Draggable>
                <Draggable defaultPosition={{ x: -25, y: -850 }}>
                  <Box className={styles.card}>
                    <CardImage
                      height={300}
                      ref={ref}
                      src='/eli-yoga-01.jpg'
                    />
                  </Box>
                </Draggable>
                <Draggable defaultPosition={{ x: 500, y: -450 }}>
                  <Box className={styles.card}>
                    <Box className={styles.card}>
                      <CardImage
                        height={300}
                        ref={ref}
                        src='/eli-fashion-01.jpg'
                      />
                    </Box>
                  </Box>
                </Draggable>
                <Draggable defaultPosition={{ x: 1250, y: -950 }}>
                  <Box className={styles.card}>
                    <CardImage
                      height={300}
                      ref={ref}
                      src='/eli-03.jpg'
                    />
                  </Box>
                </Draggable>
              </>
            )}
          </>
        ) : (
          <Container maxW={'container.2xl'}>
            <Box padding={4}>
              <CardImage
                height={300}
                ref={ref}
                src='/eli-fam.jpg'
                width={500}
              />
            </Box>
            <Box padding={4}>
              <CardImage
                height={300}
                ref={ref}
                src='/eli-yoga-01.jpg'
              />
            </Box>
            <Box padding={4}>
              <CardImage
                height={300}
                ref={ref}
                src='/eli-fashion-01.jpg'
              />
            </Box>
            <Box padding={4}>
              <CardImage
                height={300}
                ref={ref}
                src='/eli-03.jpg'
              />
            </Box>
          </Container>
        )}
      </Box>
    </main>
  )
}
