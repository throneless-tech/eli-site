// base imports
import { useEffect, useState } from 'react';
import useSWR from 'swr';

// chakra ui imports
import {
  Box,
  Skeleton,
} from '@chakra-ui/react';

// components
import CardAudio from './CardAudio';
import CardImage from './CardImage';
import CardVideo from './CardVideo';

// created function to handle API request
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const File = (props) => {
  const [date, setDate] = useState(null);
  const {
    data,
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

  useEffect(() => {}, [date])

  const {
    data: items,
    error,
    isValidating,
  } = useSWR(url, fetcher);

  // Handles error and loading state
  if (error) return <Box color='red'>Failed to load.</Box>;
  if (isValidating) return <Skeleton height='50px' />;

  return (
    <>
      {items.map(item => (
        <Box
          key={`item-${item.id}`}
          paddingBottom={12}
          paddingTop={4}
        >
          {item.mime_type.includes("image") ? (
            <CardImage
              gallery
              organized
              date={date}
              src={item.file_urls.original}
            />
          ) : item.mime_type.includes("video") ? (
            <CardVideo
              gallery
              src={item.file_urls.original}
            />
          ) : item.mime_type.includes("audio") ? (
            <CardAudio
              gallery
              src={item.file_urls.original}
            />
          ) : null}
        </Box>
      ))}
    </>
  )
};

export default File;