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

//hooks
import useWindowDimensions from './hooks/useWindowDimensions';

import CardAudio from './Components/CardAudio';
import CardImage from './Components/CardImage';
import CardVideo from './Components/CardVideo';
import CardLink from './Components/CardLink';
import CardWord from './Components/CardWord';
import Nav from './Components/Nav';

export default function Home() {
  const ref = React.createRef();
  const { height, width } = useWindowDimensions();

  // check if images should be randomized or form a collage
  const [collage, setCollage] = useState(false);

  const handleCollage = () => {
    return setCollage(!collage)
  }

  // media query
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (width && width >= 768) {
      setMatches(true);
    } else {
      setMatches(false);
      setCollage(true);
    }
  }, []);

  useEffect(() => { }, [collage, matches])

  return (
    <main>
      <Box overflowX={'hidden'} overflowY={collage ? 'hidden' : 'scroll'}>
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
              zIndex={5}
            >
              {collage ? 'Collage' : 'Organize'}
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
                <Draggable defaultPosition={{ x: -625, y: -475 }}>
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
                      height={600}
                      ref={ref}
                      src='/eli-fashion-02.jpg'
                      width={300}
                    />
                  </Box>
                  <Box padding={4}>
                    <CardImage
                      height={300}
                      ref={ref}
                      src='/eli-bodhi-01.jpg'
                      width={500}
                    />
                  </Box>
                  <Box padding={4}>
                    <CardImage
                      height={500}
                      ref={ref}
                      src='/eli-yoga-01.jpg'
                      width={500}
                    />
                  </Box>
                  <Box padding={4}>
                    <CardVideo
                      height={480}
                      ref={ref}
                      src='/eli-vid-01.mp4'
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
                      height={500}
                      ref={ref}
                      src='/eli-03.jpg'
                      width={500}
                    />
                  </Box>
                  <Box padding={4}>
                    <CardVideo
                      height={480}
                      ref={ref}
                      src='/eli-vid-02.mp4'
                      width={300}
                    />
                  </Box>
                  <Box padding={4}>
                    <CardImage
                      height={300}
                      ref={ref}
                      src='/eli-bodhi-02.jpg'
                      width={500}
                    />
                  </Box>
                  <Box padding={4}>
                    <CardImage
                      height={500}
                      ref={ref}
                      src='/eli-04.jpg'
                      width={500}
                    />
                  </Box>
                  <Box padding={4}>
                    <CardImage
                      height={500}
                      ref={ref}
                      src='/eli-05.jpg'
                      width={400}
                    />
                  </Box>
                  <Box padding={4}>
                    <CardImage
                      height={600}
                      ref={ref}
                      src='/eli-yoga-02.jpg'
                      width={300}
                    />
                  </Box>
                  <Box padding={4}>
                    <CardImage
                      height={300}
                      ref={ref}
                      src='/eli-06.jpg'
                      width={600}
                    />
                  </Box>
                  <Box padding={4}>
                    <CardVideo
                      height={480}
                      ref={ref}
                      src='/eli-vid-03.mp4'
                      width={300}
                    />
                  </Box>
                  <Box padding={4}>
                    <CardImage
                      height={400}
                      ref={ref}
                      src='/eli-fashion-03.jpg'
                      width={300}
                    />
                  </Box>
                  <Box padding={4}>
                    <CardVideo
                      height={480}
                      ref={ref}
                      src='/eli-vid-04.mp4'
                      width={300}
                    />
                  </Box>
                  <Box padding={4}>
                    <CardImage
                      height={400}
                      ref={ref}
                      src='/eli-bodhi-03.jpg'
                      width={600}
                    />
                  </Box>
                </Masonry>
              </Container>
            ) : (
              <>
                <Draggable defaultPosition={{ x: 25, y: 25 }}>
                  <Box className={styles.card} height={300} width={500}>
                    <CardImage
                      height={300}
                      ref={ref}
                      src='/eli-fam.jpg'
                      width={"100%"}
                    />
                  </Box>
                </Draggable>
                <Draggable defaultPosition={{ x: -25, y: -850 }}>
                  <Box className={styles.card} height={500} width={300}>
                    <CardImage
                      height={500}
                      ref={ref}
                      src='/eli-yoga-01.jpg'
                      width={"100%"}
                    />
                  </Box>
                </Draggable>
                <Draggable defaultPosition={{ x: 500, y: -850 }}>
                  <Box className={styles.card}>
                    <Box className={styles.card} height={300} width={300}>
                      <CardImage
                        height={300}
                        ref={ref}
                        src='/eli-fashion-01.jpg'
                        width={"100%"}
                      />
                    </Box>
                  </Box>
                </Draggable>
                <Draggable defaultPosition={{ x: 850, y: -950 }}>
                  <Box className={styles.card} height={300} width={300}>
                    <CardImage
                      height={300}
                      ref={ref}
                      src='/eli-03.jpg'
                      width={"100%"}
                    />
                  </Box>
                </Draggable>
                <Draggable defaultPosition={{ x: 150, y: -6050 }}>
                  <Box className={styles.card} height={300} width={500}>
                    <CardImage
                      height={300}
                      ref={ref}
                      src='/eli-bodhi-01.jpg'
                      width={'100%'}
                    />
                  </Box>
                </Draggable>
                <Draggable defaultPosition={{ x: 1450, y: -1750 }}>
                  <Box className={styles.card} height={400} width={300}>
                    <CardImage
                      height={400}
                      ref={ref}
                      src='/eli-yoga-02.jpg'
                      width={'100%'}
                    />
                  </Box>
                </Draggable>
                <Draggable defaultPosition={{ x: 1050, y: -2750 }}>
                  <Box className={styles.card} height={480} width={300}>
                    <CardVideo
                      height={480}
                      ref={ref}
                      src='/eli-vid-01.mp4'
                      width={'100%'}
                    />
                  </Box>
                </Draggable>
                <Draggable defaultPosition={{ x: 1250, y: -3250 }}>
                  <Box className={styles.card} height={300} width={300}>
                    <CardImage
                      height={300}
                      ref={ref}
                      src='/eli-04.jpg'
                      width={'100%'}
                    />
                  </Box>
                </Draggable>
                <Draggable defaultPosition={{ x: 1050, y: -2750 }}>
                  <Box className={styles.card} height={500} width={400}>
                    <CardImage
                      height={500}
                      ref={ref}
                      src='/eli-05.jpg'
                      width={'100%'}
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
                height={250}
                ref={ref}
                src='/eli-fam.jpg'
                width={300}
              />
            </Box>
            <Box padding={4}>
              <CardImage
                height={600}
                ref={ref}
                src='/eli-fashion-02.jpg'
                width={300}
              />
            </Box>
            <Box padding={4}>
              <CardImage
                height={250}
                ref={ref}
                src='/eli-bodhi-01.jpg'
                width={300}
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
            <Box padding={4}>
              <CardImage
                height={260}
                ref={ref}
                src='/eli-bodhi-02.jpg'
                width={300}
              />
            </Box>
            <Box padding={4}>
              <CardImage
                height={400}
                ref={ref}
                src='/eli-04.jpg'
                width={300}
              />
            </Box>
            <Box padding={4}>
              <CardImage
                height={500}
                ref={ref}
                src='/eli-05.jpg'
                width={300}
              />
            </Box>
            <Box padding={4}>
              <CardImage
                height={600}
                ref={ref}
                src='/eli-yoga-02.jpg'
                width={300}
              />
            </Box>
            <Box padding={4}>
              <CardImage
                height={200}
                ref={ref}
                src='/eli-06.jpg'
                width={300}
              />
            </Box>
            <Box padding={4}>
              <CardImage
                height={400}
                ref={ref}
                src='/eli-fashion-03.jpg'
                width={300}
              />
            </Box>
            <Box padding={4}>
              <CardImage
                height={240}
                ref={ref}
                src='/eli-bodhi-03.jpg'
                width={300}
              />
            </Box>
          </Container>
        )}
      </Box>
    </main>
  )
}
