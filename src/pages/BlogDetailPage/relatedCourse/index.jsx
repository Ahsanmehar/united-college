//src/pages/BlogDetailPage/relatedCourse/index.jsx

import React from "react";
import { Link } from "react-router-dom";
import Q from "@/Components/Q";

export function RelatedCourses({ relatedPosts }) {
  if (!relatedPosts || relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className="bg-white border-t border-primary/10 py-8 w-full">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray mb-3">
            Related Courses
          </h2>
          <p className="text-gray/80 max-w-2xl mx-auto text-base">
            Explore more courses in the same category to enhance your learning
            journey
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedPosts.map((relatedPost) => (
            <Link
              key={relatedPost.id}
              to={`/blog-detail/${relatedPost.id}`}
              className="block bg-bg rounded-lg overflow-hidden hover:shadow-xl hover:shadow-primary/20 shadow-md shadow-primary/10 transition-all duration-300 hover:-translate-y-1 border border-primary/10 group"
            >
              <img
                src={relatedPost.image}
                alt={relatedPost.title}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold uppercase rounded-full mb-2">
                  {relatedPost.category}
                </span>
                <h3 className="font-bold text-gray line-clamp-2 mb-2 text-sm group-hover:text-primary transition-colors">
                  {relatedPost.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-gray/80">
                  <span>{relatedPost.date}</span>
                  <span className="text-primary font-medium inline-flex items-center gap-1">
                    Read More
                    <Q
                      name="arrow-right"
                      className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
