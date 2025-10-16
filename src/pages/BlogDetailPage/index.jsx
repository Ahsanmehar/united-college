//src/pages/BlogDetailPage/index.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import blogDetailData from "./BlogDetailData";
import BlogContent from "./comments/BlogContent";
import CommentSection from "./comments/CommentSection";
import { Sidebar } from "../BlogPage/sideBar";
import { BlogDetailHead } from "./BlogDetailHead";
import { RelatedCourses } from "./relatedCourse";

export default function BlogDetailPage() {
  const { id } = useParams();
  const blog = blogDetailData[id];

  // Prepare data for sidebar
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

  // Categorize courses for sidebar
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

  const recentPosts = blogData.slice(0, 3);

  if (!blog) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray mb-4">
            Course Not Found
          </h1>
          <p className="text-gray/80 text-lg mb-6">
            The course you're looking for doesn't exist.
          </p>
          <Link to="/blog">
            <Button className="bg-secondary hover:bg-secondary/90 text-base">
              Back to Courses
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = Object.values(blogDetailData)
    .filter((post) => post.id !== blog.id && post.category === blog.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-bg">
      {/* Header Section */}
      <BlogDetailHead blog={blog} />

      {/* Main Content */}
      <div className="container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <div className="w-full">
              {/* Featured Image */}
              <div className="mb-8">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl shadow-lg shadow-primary/10"
                />
              </div>

              {/* Blog Content */}
              <div className="bg-white rounded-xl shadow-lg shadow-primary/10 p-6 md:p-8 mb-8 border border-primary/10">
                <BlogContent content={blog.content} />

                {/* Tags Section */}
                <div className="mt-8 pt-6 border-t border-secondary">
                  <span className="text-2xl font-semibold text-gray mb-3 block">
                    Course Highlights
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {blog.content.slice(0, 5).map(
                      (item, index) =>
                        item.type === "heading" && (
                          <span
                            key={index}
                            className="px-3 py-1 bg-secondary/5 text-secondary rounded-full text-xs font-medium border border-secondary/30 hover:bg-secondary/20 transition-colors"
                          >
                            {item.text}
                          </span>
                        )
                    )}
                  </div>
                </div>
              </div>

              {/* Comment Section */}
              <CommentSection blogId={blog.id} />
            </div>
          </div>

          {/* Sidebar */}
          <Sidebar
            categories={categories}
            recentPosts={recentPosts}
            showSearchBar={false}
          />
        </div>
      </div>

      {/* Related Courses Section - Full Width */}
      <RelatedCourses relatedPosts={relatedPosts} />
    </div>
  );
}
