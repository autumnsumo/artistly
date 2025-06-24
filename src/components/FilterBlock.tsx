// src/components/FilterBlock.tsx
"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FilterBlockProps {
  filter: { category: string };
  setFilter: (filter: { category: string }) => void;
}

export default function FilterBlock({ filter, setFilter }: FilterBlockProps) {
  return (
    <div className="mb-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Filter by Category
      </label>
      <Select
        onValueChange={(value) => setFilter({ category: value })}
        defaultValue={filter.category}
      >
        <SelectTrigger className="mt-1 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent className="bg-white dark:bg-gray-800">
          <SelectItem value="all" className="text-gray-900 dark:text-gray-100">
            All
          </SelectItem>
          <SelectItem value="Singer" className="text-gray-900 dark:text-gray-100">
            Singer
          </SelectItem>
          <SelectItem value="Dancer" className="text-gray-900 dark:text-gray-100">
            Dancer
          </SelectItem>
          <SelectItem value="Speaker" className="text-gray-900 dark:text-gray-100">
            Speaker
          </SelectItem>
          <SelectItem value="Musician" className="text-gray-900 dark:text-gray-100">
            Musician
          </SelectItem>
          <SelectItem value="Actor" className="text-gray-900 dark:text-gray-100">
            Actor
          </SelectItem>
          <SelectItem value="Comedian" className="text-gray-900 dark:text-gray-100">
            Comedian
          </SelectItem>
          <SelectItem value="Magician" className="text-gray-900 dark:text-gray-100">
            Magician
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}