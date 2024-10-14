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
            image: '/pj-ecommerce.png',
            title: 'Digital Products - E-commerce Headless Shopify NextJS',
            description: 'A functional e-commerce website that sells digital products. It uses NextJS and GraphQL to pull data from the shopify store and TailwindCSS for styling.',
            github: 'https://github.com/RemoteSoul-hub/ecommerce-shopify-api',
            demo: 'https://ecommerce-shopify-api.vercel.app/',
        },
        {
            id: 4,
            image: '/portfolio1.jpeg',
            title: 'MonoPixels Agency',
            description: 'One of the more recent projects I have worked on. Experimented with new smoother animations and more libraries with this one.',
            github: '#private',
            demo: 'https://monopixels.com',
        },
        {
            id: 5,
            image: '/portfolio1.jpeg',
            title: 'WBS Agency',
            description: 'This is the v2 for a website I have developed for the Startup : WBS',
            demo: 'https://webreathesocial.com',
        },
        {
            id: 6,
            image: '/portfolio1.jpeg',
            title: 'ChluxTours',
            description: 'A France based lux car rental website.',
            github: '#private',
            demo: 'https://chluxtours.fr/en',
        },
        {
            id: 7,
            image: '/pj-archer.png',
            title: 'Archer Monaco - Real Life Project',
            description: 'For a website advertising / listing campaigns that are based in Monaco',
            github: '#private',
            demo: 'https://corporate.archer-monaco.com/',
        },
        {
            id: 8,
            image: '/pj-inducaf.png',
            title: 'Inducaf - Real Life Project',
            description: "Collaborated to make this website come to life for Morocco's most popular tea provider",
            github: '#private',
            demo: 'https://inducaf.ma/',
        },
        {
            id: 9,
            image: '/portfolio1.jpeg',
            title: 'Sealy',
            description: "This is Sealy's moroccan edition of the official website.",
            demo: 'https://sealy.ma',
        },
        {
            id: 10,
            image: '/portfolio1.jpeg',
            title: 'Innerscene USA',
            description: "It was a team project & team effort with the main team of InnerScene.",
            demo: 'https://www.innerscene.com',
        },
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
                         <img src={image} alt={title} className='object-cover h-96' />
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
