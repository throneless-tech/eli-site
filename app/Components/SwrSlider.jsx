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
  const {
    isError,
    isLoading,
    items,
    slide
  } = props;

  // Handles error and loading state
  if (isLoading) return <Skeleton height='50px' />;
  if (isError) return <Box color='red'>Failed to load.</Box>;

  // gallery slider settings
  var sliderSettings = {
    adaptiveHeight: true,
    dots: true,
    infinite: true,
    initialSlide: slide,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // variableWidth: true,
  };

  return (
    <Slider {...sliderSettings}>
      {items && items.length && items.map((item, index) => (
        <File
          key={`item-${index}`}
          data={item.element_texts}
          isModal
          url={item.files.url}
        />
      ))}
    </Slider>
  );
};

export default SwrSlider;
