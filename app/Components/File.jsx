// base imports
import { useEffect, useState } from 'react';
import useSWR from 'swr';

// chakra ui imports
import {
  Box,
  Skeleton,
} from '@chakra-ui/react';

// components
import CardImage from './CardImage';

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
    data: item,
    error,
    isValidating,
  } = useSWR(url, fetcher);

  // Handles error and loading state
  if (error) return <Box color='red'>Failed to load.</Box>;
  if (isValidating) return <Skeleton height='50px' />;

  return (
    <Box
      key={`item-${item[0].id}`}
      padding={4}
    >
      <CardImage
        organized
        date={date}
        src={item[0].file_urls.original}
      />
    </Box>
  )
};

export default File;