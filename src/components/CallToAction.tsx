import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ChevronRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="bg-gradient-to-r from-trezor-dark to-trezor-green rounded-3xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <ShieldCheck className="h-12 w-12 text-white mb-6" />
              </motion.div>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Secure Your Crypto Future with Trezor Hardware Wallet
              </motion.h2>
              
              <motion.p 
                className="text-lg text-white/90 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Don't leave your digital assets vulnerable to online threats. The Trezor Hardware Wallet provides military-grade protection for your cryptocurrencies with its offline storage and advanced encryption.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <motion.button 
                  className="px-8 py-3 bg-white text-trezor-green rounded-full font-medium text-lg shadow-lg flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Shop Now <ChevronRight className="ml-1 h-5 w-5" />
                </motion.button>
                
                <motion.button 
                  className="px-8 py-3 border-2 border-white text-white rounded-full font-medium text-lg flex items-center justify-center"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
            
            <motion.div 
              className="md:w-1/2 p-8 md:p-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Trezor Hardware Wallet" 
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;