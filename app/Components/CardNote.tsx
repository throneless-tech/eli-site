"use client"
import React from 'react'
import Image from 'next/image'
import {
  Box,
  Text,
} from '@chakra-ui/react'

export default function CardImage() {
  return (
    <Box
      background={'#FFF'}
      borderRadius={8}
      boxShadow={'0px 4px 4px 0px rgba(0, 0, 0, 0.25);'}
      padding={'8px'}
    >
      <Box
        minHeight={300}
        overflow={'hidden'}
        position='relative'
        width={'100%'}
      >
        <Image
          src='/eli-fam.jpg'
          alt='Eli and family'
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </Box>      
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