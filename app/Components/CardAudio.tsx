"use client"
import React from 'react'
import Image from 'next/image'
import { chivo } from '../styles/fonts'
import {
  Box,
  Center,
  Text,
} from '@chakra-ui/react'

import { WaveformIcon } from '../icons/Waveform'

export default function CardImage() {
  return (
    <Box
      background={'#FFF'}
      borderRadius={8}
      boxShadow={'0px 4px 4px 0px rgba(0, 0, 0, 0.25);'}
      padding={'8px'}
    >
      <Center
        marginY={3}
        width={'100%'}
      >
        <WaveformIcon sx={{ height: 153, width: 187 }} />
      </Center>      
      <Text
        as={'div'}
        background={'orange.500'}
        borderBottomRadius={4}
        className={chivo.className}
        padding={'4px'}
        textAlign={'center'}
      >
        <Text>
          Voice Memo •
        </Text>
        <Text>
          5/8/2008
        </Text>
      </Text>
    </Box>
  )
}