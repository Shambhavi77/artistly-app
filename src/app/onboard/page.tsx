// ✅ src/app/onboard/page.tsx
"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  categories: yup.array().min(1, "Select at least one category"),
  languages: yup.array().min(1, "Select at least one language"),
  priceRange: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required")
});

const categoryOptions = ["Singer", "Dancer", "DJ", "Speaker"];
const languageOptions = ["Hindi", "English", "Punjabi", "Tamil", "Telugu"];
const priceOptions = ["₹5k - ₹15k", "₹10k - ₹25k", "₹25k - ₹50k"];

export default function OnboardPage() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      bio: "",
      categories: [],
      languages: [],
      priceRange: "",
      location: ""
    }
  });

  const onSubmit = (data: any) => {
    console.log("Form Submitted:", data);
    alert("Artist Submitted Successfully!");
    reset();
    setImagePreview(null);
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-6 py-10">
      <h1 className="text-4xl font-bold mb-10 text-center text-pink-500">Artist Onboarding Form</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto space-y-6 bg-white/5 backdrop-blur-md shadow-xl rounded-xl p-8"
      >
        <div>
          <label className="block mb-2 font-medium text-sm text-gray-300">Name *</label>
          <input
            {...register("name")}
            className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <p className="text-red-400 text-sm mt-1">{errors.name?.message}</p>
        </div>

        <div>
          <label className="block mb-2 font-medium text-sm text-gray-300">Bio *</label>
          <textarea
            {...register("bio")}
            rows={4}
            className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>
          <p className="text-red-400 text-sm mt-1">{errors.bio?.message}</p>
        </div>

        <div>
          <label className="block mb-2 font-medium text-sm text-gray-300">Category *</label>
          <div className="flex flex-wrap gap-4">
            {categoryOptions.map((cat) => (
              <label key={cat} className="flex items-center gap-2 text-sm text-gray-200">
                <input
                  type="checkbox"
                  value={cat}
                  {...register("categories")}
                  className="accent-pink-600 w-4 h-4 rounded focus:ring-2 focus:ring-pink-500"
                />
                {cat}
              </label>
            ))}
          </div>
          <p className="text-red-400 text-sm mt-1">{errors.categories?.message}</p>
        </div>

        <div>
          <label className="block mb-2 font-medium text-sm text-gray-300">Languages Spoken *</label>
          <div className="flex flex-wrap gap-4">
            {languageOptions.map((lang) => (
              <label key={lang} className="flex items-center gap-2 text-sm text-gray-200">
                <input
                  type="checkbox"
                  value={lang}
                  {...register("languages")}
                  className="accent-pink-600 w-4 h-4 rounded focus:ring-2 focus:ring-pink-500"
                />
                {lang}
              </label>
            ))}
          </div>
          <p className="text-red-400 text-sm mt-1">{errors.languages?.message}</p>
        </div>

        <div>
          <label className="block mb-2 font-medium text-sm text-gray-300">Fee Range *</label>
          <select
            {...register("priceRange")}
            className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="">Select a price range</option>
            {priceOptions.map((price) => (
              <option key={price} value={price}>{price}</option>
            ))}
          </select>
          <p className="text-red-400 text-sm mt-1">{errors.priceRange?.message}</p>
        </div>

        <div>
          <label className="block mb-2 font-medium text-sm text-gray-300">Location *</label>
          <input
            {...register("location")}
            className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <p className="text-red-400 text-sm mt-1">{errors.location?.message}</p>
        </div>

        <div>
          <label className="block mb-2 font-medium text-sm text-gray-300">Profile Image (optional)</label>
          <input type="file" accept="image/*" onChange={handleImageChange} className="text-white" />
          {imagePreview && (
            <img src={imagePreview} alt="Preview" className="mt-4 rounded w-40 h-40 object-cover" />
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-pink-600 hover:bg-pink-700 hover:scale-105 transition-transform duration-200 text-white p-3 rounded text-lg font-semibold"
        >
          Submit Artist
        </button>
      </form>
    </main>
  );
}
