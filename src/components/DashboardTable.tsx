// src/components/DashboardTable.tsx
"use client";

import { memo } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Artist } from "@/lib/types";

interface DashboardTableProps {
  artists: Artist[];
}

const DashboardTable = memo(({ artists }: DashboardTableProps) => {
  const router = useRouter();

  const handleView = (id: string) => {
    router.push(`/quote/${id}`);
  };

  return (
    <Table className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <TableHeader>
        <TableRow className="border-gray-200 dark:border-gray-700">
          <TableHead className="text-gray-900 dark:text-gray-100">Name</TableHead>
          <TableHead className="text-gray-900 dark:text-gray-100">Category</TableHead>
          <TableHead className="text-gray-900 dark:text-gray-100">City</TableHead>
          <TableHead className="text-gray-900 dark:text-gray-100">Fee</TableHead>
          <TableHead className="text-gray-900 dark:text-gray-100">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {artists.length === 0 ? (
          <TableRow>
            <TableCell colSpan={5} className="text-center text-gray-700 dark:text-gray-300">
              No artists found
            </TableCell>
          </TableRow>
        ) : (
          artists.map((artist) => (
            <TableRow key={artist.id} className="border-gray-200 dark:border-gray-700">
              <TableCell className="text-gray-900 dark:text-gray-100">{artist.name}</TableCell>
              <TableCell className="text-gray-900 dark:text-gray-100">{artist.category}</TableCell>
              <TableCell className="text-gray-900 dark:text-gray-100">{artist.location}</TableCell>
              <TableCell className="text-gray-900 dark:text-gray-100">{artist.priceRange}</TableCell>
              <TableCell>
                <Button
                  onClick={() => handleView(artist.id)}
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white"
                  aria-label={`View quote for ${artist.name}`}
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
});

DashboardTable.displayName = "DashboardTable";

export { DashboardTable };