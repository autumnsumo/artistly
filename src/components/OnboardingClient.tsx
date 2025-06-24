// src/components/OnboardingClient.tsx
"use client";

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArtistFormData } from "@/lib/types";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  category: yup.array().of(yup.string().required()).min(1, "Select at least one category").required(),
  languages: yup.array().of(yup.string().required()).min(1, "Select at least one language").required(),
  feeRange: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
  profileImage: yup.mixed<FileList>().optional(),
}) as yup.ObjectSchema<ArtistFormData>;

export default function OnboardingClient() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ArtistFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<ArtistFormData> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1 container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Onboard as an Artist
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <Input
              id="name"
              {...register("name")}
              className="mt-1 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && <p className="text-red-600 dark:text-red-400 text-sm">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Bio
            </label>
            <Input
              id="bio"
              {...register("bio")}
              className="mt-1 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              aria-invalid={errors.bio ? "true" : "false"}
            />
            {errors.bio && <p className="text-red-600 dark:text-red-400 text-sm">{errors.bio.message}</p>}
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Category
            </label>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={(value) => {
                    const updated = field.value?.includes(value)
                      ? field.value.filter((v) => v !== value)
                      : [...(field.value || []), value];
                    field.onChange(updated);
                  }}
                  value={field.value?.join(",") || ""}
                >
                  <SelectTrigger className="mt-1 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" aria-label="Select categories">
                    <SelectValue placeholder="Select categories" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800">
                    {["Singer", "Dancer", "Speaker", "Musician", "Actor", "Comedian", "Magician"].map((cat) => (
                      <div key={cat} className="flex items-center p-2">
                        <Checkbox
                          id={`category-${cat}`}
                          checked={field.value?.includes(cat)}
                          onCheckedChange={(checked) => {
                            const updated = checked
                              ? [...(field.value || []), cat]
                              : field.value.filter((v) => v !== cat);
                            field.onChange(updated);
                          }}
                          className="border-gray-300 dark:border-gray-600"
                        />
                        <label htmlFor={`category-${cat}`} className="ml-2 text-gray-900 dark:text-gray-100">
                          {cat}
                        </label>
                      </div>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.category && <p className="text-red-600 dark:text-red-400 text-sm">{errors.category.message}</p>}
          </div>
          <div>
            <label htmlFor="languages" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Languages Spoken
            </label>
            <Controller
              name="languages"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={(value) => {
                    const updated = field.value?.includes(value)
                      ? field.value.filter((v) => v !== value)
                      : [...(field.value || []), value];
                    field.onChange(updated);
                  }}
                  value={field.value?.join(",") || ""}
                >
                  <SelectTrigger className="mt-1 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" aria-label="Select languages">
                    <SelectValue placeholder="Select languages" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800">
                    {["English", "Spanish", "French", "German"].map((lang) => (
                      <div key={lang} className="flex items-center p-2">
                        <Checkbox
                          id={`language-${lang}`}
                          checked={field.value?.includes(lang)}
                          onCheckedChange={(checked) => {
                            const updated = checked
                              ? [...(field.value || []), lang]
                              : field.value.filter((v) => v !== lang);
                            field.onChange(updated);
                          }}
                          className="border-gray-300 dark:border-gray-600"
                        />
                        <label htmlFor={`language-${lang}`} className="ml-2 text-gray-900 dark:text-gray-100">
                          {lang}
                        </label>
                      </div>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.languages && <p className="text-red-600 dark:text-red-400 text-sm">{errors.languages.message}</p>}
          </div>
          <div>
            <label htmlFor="feeRange" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Fee Range
            </label>
            <Controller
              name="feeRange"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="mt-1 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" aria-label="Select fee range">
                    <SelectValue placeholder="Select fee range" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800">
                    <SelectItem value="$300 - $800">$300 - $800</SelectItem>
                    <SelectItem value="$500 - $1000">$500 - $1000</SelectItem>
                    <SelectItem value="$600 - $1200">$600 - $1200</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.feeRange && <p className="text-red-600 dark:text-red-400 text-sm">{errors.feeRange.message}</p>}
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Location
            </label>
            <Input
              id="location"
              {...register("location")}
              className="mt-1 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              aria-invalid={errors.location ? "true" : "false"}
            />
            {errors.location && <p className="text-red-600 dark:text-red-400 text-sm">{errors.location.message}</p>}
          </div>
          <div>
            <label htmlFor="profileImage" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Profile Image (Optional)
            </label>
            <Input
              id="profileImage"
              type="file"
              {...register("profileImage")}
              className="mt-1 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white"
            aria-label="Submit artist onboarding form"
          >
            Submit
          </Button>
        </form>
      </main>
      <Footer />
    </div>
  );
}