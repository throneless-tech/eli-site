// base imports
import useSWR from 'swr';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// chakra ui imports
import {
  Box,
  Skeleton,
} from '@chakra-ui/react';

// components
import File from './File';
import FileCollage from './FileCollage';

// created function to handle API request
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function useItems(url) {
  const { data, error, isLoading } = useSWR(url, fetcher)

  return {
    items: data,
    isLoading,
    isError: error
  }
}

const URL = `${process.env.NEXT_PUBLIC_OMEKA_URL}/items?featured=true&public=true`

const SwrLayout = (props) => {
  const {
    collage,
    matches
  } = props;

  const { items, isLoading, isError } = useItems(URL);

  // Handles error and loading state
  if (isLoading) return <Skeleton height='50px' />;
  if (isError) return <Box color='red'>Failed to load.</Box>;

  return (
    <>
      {collage ? (
        <>
          {items && items.length && items.map((item, index) => (
            <FileCollage
              key={`item-${index}`}
              data={item.element_texts}
              matches={matches}
              url={item.files.url}
            />
          ))}
        </>
      ) : (
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 768: 2, 960: 3, 1200: 4 }}
        >
          <Masonry gutter='16px'>
            {items && items.length && items.map((item, index) => (
              <File
                key={`item-${index}`}
                data={item.element_texts}
                url={item.files.url}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      )}
    </>
  )
};

export default SwrLayout;