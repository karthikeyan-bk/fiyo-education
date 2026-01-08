import image_62ea191f6ec12eb5eebb3b716eecf37b3badd2bc from 'figma:asset/62ea191f6ec12eb5eebb3b716eecf37b3badd2bc.png';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import logo from 'figma:asset/32fae03839cbd99c108c56664d4bc581244389a5.png';

export default function Footer() {
  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/fiyoacademy?t=prvrJokrk3p5VJhLvZ1RYw&s=08', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rakchana-devi-nagaraj-0a594837a/', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white w-full">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-100 p-3 rounded-xl"
              >
                <img src={image_62ea191f6ec12eb5eebb3b716eecf37b3badd2bc} alt="Fiyo Academy" className="h-14 sm:h-16 w-auto" />
              </motion.div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Empowering students and communities with practical financial education across Tamil Nadu.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="bg-gray-800 p-2 rounded-lg hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="size-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-blue-400 transition-colors">Our Programs</Link></li>
              <li><Link to="/impact" className="hover:text-blue-400 transition-colors">Impact</Link></li>
              <li><Link to="/resources" className="hover:text-blue-400 transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="mb-4 text-lg">Programs</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">School Education</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">College Programs</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Cooperative Training</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Investment Education</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg">Contact Info</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="size-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>KTS Towers, Near Velan Theatre, Sathy Road, Ganapathy, Coimbatore-641006</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="size-5 text-blue-400 flex-shrink-0" />
                <span>+91 63857 54600</span>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle className="size-5 text-green-400 flex-shrink-0" />
                <a href="https://wa.me/916385754600" className="hover:text-green-400 transition-colors">WhatsApp: +91 63857 54600</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="size-5 text-blue-400 flex-shrink-0" />
                <span className="break-all">info@fiyoacademy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Fiyo Academy. All rights reserved.</p>
          <p className="mt-2">Founded by Miss Rakchana Selvi Nagaraj</p>
        </div>
      </div>
    </footer>
  );
}