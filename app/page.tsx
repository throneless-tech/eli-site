"use client"
import React from 'react'
import Image from 'next/image'
import {
  AbsoluteCenter,
  Container,
  VStack,
  Text,
  Box
} from '@chakra-ui/react'
// import styles from './page.module.css'

const delay = 8000;
const ease = 10000;

export default function Home() {
  const [imageNum, setImageNum] = React.useState(1);
  const [imageNumToString, setImageNumToString] = React.useState('01');

  const updateImage = (imageNum: number) => {
    let newNum: string;
    if (imageNum < 10) {
      newNum = '0' + imageNum;
    } else if (imageNum === 12) {
      newNum = '01';
    } else {
      newNum = '' + imageNum;
    }

    setImageNumToString(newNum);
  }

  React.useEffect(() => {
    let newNum = imageNum + 1;
    let timer = setTimeout(() => setImageNum(newNum + 1), delay)

    updateImage(newNum);

    return () => {
      timer;
    };
  }, [])

  React.useEffect(() => { }, [imageNum, imageNumToString])


  return (
    <main>
      <Box
        backgroundImage={`url(background${imageNumToString}.jpg)`}
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}
      >
        <Container height={'100vh'}>
          <AbsoluteCenter>
            <VStack>
              <Image
                src='/signature.svg'
                alt='Eli Fife Cragin signature'
                width={600}
                height={300}
              />
              <Text fontWeight={400} textAlign={'center'} marginTop={8} width={700}>
                lived in Cape Cod, New York and California. He broke every rule he could and was notoriously late for everything, always with an iced coffee and at least two other beverages in hand. He loved yoga, cloudy days, swimming in all bodies of water, clothing (ranging from thrift stores to designer wear), and travel, as long as it didn't include too many planned activities.
              </Text>
            </VStack>
          </AbsoluteCenter>
        </Container>
      </Box>
    </main>
  )
}
