"use client"

// base imports
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { chivo } from './styles/fonts';
import { useDraggable } from "@neodrag/react";

// chakra ui imports
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ResponsiveValue,
  Text,
  VisuallyHidden,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import styles from './styles/page.module.css';

//hooks
import useWindowDimensions from './hooks/useWindowDimensions';

// components
import CardAudio from './Components/CardAudio';
import CardImage from './Components/CardImage';
import CardVideo from './Components/CardVideo';
import CardLink from './Components/CardLink';
import CardWord from './Components/CardWord';
import Nav from './Components/Nav';
import SwrLayout from './Components/SwrLayout';
import SwrSlider from './Components/SwrSlider';

export default function Home() {
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
  const draggableComedy = useRef(null);
  useDraggable(draggableComedy, { defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const draggableFashion = useRef(null);
  useDraggable(draggableFashion, { defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const draggableHealth = useRef(null);
  useDraggable(draggableHealth, { defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const draggableYoga = useRef(null);
  useDraggable(draggableYoga, { defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const refImage001 = useRef(null);
  useDraggable(refImage001, { defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const refImage002 = useRef(null);
  useDraggable(refImage002, { defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const refImage003 = useRef(null);
  useDraggable(refImage003, { defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const refImage004 = useRef(null);
  useDraggable(refImage004, { defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const refImage005 = useRef(null);
  useDraggable(refImage005, { defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const refImage006 = useRef(null);
  useDraggable(refImage006, { defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const refImage007 = useRef(null);
  useDraggable(refImage007, { defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const refImage008 = useRef(null);
  useDraggable(refImage008, { defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const refImage009 = useRef(null);
  useDraggable(refImage009, { defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const refImage010 = useRef(null);
  useDraggable(refImage010, { defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const refImage011 = useRef(null);
  useDraggable(refImage011, { defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const refImage012 = useRef(null);
  useDraggable(refImage012, { defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const refImage013 = useRef(null);
  useDraggable(refImage013, { defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const refImage014 = useRef(null);
  useDraggable(refImage014, { defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const refImage015 = useRef(null);
  useDraggable(refImage015, { defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const refImage016 = useRef(null);
  useDraggable(refImage016, { defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const refVideo001 = useRef(null);
  useDraggable(refVideo001, { defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const refVideo002 = useRef(null);
  useDraggable(refVideo002, { defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const refVideo003 = useRef(null);
  useDraggable(refVideo003, { defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const refVideo004 = useRef(null);
  useDraggable(refVideo004, { defaultPosition: { x: randomWidth(), y: randomHeight() } });

  const refAudio001 = useRef(null);
  useDraggable(refAudio001, { defaultPosition: { x: randomWidth(), y: randomHeight() } });


  // check if images should be randomized or form a collage
  const [collage, setCollage] = useState(true);
  const [clickCount, setClickCount] = useState(0);

  const handleCollage = () => {
    setClickCount(clickCount => clickCount + 1);
    return setCollage(!collage);
  }

  const positionLeft = () => {
    if (clickCount >= 1) {
      return randomWidth() as ResponsiveValue<number>;
    } else {
      return 0;
    }
  }

  const positionTop = () => {
    if (clickCount >= 1) {
      return randomHeight() as ResponsiveValue<number>;
    } else {
      return 0;
    }
  }

  // gallery modal settings
  const { isOpen, onOpen, onClose } = useDisclosure();

  // media query
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (width && width >= 768) {
      setMatches(true);
    } else {
      setMatches(false);
      setCollage(false);
    }
  }, []);

  useEffect(() => { }, [clickCount, collage, matches])

  return (
    <main>
      <Box
        className='grid'
        height={collage ? '100vh' : 'inherit'}
        overflowX={'hidden'}
        position='relative'
      >
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
        <HStack
          gap={1}
          marginLeft='auto'
          marginRight={0}
          maxW={300}
        >
          <Text
            as={"button"}
            onClick={onOpen}
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
            Gallery
          </Text>
          {matches ? (
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
              {collage ? 'Organize' : 'Collage'}
            </Text>
          ) : null}
        </HStack>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <ModalCloseButton
                marginLeft='auto'
                marginRight={0}
                onClick={onClose}
              />
            </ModalHeader>
            <ModalBody>
              <SwrSlider />
            </ModalBody>
          </ModalContent>
        </Modal>
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
            {!collage ? (<Nav />) : (
              <>
                <Button
                  as="a"
                  background={"red.500"}
                  className={`${styles.nav} ${chivo.className}`}
                  fontWeight="bold"
                  fontSize={24}
                  href='/yoga'
                  ref={draggableYoga}
                  textAlign="center"
                  _hover={{
                    background: "red.900",
                  }}
                >
                  Yoga
                </Button>
                <Button
                  as="a"
                  background={"red.500"}
                  className={`${styles.nav} ${chivo.className}`}
                  fontWeight="bold"
                  fontSize={24}
                  href='/mental-health'
                  ref={draggableHealth}
                  textAlign="center"
                  _hover={{
                    background: "red.900",
                  }}
                >
                  Mental Health
                </Button>
                <Button
                  as="a"
                  background={"red.500"}
                  className={`${styles.nav} ${chivo.className}`}
                  fontWeight="bold"
                  fontSize={24}
                  href='/comedy'
                  ref={draggableComedy}
                  textAlign="center"
                  _hover={{
                    background: "red.900",
                  }}
                >
                  Comedy
                </Button>
                <Button
                  as="a"
                  background={"red.500"}
                  className={`${styles.nav} ${chivo.className}`}
                  fontWeight="bold"
                  fontSize={24}
                  href='/fashion'
                  ref={draggableFashion}
                  textAlign="center"
                  _hover={{
                    background: "red.900",
                  }}
                >
                  Fashion
                </Button>
              </>
            )}
          </VStack>
        </Center>
        <Container maxW={'container.2xl'}>
          <SwrLayout
            collage={collage}
            matches={matches}
          />
        </Container>
      </Box>
    </main>
  )
}
