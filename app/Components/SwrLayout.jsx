// base imports
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// chakra ui imports
import {
  Box,
  Skeleton,
} from '@chakra-ui/react';

// components
import File from './File';
import FileCollage from './FileCollage';

const SwrLayout = (props) => {
  const {
    collage,
    isError,
    isLoading,
    items,
    matches,
    onOpen
  } = props;

  // Handles error and loading state
  if (isLoading) return null;
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
              onOpen={onOpen}
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
                onOpen={onOpen}
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