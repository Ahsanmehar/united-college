// src/pages/BlogPage/BlogTable/index.jsx

"use client";

import * as React from "react";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import blogDetailData from "../../BlogDetailPage/BlogDetailData";
import { columns } from "./columns";
import { SkeletonBlogCard } from "./SkeletonBlogCard";

export function BlogDataTable({ searchValue }) {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // Convert blogDetailData object to array and provide intro fallback
  React.useEffect(() => {
    const arr = Object.values(blogDetailData || {});
    const formattedData = arr
      .map((post) => ({
        ...post,
        intro:
          post.intro ??
          (Array.isArray(post.content)
            ? post.content.find((c) => c.type === "paragraph")?.text ?? ""
            : ""),
      }))
      .sort((a, b) => (a.id ?? 0) - (b.id ?? 0));

    setData(formattedData);
    setLoading(false);
  }, []);

  const filteredData = React.useMemo(() => {
    if (!searchValue.trim()) return data;

    const searchTerm = searchValue.toLowerCase().trim();
    return data.filter((post) =>
      post.title?.toLowerCase().includes(searchTerm)
    );
  }, [data, searchValue]);

  const savedPageIndex = React.useMemo(() => {
    try {
      const saved = localStorage.getItem("blogCurrentPage");
      return saved ? parseInt(saved) : 0;
    } catch {
      return 0;
    }
  }, []);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: savedPageIndex,
        pageSize: 9,
      },
    },
  });

  const currentPageIndex = table.getState().pagination.pageIndex;

  React.useEffect(() => {
    localStorage.setItem("blogCurrentPage", currentPageIndex.toString());
  }, [currentPageIndex]);

  return (
    <div className="w-full">
      {searchValue && (
        <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-blue-800">
            {filteredData.length === 0
              ? `No results found for "${searchValue}"`
              : `Found ${filteredData.length} result${
                  filteredData.length === 1 ? "" : "s"
                } for "${searchValue}"`}
          </p>
        </div>
      )}

      {/* Blog Cards Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <SkeletonBlogCard key={i} />
            ))
          : table.getRowModel().rows.map((row) => (
              <div
                key={row.id}
                className="bg-white rounded-xl overflow-hidden hover:shadow-lg shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-500 ease-out border border-primary/10 group"
              >
                {/* Image */}
                {flexRender(
                  row
                    .getVisibleCells()
                    .find((cell) => cell.column.id === "image")?.column
                    .columnDef.cell,
                  row
                    .getVisibleCells()
                    .find((cell) => cell.column.id === "image")
                    ?.getContext()
                )}

                <div className="p-4">
                  {/* Category */}
                  <div className="mb-2">
                    {flexRender(
                      row
                        .getVisibleCells()
                        .find((cell) => cell.column.id === "category")?.column
                        .columnDef.cell,
                      row
                        .getVisibleCells()
                        .find((cell) => cell.column.id === "category")
                        ?.getContext()
                    )}
                  </div>

                  {/* Title */}
                  <div className="mb-2">
                    {flexRender(
                      row
                        .getVisibleCells()
                        .find((cell) => cell.column.id === "title")?.column
                        .columnDef.cell,
                      row
                        .getVisibleCells()
                        .find((cell) => cell.column.id === "title")
                        ?.getContext()
                    )}
                  </div>

                  {/* Author & Date */}
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-muted-foreground">
                      <Link
                        to="/"
                        className="text-secondary hover:underline font-medium"
                      >
                        {row.original.author}
                      </Link>
                      <span className="mx-2">•</span>
                      {row.original.date}
                    </p>
                  </div>

                  {/* Intro */}
                  <div className="border-t border-primary/10 pt-2">
                    {flexRender(
                      row
                        .getVisibleCells()
                        .find((cell) => cell.column.id === "intro")?.column
                        .columnDef.cell,
                      row
                        .getVisibleCells()
                        .find((cell) => cell.column.id === "intro")
                        ?.getContext()
                    )}
                  </div>
                </div>
              </div>
            ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between space-x-4 py-6 border-t border-secondary">
        <div className="text-gray/70 text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="lg"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="border-2 border-primary/10 hover:border-primary transition-colors hover:shadow-lg shadow-lg shadow-primary/10 hover:shadow-primary/20"
          >
            Previous
          </Button>

          <Button
            variant="secondary"
            size="lg"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="shadow-btn-hover hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/50"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
