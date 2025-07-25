import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import './HeroSlider.css';

import slide1 from '../assets/hero-bg-1.avif';
import slide2 from '../assets/hero-bg-2.jpg';
import slide3 from '../assets/hero-bg-3.jpg';

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      effect="fade"
      speed={1200}
      loop={true}
      className="hero-slider"
    >
      <SwiperSlide><div className="slide-bg" style={{ backgroundImage: `url(${slide1})` }} /></SwiperSlide>
      <SwiperSlide><div className="slide-bg" style={{ backgroundImage: `url(${slide2})` }} /></SwiperSlide>
      <SwiperSlide><div className="slide-bg" style={{ backgroundImage: `url(${slide3})` }} /></SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
