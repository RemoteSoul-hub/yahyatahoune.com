import React from 'react'

import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles 
import 'swiper/css';
import 'swiper/css/pagination';



const testimonials = () => {

    const data = [
        {
            id: 1,
            reviewer: `Ernest Achiever`,
            avatar: '/client.jpeg',
            review: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        },
        {
            id: 2,
            reviewer: `Ernest Achiever`,
            avatar: '/client.jpeg',
            review: '"blues"',
        },
        {
            id: 3,
            reviewer: `Ernest Achiever`,
            avatar: '/client.jpeg',
            review: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        },
        {
            id: 4,
            reviewer: `Ernest Achiever`,
            avatar: '/client.jpeg',
            review: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        },
    ];

    return (
        <div className='max-w-7xl mx-auto px-6 ' id='testimonials'>
            <h5 className='text-center text-xl'>That's what they said</h5>
           <h2 className='text-center text-4xl'>Testimonials</h2>
           <Swiper className='testimonials__container mx-auto mt-6 lg:space-y-12 space-y-6 ' // install Swiper modules
      modules={[Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
               {
                   data.map(({id, avatar, reviewer, review}) => {
                       return (
                        <SwiperSlide key={id} className='testimonial'>
                        <div className='client__avatar'>
                            <img src={avatar} alt='' />
                        </div>
                        <h5 className='client__name text-center text-xl'>{reviewer}</h5>
                            <small className='client__review text-sm pb-16'>{review}</small>
                    </SwiperSlide>   
                       )
                   })
               }
           </Swiper>
        </div>
    )
}

export default testimonials
