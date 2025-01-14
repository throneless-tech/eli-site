// base imports
import useSWR from 'swr';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// chakra ui imports
import {
  Box,
  Skeleton,
} from '@chakra-ui/react';

// components
import File from './File';

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

const SwrSlider = () => {
  const { items, isLoading, isError } = useItems(URL);

  // Handles error and loading state
  if (isLoading) return <Skeleton height='50px' />;
  if (isError) return <Box color='red'>Failed to load.</Box>;

  // gallery slider settings
  var sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...sliderSettings}>
      {items && items.length && items.map((item, index) => (
        <File
          key={`item-${index}`}
          data={item.element_texts}
          url={item.files.url}
        />
      ))}
    </Slider>
  );
};

export default SwrSlider;
