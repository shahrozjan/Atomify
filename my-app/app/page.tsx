import { Metadata } from 'next'
import Hero from './components/hero'
import Features from './components/features'
import ContactForm from './components/contact-form'
import Header from './components/header'

export const metadata: Metadata = {
  title: 'Digital Marketing Solutions | Grow Your Business Online',
  description: 'Boost your online presence with our cutting-edge digital marketing strategies. Get a free consultation today!',
  openGraph: {
    title: 'Digital Marketing Solutions | Grow Your Business Online',
    description: 'Boost your online presence with our cutting-edge digital marketing strategies. Get a free consultation today!',
    images: [{ url: '/og-image.jpg' }],
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Hero />
        <Features />
        <ContactForm />
      </main>
    </>
  )
}

