import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';

const testimonials = [
  {
    quote: "My Trezor Hardware Wallet gives me peace of mind knowing my crypto investments are secure. The setup was straightforward, and the interface is intuitive even for beginners.",
    author: "Michael R.",
    role: "Crypto Investor"
  },
  {
    quote: "After researching various hardware wallets, I chose Trezor for its security features and open-source approach. It's been the best decision for protecting my digital assets.",
    author: "Sarah L.",
    role: "Blockchain Developer"
  },
  {
    quote: "The Trezor Hardware Wallet's recovery seed feature saved my investments when my device was damaged. The restoration process was simple and worked flawlessly.",
    author: "David K.",
    role: "Long-term Hodler"
  },
  {
    quote: "As someone who manages multiple cryptocurrencies, the Trezor Hardware Wallet's multi-coin support has been invaluable. The security is top-notch, and updates are regular.",
    author: "Jennifer T.",
    role: "Portfolio Manager"
  }
];

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Users Say About <span className="gradient-text">Trezor Hardware Wallet</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thousands of users trust Trezor Hardware Wallet to secure their cryptocurrency investments. Here's what some of them have to say.
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                  <div className="flex flex-col items-center text-center">
                    <svg className="w-12 h-12 text-trezor-green/20 mb-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-xl md:text-2xl font-medium text-gray-800 mb-6">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-trezor-green">{testimonial.author}</p>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;