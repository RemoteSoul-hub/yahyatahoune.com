import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Popover className="font-chakra bg-bg-blue text-white fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Logo</span>
              <p className='text-lg font-medium'>Yahya Tahoune.</p>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-[#091a46] rounded-2xl p-2 inline-flex items-center justify-center text-theme-cyan transition-all hover:bg-theme-blue hover:text-theme-border  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-theme-border">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <Popover.Group as="nav" className="hidden md:flex space-x-5 2xl:space-x-10">
          
          <div className="text-base font-medium transition-all text-white text-center cursor-pointer">
          <span className='text-theme-border'>01.</span><Link activeClass="active text-white"
                    to="stack"
                    spy={true}
                    smooth='{true}'
                    hashSpy={true}
                    offset={0}
                    duration={500}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    spyThrottle={500}
                > Toolkit</Link>
            </div>

            <div className="text-base font-medium transition-all text-white text-center cursor-pointer">
          <span className='text-theme-border'>02.</span><Link activeClass="active text-white"
                    to="works"
                    spy={true}
                    smooth='{true}'
                    hashSpy={true}
                    offset={0}
                    duration={500}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    spyThrottle={500}
                > Projects</Link>
            </div>
            <div className="text-base font-medium transition-all text-white text-center cursor-pointer">
          <span className='text-theme-border '>03.</span><Link activeClass="active text-white"
                    to="testimonials"
                    spy={true}
                    smooth='{true}'
                    hashSpy={true}
                    offset={0}
                    duration={500}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    spyThrottle={500}
                > Testimonials</Link>
            </div>

          </Popover.Group>
            <Link
              to="contact"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium transition-all text-theme-blue bg-theme-border hover:bg-theme-blue hover:text-white cursor-pointer "
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className=" z-50 fixed top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-bg-blue-2 divide-y-2 divide-theme-cyan">
            <div className="pt-5 px-5">
              <div className="flex items-center justify-between">
                <div>
                <p className='text-lg font-medium'>Yahya Tahoune.</p>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-[#091a46] rounded-2xl p-2 inline-flex items-center justify-center text-theme-cyan transition-all hover:bg-theme-blue hover:text-theme-border  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-theme-border">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                 
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">

              <Link activeClass="active text-white"
                    to="stack"
                    spy={true}
                    smooth='{true}'
                    hashSpy={true}
                    offset={0}
                    duration={500}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    spyThrottle={500}
                    className='cursor-pointer'
                > Toolkit</Link>

<Link activeClass="active text-white"
                    to="works"
                    spy={true}
                    smooth='{true}'
                    hashSpy={true}
                    offset={0}
                    duration={500}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    spyThrottle={500}
                    className='cursor-pointer'
                > Projects</Link>

<Link activeClass="active text-white"
                    to="testimonials"
                    spy={true}
                    smooth='{true}'
                    hashSpy={true}
                    offset={0}
                    duration={500}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    spyThrottle={500}
                    className='cursor-pointer'
                > Testimonials</Link>
                
              </div>
              <div>
                <Link
                  to="contact"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium transition-all text-theme-blue bg-theme-border hover:bg-theme-blue hover:text-white cursor-pointer"
                >
                  Contact
                </Link>
                <p className="mt-6 text-center text-base font-medium text-theme-border">
                  Find me on:{' '} <br/>
                  <div className='flex flex-row justify-evenly items-center pt-4'>
                  <div className='bg-bg-blue w-10 rounded-2xl p-2 cursor-pointer'>
                  <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='#f9f9f9' viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </div>
                  <div className='bg-bg-blue w-10 rounded-2xl p-2 cursor-pointer'>
                  <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='#f9f9f9' viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </div>
                  <div className='bg-bg-blue w-10 rounded-2xl p-2 cursor-pointer'>
                  <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='#f9f9f9' viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                  </div>
                  <div className='bg-bg-blue w-10 rounded-2xl p-2 cursor-pointer'>
                  <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='#f9f9f9' viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </div>
                  <div className='bg-bg-blue w-10 rounded-2xl p-2 cursor-pointer'>
                  <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='#f9f9f9' viewBox="0 0 24 24"><path d="M22.814 9.031h-1.95c-1 0-1.185-.764-1.185-1.707.001-4.045-3.272-7.324-7.308-7.324h-5.062c-4.037 0-7.309 3.279-7.309 7.324v9.352c0 4.045 3.272 7.324 7.309 7.324h9.383c4.036 0 7.308-3.279 7.308-7.324v-6.457c0-.657-.531-1.188-1.186-1.188zm-15.428-3.031h4.229c.765 0 1.385.671 1.385 1.5s-.62 1.5-1.386 1.5h-4.228c-.766 0-1.386-.671-1.386-1.5s.62-1.5 1.386-1.5zm9.134 12h-9.04c-.817 0-1.48-.672-1.48-1.5 0-.83.663-1.5 1.48-1.5h9.039c.817 0 1.48.67 1.48 1.5.001.828-.662 1.5-1.479 1.5z"/></svg>
                  </div>
                  </div>
                  <p className='mt-4'><a href='mailto:yahya.tahoune@gmail.com' alt=''>yahya.tahoune@gmail.com</a></p>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}