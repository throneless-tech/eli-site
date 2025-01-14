"use client"
import React, { useRef } from 'react';
import { chivo } from '../styles/fonts'
import { useDraggable } from "@neodrag/react";

// chakra ui imports
import {
  Box,
  Text,
} from '@chakra-ui/react'

const CardVideo = (props: any) => {
  const {
    date,
    gallery,
    height,
    matches,
    onOpen,
    options,
    src,
    width
  } = props;
  
  // create a ref for each item and make it draggable, if it is not in the gallery view
  const ref = useRef(null);
  useDraggable(ref, options);


  return (
    <Box
      background={'#FFF'}
      borderRadius={8}
      boxShadow={'0px 4px 4px 0px rgba(0, 0, 0, 0.25);'}
      padding={'8px'}
      position={gallery ? 'relative' : 'absolute'}
      ref={ref}
      sx={{
        cursor: gallery ? 'pointer' : 'move'
      }}
      width={!matches ? '100%' : 400}
    >
      <Box
        className='cancel'
        height={height ? height : 300}
        width={width ? width : "100%"}
        onClick={onOpen}
        overflow={'hidden'}
        position='relative'
      >
        <video autoPlay muted loop playsInline>
          <source src={src} type="video/mp4" />
        </video>
      </Box>
      <Text
        background={'pink.100'}
        borderBottomRadius={4}
        className={chivo.className}
        padding={'4px'}
        textAlign={'center'}
      >
        {date ? date : ''}
      </Text>
    </Box>
  )
};

export default CardVideo;