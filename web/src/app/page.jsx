import { BookOpen, Brain, Users, ArrowRight } from "lucide-react";

export default function HomePage() {
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

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            AI Course Recommender
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get personalized course recommendations with free YouTube resources
            and paid courses tailored to your academic background, interests,
            and career goals. Powered by advanced AI to help you make the best
            educational choices.
          </p>
          <a
            href="/recommend"
            className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Recommendations
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>

        {/* Features */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Complete Learning Resources
            </h3>
            <p className="text-gray-600">
              Get both free YouTube tutorials and premium course recommendations
              for every subject, giving you multiple learning paths to choose
              from based on your budget and preferences.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Brain className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              AI-Powered Insights
            </h3>
            <p className="text-gray-600">
              Advanced language models provide detailed explanations for each
              recommendation, helping you understand why each course is valuable
              for your journey and career goals.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Career Focused
            </h3>
            <p className="text-gray-600">
              Get recommendations that not only match your interests but also
              align with your career goals and current industry requirements for
              maximum job market relevance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
