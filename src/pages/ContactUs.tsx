import { motion } from 'motion/react';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    goals: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Thank you! We will contact you shortly.");

      setFormData({
        name: "",
        email: "",
        interest: "",
        goals: "",
      });
    } else {
      alert("Failed to send message. Please try again.");
    }
  } catch (error) {
    console.error("Submit error:", error);
    alert("Server error. Please try later.");
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Academy',
      content: 'KTS Towers, Near Velan Theatre, Sathy Road, Ganapathy, Coimbatore-641006, Tamil Nadu',
      action: 'GET DIRECTION',
      link: '#',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Phone,
      title: "Let's Talk",
      content: 'Phone: +91 63857 54600',
      subtitle: 'Available: Mon-Sat, 9AM-6PM',
      action: 'CALL US',
      link: 'tel:+916385754600',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Us',
      content: '+91 63857 54600',
      subtitle: 'Quick responses on WhatsApp',
      action: 'CHAT NOW',
      link: 'https://wa.me/916385754600',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Mail,
      title: 'E-mail Us',
      content: 'info@fiyoacademy.com',
      subtitle: 'support@fiyoacademy.com',
      action: 'SEND E-MAIL',
      link: 'mailto:info@fiyoacademy.com',
      color: 'from-orange-500 to-red-600',
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/fiyoacademy?t=prvrJokrk3p5VJhLvZ1RYw&s=08', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rakchana-devi-nagaraj-0a594837a/', label: 'LinkedIn', color: 'hover:text-blue-700' },
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
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Ready to start your financial literacy journey? Reach out to us and let's transform your financial future together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`bg-gradient-to-br ${info.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                  <info.icon className="size-7 text-white" />
                </div>
                <h3 className="text-lg mb-3">{info.title}</h3>
                <p className="text-gray-700 text-sm mb-2">{info.content}</p>
                {info.subtitle && (
                  <p className="text-gray-600 text-sm mb-3">{info.subtitle}</p>
                )}
                <a
                  href={info.link}
                  className="text-blue-600 hover:text-blue-700 text-sm inline-block mt-2 transition-colors"
                >
                  {info.action} →
                </a>
              </motion.div>
            ))}
          </div>

          {/* Form and Map Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-xl"
            >
              <h2 className="text-3xl mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Start your financial journey today!
              </h2>
              <p className="text-gray-600 mb-6">Get Your Free Financial Assessment</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm mb-2 text-gray-700">
                    What are you interested in?
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  >
                    <option value="">Select a program</option>
                    <option value="school">School Programs</option>
                    <option value="college">College & Gen Z Programs</option>
                    <option value="cooperative">Community & Cooperatives</option>
                    <option value="investment">Investment Education</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="goals" className="block text-sm mb-2 text-gray-700">
                    Tell us about your financial goals...
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    placeholder="Share your financial goals and what you'd like to learn..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <Send className="size-5" />
                </motion.button>
              </form>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-video bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3042775936!2d76.99816!3d11.01653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzU5LjUiTiA3NsKwNTknNTMuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fiyo Academy Location"
                />
              </div>

              {/* Office Hours */}
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center">
                    <Clock className="size-6 text-white" />
                  </div>
                  <h3 className="text-2xl">Office Hours</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl mb-6">Connect With Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className={`bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-all ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="size-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'What age groups do you cater to?',
                a: 'We offer programs for school students (ages 10-17), college students and Gen Z (18-25), and community cooperatives of all ages.',
              },
              {
                q: 'Are the programs available online?',
                a: 'Yes! We offer both online self-paced courses and in-person interactive sessions in Coimbatore.',
              },
              {
                q: 'What is the cost of enrollment?',
                a: 'We keep our fees affordable and accessible. Contact us for specific program pricing and available scholarships.',
              },
              {
                q: 'Do you provide certification?',
                a: 'Yes, all students receive a certificate of completion upon successfully finishing their program.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}