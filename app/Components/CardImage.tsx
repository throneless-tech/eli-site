"use client"
import React from 'react'
import Image from 'next/image'
import { chivo } from '../styles/fonts'
import {
  Box,
  Text,
} from '@chakra-ui/react'

const CardImage = (props: any) => (
  <Box
    background={'#FFF'}
    borderRadius={8}
    boxShadow={'0px 4px 4px 0px rgba(0, 0, 0, 0.25);'}
    height='100%'
    overflow={'hidden'}
    padding={'8px'}
    position='relative'
    width='100%'
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
      height={[200, props.organized ? 400 : '100%']}
      position='relative'
      width={props.organized ? 400 : '100%'}

    >
      <Image
        src={props.src}
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
      {props.date ? props.date : ''}
    </Text>
    </Box>
  </Box>
);

export default CardImage;