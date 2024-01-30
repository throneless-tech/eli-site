"use client"
import React from 'react'
import Image from 'next/image'
import {
  AbsoluteCenter,
  Box,
  Container,
  Text,
  VStack,
} from '@chakra-ui/react'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <Box
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}
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
        <Container height={'100vh'}>
          <AbsoluteCenter>
            <VStack>
              <Image
                src='/signature.svg'
                alt='Eli Fife Cragin signature'
                width={600}
                height={300}
              />
              <Text fontWeight={400} textAlign={'center'} marginTop={8} width={700}>
                lived in Cape Cod, New York and California. He broke every rule he could and was notoriously late for everything, always with an iced coffee and at least two other beverages in hand. He loved yoga, cloudy days, swimming in all bodies of water, clothing (ranging from thrift stores to designer wear), and travel, as long as it didn't include too many planned activities.
              </Text>
            </VStack>
          </AbsoluteCenter>
        </Container>
      </Box>
    </main>
  )
}
