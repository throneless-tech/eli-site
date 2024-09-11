"use client"
import React, { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { chivo } from '../styles/fonts';
import {
  Box,
  Center,
  Container,
  Flex,
  Image as ChakraImage,
  Link,
  Text,
  VStack,
  Heading,
  VisuallyHidden,
  HStack,
} from '@chakra-ui/react';
import styles from '../styles/page.module.css';

// hooks
import useWindowDimensions from '../hooks/useWindowDimensions';

// components
import CardImage from '../Components/CardImage';
import Nav from '../Components/Nav';

// icons and images
import { SignatureIcon } from '../icons/Signature';


export default function YogaPage() {
  const ref1 = React.createRef();
  const ref2 = React.createRef();
  const { height, width } = useWindowDimensions();

  // media query
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (width && width >= 768) {
      setMatches(true);
    } else {
      setMatches(false);
    }
  }, []);

  return (
    <main>
      <Box className={styles.background}>
        <Box
          id={styles.yoga}
          className={styles.backgroundStatic}
        />
      </Box>
      <Center marginTop={8}>
        <VStack>
          <Link href="/">
            <SignatureIcon sx={{ height: ['60px', 149], width: [300, 867] }} />
          </Link>
          <VisuallyHidden>
            <Heading as='h1'>
              Eli Fife Cragin
            </Heading>
          </VisuallyHidden>
          <Text className={chivo.className} color='#FFF' fontSize={[20, 36]} fontWeight={600} textAlign={'center'} marginTop={[4, 8]} width={760}>
            Yoga for healing was essential to Eli.
          </Text>
          <Nav selected="yoga" />
        </VStack>
      </Center>
      <Container marginTop={12}>
        <Flex direction={['column', 'row']} alignItems='center' gap='2'>
          <Box as='h2' textStyle='h2' className={chivo.className}>
            Some favorites:
          </Box>
          <VStack align='flex-start' className={chivo.className} fontSize={24} width={[300, 400]}>
            <Link href='https://bksiyengar.com/modules/IYoga/iyoga.htm'>
              Iyengar Yoga
            </Link>
            <Link href='https://www.patriciawaldenyoga.com/'>
              Patricia Walden
            </Link>
            <Link href='https://www.corayoga.com/'>
              Cora Wen: Yoga Bloom
            </Link>
            <HStack>
              <Link href='https://yogajellies.com/product/yogajellies-one-pair/'>Eli
              </Link>
              <Link href='https://www.gaiam.com/collections/yoga-props-accessories'>
                loved
              </Link>
              <Link href='https://www.yogadirect.com/yoga-direct-premium-printed-1-4-inch-alignment-yoga-mat.html'>
                all
              </Link>
              <Link href='http://web.archive.org/web/20061101140528/http://www.judithlasater.com/about/books/props.html'>
                the
              </Link>
              <Link href='https://prapattiprops.com/'>
                props
              </Link>
              <Text>
                !
              </Text>
            </HStack>
          </VStack>
        </Flex>
      </Container>
      <Container marginTop={8} maxW={'container.2xl'}>
        {matches ? (
          <Masonry>
            <Box padding={4}>
              <CardImage
                date='1/10/2010'
                height={500}
                ref={ref1}
                src='/eli-yoga-01.jpg'
                width={500}
              />
            </Box>
            <Box padding={4}>
              <CardImage
                date='11/29/14'
                height={700}
                ref={ref2}
                src='/eli-yoga-02.jpg'
                width={400}
              />
            </Box>
          </Masonry>
        ) : (
          <>
            <Box padding={4}>
              <CardImage
                date='1/10/2010'
                height={500}
                ref={ref1}
                src='/eli-yoga-01.jpg'
                width={500}
              />
            </Box>
            <Box padding={4}>
              <CardImage
                date='11/29/14'
                height={700}
                ref={ref2}
                src='/eli-yoga-02.jpg'
                width={400}
              />
            </Box>
          </>
        )}
      </Container>
    </main>
  )
}