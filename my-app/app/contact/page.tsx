import Header from '../components/header'
import ContactForm from '../components/contact-form'

export default function Contact() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <ContactForm />
      </main>
    </>
  )
}

