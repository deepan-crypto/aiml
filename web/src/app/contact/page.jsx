import { Brain, Mail, MessageSquare, ArrowLeft } from 'lucide-react';

export default function ContactPage() {
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
              <a href="/about" className="text-gray-700 hover:text-indigo-600 font-medium">
                About
              </a>
              <a href="/contact" className="text-indigo-600 font-medium">
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                <MessageSquare className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
            </div>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select a topic</option>
                  <option value="feedback">General Feedback</option>
                  <option value="bug">Report a Bug</option>
                  <option value="feature">Feature Request</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                  placeholder="Tell us more about your question or feedback..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email Support</h3>
                  <p className="text-gray-600">support@aicoursereccommender.com</p>
                  <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Response Time</h3>
                  <p className="text-gray-600">Monday - Friday: 9 AM - 6 PM EST</p>
                  <p className="text-sm text-gray-500">Weekend messages answered on Monday</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">How accurate are the recommendations?</h3>
                  <p className="text-gray-600 text-sm">
                    Our AI analyzes your profile against educational best practices and industry trends to provide highly relevant suggestions.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Can I get recommendations for any field?</h3>
                  <p className="text-gray-600 text-sm">
                    Yes! Our system works across all academic disciplines and can provide recommendations for any field of study.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Is my data secure?</h3>
                  <p className="text-gray-600 text-sm">
                    We take privacy seriously. Your personal information is never stored or shared with third parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}