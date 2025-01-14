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

// utils
import {
  positionLeft,
  positionTop,
  randomHeight,
  randomWidth
} from '../utils/dimensions';

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

const FileCollage = (props) => {
  const [date, setDate] = useState(null);

  const {
    data,
    matches,
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
  // if (isLoading) return <Skeleton height='50px' />;
  if (isError) return <Box color='red'>Failed to load.</Box>;

  return (
    <>
      {files.map(item => (
        <Box
          key={`item-${item.id}`}
          height={'inherit'}
        >
          {item.mime_type.includes("image") ? (
            <CardImage
              organized
              date={date}
              matches={matches}
              options={{
                defaultPosition: {
                  x: randomWidth(),
                  y: randomHeight(),
                },
                onDrag: (data) => {
                  console.log('onDrag', data);
                }, 
              }}
              src={item.file_urls.original}
            />
          ) : item.mime_type.includes("video") ? (
            <CardVideo
              matches={matches}
              options={{
                defaultPosition: {
                  x: randomWidth(),
                  y: randomHeight(),
                },
              }}
              src={item.file_urls.original}
            />
          ) : item.mime_type.includes("audio") ? (
            <CardAudio
              matches={matches}
              options={{
                defaultPosition: {
                  x: randomWidth(),
                  y: randomHeight(),
                },
              }}
              src={item.file_urls.original}
            />
          ) : null}
        </Box>
      ))}
    </>
  )
};

export default FileCollage;