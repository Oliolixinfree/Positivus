// components/ReviewsCarousel.tsx
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

// import 'swiper/css'

import Wrapper from './Wrapper'
import Card from './Card'
import ArrowLink from './UI/ArrowLink'
import TriangleSvg from './UI/TriangleSvg'

interface Review {
    text: string
    name: string
    role: string
}

interface IReviewsCarousel {
    reviews: Review[]
}

const ReviewsCarousel: React.FC<IReviewsCarousel> = ({ reviews }) => {
    const swiperRef = useRef<any>(null)
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <Wrapper>
            <Card bg="bg-dark" className="pt-20 pb-16 overflow-hidden">
                <Swiper
                    modules={[Navigation, Pagination]}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper
                        setActiveIndex(swiper.realIndex)
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    spaceBetween={50}
                    centeredSlides
                    slidesPerView="auto"
                    navigation
                    pagination={false}
                    loop
                    className="text-white overflow-visible mb-32"
                >
                    {reviews.map((t, index) => (
                        <SwiperSlide
                            key={index}
                            className="!w-[80%] sm:!w-[600px] transition-transform"
                        >
                            <div className="relative p-13 border border-green rounded-[45px] text-center bg-dark h-60">
                                <p className="text-lg leading-6 text-left">
                                    {t.text}
                                </p>
                                <div className="absolute bottom-[-29px] left-14">
                                    <TriangleSvg />
                                </div>
                            </div>
                            <div className="mt-12 ml-20 text-left">
                                <div className="text-green text-lg">
                                    {t.name}
                                </div>
                                <div className="text-lg text-gray">
                                    {t.role}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="w-[600px] mx-auto flex items-center justify-between">
                    <button onClick={() => swiperRef.current?.slidePrev()}>
                        <ArrowLink className="fill-gray opacity-50 hover:fill-white hover:opacity-100 cursor-pointer bg-dark rotate-180 transition-transform hover:scale-110" />
                    </button>
                    <div className="flex justify-center gap-2">
                        {reviews.map((_, i) => (
                            <button
                                key={i}
                                onClick={() =>
                                    swiperRef.current?.slideToLoop(i)
                                }
                                className="transition-transform hover:scale-110"
                            >
                                <svg
                                    className={
                                        i === activeIndex
                                            ? 'fill-green'
                                            : 'fill-gray'
                                    }
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                >
                                    <path d="M7 2.05L14 0L11.96 7L14 14L7 11.96L0 14L2.05 7L0 0L7 2.05Z" />
                                </svg>
                            </button>
                        ))}
                    </div>
                    <button onClick={() => swiperRef.current?.slideNext()}>
                        <ArrowLink className="fill-gray opacity-50 hover:fill-white hover:opacity-100 cursor-pointer bg-dark transition-transform hover:scale-110" />
                    </button>
                </div>
            </Card>
        </Wrapper>
    )
}

export default ReviewsCarousel
