"use client"
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { chivo } from './styles/fonts';
import Draggable from 'react-draggable';
import { Masonry } from 'react-masonry';
import {
  Box,
  Button,
  Center,
  Container,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import styles from './styles/page.module.css';

import CardAudio from './Components/CardAudio';
import CardImage from './Components/CardImage';
import CardLink from './Components/CardLink';
import CardWord from './Components/CardWord';


export default function Home() {
  // check if images should be randomized or form a collage
  const [collage, setCollage] = useState(false);

  const handleCollage = () => {
    return setCollage(!collage)
  }

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
        <Center marginY={10}>
          <VStack>
            <Image
              src='/signature.svg'
              alt='Eli Fife Cragin signature'
              height={300}
              priority
              width={600}
            />
            <Text className={chivo.className} fontSize={20} fontWeight={600} textAlign={'center'} marginTop={8} width={760}>
              lived in Cape Cod, New York and California. He broke every rule he could and was notoriously late for everything, always with an iced coffee and at least two other beverages in hand. He loved yoga, cloudy days, swimming in all bodies of water, clothing (ranging from thrift stores to designer wear), and travel, as long as it didn't include too many planned activities.
            </Text>
            <HStack
              align="center"
              justify="center"
              marginTop={4}
              spacing={4}
            >
              <Button
                as="a"
                className={chivo.className}
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
              <Button
                as="a"
                className={chivo.className}
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
              <Button
                as="a"
                className={chivo.className}
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
              <Button
                as="a"
                className={chivo.className}
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
            </HStack>
          </VStack>
        </Center>
        {collage ? (
          <Container maxW={'container.2xl'}>
            <Masonry>
              <Box padding={4}>
                <CardImage />
              </Box>
              <Box padding={4}>
                <CardAudio />
              </Box>
              <Box padding={4}>
                <CardWord />
              </Box>
              <Box padding={4}>
                <CardLink />
              </Box>
            </Masonry>
          </Container>
        ) : (
          <>
              <Draggable defaultPosition={{ x: 25, y: 25 }}>
              <Box className={styles.card}>
                <CardImage />
              </Box>
            </Draggable>
              <Draggable defaultPosition={{ x: -25, y: -25 }}>
              <Box className={styles.card}>
                <CardAudio />
              </Box>
            </Draggable>
            <Draggable defaultPosition={{x: 500, y: -250}}>
              <Box className={styles.card}>
                <CardWord />
              </Box>
            </Draggable>
            <Draggable defaultPosition={{ x: 250, y: 250 }}>
              <Box className={styles.card}>
                <CardLink />
              </Box>
            </Draggable>
          </>
        )}

      </Box>
    </main>
  )
}
