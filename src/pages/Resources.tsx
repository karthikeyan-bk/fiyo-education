import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Resources() {
  const articles = [
    {
      image: 'https://images.unsplash.com/photo-1762427354397-854a52e0ded7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWRnZXRpbmclMjBzcHJlYWRzaGVldCUyMGNhbGN1bGF0b3J8ZW58MXx8fHwxNzY3NTU0MzUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Budgeting Basics',
      title: 'The 50/30/20 Rule: A Simple Framework for Financial Success',
      author: 'Sarah Chen',
      date: '18 May 2023',
      excerpt: 'Learn how to allocate your income effectively using this proven budgeting method that balances needs, wants, and savings for long-term financial health...',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      image: 'https://images.unsplash.com/photo-1761587941453-bd1790225d52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwZ3Jvd3RoJTIwY2hhcnR8ZW58MXx8fHwxNzY3NTM5OTE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Investment Strategies',
      title: 'Compound Interest: The Eighth Wonder of the World',
      author: 'Michael Rodriguez',
      date: '11 May 2023',
      excerpt: 'Discover how starting your investment journey early can exponentially grow your wealth through the power of compound interest and consistent contributions...',
      color: 'from-purple-500 to-pink-600',
    },
    {
      image: 'https://images.unsplash.com/photo-1740818576423-34be7fe85176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVkaXQlMjBzY29yZSUyMG1vbml0b3Jpbmd8ZW58MXx8fHwxNzY3NTU0MzUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Credit Education',
      title: 'Demystifying Credit Scores: How to Build and Maintain Excellent Credit',
      author: 'David Park',
      date: '4 May 2023',
      excerpt: 'Understanding the factors that influence your credit score and practical steps to improve it, opening doors to better loan rates and financial opportunities...',
      color: 'from-green-500 to-emerald-600',
    },
  ];

  const categories = [
    'Budgeting Basics',
    'Investment Strategies',
    'Credit Education',
    'Saving Tips',
    'Financial Planning',
  ];

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white w-full">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Financial Insights
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto">
              Explore Fiyo Academy's latest articles on financial literacy, investment strategies, and money management. Our expert educators break down complex financial concepts into practical knowledge you can apply today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 sm:py-12 bg-white border-b w-full">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 border border-blue-200 cursor-pointer shadow-sm hover:shadow-md transition-all text-sm sm:text-base"
              >
                {category}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-purple-50 w-full">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Articles
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Expert insights to guide your financial journey
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${article.color} text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm shadow-lg`}>
                    {article.category}
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl mb-4 hover:text-blue-600 transition-colors cursor-pointer">
                    {article.title}
                  </h3>

                  <div className="flex items-center flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="size-4" />
                      <span>{article.author}</span>
                    </div>
                   
                  </div>

                  <p className="text-gray-600 text-sm sm:text-base">
                    {article.excerpt}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 sm:py-20 bg-white w-full">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              More Learning Resources
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Comprehensive guides to master your finances
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: 'Financial Toolkit',
                description: 'Download our comprehensive budgeting templates, savings calculators, and goal-setting worksheets.',
                icon: '📊',
              },
              {
                title: 'Video Library',
                description: 'Access our growing collection of educational videos covering all aspects of personal finance.',
                icon: '🎥',
              },
              {
                title: 'Webinar Series',
                description: 'Join our live webinars with financial experts and get your questions answered in real-time.',
                icon: '💻',
              },
              {
                title: 'E-Books & Guides',
                description: 'Detailed guides on investing, retirement planning, and building wealth for different life stages.',
                icon: '📚',
              },
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 sm:p-8 rounded-2xl shadow-lg cursor-pointer"
              >
                <div className="text-4xl sm:text-5xl mb-4">{resource.icon}</div>
                <h3 className="text-xl sm:text-2xl mb-3">{resource.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base mb-4">{resource.description}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors text-sm sm:text-base"
                >
                  <span>Explore</span>
                  <ArrowRight className="size-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white w-full">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl mb-6">Stay Updated</h2>
            <p className="text-lg sm:text-xl mb-8 text-blue-100">
              Subscribe to our newsletter for the latest financial tips, resources, and updates from Fiyo Academy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-[rgb(255,255,255)] focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-xl hover:shadow-2xl transition-shadow whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}