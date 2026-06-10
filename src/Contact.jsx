import React from 'react';
import { FiMapPin , FiMail , FiPhone} from "react-icons/fi";
import { FaLinkedin , FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col gap-6 md:gap-10 p-4 md:p-10 py-12 md:py-20 max-w-5xl mx-auto\">

    <div className="flex flex-row items-center gap-5">
      <div><FiMapPin/></div>
      <div className="flex flex-col">
      <h1 className="font-bold font-lg">Location</h1>
      <h6 className="text-gray-300">Surat , Gujarat</h6>

      </div>
    </div>

    <div className="flex flex-row items-center gap-5">
      <div><FiMail/></div>
      <div className="flex flex-col">
      <h1 className="font-bold font-lg">Email</h1>
      <h6 className="text-gray-300">kanadepayal23@gmail.com</h6>

      </div>
    </div>


    <div className="flex flex-row items-center gap-5">
      <div><FiPhone/></div>
      <div className="flex flex-col">
      <h1 className="font-bold font-lg">Phone</h1>
      <h6 className="text-gray-300">91-9108682974</h6>

      </div>
    </div>

     
      
      <div className="flex rows gap-10">
        <a
      href="https://www.linkedin.com/in/payal-kanade"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white-600 text-2xl"
    >
      <FaLinkedin /></a>
        
         

         <a
      href="https://www.github.com/in/Payal-Kanade23"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white-600 text-2xl"
    >
      <FaGithub /></a>

       <a
      href="mailto:kanadepayal23@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white-600 text-2xl"
    >
      <FiMail /></a>
        
        </div>  
        </div>

        
      
    
  );
}

export default Contact;
