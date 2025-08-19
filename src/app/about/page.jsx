import { Brain, Target, Users, Lightbulb, ArrowLeft } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">AI Course Recommender</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-indigo-600 font-medium">
                Home
              </a>
              <a href="/about" className="text-indigo-600 font-medium">
                About
              </a>
              <a href="/contact" className="text-gray-700 hover:text-indigo-600 font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <a href="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </a>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About AI Course Recommender</h1>
          <p className="text-xl text-gray-600">
            Empowering students to make informed educational decisions through AI-powered course recommendations.
          </p>
        </div>

        <div className="space-y-8">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                <Target className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We believe that every student deserves personalized guidance when choosing their academic path. 
              Our AI-powered platform analyzes your unique background, interests, and career aspirations to 
              recommend courses that will maximize your learning potential and career prospects. By leveraging 
              advanced language models, we provide detailed explanations for each recommendation, helping you 
              understand not just what to study, but why it matters for your future.
            </p>
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                <Brain className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">How It Works</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Share Your Profile</h3>
                  <p className="text-gray-600">Tell us about your degree, year of study, interests, and career goals.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">AI Analysis</h3>
                  <p className="text-gray-600">Our AI processes your information and matches it with relevant courses.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Get Recommendations</h3>
                  <p className="text-gray-600">Receive personalized course suggestions with detailed explanations.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                <Lightbulb className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Key Features</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Personalized Recommendations</h3>
                <p className="text-gray-600 text-sm">
                  Every recommendation is tailored to your specific academic background and career objectives.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Detailed Explanations</h3>
                <p className="text-gray-600 text-sm">
                  Understand why each course is recommended and how it fits into your academic journey.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Career-Focused</h3>
                <p className="text-gray-600 text-sm">
                  Recommendations consider industry requirements and job market trends.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Easy to Use</h3>
                <p className="text-gray-600 text-sm">
                  Simple chat interface makes getting recommendations quick and intuitive.
                </p>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Built for Students</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              This platform was created with students in mind, understanding the challenges of course selection 
              and the importance of making informed academic decisions. Whether you're just starting your degree 
              or planning your final year, our AI advisor is here to help you navigate your educational journey 
              with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}