"use client";

import { useState } from "react";

import { createReflection } from "./actions";
export default function NewReflectionPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // 1. validate content is not empty
    if (!content.trim()) {
      setError("Content is required");
      return;
    }
    // 2. if valid, save (we'll wire this up next)
    await createReflection(title, content);
    setError("");
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* title input */}
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded"
      />
      {/* content textarea */}
      <textarea
        placeholder="Enter description"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-2 rounded"
      />
      {/* error message */}
      {error && <p className="text-red-500">{error}</p>}
      {/* submit button */}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
}
