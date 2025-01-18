'use server'

import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
})

export async function submitForm(formData: FormData) {
  const validatedFields = formSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return { success: false, errors: validatedFields.error.flatten().fieldErrors }
  }

  // Here you would typically send this data to your backend or a third-party service
  // For this example, we'll just simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  return { success: true }
}

