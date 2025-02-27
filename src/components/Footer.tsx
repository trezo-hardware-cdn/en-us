import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Twitter, Facebook, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="h-8 w-8 text-trezor-light-green" />
              <span className="text-2xl font-bold">Trezor</span>
            </div>
            <p className="text-gray-400 mb-6">
              Trezor Hardware Wallet is the most secure way to store your cryptocurrencies, providing military-grade protection for your digital assets.
            </p>
            <div className="flex space-x-4">
              <motion.a href="#" className="text-gray-400 hover:text-trezor-light-green" whileHover={{ scale: 1.2 }}>
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a href="#" className="text-gray-400 hover:text-trezor-light-green" whileHover={{ scale: 1.2 }}>
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a href="#" className="text-gray-400 hover:text-trezor-light-green" whileHover={{ scale: 1.2 }}>
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a href="#" className="text-gray-400 hover:text-trezor-light-green" whileHover={{ scale: 1.2 }}>
                <Youtube className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Products', 'Features', 'Security', 'Support'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-trezor-light-green transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {['Blog', 'Tutorials', 'FAQs', 'User Guide', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-trezor-light-green transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-trezor-light-green flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Blockchain Street, Crypto City, CC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-trezor-light-green flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-trezor-light-green flex-shrink-0" />
                <span className="text-gray-400">support@trezorwallet.com</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>© {new Date().getFullYear()} Trezor Hardware Wallet. All rights reserved.</p>
          <p className="mt-2">
            Trezor Hardware Wallet is the most secure and trusted solution for cryptocurrency storage and management.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;