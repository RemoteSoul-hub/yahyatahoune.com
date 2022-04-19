import Head from 'next/head'
import Header from '../components/header'
import Hero from '../components/hero'
import Stack from '../components/stack'
import Works from '../components/works'
import Contact from '../components/contact'
import Social from '../components/social'
import Email from '../components/email'
import Testimonials from '../components/testimonials'
import ScrollButton from '../components/scrollButton'

export default function Home() {
  return (
    <div className=" space-y-12 font-chakra">
      <Head>
        <title>Yahya Tahoune™</title>
        <meta name="description" content="Hello, my name's Yahya. I'm a Full-Stack Developer specializing in building and designing unique and efficient web experiences.
From big companies to small businesses, I can help you get to the next level in your IT endeavors.
Feel free to reach out so I can share more of my work!" />
        <meta property="og:title" content="Yahya Tahoune™" />
        <meta property="og:description" content="Hello, my name's Yahya. I'm a Full-Stack Developer specializing in building and designing unique and efficient web experiences.
From big companies to small businesses, I can help you get to the next level in your IT endeavors.
Feel free to reach out so I can share more of my work"/>
        <meta property="og:url" content="https://yahyatahoune.com"/>
        <meta property="og:type" content="website"/>
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
<meta name="msapplication-TileColor" content="#da532c"/>
<meta name="theme-color" content="#ffffff"/>
      </Head>
      <Header />
      <Social />
      <Email />
      <Hero />
      <Stack />
      <Works />
      <Testimonials />
      <Contact />
      <ScrollButton />
    </div>
  )
}
