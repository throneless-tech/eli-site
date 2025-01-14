// base imports
import { useEffect, useState } from "react";
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

const SwrSlider = (props) => {
  const [slide, setSlide] = useState(0);

  const {
    isError,
    isLoading,
    items,
  } = props;

  // Handles error and loading state
  if (isLoading) return <Skeleton height='50px' />;
  if (isError) return <Box color='red'>Failed to load.</Box>;

  // gallery slider settings
  var sliderSettings = {
    dots: true,
    infinite: true,
    initialSlide: slide,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const updateSlide = (index) => {
    setSlide(index);
  }

  useEffect(() => {}, [slide])

  return (
    <Slider {...sliderSettings}>
      {items && items.length && items.map((item, index) => (
        <File
          key={`item-${index}`}
          data={item.element_texts}
          url={item.files.url}
          updateSlide={updateSlide}
        />
      ))}
    </Slider>
  );
};

export default SwrSlider;
