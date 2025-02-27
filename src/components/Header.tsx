import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Menu, X, ChevronRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <Shield className="h-8 w-8 text-trezor-green" />
          <span className="text-2xl font-bold gradient-text">Trezor</span>
        </motion.div>
        
        <div className="hidden md:flex space-x-8">
          {['Features', 'Security', 'Models', 'Support', 'Blog'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-trezor-green font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
        
        <motion.button
          className="hidden md:flex items-center px-6 py-2 bg-trezor-green text-white rounded-full font-medium"
          whileHover={{ scale: 1.05, backgroundColor: '#00A651' }}
          whileTap={{ scale: 0.95 }}
        >
          Shop Now <ChevronRight className="ml-1 h-4 w-4" />
        </motion.button>
        
        <button 
          className="md:hidden text-trezor-green"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white absolute w-full border-b border-gray-100 shadow-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {['Features', 'Security', 'Models', 'Support', 'Blog'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-trezor-green font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="flex items-center justify-center px-6 py-2 bg-trezor-green text-white rounded-full font-medium">
              Shop Now <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;