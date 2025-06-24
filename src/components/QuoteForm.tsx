// src/components/QuoteForm.tsx
"use client";

import { memo, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";

interface QuoteFormData {
  eventDate: string;
  eventTime: string;
  eventLocation: string;
  additionalNotes: string;
}

const QuoteForm = memo(() => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<QuoteFormData>();
  const [success, setSuccess] = useState(false);

  const onSubmit: SubmitHandler<QuoteFormData> = (data) => {
    console.log("Form submitted with data:", data); // Debug output
    setSuccess(true);
    reset(); // Clear form fields
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // Explicitly prevent default form submission
        handleSubmit(onSubmit)(e); // Manually trigger the handler
        console.log("Form submission prevented, calling handler"); // Debug step
      }}
      className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
    >
      {success && (
        <div className="text-green-600 dark:text-green-400 text-center mb-4">
          Quote request submitted successfully!
        </div>
      )}
      <div>
        <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Event Date
        </label>
        <Input
          id="eventDate"
          type="date"
          {...register("eventDate", { required: "Event date is required" })}
          className="mt-1 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          aria-invalid={errors.eventDate ? "true" : "false"}
        />
        {errors.eventDate && <p className="text-red-600 dark:text-red-400 text-sm">{errors.eventDate.message}</p>}
      </div>
      <div>
        <label htmlFor="eventTime" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Event Time
        </label>
        <Input
          id="eventTime"
          type="time"
          {...register("eventTime", { required: "Event time is required" })}
          className="mt-1 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          aria-invalid={errors.eventTime ? "true" : "false"}
        />
        {errors.eventTime && <p className="text-red-600 dark:text-red-400 text-sm">{errors.eventTime.message}</p>}
      </div>
      <div>
        <label htmlFor="eventLocation" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Event Location
        </label>
        <Input
          id="eventLocation"
          type="text"
          {...register("eventLocation", { required: "Event location is required" })}
          className="mt-1 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          aria-invalid={errors.eventLocation ? "true" : "false"}
        />
        {errors.eventLocation && <p className="text-red-600 dark:text-red-400 text-sm">{errors.eventLocation.message}</p>}
      </div>
      <div>
        <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Additional Notes
        </label>
        <textarea
          id="additionalNotes"
          {...register("additionalNotes")}
          className="mt-1 w-full h-24 p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-2 rounded-md"
        onClick={(e) => {
          e.stopPropagation(); // Prevent event bubbling
          console.log("Button clicked"); // Debug click
        }}
      >
        Submit Request
      </button>
    </form>
  );
});

QuoteForm.displayName = "QuoteForm";

export { QuoteForm };