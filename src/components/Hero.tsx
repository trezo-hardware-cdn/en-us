import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="hero-glow left-1/4 top-1/4"></div>
      <div className="hero-glow right-1/4 bottom-1/4"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-trezor-green text-sm font-medium mb-4">
                <ShieldCheck className="mr-1 h-4 w-4" /> Trusted by millions worldwide
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Secure Your Digital Assets with <span className="gradient-text">Trezor Hardware Wallet</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              The Trezor Hardware Wallet offers unparalleled security for your cryptocurrency investments, protecting your digital assets from online threats with advanced encryption technology.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button 
                className="px-8 py-3 bg-trezor-green text-white rounded-full font-medium text-lg shadow-lg"
                whileHover={{ scale: 1.05, backgroundColor: '#00A651' }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Models
              </motion.button>
              
              <motion.button 
                className="px-8 py-3 border-2 border-trezor-green text-trezor-green rounded-full font-medium text-lg"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 92, 47, 0.05)' }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative z-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Trezor Hardware Wallet" 
              className="rounded-2xl shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 6,
                ease: "easeInOut"
              }}
            />
            
            <motion.div 
              className="absolute -bottom-5 -left-5 bg-white p-4 rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                <p className="font-medium text-sm">10,000+ active users</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -top-5 -right-5 bg-white p-4 rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-trezor-green rounded-full animate-pulse"></div>
                <p className="font-medium text-sm">Military-grade security</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;