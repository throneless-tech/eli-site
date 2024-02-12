"use client"
import React from 'react'
import Image from 'next/image'
import { chivo } from './styles/fonts'
import Masonry from 'masonry-layout'
import {
  Box,
  Center,
  Container,
  Text,
  VStack,
} from '@chakra-ui/react'
import styles from './styles/page.module.css'

import CardAudio from './Components/CardAudio';
import CardImage from './Components/CardImage';
import CardLink from './Components/CardLink';
import CardWord from './Components/CardWord';

export default function Home() {

  var msnry = new Masonry('.grid', {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });


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
        <Center marginY={10}>
          <VStack>
            <Image
              src='/signature.svg'
              alt='Eli Fife Cragin signature'
              height={300}
              priority
              width={600}
            />
            <Text className={chivo.className} fontWeight={600} textAlign={'center'} marginTop={8} width={700}>
              lived in Cape Cod, New York and California. He broke every rule he could and was notoriously late for everything, always with an iced coffee and at least two other beverages in hand. He loved yoga, cloudy days, swimming in all bodies of water, clothing (ranging from thrift stores to designer wear), and travel, as long as it didn't include too many planned activities.
            </Text>
          </VStack>
        </Center>
        <Container maxW={'container.2xl'}>
          <Box
            className='grid'
          >
            <Box className='grid-sizer' />
            <Box className='grid-item' marginBottom={4}>
              <CardImage />
            </Box>
            <Box className='grid-item' marginBottom={4}>
              <CardAudio />
            </Box>
            <Box className='grid-item' marginBottom={4}>
              <CardWord />
            </Box>
            <Box className='grid-item' marginBottom={4}>
              <CardLink />
            </Box>
          </Box>
        </Container>
      </Box>
    </main>
  )
}
