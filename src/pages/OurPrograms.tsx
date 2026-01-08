import { motion } from 'motion/react';
import { GraduationCap, Users, TrendingUp, DollarSign, Play, School, Building2, Globe, LineChart, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function OurPrograms() {
  const [isPlaying, setIsPlaying] = useState(false);

  const programs = [
    {
      icon: School,
      title: 'School Education',
      subtitle: 'School Programs',
      description: 'Interactive, age-appropriate financial lessons teaching saving, spending wisely, and basic money concepts through games, storytelling, and activities.',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: GraduationCap,
      title: 'College Education',
      subtitle: 'College & Gen Z',
      description: 'Workshops on budgeting, student loans, credit, part-time jobs, and beginner investing using real-life case-based learning.',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Users,
      title: 'Cooperative Training',
      subtitle: 'Community & Cooperatives',
      description: 'Programs for groups and cooperatives covering collective savings, digital payments, and inclusive financial planning for sustainable growth.',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: LineChart,
      title: 'Investment Education',
      subtitle: 'Deep Dive Modules',
      description: 'Advanced topics like financial goal planning, cryptocurrency basics, retirement savings, and entrepreneurship finance for curious learners.',
      color: 'from-orange-500 to-red-600',
    },
  ];

  const stats = [
    { value: '2000', label: 'Students Empowered', icon: Users },
    { value: '50', label: 'Schools & Colleges', icon: Building2 },
    { value: '25', label: 'Cooperative Groups', icon: Globe },
    { value: '95', label: 'Success Rate %', icon: TrendingUp },
  ];

  const benefits = [
    {
      number: '01',
      title: 'Affordable & Accessible',
      description: 'Quality financial education for everyone. Low registration fees make learning practical money skills easy and accessible.',
    },
    {
      number: '02',
      title: 'Flexible Learning',
      description: 'Learn online at your own pace or join interactive in-person classes in Coimbatore—choose what fits your schedule and style.',
    },
    {
      number: '03',
      title: 'Programs by Age',
      description: 'Tailored programs for school students, college youth, and cooperative members—designed to meet their unique financial learning needs.',
    },
    {
      number: '04',
      title: 'Learn What Schools Miss',
      description: 'Practical skills in budgeting, saving, debt management, and investing—topics often skipped in traditional classrooms—made simple and engaging.',
    },
  ];

  const learningTopics = [
    'Real-Life Money Skills',
    'Financially Future-Ready',
    'Global Financial Awareness',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl mb-6">
              Financial Education Made Simple
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              At Fiyo Academy, we simplify money concepts—from budgeting to investing—through practical, age-appropriate lessons for students and communities in Coimbatore and across Tamil Nadu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Learning Topics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {learningTopics.map((topic, index) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle className="size-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl mb-3">{topic}</h3>
                    {topic === 'Real-Life Money Skills' && (
                      <p className="text-gray-700">
                        For Schools Students learn to manage money confidently: budgeting, saving, spending wisely, and understanding needs vs. wants, through interactive and practical lessons.
                      </p>
                    )}
                    {topic === 'Financially Future-Ready' && (
                      <p className="text-gray-700 text-left">
                        For Colleges Preparing students for real world finance with topics like student loans, credit management, investments, and financial planning essential skills for career and life success.
                      </p>
                    )}
                    {topic === 'Global Financial Awareness' && (
                      <p className="text-gray-700">
                        For Cooperatives We compare Indian financial systems with global standards, helping youth and cooperatives understand international finance trends and prepare for a competitive world.
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              See Our Story
            </h2>
            <p className="text-xl text-gray-700 mb-2">Financial Literacy for Every Student</p>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Most schools don't teach money skills. Fiyo Academy makes learning saving, budgeting, and smart spending simple and practical.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1756885375569-f04400d99cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjb2xsZWdlJTIwc3R1ZGVudHMlMjBlZHVjYXRpb258ZW58MXx8fHwxNzY3ODEwNzE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Fiyo Academy Programs"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Educational Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fiyo Academy offers practical financial education programs for students, youth, and communities—designed to build confidence, financial skills, and lifelong money habits.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className={`bg-gradient-to-br ${program.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <program.icon className="size-8 text-white" />
                </div>
                <h3 className="text-2xl mb-2">{program.title}</h3>
                <p className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {program.subtitle}
                </p>
                <p className="text-gray-700">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="size-12 text-blue-200" />
                </div>
                <div className="text-5xl mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Fiyo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose Fiyo Academy?
            </h2>
            <p className="text-xl text-gray-600">Transform Your Financial Future</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-2xl w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                    {benefit.number}
                  </div>
                  <div>
                    <h3 className="text-xl mb-3">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}