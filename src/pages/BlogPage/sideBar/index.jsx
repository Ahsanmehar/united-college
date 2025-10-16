// src/pages/BlogPage/sideBar/index.jsx

import React from "react";
import { Link } from "react-router-dom";
import Q from "@/Components/Q";
import { Input } from "@/components/ui/input";

export function Sidebar({
  categories,
  recentPosts,
  searchValue,
  onSearchChange,
  showSearchBar = true,
}) {
  const topCourses = React.useMemo(() => {
    return recentPosts.slice(0, 3);
  }, [recentPosts]);

  const clearSearch = () => {
    onSearchChange("");
  };

  return (
    <div className="lg:w-1/4 space-y-6">
      {showSearchBar && (
        <div className="bg-white rounded-xl p-4 border border-primary/10 hover:shadow-lg hover:shadow-primary/20 shadow-lg shadow-primary/10 transition-all duration-300">
          <h3 className="text-xl font-bold mb-2 text-gray-800 border-b pb-3 border-primary/10">
            Search Courses
          </h3>
          <div className="relative">
            <Input
              placeholder="Search courses by title..."
              value={searchValue}
              onChange={(event) =>
                onSearchChange && onSearchChange(event.target.value)
              }
              className="w-full h-12 text-lg border-2 border-secondary bg-white focus:border-secondary focus:ring-4 focus:ring-secondary/25 hover:shadow-lg shadow-lg shadow-secondary/10 hover:shadow-secondary/20 rounded-xl transition-all duration-300 ease-out hover:border-secondary pr-10"
            />
            {searchValue && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Q name="x" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Recent Posts Section */}
      <div className="bg-white rounded-xl p-4 border border-primary/10 hover:shadow-lg hover:shadow-primary/20 shadow-lg shadow-primary/10 transition-all duration-300">
        <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-3 border-primary/10">
          Recent Posts
        </h3>
        <div className="space-y-2">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className="border-b pb-4 last:border-b-0 last:pb-0 border-primary/10"
            >
              <Link
                to={`/blog-detail/${post.id}`}
                className="flex gap-4 group hover:no-underline"
                onClick={() => {
                  const currentPage =
                    localStorage.getItem("blogCurrentPage") || "0";
                  localStorage.setItem("blogPreviousPage", currentPage);
                }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-16 h-16 object-cover rounded-lg flex-shrink-0 shadow-lg shadow-primary/10"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm line-clamp-2 mb-1 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">{post.date}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Top Courses Section */}
      <div className="bg-white rounded-xl p-4 border border-primary/10 hover:shadow-lg hover:shadow-primary/20 shadow-lg shadow-primary/10 transition-all duration-300">
        <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-3 border-primary/10">
          Top Courses
        </h3>
        <div className="space-y-2">
          {topCourses.map((course) => (
            <div
              key={course.id}
              className="border-b pb-2 last:border-b-0 last:pb-0 border-primary/10"
            >
              <Link
                to={`/blog-detail/${course.id}`}
                className="flex gap-4 group hover:no-underline"
                onClick={() => {
                  const currentPage =
                    localStorage.getItem("blogCurrentPage") || "0";
                  localStorage.setItem("blogPreviousPage", currentPage);
                }}
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-16 h-16 object-cover rounded-lg flex-shrink-0 shadow-lg shadow-primary/10"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm line-clamp-2 mb-1 group-hover:text-primary transition-colors">
                    {course.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">{course.date}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {course.category}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Widget */}
      <div className="bg-white rounded-xl p-4 border border-primary/10 hover:shadow-lg hover:shadow-primary/20 shadow-lg shadow-primary/10 transition-all duration-300">
        <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-3 border-primary/10">
          Course Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {Object.entries(categories).map(([category, count]) => (
            <Link
              key={category}
              to={`/blog?category=${encodeURIComponent(category)}`}
              className="inline-flex items-center px-3 py-2 bg-secondary/5 text-secondary rounded-full text-sm font-medium border border-secondary/30 hover:bg-secondary/20 hover:shadow-md hover:shadow-secondary/10 transition-all duration-300 group"
            >
              <span className="mr-1">{category}</span>
              <span className="bg-secondary text-white text-xs px-1.5 py-0.5 rounded-full min-w-6 text-center group-hover:bg-secondary/80 transition-colors ml-1">
                {count}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
