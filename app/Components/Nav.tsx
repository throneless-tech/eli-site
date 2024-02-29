import React from 'react';
import { chivo } from '../styles/fonts';
import {
  Button,
  HStack,
} from '@chakra-ui/react';

export default function Nav(props: any) {
  const { selected } = props;

  return (
    <HStack
      align="center"
      justify="center"
      marginTop={4}
      spacing={4}
    >
      <Button
        as="a"
        background={selected == "yoga" ? "orange.500" : "red.500"}
        className={chivo.className}
        fontWeight="bold"
        fontSize={24}
        href='/yoga'
        textAlign="center"
        _hover={{
          background: "red.900",
        }}
      >
        Yoga
      </Button>
      <Button
        as="a"
        background={selected == "mental-health" ? "orange.500" : "red.500"}
        className={chivo.className}
        fontWeight="bold"
        fontSize={24}
        href='/mental-health'
        textAlign="center"
        _hover={{
          background: "red.900",
        }}
      >
        Mental Health
      </Button>
      <Button
        as="a"
        background={selected == "comedy" ? "orange.500" : "red.500"}
        className={chivo.className}
        fontWeight="bold"
        fontSize={24}
        href='/comedy'
        textAlign="center"
        _hover={{
          background: "red.900",
        }}
      >
        Comedy
      </Button>
      <Button
        as="a"
        background={selected == "fashion" ? "orange.500" : "red.500"}
        className={chivo.className}
        fontWeight="bold"
        fontSize={24}
        href='/fashion'
        textAlign="center"
        _hover={{
          background: "red.900",
        }}
      >
        Fashion
      </Button>
    </HStack>
  )
}