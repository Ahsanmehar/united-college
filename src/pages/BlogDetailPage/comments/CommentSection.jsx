//src/pages/BlogDetailPage/comments/CommentSections.jsx

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Q from "@/Components/Q";

export default function CommentSection({ blogId }) {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && comment) {
      const newComment = {
        id: Date.now(),
        name,
        email,
        comment,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        blogId: blogId,
      };
      setComments([newComment, ...comments]);
      setName("");
      setEmail("");
      setComment("");
      saveCommentToStorage(newComment);
    }
  };

  const saveCommentToStorage = (newComment) => {
    try {
      const existingComments = JSON.parse(
        localStorage.getItem("blogComments") || "{}"
      );
      const blogComments = existingComments[blogId] || [];
      blogComments.unshift(newComment);
      existingComments[blogId] = blogComments;
      localStorage.setItem("blogComments", JSON.stringify(existingComments));
    } catch (error) {
      console.error("Failed to save comment:", error);
    }
  };

  React.useEffect(() => {
    try {
      const existingComments = JSON.parse(
        localStorage.getItem("blogComments") || "{}"
      );
      const blogComments = existingComments[blogId] || [];
      setComments(blogComments);
    } catch (error) {
      console.error("Failed to load comments:", error);
    }
  }, [blogId]);

  return (
    <div className="mt-12">
      <div className="flex items-center gap-3 mb-8">
        <Q name="message-circle" className="w-8 h-8 text-primary" />
        <h3 className="text-2xl font-bold text-gray">Course Discussions</h3>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg shadow-primary/10 p-8 mb-10 border border-primary/10"
      >
        <h4 className="text-xl font-semibold mb-6 text-gray">
          Share Your Thoughts
        </h4>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray/90 mb-2"
            >
              Your Name *
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
              className="border-2 border-primary/10 focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray/90 mb-2"
            >
              Email Address *
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
              className="border-2 border-primary/10 focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="comment"
            className="block text-sm font-medium text-gray/90 mb-2"
          >
            Your Comment *
          </label>
          <Textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your questions or feedback about this course..."
            rows={6}
            required
            className="border-2 border-primary/10 focus:border-primary transition-colors"
          />
        </div>

        <Button
          type="submit"
          className="bg-secondary hover:bg-secondary/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-secondary/20"
        >
          <Q name="send" className="w-4 h-4 mr-2" />
          Post Comment
        </Button>
      </form>

      {/* Existing Comments */}
      {comments.length > 0 && (
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-gray mb-6">
            Community Discussions ({comments.length})
          </h4>
          {comments.map((commentItem) => (
            <div
              key={commentItem.id}
              className="bg-white rounded-xl p-6 shadow-lg shadow-primary/10 border border-primary/10"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h5 className="font-semibold text-gray text-lg">
                    {commentItem.name}
                  </h5>
                  <p className="text-sm text-primary font-medium">
                    {commentItem.date}
                  </p>
                </div>
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-medium">
                  Verified Student
                </span>
              </div>
              <p className="text-gray/80 leading-relaxed">
                {commentItem.comment}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
