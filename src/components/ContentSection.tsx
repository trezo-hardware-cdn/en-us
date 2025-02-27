import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const ContentSection: React.FC = () => {
  const bulletPoints = [
    "Military-grade encryption protects your private keys from unauthorized access",
    "Offline storage eliminates vulnerability to online hacking attempts",
    "PIN protection prevents physical access to your Trezor Hardware Wallet",
    "Recovery seed backup ensures you never lose access to your funds",
    "Open-source firmware allows security experts to verify the code",
    "Regular firmware updates keep your Trezor Hardware Wallet secure against new threats"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Understanding the <span className="gradient-text">Trezor Hardware Wallet</span> Advantage</h2>
            
            <p className="text-lg text-gray-600 mb-6">
              The Trezor Hardware Wallet represents the pinnacle of cryptocurrency security technology, designed specifically to protect digital assets from the ever-evolving landscape of cyber threats. Unlike software wallets that remain connected to the internet, the Trezor Hardware Wallet stores your private keys in a secure offline environment, completely isolated from potential online vulnerabilities.
            </p>
            
            <p className="text-lg text-gray-600 mb-6">
              When you invest in cryptocurrencies, you're essentially investing in digital assets that exist on various blockchains. The security of these investments hinges entirely on the protection of your private keys—the cryptographic codes that prove ownership and allow you to access and transfer your funds. The Trezor Hardware Wallet ensures these critical keys never leave the secure environment of the device, making it virtually impossible for hackers to compromise your holdings.
            </p>
            
            <p className="text-lg text-gray-600 mb-8">
              Beyond its core security features, the Trezor Hardware Wallet offers an intuitive user experience that makes managing multiple cryptocurrencies straightforward, even for beginners. The device connects to your computer or smartphone only when needed for transactions, remaining safely offline at all other times. This "cold storage" approach has been recognized by security experts worldwide as the gold standard for cryptocurrency protection.
            </p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, staggerChildren: 0.1 }}
            >
              {bulletPoints.map((point, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <CheckCircle2 className="h-5 w-5 text-trezor-green flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{point}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.img 
                src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Trezor Hardware Wallet in use" 
                className="rounded-2xl shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white p-5 rounded-xl shadow-lg max-w-xs"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-gray-800 font-medium">
                  "The Trezor Hardware Wallet has become an essential tool for anyone serious about cryptocurrency security. Its combination of advanced protection and user-friendly design makes it the clear market leader."
                </p>
                <p className="text-trezor-green font-semibold mt-2">— Crypto Security Expert</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;