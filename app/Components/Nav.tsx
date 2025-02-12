import React from 'react';
import { chivo } from '../styles/fonts';
import {
  Button,
  Flex,
} from '@chakra-ui/react';

export default function Nav(props: any) {
  const { selected } = props;

  return (
    <Flex
      align="center"
      direction={['column', 'row']}
      justify="center"
      marginTop={4}
      gap='4'
    >
      <Button
        as="a"
        background={selected == "comedy" ? "orange.500" : "red.500"}
        className={chivo.className}
        fontWeight="bold"
        fontSize={24}
        href='/comedy'
        textAlign="center"
        width={[326, 'unset']}
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
        width={[326, 'unset']}
        _hover={{
          background: "red.900",
        }}
      >
        Fashion
      </Button>
      <Button
        as="a"
        background={selected == "gallery" ? "orange.500" : "red.500"}
        className={chivo.className}
        fontWeight="bold"
        fontSize={24}
        href='/gallery'
        textAlign="center"
        width={[326, 'unset']}
        _hover={{
          background: "red.900",
        }}
      >
        Gallery
      </Button>
      <Button
        as="a"
        background={selected == "mental-health" ? "orange.500" : "red.500"}
        className={chivo.className}
        fontWeight="bold"
        fontSize={24}
        href='/mental-health'
        textAlign="center"
        width={[326, 'unset']}
        _hover={{
          background: "red.900",
        }}
      >
        Mental Health
      </Button>
      <Button
        as="a"
        background={selected == "yoga" ? "orange.500" : "red.500"}
        className={chivo.className}
        fontWeight="bold"
        fontSize={24}
        href='/yoga'
        textAlign="center"
        width={[326, 'unset']}
        _hover={{
          background: "red.900",
        }}
      >
        Yoga
      </Button>
    </Flex>
  )
}