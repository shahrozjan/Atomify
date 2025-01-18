'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { submitForm } from '../actions/submit-form'

export default function ContactForm() {
  const [isPending, setIsPending] = useState(false)
  const { toast } = useToast()

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsPending(true)
    const formData = new FormData(event.currentTarget)
    const response = await submitForm(formData)
    setIsPending(false)

    if (response.success) {
      toast({
        title: "Form submitted",
        description: "We'll get back to you soon!",
      })
      event.currentTarget.reset()
    } else {
      toast({
        title: "Error",
        description: "There was a problem submitting your form. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Contact Us</h2>
        <form onSubmit={onSubmit} className="max-w-md mx-auto space-y-4">
          <Input name="name" placeholder="Your Name" required />
          <Input name="email" type="email" placeholder="Your Email" required />
          <Textarea name="message" placeholder="Your Message" required />
          <Button type="submit" disabled={isPending}>
            {isPending ? 'Submitting...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </section>
  )
}

