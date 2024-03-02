"use client"
import React from 'react'
import { chivo } from '../styles/fonts'
import {
  Box,
  Text,
} from '@chakra-ui/react'

const CardImage = React.forwardRef((props: any, ref: any) => (
  <Box
    background={'#FFF'}
    borderRadius={8}
    boxShadow={'0px 4px 4px 0px rgba(0, 0, 0, 0.25);'}
    padding={'8px'}
    ref={ref}
  >
    <Box
      height={props.height ? props.height : 300}
      width={props.width ? props.width : "100%"}
      overflow={'hidden'}
      position='relative'
    >
      <video autoPlay muted loop playsInline>
        <source src={props.src} type="video/mp4" />
      </video>
    </Box>
    <Text
      background={'pink.100'}
      borderBottomRadius={4}
      className={chivo.className}
      padding={'4px'}
      textAlign={'center'}
    >
      {props.date ? props.date : ''}
    </Text>
  </Box>
));

export default CardImage;