import React from "react"
import {Swiper, SwiperSlide} from "swiper/react"

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./App.css";
import { EffectCoverflow, Pagination } from "swiper";

import img from "./assets/child.svg"

export default function App() {
    return (
      <>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={2}
          slidesPerView={5}
          spaceBetween={20}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <h3 className="swiper-header">Who will raise my child in the event of the unthinkable?</h3>
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <h3 className="swiper-header">Who will raise my child in the event of the unthinkable?</h3>
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <h3 className="swiper-header">Who will raise my child in the event of the unthinkable?</h3>
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <h3 className="swiper-header">Who will raise my child in the event of the unthinkable?</h3>
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <h3 className="swiper-header">Who will raise my child in the event of the unthinkable?</h3>
            <img src={img} />
          </SwiperSlide>
        </Swiper>
      </>
    );
  }

