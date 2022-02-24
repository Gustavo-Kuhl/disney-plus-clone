import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Image } from "./style";

import disney from "../../../../assets/disney-logo.svg";
import starwars from "../../../../assets/star-wars.svg"
import pixar from "../../../../assets/pixar.svg"

const CarouselComponent: React.FC = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 1500 }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <Image src={disney} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={starwars} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={pixar} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export { CarouselComponent };
