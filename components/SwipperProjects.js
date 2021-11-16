/* eslint-disable import/no-dynamic-require */
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import CardProjects from './CardProject'


const SwipperProject = ({ data }) => {

    const swiperRef = useRef(null)

    return (
        <>
        <Swiper
            ref={swiperRef}
            direction="horizontal"
            spaceBetween={10}
            slidesPerView={3}
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            className="h-full w-3/4 lg:block hidden"
            activeIndex="1"
            autoplay={{
                delay: 3000,
                disableOnInteraction: true,
            }}
            centeredSlides={true}
            pagination={{ clickable: true }}
        >

        {data.map((item , index) =>(
            <SwiperSlide className="pt-10 pb-10 pl-5" >
                {CardProjects(item.img,item.title,item.lien,0.3*index)}
             </SwiperSlide>
        ))}

        </Swiper>
        <Swiper
            ref={swiperRef}
            direction="horizontal"
            spaceBetween={10}
            slidesPerView={2}
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            className="h-full w-3/4 hidden md:block lg:hidden"
            activeIndex="2"
            autoplay={{
                delay: 3000,
                disableOnInteraction: true,
            }}
            centeredSlides={true}
            pagination={{ clickable: true }}
        >

        {data.map((item , index) =>(
            <SwiperSlide className="pt-10 pb-5 pl-5" >
                {CardProjects(item.img,item.title,item.lien,0.3*index)}
             </SwiperSlide>
        ))}

        </Swiper>
        <Swiper
            ref={swiperRef}
            direction="horizontal"
            spaceBetween={10}
            slidesPerView={1}
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            className="h-full w-3/4 block md:hidden"
            activeIndex="1"
            autoplay={{
                delay: 3000,
                disableOnInteraction: true,
            }}
            centeredSlides={true}
            pagination={{ clickable: true }}
        >

        {data.map((item , index) =>(
            <SwiperSlide className="pt-14 pb-10 pl-3" >
                {CardProjects(item.img,item.title,item.lien,0.3*index)}
             </SwiperSlide>
        ))}

        </Swiper>
        </>
    )
}

export default SwipperProject