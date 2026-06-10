import React from 'react';
import { motion } from 'framer-motion';

function EduCart({heading , year , place , desc}) {
  return (
    <motion.div 
      className='border border-pink-600 rounded-[10px] w-full min-h-[250px] bg-black hover:bg-gray-900 transition-colors duration-300 shadow-md hover:shadow-lg'
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 p-6 sm:p-8'>
        <div className='flex-1'>
          <h1 className='text-lg md:text-xl font-bold text-white mb-2'>{heading}</h1>
          <p className='text-pink-500 text-sm font-medium mb-3'>{place}</p>
          <p className='text-gray-400 leading-relaxed text-sm'>{desc}</p>
        </div>
        <motion.button 
          className="px-4 py-2 bg-pink-600 text-white rounded-full text-sm font-medium whitespace-nowrap h-fit hover:bg-pink-700 transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
        >
          {year}
        </motion.button>
      </div>
    </motion.div>
  );
}

export default EduCart;
