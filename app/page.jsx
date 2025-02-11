"use client"

// base imports
import React, { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
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
  Text,
  VisuallyHidden,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import styles from './styles/page.module.css';

//hooks
import useWindowDimensions from './hooks/useWindowDimensions';

// components
import Nav from './Components/Nav';
import SwrLayout from './Components/SwrLayout';
import SwrSlider from './Components/SwrSlider';

// created function to handle API request
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function useItems(url) {
  const { data, error, isLoading } = useSWR(url, fetcher)

  return {
    items: data,
    isLoading,
    isError: error
  }
}

const URL = `${process.env.NEXT_PUBLIC_OMEKA_URL}/items?featured=true&public=true`

export default function Home() {
  const { height, width } = useWindowDimensions();

  // fetch items from api
  const { items, isLoading, isError } = useItems(URL);

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

  // check if images should be randomized or form a collage
  const [collage, setCollage] = useState(true);

  const handleCollage = () => {
    return setCollage(!collage);
  }

  // gallery modal settings
  const { isOpen, onOpen, onClose } = useDisclosure();

  // watch what image is clicked and update the intial gallery slide to match
  const [slide, setSlide] = useState(0);

  const updateSlide = (index) => {
    console.log(index);

    setSlide(index);
    onOpen();
  }

  useEffect(() => { }, [slide])

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

  useEffect(() => {console.log(items);
   }, [collage, matches])

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
              <SwrSlider
                isError={isError}
                isLoading={isLoading}
                isModal
                items={items}
                slide={slide}
              />
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
            isError={isError}
            isLoading={isLoading}
            items={items}
            matches={matches}
            onOpen={updateSlide}
          />
        </Container>
      </Box>
    </main>
  )
}
