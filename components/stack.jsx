import React, { useState } from 'react'
import Image from 'next/image'
import {BsPatchCheckFill} from 'react-icons/bs'

const stack = () => {

    const [avatarClicked, setAvatarClicked] = useState(false);
    return (
        <div className='stack max-w-7xl mx-auto px-6' id='stack'>
            <h5 className='text-center text-xl'>
             Welcome to my world
            </h5>
            <h2 className='text-center text-4xl'>Toolkit</h2>
            <div className=''>
            <div className=' container__stack grid justify-items-center grid-cols-1 md:grid-cols-2 py-12 gap-8 mx-auto'>
                <div className="stack__front">
                    <h3 className='text-2xl text-center font-semibold'>Website Building</h3>
                    <div className="experience__content space-y-5 mt-5">
                        <article className="experience__details space-y-1 flex flex-row items-center gap-5">
                            <BsPatchCheckFill />
                            <h4>HTML - CSS</h4>
                        </article>
                        <article className="experience__details space-y-1 flex flex-row items-center gap-5">
                            <BsPatchCheckFill />
                            <h4>Sass - Tailwind</h4>
                        </article>
                        <article className="experience__details space-y-1 flex flex-row items-center gap-5">
                            <BsPatchCheckFill />
                            <h4>ReactJS - NextJS</h4>
                        </article>
                        <article className="experience__details space-y-1 flex flex-row items-center gap-5">
                            <BsPatchCheckFill />
                            <h4>NodeJS - Express</h4>
                        </article>
                        <article className="experience__details space-y-1 flex flex-row items-center gap-5">
                            <BsPatchCheckFill />
                            <h4>Wordpress - Squarespace</h4>
                        </article>
                    </div>
                </div>
                <div className="stack__back ">
                <h3 className='text-2xl font-semibold'>Pre & Post Building</h3>
                    <div className="experience__content space-y-5 mt-5">
                        <article className="experience__details space-y-1 flex flex-row items-center gap-5">
                            <BsPatchCheckFill />
                            <h4>Linux (Ubuntu, CentOS)</h4>
                        </article>
                        <article className="experience__details space-y-1 flex flex-row items-center gap-5">
                            <BsPatchCheckFill />
                            <h4>MySQL / MS SQL / MongoDB</h4>
                        </article>
                        <article className="experience__details space-y-1 flex flex-row items-center gap-5">
                            <BsPatchCheckFill />
                            <h4>Docker / PM2</h4>
                        </article>
                        <article className="experience__details space-y-1 flex flex-row items-center gap-5">
                            <BsPatchCheckFill />
                            <h4>SEO Optimization</h4>
                        </article>
                        <article className="experience__details space-y-1 flex flex-row items-center gap-5">
                            <BsPatchCheckFill />
                            <h4>Photoshop / Premiere</h4>
                        </article>
                    </div>
                </div>
            </div>
            <div className='space-y-6 lg:space-y-10'>
            <h2 className='text-center text-4xl'>A little about me</h2>
            <div className='flex flex-col-reverse lg:flex-row justify-center space-x-0 lg:space-x-10 gap-5 items-center'>
                <div className='avatar__container '>
                <img src='/avatar.png' alt='Avatar Pixelart' width='150px' height='150px' className={avatarClicked ? 'block' : 'hidden'} onClick={() => setAvatarClicked(!avatarClicked)} />
                    <img src='/avatar-clicked.png' alt='Avatar Pixelart' width='150px' height='150px' className={avatarClicked ? 'hidden' : 'block'} onClick={() => setAvatarClicked(!avatarClicked)} />
                </div>
                <div className='introduction_container  w-4/6 text-center lg:text-left'>
                    Hello, my name's <span className='font-semibold text-theme-border'>Yahya</span>. I'm a <span className='font-semibold text-theme-border'>Full-Stack Developer</span> specializing in building and designing unique and efficient web experiences. <br/>
                    From big companies to small businesses, I can <span className='font-semibold text-theme-border'>help you</span> get to the next level in your IT endeavors. <br/>
                    Feel free to reach out so I can share more of my work! <span className='italic inline'></span><br/>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default stack
