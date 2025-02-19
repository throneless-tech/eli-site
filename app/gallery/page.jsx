"use client"

// base imports
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { chivo } from '../styles/fonts';

// chakra ui imports
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Image as ChakraImage,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  VisuallyHidden,
  useDisclosure,
} from '@chakra-ui/react';
import styles from '../styles/page.module.css';

// hooks
import useWindowDimensions from '../hooks/useWindowDimensions';

// components
import Nav from '../Components/Nav';
import SwrLayout from '../Components/SwrLayout';
import SwrSlider from '../Components/SwrSlider';

// icons and images
import { SignatureIcon } from '../icons/Signature';

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

const URL = `${process.env.NEXT_PUBLIC_OMEKA_URL}/items?public=true`

export default function GalleryPage() {
  const { height, width } = useWindowDimensions();

  // fetch items from api
  const { items, isLoading, isError } = useItems(URL);

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
    }
  }, []);

  useEffect(() => { }, [matches])

  return (
    <main>
      <Box className={styles.background}>
        <Box
          id={styles.comedy}
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
            Photography and things of and by Eli
          </Text>
          <Nav selected="gallery" />
        </VStack>
      </Center>
      <Container marginTop={8} maxW={'container.2xl'}>
        <SwrLayout
          collage={false}
          isError={isError}
          isLoading={isLoading}
          items={items}
          matches={matches}
          onOpen={updateSlide}
        />
      </Container>
      <Modal isOpen={isOpen} onClose={onClose} size='full'>
        <ModalOverlay />
        <ModalContent>
          <Box className={styles.background}>
            <Box
              id={styles.comedy}
              className={styles.backgroundStatic}
            />
          </Box>
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
    </main>
  )
}