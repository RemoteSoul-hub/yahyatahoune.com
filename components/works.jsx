import React from 'react'
import {FaGithubAlt} from 'react-icons/fa';
import {CgScreen} from 'react-icons/cg';

const works = () => {

    const data = [
        {
            id: 1,
            image: `/pj-realestate.png`,
            title: 'Realtor',
            description: "Realtor is a Real Estate web application that employs NextJS' SSR, ChakraUI, an external API for data, and an advanced filtering feature.",
            github: 'https://github.com/RemoteSoul-hub/real-estate-app',
            demo: 'https://real-estate-app-iota.vercel.app/',
        },
        {
            id: 2,
            image: '/pj-hulu.png',
            title: 'Hulu 2.0',
            description: "A pretty straightforward web app that imitates the streaming library : Hulu.",
            github: 'https://github.com/RemoteSoul-hub/hulu-2',
            demo: 'https://hulu-2-blond.vercel.app/',
        },
        {
            id: 3,
            image: '/portfolio1.jpeg',
            title: 'This is a portfolio item title 3 ',
            description: 'Hi',
            github: 'https://github.com',
            demo: 'https://github.com',
        },
        {
            id: 4,
            image: '/portfolio1.jpeg',
            title: 'This is a portfolio item title 4',
            description: 'Hi',
            github: 'https://github.com',
            demo: 'https://github.com',
        }
    ];

    return (
        <section className='max-w-7xl mx-auto px-6 mt-2' id='works'>
           <h5 className='text-center text-xl'>My library of projects</h5>
           <h2 className='text-center text-4xl'>Works</h2>
           <div className='portfolio__container grid grid-cols-1 md:grid-cols-2 gap-12 mt-12'>

            {
                data.map(({id, image, title, description, github, demo}) => {
                    return (
                        <article key={id} className='portfolio__item space-y-6'>
                        <div className='portfolio__item-image'>
                         <img src={image} alt={title} />
                        </div>
                        <h3 className='text-center text-xl font-medium group-hover:text-theme-cyan'>{title}</h3>
                        <p className='text-center'>{description}</p>
                        <div className='flex flex-row justify-center space-x-5 items-center'>
                        <a href={github} className='btn rounded-full border-2 p-3' target='_blank'><FaGithubAlt size={24}/></a>
                        <a href={demo} className='btn btn-primary rounded-full border-2 p-3' target='_blank'><CgScreen size={24}/></a>
                        </div>
                    </article>
                    )
                })
            }               
             
               
           </div>
        </section>
    )
}

export default works
