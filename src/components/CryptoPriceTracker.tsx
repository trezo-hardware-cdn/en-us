import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, RefreshCw } from 'lucide-react';
import { CryptoPrice } from '../types';

const CryptoPriceTracker: React.FC = () => {
  const [cryptoPrices, setCryptoPrices] = useState<CryptoPrice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchCryptoPrices = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch cryptocurrency prices');
      }
      
      const data = await response.json();
      setCryptoPrices(data);
      setLastUpdated(new Date());
      setError(null);
    } catch (err) {
      setError('Error fetching cryptocurrency prices. Please try again later.');
      console.error('Error fetching crypto prices:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCryptoPrices();
    
    // Set up auto-refresh every 60 seconds
    const intervalId = setInterval(fetchCryptoPrices, 60000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.div 
      className="crypto-card rounded-2xl shadow-lg p-6 sticky top-24"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Live Crypto Prices</h3>
        <motion.button 
          onClick={fetchCryptoPrices}
          className="text-trezor-green"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={loading}
        >
          <RefreshCw className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
        </motion.button>
      </div>
      
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <div className="space-y-4 mb-4">
            {cryptoPrices.map((crypto) => (
              <motion.div 
                key={crypto.id}
                className="flex items-center justify-between py-2 border-b border-gray-100"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center">
                  <img 
                    src={crypto.image} 
                    alt={crypto.name} 
                    className="w-8 h-8 mr-3"
                  />
                  <div>
                    <p className="font-medium">{crypto.name}</p>
                    <p className="text-sm text-gray-500">{crypto.symbol.toUpperCase()}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">${crypto.current_price.toLocaleString()}</p>
                  <p className={`text-sm flex items-center ${crypto.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {crypto.price_change_percentage_24h >= 0 ? (
                      <TrendingUp className="h-3 w-3 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 mr-1" />
                    )}
                    {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {lastUpdated && (
            <p className="text-xs text-gray-500 text-right">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </p>
          )}
        </>
      )}
      
      <motion.div 
        className="mt-6 bg-trezor-green/10 rounded-lg p-4"
        whileHover={{ scale: 1.02 }}
      >
        <p className="text-trezor-green font-medium text-sm">
          Secure your crypto investments with a Trezor Hardware Wallet. The most trusted way to protect your digital assets.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default CryptoPriceTracker;