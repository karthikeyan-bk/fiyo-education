import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Users, Target, Award, BookOpen, Lightbulb, GraduationCap, School, Building2, CheckCircle, Globe, DollarSign, PiggyBank, Briefcase, Star, Heart, Zap, ShieldCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      icon: TrendingUp,
      title: 'Financial Growth',
      description: 'Build confidence with practical money skills',
    },
    {
      icon: Users,
      title: 'Community Learning',
      description: 'Connect with students and experts',
    },
    {
      icon: Target,
      title: 'Goal Achievement',
      description: 'Plan and achieve your financial dreams',
    },
  ];

  const stats = [
    { value: '2000+', label: 'Students Empowered', icon: Users },
    { value: '50+', label: 'Schools & Colleges', icon: Building2 },
    { value: '25+', label: 'Cooperative Groups', icon: Globe },
    { value: '95%', label: 'Success Rate', icon: TrendingUp },
  ];

  const programs = [
    {
      icon: School,
      title: 'School Education',
      description: 'Interactive, age-appropriate financial lessons for students ages 10-17',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: GraduationCap,
      title: 'College Education',
      description: 'Practical workshops on budgeting, loans, and investing for ages 18-25',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Users,
      title: 'Cooperative Training',
      description: 'Financial planning programs for community groups and cooperatives',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Award,
      title: 'Investment Education',
      description: 'Advanced modules on financial goals, crypto, and entrepreneurship',
      color: 'from-orange-500 to-red-600',
    },
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: 'Real-Life Money Skills',
      description: 'Learn budgeting, saving, spending wisely through practical, hands-on activities',
    },
    {
      icon: Lightbulb,
      title: 'Future-Ready Education',
      description: 'Prepare for real-world finance with topics often skipped in traditional classrooms',
    },
    {
      icon: CheckCircle,
      title: 'Flexible Learning',
      description: 'Choose online self-paced courses or interactive in-person sessions in Coimbatore',
    },
  ];

  const learningTopics = [
    { icon: PiggyBank, title: 'Smart Saving Habits', description: 'Master the art of saving money effectively' },
    { icon: DollarSign, title: 'Budget Management', description: 'Create and stick to realistic budgets' },
    { icon: Briefcase, title: 'Investment Basics', description: 'Understand stocks, mutual funds, and more' },
    { icon: ShieldCheck, title: 'Financial Security', description: 'Learn about insurance and emergency funds' },
    { icon: Target, title: 'Goal Setting', description: 'Plan and achieve your financial goals' },
    { icon: Award, title: 'Career Finance', description: 'Manage salary, taxes, and benefits' },
  ];

  const impactMetrics = [
    { number: '95%', label: 'Student Financial Confidence Increase', color: 'from-blue-500 to-cyan-500' },
    { number: '78%', label: 'School Adoption Rate in Coimbatore', color: 'from-purple-500 to-pink-500' },
    { number: '92%', label: 'College Student Skill Improvement', color: 'from-green-500 to-emerald-500' },
    { number: '85%', label: 'Cooperative Financial Literacy Growth', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24 w-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 right-10 w-72 h-72 bg-white rounded-full opacity-10 blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-300 rounded-full opacity-10 blur-3xl"
        />

        <div className="relative w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 text-sm"
              >
                <Zap className="size-4" />
                <span>Financial Education Made Simple</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-white">
                Inspire Today.
                <br />
                <span className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-white">Secure Tomorrow.</span>
              </h1>

              <p className="text-lg sm:text-xl text-white/90 mb-8">
                Fiyo Academy empowers students, institutions, and communities with practical financial education—building confidence, clarity, and lifelong money skills across Tamil Nadu.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10">
                <Link to="/programs">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl transition-shadow"
                  >
                    <span>Explore Programs</span>
                    <ArrowRight className="size-5" />
                  </motion.button>
                </Link>

                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-white hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Get Started Free
                  </motion.button>
                </Link>
              </div>

              {/* Mini Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '2000+', label: 'Students' },
                  { value: '50+', label: 'Institutions' },
                  { value: '95%', label: 'Success' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm p-3 rounded-xl text-center border border-white/20"
                  >
                    <div className="text-2xl text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-white/80">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://www.theindianwire.com/wp-content/uploads/2020/05/coast-1024x683.jpg"
                  alt="Indian College Student"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent bg-[rgba(255,255,255,0)]" />
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-4 rounded-2xl shadow-xl"
              >
                <div className="flex items-center space-x-2">
                  <Star className="size-6 fill-white" />
                  <div>
                    <div className="text-xl">4.9/5</div>
                    <div className="text-xs">Student Rating</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl"
              >
                <div className="flex items-center space-x-2">
                  <Heart className="size-6 text-red-500 fill-red-500" />
                  <div>
                    <div className="text-xl text-gray-900">100%</div>
                    <div className="text-xs text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Topics Grid */}
      <section className="py-12 bg-white w-full">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What You'll Learn
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive financial skills for real-world success
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {learningTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-xl text-center shadow-md hover:shadow-lg transition-all"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <topic.icon className="size-6 text-white" />
                </div>
                <h3 className="text-sm mb-1">{topic.title}</h3>
                <p className="text-xs text-gray-600">{topic.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white w-full">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl mb-4">Our Impact in Numbers</h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Transforming financial literacy across Tamil Nadu, one student at a time
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-white/20 transition-all border border-white/20"
              >
                <stat.icon className="size-10 mx-auto mb-3 text-blue-200" />
                <div className="text-4xl sm:text-5xl mb-2">{stat.value}</div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-12 bg-white w-full">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial education designed for every age and stage of life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`bg-gradient-to-br ${program.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                  <program.icon className="size-7 text-white" />
                </div>
                <h3 className="text-xl mb-3">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link to="/programs">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-shadow flex items-center space-x-2 mx-auto"
              >
                <span>View All Programs</span>
                <ArrowRight className="size-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-12 bg-gradient-to-br from-purple-50 to-blue-50 w-full">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Proven Results
            </h2>
            <p className="text-lg text-gray-600">
              Real impact across schools, colleges, and communities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center"
              >
                <div className={`text-5xl mb-3 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                  {metric.number}
                </div>
                <div className="text-gray-700 text-sm">{metric.label}</div>
                <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${metric.number.replace('%', '')}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full bg-gradient-to-r ${metric.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Fiyo */}
      <section className="py-12 bg-white w-full">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose Fiyo Academy?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We make financial education accessible, practical, and engaging for everyone
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="size-8 text-white" />
                </div>
                <h3 className="text-xl mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-12 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 w-full">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Learning Environment
            </h2>
            <p className="text-lg text-gray-600">
              Interactive workshops and engaging sessions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                url: 'https://images.unsplash.com/photo-1682203534176-60f5d99da756?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmZW1hbGUlMjBzdHVkZW50JTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzY3ODExNTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                title: 'Focused Learning',
              },
              {
                url: 'https://images.unsplash.com/photo-1719245309441-c577e0d1959d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21hbiUyMGNvbGxlZ2UlMjBlZHVjYXRpb258ZW58MXx8fHwxNzY3ODExNTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                title: 'College Education',
              },
              {
                url: 'https://images.unsplash.com/photo-1544456203-0af5a69f5789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBnaXJsJTIwc3R1ZGVudCUyMGxlYXJuaW5nfGVufDF8fHx8MTc2NzgxMTU3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                title: 'Student Success',
              },
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] group"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-white text-xl">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white w-full">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="size-7 text-white" />
                </div>
                <h3 className="text-lg mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-12 bg-gradient-to-br from-purple-50 to-blue-50 w-full">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What Our Students Say
            </h2>
            <p className="text-lg text-gray-600">
              Real stories from real people who transformed their financial future
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Fiyo Academy transformed my understanding of money management. The budgeting skills I learned are invaluable.",
                author: "Priya R.",
                role: "College Student, Coimbatore"
              },
              {
                quote: "Our cooperative members gained practical knowledge that helped improve our collective savings by 40%.",
                author: "Kumar S.",
                role: "Cooperative Leader"
              },
              {
                quote: "The school program made financial literacy fun and engaging. My daughter now saves her pocket money wisely!",
                author: "Meena A.",
                role: "Parent"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link to="/students">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-shadow border-2 border-blue-200"
              >
                Read More Success Stories
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white w-full">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl mb-6">Ready to Transform Your Financial Future?</h2>
            <p className="text-lg sm:text-xl mb-8 text-blue-100">
              Join over 2,000 students who are already building their financial confidence with Fiyo Academy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-white text-blue-600 px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-shadow"
                >
                  Start Your Journey Today
                </motion.button>
              </Link>
              <Link to="/programs">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-shadow"
                >
                  Browse Programs
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}