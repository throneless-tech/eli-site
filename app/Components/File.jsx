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

function useFiles(url) {
  const { data, error, isLoading } = useSWR(url, fetcher)

  return {
    files: data,
    isLoading,
    isError: error
  }
}

const File = (props) => {
  const [date, setDate] = useState(null);

  const {
    data,
    onOpen,
    updateSlide,
    url
  } = props;

  const { files, isLoading, isError } = useFiles(url);

  useEffect(() => {
    if (data && data.length) {
      data.map(set => {
        if (set.element.name == "Date") {
          setDate(set.text)
        }
      })
    }
  }, [data])

  useEffect(() => { }, [date])

  // Handles loading and error state
  if (isLoading) return null;
  if (isError) return <Box color='red'>Failed to load.</Box>;

  return (
    <>
      {files.map(item => (
        <Box
          key={`item-${item.id}`}
          paddingBottom={12}
          paddingTop={4}
        >
          {item.mime_type.includes("image") ? (
            <CardImage
              gallery
              options={{ disabled: true }}
              onOpen={onOpen}
              organized
              date={date}
              src={item.file_urls.original}
            />
          ) : item.mime_type.includes("video") ? (
            <CardVideo
              gallery
              onOpen={onOpen}
              options={{ disabled: true }}
              src={item.file_urls.original}
            />
          ) : item.mime_type.includes("audio") ? (
            <CardAudio
              gallery
              onOpen={onOpen}
              options={{ disabled: true }}
              src={item.file_urls.original}
            />
          ) : null}
        </Box>
      ))}
    </>
  )
};

export default File;