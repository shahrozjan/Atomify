"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Define the Zod schema for form validation
const contactSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z
      .string()
      .email("Invalid email address")
      .optional()
      .or(z.literal("").transform(() => undefined)),
    phone: z.string().nonempty("Phone number is required"),
    companyName: z.string().nonempty("Company Name is required"),
    message: z.string().min(10, "Message must be at least 10 characters"),
  })
  .refine(
    (data) => data.phone || data.email,
    "At least one of Company Name, Phone, or Email is required"
  );

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactForm) => {
    // Format the subject and body as specified
    const subject = `${data.name} - ${data.companyName}`;
    const body = `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nCompany Name: ${data.companyName}\nMessage: ${data.message}`;
    const mailtoLink = `mailto:shahrozjan67@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 flex flex-col items-center justify-center px-2 pt-4">
      <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name*
            </label>
            <input
              {...register("name")}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-2"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email*
            </label>
            <input
              type="email"
              {...register("email")}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-2"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone*
            </label>
            <input
              type="tel"
              {...register("phone")}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-2"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Name*
            </label>
            <input
              {...register("companyName")}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-2"
            />
            {errors.companyName && (
              <p className="text-red-500 text-sm">
                {errors.companyName.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              {...register("message")}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-2"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
