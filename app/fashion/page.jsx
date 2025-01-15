"use client"

// base imports
import React, { useEffect, useRef, useState } from 'react';
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

// styles
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

const URL = `${process.env.NEXT_PUBLIC_OMEKA_URL}/items?featured=true&public=true&collection=2`

export default function FashionPage() {
  const { height, width } = useWindowDimensions();

  // fetch items from api
  const { items, isLoading, isError } = useItems(URL);

  // gallery modal settings
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <SwrLayout
          collage={false}
          isError={isError}
          isLoading={isLoading}
          items={items}
          matches={matches}
          onOpen={onOpen}
        />
      </Container>
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
              items={items}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </main>
  )
}