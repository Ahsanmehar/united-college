//src/pages/BlogDetailPage/BlogDetailHead/index.jsx
import React from "react";
import Q from "@/components/Q";
import blog_pic from "@/assets/images/blog/blog_pic.webp";
import Breadcrumb from "@/components/BreadCrumb";

export function BlogDetailHead({ blog }) {
  return (
    <div>
      {/* Breadcrumb Section */}
      <div>
        <Breadcrumb
          pageName="Blogs"
          description="Explore in-depth course details, and expert insights to guide your educational journey."
          url="/blog"
          detailPage="Blog Detail"
          showHeader={true}
          backgroundImage={blog_pic}
          overlay={true}
        />
      </div>

      {/* Blog Content Section - Separate Styled Section */}
      <div className="container mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg shadow-primary/10 border border-primary/10 p-8">
          <div className="text-gray flex-1 max-w-3xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray/80 text-sm">
              <div className="flex items-center gap-2">
                <Q name="user" className="w-4 h-4 text-secondary" />
                <span className="text-primary font-medium">{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Q name="calendar" className="w-4 h-4 text-secondary" />
                <span>{blog.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
