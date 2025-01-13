"use client"
import React,
{
  useEffect,
  useRef,
  useState
} from 'react';
import { chivo } from '../styles/fonts'
import { useDraggable } from "@neodrag/react";

// chakra ui imports
import {
  Box,
  Text,
} from '@chakra-ui/react'

// utils
import {
  positionLeft,
  positionTop,
  randomHeight,
  randomWidth
} from '../utils/dimensions';

const CardVideo = (props: any) => {
  // create a ref for each item and make it draggable, if it is not in the gallery view
  const [options, setOptions] = useState({});

  useEffect(() => {
    if (!props.gallery) {
      const newOptions = {
        defaultPosition: {
          x: randomWidth(),
          y: randomHeight()
        },
      };
      setOptions(newOptions);
    } else {
      const newOptions = {
        disabled: true,
      };
      setOptions(newOptions);
    }
  }, []);

  useEffect(() => { }, [options]);

  const ref = useRef(null);
  useDraggable(ref, options);


  return (
    <Box
      background={'#FFF'}
      borderRadius={8}
      boxShadow={'0px 4px 4px 0px rgba(0, 0, 0, 0.25);'}
      padding={'8px'}
      position={props.gallery ? 'relative' : 'absolute'}
      ref={ref}
      sx={{
        cursor: props.gallery ? 'pointer' : 'move',
        left: props.gallery ? 0 : positionLeft,
        top: props.gallery ? 0 : positionTop,
      }}
      width={!props.matches ? '100%' : 400}
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
  )
};

export default CardVideo;