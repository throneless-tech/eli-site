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

const FileCollage = (props) => {
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
          height={'inherit'}
        >
          {item.mime_type.includes("image") ? (
            <CardImage
              organized
              date={date}
              matches={matches}
              src={item.file_urls.original}
            />
          ) : item.mime_type.includes("video") ? (
            <CardVideo
              matches={matches}
              src={item.file_urls.original}
            />
          ) : item.mime_type.includes("audio") ? (
            <CardAudio
              matches={matches}
              src={item.file_urls.original}
            />
          ) : null}
        </Box>
      ))}
    </>
  )
};

export default FileCollage;