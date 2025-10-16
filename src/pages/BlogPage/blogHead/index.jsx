// pages/BlogPage/blogHead/index.jsx
import React from "react";
import blog_pic from "@/assets/images/blog/blog_pic.webp";
import Breadcrumb from "@/components/BreadCrumb";

export default function BlogHead() {
  return (
    <div>
      <Breadcrumb
        pageName="Blogs"
        description="Explore our latest articles, insights, and updates to stay informed and inspired."
        url="/blog"
        backgroundImage={blog_pic}
        showHeader={true}
        overlay={true}
      />
    </div>
  );
}
