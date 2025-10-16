import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonBlogCard() {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-primary/10 shadow-lg shadow-primary/20">
      {/* Image skeleton */}
      <Skeleton className="w-full h-40 rounded-t-lg" />

      <div className="p-4 space-y-4">
        {/* Category skeleton */}
        <Skeleton className="h-4 w-24" />

        {/* Title skeleton */}
        <Skeleton className="h-6 w-3/4" />

        {/* Author + Date */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-12" />
        </div>

        {/* Intro lines */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  );
}
