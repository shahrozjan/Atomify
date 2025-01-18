import Header from '../components/header'

export default function About() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl">Learn more about our company and mission.</p>
      </main>
    </>
  )
}

