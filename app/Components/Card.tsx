"use client"
import React from 'react'
import Image from 'next/image'
import {
  Box,
  Text,
} from '@chakra-ui/react'

export default function Card() {
  return (
    <Box
      background={'#FFF'}
      borderRadius={8}
      boxShadow={'0px 4px 4px 0px rgba(0, 0, 0, 0.25);'}
      padding={'8px'}
    >
      <Image
        src='/eli-fam.jpg'
        alt='Eli and family'
        width={600}
        height={300}
      />
      <Text
        background={'pink.100'}
        borderBottomRadius={4}
        padding={'4px'}
        textAlign={'center'}
      >
        6/28/19
      </Text>
    </Box>
  )
}