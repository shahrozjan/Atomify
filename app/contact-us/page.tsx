import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const contactSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z
      .string()
      .email("Invalid email address")
      .optional()
      .or(z.literal("").transform(() => undefined)),
    phone: z.string().nonempty("Phone number is required"),
    companyName: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters"),
  })
  .refine(
    (data) => data.companyName || data.phone || data.email,
    "At least one of Company Name, Phone, or Email is required"
  );

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactForm) => {
    console.log("Form submitted:", data);
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <div className="flex justify-center items-center bg-blue-500 h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h1 className="text-xl font-bold mb-4">Contact Us</h1>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            {...register("name")}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-gray-700">Phone</label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <PhoneInput
                {...field}
                country={"us"}
                placeholder="Enter phone number"
                enableSearch
                inputClass="w-full px-4 py-2 border rounded"
              />
            )}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Company Name */}
        <div className="mb-4">
          <label className="block text-gray-700">Company Name</label>
          <input
            type="text"
            {...register("companyName")}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.companyName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.companyName.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            {...register("message")}
            rows={4}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>

        {errors.root && (
          <p className="text-red-500 text-sm mt-4">{errors.root.message}</p>
        )}
      </form>
    </div>
  );
}
