import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Cpu, Smartphone, RefreshCw, Wallet } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-8 w-8 text-trezor-green" />,
    title: "Cold Storage Security",
    description: "Trezor Hardware Wallet keeps your private keys offline, completely isolated from potential online threats and hackers."
  },
  {
    icon: <Lock className="h-8 w-8 text-trezor-green" />,
    title: "PIN Protection",
    description: "Access to your Trezor Hardware Wallet is secured with a PIN code, preventing unauthorized physical access."
  },
  {
    icon: <Cpu className="h-8 w-8 text-trezor-green" />,
    title: "Secure Element",
    description: "Built with specialized hardware designed to resist physical tampering and side-channel attacks."
  },
  {
    icon: <Smartphone className="h-8 w-8 text-trezor-green" />,
    title: "User-Friendly Interface",
    description: "Trezor Hardware Wallet features an intuitive interface that makes managing your crypto assets simple and secure."
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-trezor-green" />,
    title: "Recovery Seed Backup",
    description: "Your wallet can be fully recovered using a 12-24 word recovery seed if your device is lost or damaged."
  },
  {
    icon: <Wallet className="h-8 w-8 text-trezor-green" />,
    title: "Multi-Currency Support",
    description: "Store and manage Bitcoin, Ethereum, and thousands of other cryptocurrencies in one secure Trezor Hardware Wallet."
  }
];

const Features: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="gradient-text">Trezor Hardware Wallet</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The Trezor Hardware Wallet combines cutting-edge security with ease of use, making it the preferred choice for securing cryptocurrency assets.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card bg-white p-6 rounded-xl shadow-md"
              variants={itemVariants}
            >
              <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;