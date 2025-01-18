import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="w-full py-6 bg-white dark:bg-gray-800">
      <div className="container px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          DigitalBoost
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
        <Button>Get Started</Button>
      </div>
    </header>
  )
}

