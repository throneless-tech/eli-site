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
              position='relative'
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
                      organized
                      ref={ref}
                      src='/eli-fam.jpg'
                    />
                  </Box>
                  <Box padding={4}>
                    <CardImage
                      organized
                      date='12/5/2014'
                      ref={ref}
                      src='/eli-fashion-02.jpg'
                    />
                  </Box>
                  <Box padding={4}>
                    <CardImage
                      organized
                      date='12/19/2015'
                      ref={ref}
                      src='/eli-bodhi-01.jpg'
                    />
                  </Box>
                  <Box padding={4}>
                    <CardVideo
                      date='1/2021'
                      height={580}
                      ref={ref}
                      src='/eli-vid-01.mp4'
                      width={360}
                    />
                  </Box>
                  <Box padding={4}>
                    <CardAudio
                      title={`Mom's Podcast`}
                      src='/eli-moms-podcast.m4a'
                    />
                  </Box>
                  <Box padding={4}>
                    <CardImage
                      organized
                      date='1/10/2010'
                      ref={ref}
                      src='/eli-yoga-01.jpg'
                    />
                  </Box>
                  <Box padding={4}>
                    <CardImage
                      organized
                      date='9/11/2016'
                      ref={ref}
                      src='/eli-fashion-01.jpg'
                    />
                  </Box>
                  <Box padding={4}>
                    <CardImage
                      organized
                      date='6/25/2016'
                      ref={ref}
                      src='/eli-03.jpg'
                    />
                  </Box>
                  <Box padding={4}>
                    <CardVideo
                      date='1/2021'
                      height={480}
                      ref={ref}
                      src='/eli-vid-02.mp4'
                      width={300}
                    />
                  </Box>
                  <Box padding={4}>
                    <CardImage
                      organized
                      date='11/25/2015'
                      ref={ref}
                      src='/eli-bodhi-02.jpg'
                    />
                  </Box>
                  <Box padding={4}>
                    <CardImage
                      organized
                      date='2004'
                      ref={ref}
                      src='/eli-04.jpg'
                    />
                  </Box>
                  <Box padding={4}>
                    <CardImage
                      organized
                      date='7/31/2009'
                      ref={ref}
                      src='/eli-05.jpg'
                    />
                  </Box>
                  <Box padding={4}>
                    <CardImage
                      organized
                      date='11/29/14'
                      ref={ref}
                      src='/eli-yoga-02.jpg'
                    />
                  </Box>
                  <Box padding={4}>
                    <CardImage
                      organized
                      date='1/4/2009'
                      ref={ref}
                      src='/eli-06.jpg'
                    />
                  </Box>
                  <Box padding={4}>
                    <CardImage
                      organized
                      date='11/25/2015'
                      ref={ref}
                      src='/eli-bodhi-02.jpg'
                    />
                  </Box>
                  <Box padding={4}>
                    <CardVideo
                      date='1/2021'
                      height={480}
                      ref={ref}
                      src='/eli-vid-03.mp4'
                      width={300}
                    />
                  </Box>
                  <Box padding={4}>
                    <CardImage
                      organized
                      date='11/12/2018'
                      ref={ref}
                      src='/eli-fashion-03.jpg'
                    />
                  </Box>
                  <Box padding={4}>
                    <CardVideo
                      date='1/2021'
                      height={480}
                      ref={ref}
                      src='/eli-vid-04.mp4'
                      width={300}
                    />
                  </Box>
                  <Box padding={4}>
                    <CardImage
                      organized
                      date='9/4/2015'
                      ref={ref}
                      src='/eli-bodhi-03.jpg'
                    />
                  </Box>
                  <Box padding={4}>
                    <CardImage
                      organized
                      date='10/28/2019'
                      ref={ref}
                      src='/eli-01.jpg'
                    />
                  </Box>
                </Masonry>
              </Container>
            ) : (
              <>
                <Draggable defaultPosition={{ x: 25, y: 25 }}>
                  <Box className={styles.card} height={300} width={500}>
                    <CardImage
                      ref={ref}
                      src='/eli-fam.jpg'
                    />
                  </Box>
                </Draggable>
                <Draggable defaultPosition={{ x: -25, y: -850 }}>
                  <Box className={styles.card} height={500} width={300}>
                    <CardImage
                      date='1/10/2010'
                      ref={ref}
                      src='/eli-yoga-01.jpg'
                    />
                  </Box>
                </Draggable>
                <Draggable defaultPosition={{ x: 500, y: -850 }}>
                  <Box className={styles.card}>
                    <Box className={styles.card} height={300} width={300}>
                      <CardImage
                        date='9/11/2016'
                        ref={ref}
                        src='/eli-fashion-01.jpg'
                      />
                    </Box>
                  </Box>
                </Draggable>
                <Draggable defaultPosition={{ x: 850, y: -950 }}>
                  <Box className={styles.card} height={300} width={300}>
                    <CardImage
                      date='6/25/2016'
                      ref={ref}
                      src='/eli-03.jpg'
                    />
                  </Box>
                </Draggable>
                <Draggable defaultPosition={{ x: 150, y: -6050 }}>
                  <Box className={styles.card} height={300} width={500}>
                    <CardImage
                      date='12/19/2015'
                      ref={ref}
                      src='/eli-bodhi-01.jpg'
                    />
                  </Box>
                </Draggable>
                <Draggable defaultPosition={{ x: 1450, y: -1750 }}>
                  <Box className={styles.card} height={400} width={300}>
                    <CardImage
                      date='11/29/14'
                      ref={ref}
                      src='/eli-yoga-02.jpg'
                    />
                  </Box>
                </Draggable>
                <Draggable defaultPosition={{ x: 1050, y: -2750 }}>
                  <Box className={styles.card} height={480} width={300}>
                    <CardVideo
                      date='1/2021'
                      ref={ref}
                      src='/eli-vid-01.mp4'
                    />
                  </Box>
                </Draggable>
                <Draggable defaultPosition={{ x: 1250, y: -3250 }}>
                  <Box className={styles.card} height={300} width={300}>
                    <CardImage
                      date='2004'
                      ref={ref}
                      src='/eli-04.jpg'
                    />
                  </Box>
                </Draggable>
                <Draggable defaultPosition={{ x: 1050, y: -2750 }}>
                  <Box className={styles.card} height={500} width={400}>
                    <CardImage
                      date='7/31/2009'
                      ref={ref}
                      src='/eli-05.jpg'
                    />
                  </Box>
                </Draggable>
                <Draggable defaultPosition={{ x: 250, y: -3050 }}>
                  <Box className={styles.card} height={350} width={300}>
                    <CardImage
                      date='10/28/2019'
                      ref={ref}
                      src='/eli-01.jpg'
                    />
                  </Box>
                </Draggable>
                <Draggable defaultPosition={{ x: 200, y: -4050 }}>
                  <Box className={styles.card} height={250} width={350}>
                    <CardImage
                      date='11/25/2015'
                      ref={ref}
                      src='/eli-bodhi-02.jpg'
                    />
                  </Box>
                </Draggable>
                <Draggable defaultPosition={{ x: 1320, y: -4320 }}>
                  <Box className={styles.card} height={300} width={500}>
                    <CardAudio
                      title={`Mom's Podcast`}
                      src='/eli-moms-podcast.m4a'
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
                ref={ref}
                src='/eli-fam.jpg'
              />
            </Box>
            <Box padding={4}>
              <CardAudio
                title={`Mom's Podcast`}
                src='/eli-moms-podcast.m4a'
              />
            </Box>
            <Box padding={4}>
              <CardImage
                date='10/28/2019'
                ref={ref}
                src='/eli-01.jpg'
              />
            </Box>
            <Box padding={4}>
              <CardImage
                date='12/5/2014'
                ref={ref}
                src='/eli-fashion-02.jpg'
              />
            </Box>
            <Box padding={4}>
              <CardImage
                date='12/19/2015'
                ref={ref}
                src='/eli-bodhi-01.jpg'
              />
            </Box>
            <Box padding={4}>
              <CardImage
                date='1/10/2010'
                ref={ref}
                src='/eli-yoga-01.jpg'
              />
            </Box>
            <Box padding={4}>
              <CardImage
                date='9/11/2016'
                ref={ref}
                src='/eli-fashion-01.jpg'
              />
            </Box>
            <Box padding={4}>
              <CardImage
                date='6/25/2016'
                ref={ref}
                src='/eli-03.jpg'
              />
            </Box>
            <Box padding={4}>
              <CardImage
                date='11/25/2015'
                ref={ref}
                src='/eli-bodhi-02.jpg'
              />
            </Box>
            <Box padding={4}>
              <CardImage
                date='2004'
                ref={ref}
                src='/eli-04.jpg'
              />
            </Box>
            <Box padding={4}>
              <CardImage
                date='7/31/2009'
                ref={ref}
                src='/eli-05.jpg'
              />
            </Box>
            <Box padding={4}>
              <CardImage
                date='11/29/14'
                ref={ref}
                src='/eli-yoga-02.jpg'
              />
            </Box>
            <Box padding={4}>
              <CardImage
                date='1/4/2009'
                ref={ref}
                src='/eli-06.jpg'
              />
            </Box>
            <Box padding={4}>
              <CardImage
                date='11/12/2018'
                ref={ref}
                src='/eli-fashion-03.jpg'
              />
            </Box>
            <Box padding={4}>
              <CardImage
                date='9/4/2015'
                ref={ref}
                src='/eli-bodhi-03.jpg'
              />
            </Box>
          </Container>
        )}
      </Box>
    </main>
  )
}
