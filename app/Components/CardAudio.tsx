"use client"
import React from 'react'
import Image from 'next/image'
import { chivo } from '../styles/fonts'
import {
  Box,
  Center,
  Text,
  VStack,
} from '@chakra-ui/react'

import { WaveformIcon } from '../icons/Waveform'

const CardAudio = React.forwardRef((props: any, ref: any) => (
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
      <VStack>
        <WaveformIcon sx={{ height: 153, width: 187 }} />
        <audio controls src={props.src}></audio>
      </VStack>
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
        {props.title ? props.title : ""} •
      </Text>
      {props.title && props.date ? (
        <Text>
          {" "}•{" "}
        </Text>
      ) : null}
      <Text>
        {props.date ? props.date : ""}
      </Text>
    </Text>
  </Box>
))

export default CardAudio;