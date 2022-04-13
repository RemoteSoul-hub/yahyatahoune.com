import React, { useState } from 'react'
import { ArrowUpIcon } from '@heroicons/react/outline';

const ScrollButton = () => {

    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        }
        else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
      
    };

 

    return (
        <button>
            <ArrowUpIcon className={`fixed bg-white rounded-sm p-2 right-4 bottom-6 h-10 text-5xl z-10 cursor-pointer text-black animate-pulse  ${visible == true ? 'inline' : 'hidden'}`} aria-hidden="true" onClick={scrollToTop} />
        </button>
    )
}

export default ScrollButton
