import Header from '../components/header'

export default function Blog() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
        <p className="text-xl">Stay updated with the latest digital marketing trends.</p>
      </main>
    </>
  )
}

