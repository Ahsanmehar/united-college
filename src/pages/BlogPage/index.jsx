// src/pages/BlogPage/index.jsx

import React from "react";
import BlogHead from "./blogHead";
import { BlogDataTable } from "./BlogTable";
import { Sidebar } from "./sideBar";
import blogDetailData from "../BlogDetailPage/BlogDetailData";

export default function BlogPage() {
  const [searchValue, setSearchValue] = React.useState("");

  const blogData = React.useMemo(() => {
    const arr = Object.values(blogDetailData || {});
    return arr
      .map((post) => ({
        ...post,
        intro:
          post.intro ??
          (Array.isArray(post.content)
            ? post.content.find((c) => c.type === "paragraph")?.text ?? ""
            : ""),
      }))
      .sort((a, b) => (a.id ?? 0) - (b.id ?? 0));
  }, []);

  // Categorize courses
  const categories = React.useMemo(() => {
    const categoryCounts = {
      "Software Engineering Diploma Course": 0,
      "Oil and Gas Engineering Diploma Course": 0,
      "Drilling Engineering Diploma Course": 0,
      "AutoMobile Engineering Diploma Course": 0,
      "Chef and Cooking Course": 0,
      "Other Courses": 0,
    };

    blogData.forEach((post) => {
      const id = parseInt(post.id);
      if (id === 1) {
        categoryCounts["Software Engineering Diploma Course"]++;
      } else if (id >= 2 && id <= 26) {
        categoryCounts["Oil and Gas Engineering Diploma Course"]++;
      } else if (id >= 27 && id <= 51) {
        categoryCounts["Drilling Engineering Diploma Course"]++;
      } else if (id >= 52 && id <= 76) {
        categoryCounts["AutoMobile Engineering Diploma Course"]++;
      } else if (id >= 77 && id <= 84) {
        categoryCounts["Chef and Cooking Course"]++;
      } else if (id >= 85 && id <= 100) {
        categoryCounts["Other Courses"]++;
      }
    });

    return categoryCounts;
  }, [blogData]);

  // Get recent posts
  const recentPosts = blogData.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-bg min-h-screen">
        <div className="relative z-10">
          <BlogHead />
        </div>

        <div className="container  py-8 relative">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/4">
              <BlogDataTable searchValue={searchValue} />
            </div>

            {/* Sidebar */}
            <Sidebar
              categories={categories}
              recentPosts={recentPosts}
              searchValue={searchValue}
              onSearchChange={setSearchValue}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
