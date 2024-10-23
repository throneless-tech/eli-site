// base imports
import { createRef, useEffect, useRef, useState } from 'react';
import { useDraggable } from "@neodrag/react";
import useSWR from 'swr';

// chakra ui imports
import {
  Box,
  Skeleton,
} from '@chakra-ui/react';

// components
import CardImage from './CardImage';

//hooks
import useWindowDimensions from '../hooks/useWindowDimensions';

// utils
import {
  positionLeft,
  positionTop,
  randomHeight,
  randomWidth
} from '../utils/dimensions';

// created function to handle API request
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const FileCollage = (props) => {
  const { height, width } = useWindowDimensions();
  const [date, setDate] = useState(null);
  const {
    data,
    matches,
    url
  } = props;

  useEffect(() => {
    if (data && data.length) {
      data.map(set => {
        if (set.element.name == "Date") {
          setDate(set.text)
        }
      })
    }
  }, [])

  useEffect(() => { }, [date])

  const {
    data: item,
    error,
    isValidating,
  } = useSWR(url, fetcher);

  // Handles error and loading state
  if (error) return <Box color='red'>Failed to load.</Box>;
  if (isValidating) return <Skeleton height='50px' />;

  // create a ref for each item and make it draggable
  function createDraggableRef(element) {
    
    useDraggable(element, { defaultPosition: { x: randomWidth(width), y: randomHeight(height) } });
  };

  return (
    <Box
      key={`item-${item[0].id}`}
      height={'inherit'}
      position='absolute'
      ref={element => createDraggableRef(element)}
      sx={{
        cursor: 'move',
        left: positionLeft,
        top: positionTop,
      }}
      width={!matches ? '100%' : 500}
    >
      <CardImage
        organized
        date={date}
        src={item[0].file_urls.original}
      />
    </Box>
  )
};

export default FileCollage;