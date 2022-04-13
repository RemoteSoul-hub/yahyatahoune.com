import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const hero = () => {
    return (
        <div className='bg-hero'>
        <div className='max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-start lg:justify-center items-center lg:items-center mt-0 lg:mt-20 min-h-fit pb-6 lg:pb-36 space-y-6 pt-12 '>
            <div className=' w-full lg:w-3/5 lg:p-24 lg:pl-0 py-0 lg:py-12 mt-6'>
                <p className='font-chakra text-base text-center lg:text-justify font-semibold lg:leading-relaxed text-theme-border'>Hi, my name is</p>
                <h1 className='font-chakra 2xl:text-6xl text-4xl py-4 text-center lg:text-justify font-semibold lg:leading-relaxed text-[#f9f9f9]'>
                Yahya Tahoune.
                </h1>
            <h1 className='font-chakra 2xl:text-3xl text-xl text-center lg:text-justify font-thin lg:leading-relaxed'>
                <span className=' font-semibold text-theme-border'>Expertise</span> and <span className=' font-medium text-theme-border italic'>complete transparency</span> for  <span className='text-theme-border font-bold'>your</span> IT needs.
            </h1>
                <Link activeClass="active"
                    to="contact"
                    spy={true}
                    smooth='{true}'
                    hashSpy={true}
                    offset={0}
                    duration={500}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    spyThrottle={500}
                    className='hidden lg:flex flex-row justify-center items-center lg:justify-start'
                >
          <button className='btn-color btn-submit-hero mx-auto'> 
                <span className='btn-text text-right'>Let's talk  </span>
            </button>
            </Link>
            </div>
            <div className='hero-img-ctn w-4/5 md:w-3/5'>
                <img src='/yahya1.png' alt='' className='' />
            </div>
            <Link activeClass="active"
                    to="contact"
                    spy={true}
                    smooth='{true}'
                    hashSpy={true}
                    offset={0}
                    duration={500}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    spyThrottle={500}
                    className='lg:hidden flex flex-row justify-center items-center lg:justify-start w-full'
                >
          <button className='btn-color btn-submit-hero mx-auto'> 
                <span className='btn-text text-right'>Let's talk  </span>
            </button>
            </Link>
        </div>
    </div>
    )
}

export default hero
 