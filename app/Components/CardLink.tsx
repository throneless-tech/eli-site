"use client"
import React from 'react'
import { chivo } from '../styles/fonts'
import {
  Box,
  Image,
  Text,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '../icons/ExternalLink'

export default function CardImage() {
  return (
    <Box
      background={'#000'}
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
          src='/buddy-texts.jpg'
          alt='An image advertising to receive a text from Buddy.'
          display='inline-block'
          marginBottom={2}
          width={400}
        />
      </Box>      
      <Text
        as='div'
        background={'pink.100'}
        borderBottomRadius={4}
        className={chivo.className}
        padding={'4px'}
        position='relative'
        textAlign={'center'}
      >
        <Text>
          Subscribe to Buddy Wakefield texts
        </Text>
        <ExternalLinkIcon
          sx={{
            position: 'absolute',
            right: 20,
            top: '50%',
            transform: 'translateY(-50%)'
          }}
        />
      </Text>
    </Box>
  )
}