import { motion } from 'motion/react';
import { Target, Eye, Heart, TrendingUp, Users, BookOpen, Lightbulb } from 'lucide-react';

export default function AboutUs() {
  const stats = [
    { value: '95%', label: 'Student Financial Confidence Increase' },
    { value: '78%', label: 'School Adoption Rate in Coimbatore' },
    { value: '92%', label: 'College Student Skill Improvement' },
    { value: '85%', label: 'Cooperative Financial Literacy Growth' },
  ];

  const steps = [
    {
      number: '01',
      title: 'Understanding Money Basics',
      description: 'We introduce students to core financial concepts like income, expenses, saving, and spending habits through simple and relatable discussions.',
      icon: BookOpen,
    },
    {
      number: '02',
      title: 'Building Strong Financial Thinking',
      description: 'Learners explore budgeting, goal setting, and smart decision-making to develop a confident and responsible money mindset.',
      icon: Lightbulb,
    },
    {
      number: '03',
      title: 'Practical & Interactive Learning',
      description: 'Our sessions include real-life examples, activities, and case studies that help students apply financial concepts confidently.',
      icon: Users,
    },
    {
      number: '04',
      title: 'Preparing for a Secure Future',
      description: 'Students gain awareness about saving, investing, and long-term planning to build a strong foundation for financial independence.',
      icon: TrendingUp,
    },
  ];

  const skills = [
    { title: 'Smart Saving Skills', progress: 90 },
    { title: 'Budgeting Made Easy', progress: 85 },
    { title: 'Investment Fundamentals', progress: 80 },
    { title: 'Community & Team Learning', progress: 95 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section className="relative pt-32 pb-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1623863568368-69e4cbe6cc0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50cyUyMGdyb3VwJTIwc3R1ZHl8ZW58MXx8fHwxNzY3ODEwNzE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Indian Students Learning Together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl mb-6">
              Inspire Today. Secure Tomorrow.
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-blue-100">
              Fiyo Academy empowers students, institutions, and communities with practical financial education building confidence, clarity, and lifelong money skills across Tamil Nadu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Vision for Financial Empowerment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Building a Financially Confident Tamil Nadu, Starting in Coimbatore
            </p>
            <p className="text-gray-600 italic max-w-2xl mx-auto">
              "Financial literacy isn't just about money it's about empowering dreams, securing futures, and building confident communities across Tamil Nadu."
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700 mb-6">
                Founded by <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Miss Rakchana Selvi Nagaraj</span>, Fiyo Academy is pioneering personal financial education that transforms lives, one student and one cooperative at a time.
              </p>
              <p className="text-gray-700 mb-6">
                We specialize in age appropriate financial education for schools, practical money management for colleges, and sustainable financial practices for cooperatives. Our hands on approach ensures that every participant gains real world skills in budgeting, saving, investing, and financial planning creating lasting impact that extends beyond the classroom into homes and communities.
              </p>
              <p className="text-gray-700">
                Join us in our mission to create a financially literate generation that makes informed decisions, builds secure futures, and contributes to Tamil Nadu's economic growth and prosperity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBncm91cCUyMHRlYW13b3JrfGVufDF8fHx8MTc2NzU5MjY1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Students Learning Together"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values, Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Our Values, Mission & Vision
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <div className="bg-gradient-to-br from-red-500 to-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <Heart className="size-8 text-white" />
              </div>
              <h3 className="text-2xl mb-4">Our Values</h3>
              <p className="text-gray-700">
                Empowerment, inclusivity, and innovation guide us to create an environment where young minds can thrive, learn, and grow.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <Target className="size-8 text-white" />
              </div>
              <h3 className="text-2xl mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To equip the next generation with essential financial knowledge and practical skills, enabling them to manage money confidently and achieve their goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <Eye className="size-8 text-white" />
              </div>
              <h3 className="text-2xl mb-4">Our Vision</h3>
              <p className="text-gray-700">
                A society where financial literacy empowers everyone to navigate their financial journey with confidence, responsibility, and clarity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg"
              >
                <div className="text-5xl mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-700">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Steps */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Financial Learning Made Simple
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fiyo Academy equips students, young professionals, and communities with practical skills to save, spend wisely, and make confident financial decisions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-2xl w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Progress */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Core Skills We Teach
          </motion.h2>

          <div className="space-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-lg">{skill.title}</span>
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {skill.progress}%
                  </span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}