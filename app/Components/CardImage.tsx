"use client"
import React,
{
  useEffect,
  useRef,
  useState
} from 'react';
import Image from 'next/image';
import { useDraggable } from "@neodrag/react";
import { chivo } from '../styles/fonts';

// chakra ui imports
import {
  Box,
  Text,
} from '@chakra-ui/react';

// utils
import {
  positionLeft,
  positionTop,
} from '../utils/dimensions';

const CardImage = (props: any) => {
  const {
    date,
    gallery,
    matches,
    options,
    organized,
    src
  } = props;

  console.log(options);
  

  // create a ref for each item and make it draggable, if it is not in the gallery view
  const ref = useRef(null);
  useDraggable(ref, options);

  return (
    <Box
      background={'#FFF'}
      borderRadius={8}
      boxShadow={'0px 4px 4px 0px rgba(0, 0, 0, 0.25);'}
      height={'inherit'}
      overflow={'hidden'}
      padding={'8px'}
      position={gallery ? 'relative' : 'absolute'}
      ref={ref}
      sx={{
        cursor: gallery ? 'pointer' : 'move',
        left: gallery ? 0 : positionLeft,
        top: gallery ? 0 : positionTop,
      }}
      width={!matches ? '100%' : 400}
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
          height={[200, organized ? 400 : '100%']}
          position='relative'
          width={organized ? 400 : '100%'}

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