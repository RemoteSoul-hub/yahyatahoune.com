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
        <title>Testing Website</title>
        <link rel="icon" href="/favicon.ico" />
  <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
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
