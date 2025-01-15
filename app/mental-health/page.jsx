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
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VisuallyHidden,
  VStack,
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

const URL = `${process.env.NEXT_PUBLIC_OMEKA_URL}/items?featured=true&public=true&collection=3`

export default function MentalHealthPage() {
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
          id={styles.mentalHealth}
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
            “Bessel Van der kolk is a legend.” - Eli
          </Text>
          <Nav selected="mental-health" />
        </VStack>
      </Center>
      <Container maxW={'container.lg'} marginTop={12}>
        <Flex direction={['column', 'row']} alignItems='center' gap='6'>
          <Box as='h2' textStyle='h2' className={chivo.className}>
            Check out these resources:
          </Box>
          <VStack align='flex-start' className={chivo.className} fontSize={24} width={[300, 550]}>
            <Link href='https://www.besselvanderkolk.com/resources/the-body-keeps-the-score'>
              Van der Kolk: Brain, Mind, and Body in the Healing of Trauma
            </Link>
            <Link href='https://www.enneagraminstitute.com/the-traditional-enneagram'>
              Traditional Enneagram
            </Link>
            <Link href='https://catdogs.org/'>
              Get yourself a Mr. Bodhi
            </Link>
          </VStack>
        </Flex>
      </Container>
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