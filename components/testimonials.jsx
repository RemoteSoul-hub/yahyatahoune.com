import React from 'react'

import { Pagination, Navigation, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';



const testimonials = () => {

    const data = [
        {
            id: 1,
            reviewer: `Claire`,
            avatar: '/fr.png',
            review: "Prestataire que je recommande fortement. C'est la deuxième fois que je lui demande d'effectuer des changements sur mon site professionnel. Je suis autant satisfaite que la première fois : dès qu'une de mes demandes pose souci, Yahya me prévient et me propose des solutions adaptées.",
        },
        {
            id: 2,
            reviewer: `Amadou`,
            avatar: '/ca.png',
            review: 'Très bon service, bonne communication et magnifique travail réalisé dans les temps. Très satisfait, recommande à 100%',
        },
        {
            id: 3,
            reviewer: `Knectiv`,
            avatar: '/us.png',
            review: 'Yahya was very responsive to every request I made and always implemented the modifications I asked for in a fast manner. I can recommend him to anyone looking for help with Squarespace.',
        },
        {
            id: 4,
            reviewer: `Emily`,
            avatar: '/ge.png',
            review: "Yahya did a really smashing job, super quick with communication and did exactly the tasks I needed. My website looks great now, and it's a huge relief that Yahya was able to migrate dozens of my articles from around the internet to a central hosting point on my page. Would gladly hire again!",
        },
         {
            id: 5,
            reviewer: `Moordays`,
            avatar: '/uk.png',
            review: "I am very pleased with the communication and work that has been done. Working with Yahya is easy, he is very creative and supportive. I will be continuing to work with him on my project.",
        },
         {
            id: 6,
            reviewer: `Jay`,
            avatar: '/an.png',
            review: "A professional and efficient seller, who works really quickly and is responsive to revisions. I have worked with them twice as I was quite happy with the work they did for me.",
        },
         {
            id: 7,
            reviewer: `Nelen`,
            avatar: '/nigeria.png',
            review: "This developer delivered beyond my expectations. Communication was excellent and he remained kind in his response to my many questions, requests and feedback. Made what I anticipated would be a difficult project so much easier. Highly recommend and looking forward to working with him again soon.",
        },
    ];

    return (
        <div className='max-w-7xl mx-auto px-6 ' id='testimonials'>
            <h5 className='text-center text-xl'>That's what they said</h5>
           <h2 className='text-center text-4xl'>Testimonials</h2>
           <Swiper className='testimonials__container mx-auto mt-6 lg:space-y-12 space-y-6 ' // install Swiper modules
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={40}
      slidesPerView={1}
      autoHeight={true}
      autoplay={{ delay: 5000}}
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
