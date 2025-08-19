"use client";

import { useState } from "react";
import {
  Brain,
  Send,
  Loader2,
  BookOpen,
  ArrowLeft,
  ExternalLink,
  Play,
  DollarSign,
} from "lucide-react";

export default function RecommendPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      const aiMessage = { role: "assistant", content: data.recommendations };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error getting recommendations:", error);
      const errorMessage = {
        role: "assistant",
        content:
          "Sorry, I encountered an error while generating recommendations. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const parseRecommendations = (content) => {
    // Enhanced parsing to handle courses with video links, free resources, and paid courses
    const lines = content.split("\n").filter((line) => line.trim());
    const courses = [];
    let currentCourse = null;
    let currentSection = null; // Track which section we're in

    for (const line of lines) {
      if (
        line.includes("**") &&
        (line.toLowerCase().includes("course") ||
          line.toLowerCase().includes("development") ||
          line.toLowerCase().includes("programming") ||
          line.toLowerCase().includes("web") ||
          line.toLowerCase().includes("data") ||
          line.toLowerCase().includes("machine") ||
          line.includes(":"))
      ) {
        if (currentCourse) courses.push(currentCourse);
        currentCourse = {
          name: line
            .replace(/\*\*/g, "")
            .replace(/^\d+\.\s*/, "")
            .trim(),
          description: "",
          reason: "",
          freeResources: [],
          videoTutorials: [],
          paidCourses: [],
        };
        currentSection = null;
      } else if (currentCourse && line.trim()) {
        // Detect sections
        if (line.toLowerCase().includes("free resources")) {
          currentSection = "free";
          continue;
        } else if (line.toLowerCase().includes("video tutorials")) {
          currentSection = "video";
          continue;
        } else if (line.toLowerCase().includes("paid courses")) {
          currentSection = "paid";
          continue;
        }

        // Process content based on current section
        if (currentSection === "free") {
          if (line.startsWith("- ")) {
            const content = line.substring(2).trim();
            const urlMatch = content.match(/https?:\/\/[^\s]+/);
            currentCourse.freeResources.push({
              title: urlMatch
                ? content.replace(/https?:\/\/[^\s]+/g, "").trim()
                : content,
              url: urlMatch ? urlMatch[0] : null,
            });
          }
        } else if (currentSection === "video") {
          if (line.startsWith("- ")) {
            const content = line.substring(2).trim();
            const urlMatch = content.match(/https?:\/\/[^\s]+/);
            currentCourse.videoTutorials.push({
              title: urlMatch
                ? content.replace(/https?:\/\/[^\s]+/g, "").trim()
                : content,
              url: urlMatch ? urlMatch[0] : null,
            });
          }
        } else if (currentSection === "paid") {
          if (line.startsWith("- ")) {
            const content = line.substring(2).trim();
            const urlMatch = content.match(/https?:\/\/[^\s]+/);
            currentCourse.paidCourses.push({
              title: urlMatch
                ? content.replace(/https?:\/\/[^\s]+/g, "").trim()
                : content,
              url: urlMatch ? urlMatch[0] : null,
            });
          }
        } else if (
          line.toLowerCase().includes("why") ||
          line.toLowerCase().includes("because") ||
          line.toLowerCase().includes("reason") ||
          line.toLowerCase().includes("recommended")
        ) {
          currentCourse.reason += line.trim() + " ";
        } else {
          // Default to description if not in any section
          currentCourse.description += line.trim() + " ";
        }
      }
    }
    if (currentCourse) courses.push(currentCourse);

    return courses.length > 0 ? courses : null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">
                AI Course Recommender
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="/"
                className="text-gray-700 hover:text-indigo-600 font-medium"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-indigo-600 font-medium"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-gray-700 hover:text-indigo-600 font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </a>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Get Course Recommendations
          </h1>
          <p className="text-gray-600">
            Tell me about your academic background, interests, and career goals
            to get personalized course recommendations with free and paid
            resources.
          </p>
        </div>

        {/* Chat Interface */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 py-12">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p className="text-lg mb-2">
                  Ready to find your perfect courses?
                </p>
                <p className="text-sm">
                  Share details like your degree, year of study, interests, and
                  career goals.
                </p>
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-3xl rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  {message.role === "assistant" ? (
                    <div>
                      {(() => {
                        const courses = parseRecommendations(message.content);
                        if (courses) {
                          return (
                            <div className="space-y-4">
                              <p className="font-semibold text-indigo-600 mb-4">
                                Here are my course recommendations for you:
                              </p>
                              {courses.map((course, idx) => (
                                <div
                                  key={idx}
                                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
                                >
                                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                                    {course.name}
                                  </h3>
                                  {course.description && (
                                    <p className="text-gray-600 text-sm mb-4">
                                      {course.description.trim()}
                                    </p>
                                  )}
                                  {course.reason && (
                                    <p className="text-indigo-600 text-sm font-medium mb-4">
                                      💡 {course.reason.trim()}
                                    </p>
                                  )}

                                  {/* Free Resources */}
                                  {course.freeResources.length > 0 && (
                                    <div className="mb-4">
                                      <h4 className="font-medium text-green-700 mb-2 flex items-center">
                                        <Play className="h-4 w-4 mr-1" />
                                        Free Resources
                                      </h4>
                                      <div className="space-y-2">
                                        {course.freeResources.map(
                                          (resource, resourceIdx) => (
                                            <div
                                              key={resourceIdx}
                                              className="bg-green-50 p-3 rounded-lg"
                                            >
                                              {resource.url ? (
                                                <a
                                                  href={resource.url}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="text-green-700 hover:text-green-800 flex items-center text-sm font-medium"
                                                >
                                                  {resource.title ||
                                                    "YouTube Resource"}
                                                  <ExternalLink className="h-3 w-3 ml-1" />
                                                </a>
                                              ) : (
                                                <span className="text-green-700 text-sm">
                                                  {resource.title}
                                                </span>
                                              )}
                                            </div>
                                          ),
                                        )}
                                      </div>
                                    </div>
                                  )}

                                  {/* Video Tutorials */}
                                  {course.videoTutorials.length > 0 && (
                                    <div className="mb-4">
                                      <h4 className="font-medium text-red-700 mb-2 flex items-center">
                                        <Play className="h-4 w-4 mr-1 fill-current" />
                                        Video Tutorials
                                      </h4>
                                      <div className="space-y-2">
                                        {course.videoTutorials.map(
                                          (video, videoIdx) => (
                                            <div
                                              key={videoIdx}
                                              className="bg-red-50 p-3 rounded-lg"
                                            >
                                              {video.url ? (
                                                <a
                                                  href={video.url}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="text-red-700 hover:text-red-800 flex items-center text-sm font-medium"
                                                >
                                                  {video.title ||
                                                    "Video Tutorial"}
                                                  <ExternalLink className="h-3 w-3 ml-1" />
                                                </a>
                                              ) : (
                                                <span className="text-red-700 text-sm">
                                                  {video.title}
                                                </span>
                                              )}
                                            </div>
                                          ),
                                        )}
                                      </div>
                                    </div>
                                  )}

                                  {/* Paid Courses */}
                                  {course.paidCourses.length > 0 && (
                                    <div>
                                      <h4 className="font-medium text-blue-700 mb-2 flex items-center">
                                        <DollarSign className="h-4 w-4 mr-1" />
                                        Paid Courses
                                      </h4>
                                      <div className="space-y-2">
                                        {course.paidCourses.map(
                                          (course, courseIdx) => (
                                            <div
                                              key={courseIdx}
                                              className="bg-blue-50 p-3 rounded-lg"
                                            >
                                              {course.url ? (
                                                <a
                                                  href={course.url}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="text-blue-700 hover:text-blue-800 flex items-center text-sm font-medium"
                                                >
                                                  {course.title ||
                                                    "Premium Course"}
                                                  <ExternalLink className="h-3 w-3 ml-1" />
                                                </a>
                                              ) : (
                                                <span className="text-blue-700 text-sm">
                                                  {course.title}
                                                </span>
                                              )}
                                            </div>
                                          ),
                                        )}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          );
                        } else {
                          return (
                            <p className="whitespace-pre-wrap">
                              {message.content}
                            </p>
                          );
                        }
                      })()}
                    </div>
                  ) : (
                    <p>{message.content}</p>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl px-4 py-3 flex items-center space-x-2">
                  <Loader2 className="h-4 w-4 animate-spin text-indigo-600" />
                  <span className="text-gray-600">
                    Generating recommendations...
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Input Form */}
          <div className="border-t border-gray-200 p-4">
            <form onSubmit={handleSubmit} className="flex space-x-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g., I'm a 2nd year Computer Science student interested in AI and machine learning, looking to work in tech..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                <Send className="h-4 w-4" />
                <span>Send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
