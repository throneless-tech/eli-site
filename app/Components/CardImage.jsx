"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import { useDraggable } from "@neodrag/react";
import { chivo } from '../styles/fonts';

// chakra ui imports
import {
  Box,
  Text,
} from '@chakra-ui/react';

const CardImage = (props) => {
  const {
    date,
    gallery,
    index,
    matches,
    onOpen,
    options,
    organized,
    src,
  } = props;

  // create a ref for each item and make it draggable, if it is not in the gallery view
  const ref = useRef(null);
  useDraggable(ref, options);

  return (
    <Box
      background={'#FFF'}
      borderRadius={8}
      boxShadow={'0px 4px 4px 0px rgba(0, 0, 0, 0.25);'}
      className='cancel'
      height={'inherit'}
      overflow={'hidden'}
      padding={'8px'}
      position={gallery ? 'relative' : 'absolute'}
      ref={ref}
      sx={{
        cursor: gallery ? 'pointer' : 'move'
      }}
      width={!matches || gallery ? '100%' : 400}
      zIndex={3}
    >
      <Box
        height='100%'
        overflow='hidden'
        position='relative'
        width='100%'
      >
        <Box
          className='cancel'
          height={[200, organized ? 500 : '100%']}
          onClick={!gallery ? () => onOpen(index) : null}
          position='relative'
          width={!organized || gallery ? '100%' : 400}
        >
          <Image
            src={src}
            alt='Eli'
            fill={true}
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ cursor: 'pointer', objectFit: "cover" }}
          />
        </Box>
        <Text
          background={'pink.100'}
          borderBottomRadius={4}
          bottom={0}
          className={chivo.className}
          height={8}
          left={0}
          padding='4px'
          position='absolute'
          right={0}
          textAlign={'center'}
          width='100%'
          zIndex={2}
        >
          {date ? date : ''}
        </Text>
      </Box>
    </Box>
  )
};

export default CardImage;