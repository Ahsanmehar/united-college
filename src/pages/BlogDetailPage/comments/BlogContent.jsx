//src/pages/BlogDetailPage/comments/BlogContent.jsx

import React from "react";

export default function BlogContent({ content }) {
  if (!content || !Array.isArray(content)) {
    return (
      <div className="text-center py-12">
        <p className="text-gray/80 text-lg">Course content not available.</p>
      </div>
    );
  }

  const renderContent = (item, index) => {
    switch (item.type) {
      case "heading":
        return (
          <h3
            key={index}
            className="text-2xl font-bold mt-12 mb-6 text-gray first:mt-0 border-l-4 border-secondary pl-4"
          >
            {item.text}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="text-gray/80 mb-6 leading-relaxed text-lg">
            {item.text}
          </p>
        );
      case "list":
        return (
          <ul key={index} className="space-y-3 mb-8 text-gray/80">
            {item.items.map((listItem, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                <span>{listItem}</span>
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-none">
      {content.map((item, index) => renderContent(item, index))}
    </div>
  );
}
