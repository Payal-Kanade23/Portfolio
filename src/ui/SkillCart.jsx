import React from 'react';
import { motion } from 'framer-motion';

function SkillCart({icon , heading , text ,btn1 , btn2, btn3, btn4 }) {
    
  return (
   <motion.div 
     className="flex flex-col gap-4 p-6 w-full sm:w-[280px] md:w-[320px] min-h-[280px] border border-pink-600 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-black hover:bg-gray-900"
     whileHover={{ y: -5, transition: { duration: 0.3 } }}
     initial={{ opacity: 0, y: 20 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.5 }}
   >
  
     <div className="flex items-center gap-3">
       <div className="text-4xl text-pink-600">
         {icon}
       </div>

       <h1 className="text-lg md:text-xl font-bold text-white">
         {heading}
       </h1>
     </div>

     <div className="flex-1">
       <p className="text-gray-400 leading-relaxed text-sm">
         {text}
       </p>
     </div>

     <div className="flex flex-wrap gap-2">
       <motion.button 
         className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium hover:bg-pink-600 hover:text-white transition-colors duration-200"
         whileHover={{ scale: 1.05 }}
       >
         {btn1}
       </motion.button>

       <motion.button 
         className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium hover:bg-pink-600 hover:text-white transition-colors duration-200"
         whileHover={{ scale: 1.05 }}
       >
         {btn2}
       </motion.button>

       <motion.button 
         className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium hover:bg-pink-600 hover:text-white transition-colors duration-200"
         whileHover={{ scale: 1.05 }}
       >
         {btn3}
       </motion.button>

       <motion.button 
         className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium hover:bg-pink-600 hover:text-white transition-colors duration-200"
         whileHover={{ scale: 1.05 }}
       >
         {btn4}
       </motion.button>
     </div>

   </motion.div>
  );
}

export default SkillCart;
