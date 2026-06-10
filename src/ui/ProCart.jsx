import React from 'react';
import Button from "./Button";
import { motion } from 'framer-motion';

function ProCart({heading , desc , btn1 , btn2 , btn3 ,img ,  link}) {
  return (
    <motion.div 
      className='flex flex-col w-full sm:w-[320px] md:w-[350px] min-h-[500px] border border-pink-600 rounded-[15px] overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300'
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
        <div className='relative w-full aspect-video overflow-hidden rounded-t-[15px] bg-gray-900'>
          <img src={img} className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'/>
        </div>
        
        <div className='flex flex-col flex-1 p-4'>
          <h1 className='text-lg md:text-xl font-bold text-white mb-3'>{heading}</h1>
          
          <p className='text-gray-400 leading-relaxed text-sm flex-1 mb-4'>{desc}</p>
          
          <div className='flex flex-wrap gap-2 mb-4'>
            <button className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium hover:bg-pink-600 hover:text-white transition-colors duration-200">
              {btn1}
            </button>
            <button className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium hover:bg-pink-600 hover:text-white transition-colors duration-200">
              {btn2}
            </button>
            <button className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium hover:bg-pink-600 hover:text-white transition-colors duration-200">
              {btn3}
            </button>
          </div>
          
          <Button 
            onClick={()=>window.open(link, "_blank")} 
            className="w-full h-[40px] bg-pink-600 text-white hover:bg-pink-700 border border-pink-600 transition-colors duration-200" 
            text="View Project"
          />
        </div>
    </motion.div>
  );
}

export default ProCart;
