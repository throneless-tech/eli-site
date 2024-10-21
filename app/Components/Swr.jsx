import useSWR from 'swr';

// chakra ui imports
import { Box } from '@chakra-ui/react';

// components
import CardImage from './CardImage';

// created function to handle API request
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Swr = (props) => {
  const {
    collection
  } = props;

  const {
    data: items,
    error,
    isValidating,
  } = useSWR(`${process.env.NEXT_PUBLIC_OMEKA_URL}/items?featured=true&public=true`, fetcher);

  // Handles error and loading state
  if (error) return <div className='failed'>failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  return (

    <>
      {items && items.map((item, index) => (
        <Box
          height={480}
          key={`item-${index}`}
          padding={4}
          // ref={!matches ? null : refImage015}
          // width={!matches ? '100%' : 450}
          width={450}
        >
          <CardImage
            organized
            date='12/5/2014'
            src='/eli-fashion-02.jpg'
          />
        </Box>
      ))}
    </>
  );
};

export default Swr;
