"use client"
import React from 'react'
import { chivo, heptaSlab } from '../styles/fonts'
import {
  Box,
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
      textAlign={'center'}
    >
      <Text className={chivo.className} fontWeight={600} marginTop={3}>
        Word of the day
      </Text>
      <Text as='div' className={heptaSlab.className} marginBottom={3}>
        <Text fontSize={24}>
          glom
        </Text>$
        <Text>
          verb • GLAHM
        </Text>
      </Text>
      <Text
        as='div'
        background={'pink.100'}
        borderBottomRadius={4}
        className={chivo.className}
        padding={'4px'}
        position='relative'
        textAlign={'center'}
      >
      <Text as='span' paddingRight={4}>
        Merriam-Webster Dictionary
      </Text>
      <ExternalLinkIcon sx={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)'}} />
      </Text>
    </Box>
  )
}