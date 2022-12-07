import React from "react"
import {Swiper, SwiperSlide} from "swiper/react"

import "swiper/css";
import "swiper/css/effect-cards";

import "./App.css";
import { EffectCards } from "swiper";



export default function Carousel() {
    return(
        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        initialSlide={0}
        className="mySwiper"
      >
        <SwiperSlide className="carousel__card">
            <a className="card__link" href="#">     <h4 className="card__title">
                How will I pay for my children's education?
            </h4>
            <img className="card__img" src="assets/child.svg" alt='logo with child icon'></img>
            </a>
        </SwiperSlide>
        <SwiperSlide className="carousel__card">
            <a className="card__link" href="#"> <h4 className="card__title">
                How will I pay for my children's education?
            </h4>
            <img className="card__img" src="assets/child.svg" alt='logo with child icon'></img>
            </a>
        </SwiperSlide>
        <SwiperSlide className="carousel__card">
            <a className="card__link" href="#"> <h4 className="card__title">
                How will I pay for my children's education?
            </h4>
            <img className="card__img" src="assets/child.svg" alt='logo with child icon'></img>
            </a>
        </SwiperSlide>
        <SwiperSlide className="carousel__card">
            <a className="card__link" href="#"> <h4 className="card__title">
                How will I pay for my children's education?
            </h4>
            <img className="card__img" src="assets/child.svg" alt='logo with child icon'></img>
            </a>
        </SwiperSlide>
        <SwiperSlide className="carousel__card">
            <a className="card__link" href="#"> <h4 className="card__title">
                How will I pay for my children's education?
            </h4>
            <img className="card__img" src="assets/child.svg" alt='logo with child icon'></img>
            </a>
        </SwiperSlide>
      </Swiper>
    )
}