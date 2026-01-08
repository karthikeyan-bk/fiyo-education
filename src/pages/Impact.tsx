import { motion } from 'motion/react';
import { useState } from 'react';
import { School, GraduationCap, Users, Briefcase, Trophy, Quote } from 'lucide-react';

export default function Impact() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All', icon: Trophy },
    { id: 'schools', label: 'Schools', icon: School },
    { id: 'colleges', label: 'Colleges', icon: GraduationCap },
    { id: 'cooperatives', label: 'Cooperatives', icon: Users },
    { id: 'workshops', label: 'Workshops', icon: Briefcase },
  ];

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1572847748080-bac263fae977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50cyUyMGNsYXNzcm9vbSUyMGxlYXJuaW5nfGVufDF8fHx8MTc2NzgxMDcxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'schools',
      title: 'School Financial Workshop',
    },
    {
      url: 'https://images.unsplash.com/photo-1756885375569-f04400d99cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjb2xsZWdlJTIwc3R1ZGVudHMlMjBlZHVjYXRpb258ZW58MXx8fHwxNzY3ODEwNzE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'colleges',
      title: 'College Investment Seminar',
    },
    {
      url: 'https://images.unsplash.com/photo-1708593343442-7595427ddf7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjb21tdW5pdHklMjBtZWV0aW5nJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzY3ODEwNzE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'cooperatives',
      title: 'Cooperative Financial Training',
    },
    {
      url: 'https://images.unsplash.com/photo-1722573783625-eceb04251036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmaW5hbmNpYWwlMjBlZHVjYXRpb24lMjB3b3Jrc2hvcHxlbnwxfHx8fDE3Njc4MTA3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'workshops',
      title: 'Budget Management Workshop',
    },
    {
      url: 'https://images.unsplash.com/photo-1623863568368-69e4cbe6cc0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50cyUyMGdyb3VwJTIwc3R1ZHl8ZW58MXx8fHwxNzY3ODEwNzE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'schools',
      title: 'Interactive Learning Session',
    },
    {
      url: 'https://images.unsplash.com/photo-1679942232210-4cdbbc55cd9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50cyUyMHN1Y2Nlc3MlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3Njc4MTA3MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'workshops',
      title: 'Program Success Story',
    },
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const testimonials = [
    {
      quote: "Fiyo Academy transformed my understanding of money management. The budgeting skills I learned are invaluable.",
      author: "Priya R.",
      role: "College Student, Coimbatore",
    },
    {
      quote: "Our cooperative members gained practical knowledge that helped improve our collective savings by 40%.",
      author: "Kumar S.",
      role: "Cooperative Leader",
    },
    {
      quote: "The school program made financial literacy fun and engaging. My daughter now saves her pocket money wisely!",
      author: "Meena A.",
      role: "Parent",
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
              Our Impact & Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              See how Fiyo Academy is transforming financial literacy across Coimbatore and Tamil Nadu. From school programs to cooperative training, witness the real impact of our financial education initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Journey in Pictures
            </h2>
            <p className="text-xl text-gray-600">
              Explore our programs and the lives we've touched
            </p>
          </motion.div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="size-5" />
                <span>{category.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all aspect-[4/3]"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl mb-2">{image.title}</h3>
                    <p className="text-sm text-[rgb(52,110,217)] capitalize">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real people
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-xl"
              >
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <p className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Impact By The Numbers
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '2000+', label: 'Lives Transformed' },
              { value: '50+', label: 'Institutions Partnered' },
              { value: '100+', label: 'Workshops Conducted' },
              { value: '95%', label: 'Student Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg text-center"
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-6">Be Part of Our Success Story</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of students and communities who have transformed their financial future with Fiyo Academy.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-shadow"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}