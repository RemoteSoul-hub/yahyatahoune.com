import React from 'react'
import {useState} from 'react'
import Image from 'next/image'
import emailjs from "emailjs-com";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from "react-loader-spinner";


const contact = () => {

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    const [failed, setFailed] = useState(false);

    const submitForm = async (e) => {
        e.preventDefault()
        emailjs.sendForm('service_fv253jg', 'template_9y0igog', e.target, "user_iDYZWbLVwz6q0inam")
        .then(res=>{
          console.log(res);
        }).catch(err => console.log(err));
        setSubmitted(true)
        const res = await fetch('/api/submit-form', {
          method: 'POST',
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
          // body: JSON.stringify(Email.value),
          body: JSON.stringify({ Name, Email, Message }),
        });
        setName('')
        setEmail('')
        setMessage('')
        setTimeout(() => {
          if (res.status === 201) {
            setSubmitted(false);
            setConfirmed(true); 
          } else {
            setSubmitted(false);
            setFailed(true);
          }
        }, 800);
        setTimeout(() => {
            setFailed(false);
            setConfirmed(false);
        }, 4000);
      }

    
    return (
      <div className='max-w-7xl mx-auto text-center'>
        <section className='contact max-w-7xl mx-auto px-6 py-0 lg:py-6' id='contact'>
            <h5 className='text-xl text-center '>Get In Touch</h5>
            <h2 className='text-center text-4xl mb-12'>Let's talk</h2>
            <div className='contact__container mt-20 flex flex-row justify-center items-center'>
                <div className="mx-auto" >
                    {/* <div className='w-1/3'>
                        <img src='/contact.gif' alt='gif' className='border-theme-cyan border-2' />
                    </div> */}
                <div className={submitted ? 'flex flex-col text-center py-6 w-full mx-auto justify-center items-center opacity-100 transition-all duration-300 ease-in' : 'hidden opacity-0 transition-all'}>
              {/* <Loader
                type="ThreeDots"
                color="#c79539"
                height={100}
                width={100}
                visible={submitted}
                /> */}
                <p className='font-thin text-3xl animate-pulse'>Sending...</p>
                </div>
                <div className={confirmed ? 'h-auto flex flex-col justify-between items-center space-y-6 opacity-100 transition-all mx-auto alert-frame' : 'hidden transition-all opacity-0'}>
           
            <Image src='/success.png' alt='' width={50} height={50}/>
            <h4 className='section-subtitle mt-5 text-center uppercase font-bold  max-w-md'>Yay! <br/> Your inquiry has been sent successfully!</h4>
              <p className='section-p max-w-md'>I will get back to you as soon as possible! </p>
            </div>
            <div className={failed ? 'h-auto flex flex-col justify-between items-center space-y-6 opacity-100 transition-all mx-auto alert-frame' : 'hidden transition-all opacity-0'}>
          
            <Image src='/error.png' alt='' width={50} height={50}/>
            <h4 className='section-subtitle mt-5 text-center font-bold uppercase max-w-md'>Uh-oh! There seems to be a nasty bug preventing the sending process from completing.</h4>
              <p className='section-p max-w-md'>Feel free to contact me through social media or try again later!</p>
            </div>
            <div className='mx-auto py-4'>
            <div className={submitted ? 'hidden' : 'block'}>
                <div className={confirmed ? 'hidden' : 'block'}>
                <div className={failed ? 'hidden' : 'block'}>
                <form method="POST" autoComplete="off" onSubmit={submitForm} className='flex flex-col py-6  w-full mx-auto justify-center items-start opacity-100 transition-all duration-300 ease-in'>
                <input
              name="Name"
              id="Name"
              type="text"
              pattern=".{1,}"
              required
              title=""
              placeholder="Name"
              className='inputs'
              value={Name}
              autoFocus
              onChange={(e) => setName(e.target.value)}
            />
                <input
              name="Email"
              id="Email"
              type="email"
              pattern=".{1,}"
              required
              className='inputs'
              title=""
              placeholder="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
                <textarea
              name="Message"
              id="Message"
              className='inputs-message my-auto mx-auto'
              rows="2"
              type="text"
              required
              placeholder="Briefly describe your project"
              value={Message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className='btn-color btn-submit'> 
                <span className='btn-text text-right'>Send {'>'}  </span>
            </button>
                    </form>
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        </section>
        <hr className='mx-auto w-20 mt-4'/>
        <p className='mt-3'>© 2022 Yahya Tahoune</p>
        </div>
    )
}

export default contact
