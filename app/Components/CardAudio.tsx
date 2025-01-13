"use client"
import React, { useRef } from 'react';
import { useDraggable } from "@neodrag/react";
import { chivo } from '../styles/fonts'

// chakra ui imports
import {
  Box,
  Center,
  Text,
  VStack,
} from '@chakra-ui/react'

// icons
import { WaveformIcon } from '../icons/Waveform'

// utils
import {
  positionLeft,
  positionTop,
  randomHeight,
  randomWidth
} from '../utils/dimensions';

const CardAudio = (props: any) => {
  // create a ref for each item and make it draggable
  const options = {
    defaultPosition: {
      x: randomWidth(),
      y: randomHeight()
    },
  };
  const ref = useRef(null);
  useDraggable(ref, options);

  return (
    <Box
      background={'#FFF'}
      borderRadius={8}
      boxShadow={'0px 4px 4px 0px rgba(0, 0, 0, 0.25);'}
      padding={'8px'}
      position='absolute'
      ref={ref}
      sx={{
        cursor: 'move',
        left: positionLeft,
        top: positionTop,
      }}
    >
      <Center
        marginY={3}
        position='relative'
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
  )
};

export default CardAudio;