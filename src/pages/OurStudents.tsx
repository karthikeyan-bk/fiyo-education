import image_528eac9340ffa7e81779f88bb47ecab3225cc119 from 'figma:asset/528eac9340ffa7e81779f88bb47ecab3225cc119.png';
import { motion } from 'motion/react';
import { GraduationCap, TrendingUp, Award, Users, Star, Quote } from 'lucide-react';

export default function OurStudents() {
  const studentStats = [
    { value: '2000+', label: 'Active Students', icon: Users },
    { value: '95%', label: 'Success Rate', icon: Award },
    { value: '4.9/5', label: 'Student Rating', icon: Star },
    { value: '500+', label: 'Graduates', icon: GraduationCap },
  ];

  const successStories = [
    {
      name: 'Aravind Kumar',
      role: 'College Student',
      program: 'Financial Future-Ready Program',
      quote: 'Fiyo Academy taught me how to manage my student loan and budget effectively. Now I feel confident about my financial future!',
      improvement: '85%',
      metric: 'Financial Confidence',
    },
    {
      name: 'Lakshmi Priya',
      role: 'School Student',
      program: 'Real-Life Money Skills',
      quote: 'Learning about saving and budgeting through games made it so fun! I now help my parents with family budgeting.',
      improvement: '90%',
      metric: 'Saving Skills',
    },
    {
      name: 'Rajesh Venkat',
      role: 'Cooperative Member',
      program: 'Community Financial Training',
      quote: 'Our cooperative has seen 40% growth in collective savings after implementing what we learned from Fiyo Academy.',
      improvement: '40%',
      metric: 'Collective Growth',
    },
  ];

  const studentAchievements = [
    {
      title: 'Improved Money Management',
      percentage: 92,
      description: 'Students report better control over their finances',
    },
    {
      title: 'Increased Savings',
      percentage: 88,
      description: 'Active saving habits developed',
    },
    {
      title: 'Investment Knowledge',
      percentage: 85,
      description: 'Understanding of basic investment principles',
    },
    {
      title: 'Debt Awareness',
      percentage: 90,
      description: 'Better understanding of credit and debt',
    },
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
              Our Students, Our Pride
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Meet the future of financially literate Tamil Nadu. Our students are building confidence, achieving goals, and transforming their relationship with money.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {studentStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center">
                    <stat.icon className="size-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-700">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real transformations, real impact
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-xl relative"
              >
                <Quote className="size-12 text-blue-200 absolute top-6 right-6" />
                
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                    {story.name.charAt(0)}
                  </div>
                  <h3 className="text-xl mb-1">{story.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{story.role}</p>
                  <p className="text-xs bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {story.program}
                  </p>
                </div>

                <p className="text-gray-700 mb-6 italic relative z-10">
                  "{story.quote}"
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl">
                  <div className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                    {story.improvement}
                  </div>
                  <div className="text-sm text-gray-600">{story.metric}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Student Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Measurable progress in financial literacy
            </p>
          </motion.div>

          <div className="space-y-8">
            {studentAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg"
              >
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h3 className="text-xl mb-1">{achievement.title}</h3>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                  <div className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {achievement.percentage}%
                  </div>
                </div>
                <div className="h-3 bg-white rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${achievement.percentage}%` }}
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

      {/* Student Gallery */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Learning Community
            </h2>
            <p className="text-xl text-gray-600">
              See our students in action
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1572847748080-bac263fae977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50cyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3Njc1NTQzNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
              image_528eac9340ffa7e81779f88bb47ecab3225cc119,
              'https://images.unsplash.com/photo-1762158007836-25d13ab34c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3Njc1NTQzNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl overflow-hidden shadow-xl aspect-square"
              >
                <img
                  src={image}
                  alt={`Student learning ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-6">Join Our Success Community</h2>
            <p className="text-xl mb-8 text-blue-100">
              Start your journey to financial confidence with Fiyo Academy today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-shadow"
            >
              Enroll Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
