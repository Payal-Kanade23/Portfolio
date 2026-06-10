import Button from "./ui/Button";
import {FiMenu} from "react-icons/fi"
import { FaReact , FaServer , FaDatabase , FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
import profile from "./assets/hero.png"
import engineer from "./assets/woman-coding-at-desk-with-computer-vector.jpg"
import SkillCart from "./ui/SkillCart";
import TypingAnimation from "./ui/TypingAnimation";
function Home() {

  return (
    <div className="w-full flex flex-col">

      {/* HERO SECTION */}
      <div className="flex flex-col md:flex-row justify-center items-center min-h-screen gap-6 md:gap-10 px-4 md:px-10 py-10 md:py-20 max-w-7xl mx-auto w-full\">

        {/* LEFT */}
        <div className="flex flex-col gap-4 md:gap-6 max-w-xl w-full">
          <motion.h1 
            className="font-bold text-2xl md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span className="text-pink-600">Payal Kanade</span>
          </motion.h1>

          <TypingAnimation 
            text="MERN Stack Developer" 
            speed={80}
            delay={500}
          />

          <motion.p 
            className="text-gray-500 text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I create stunning web experiences with modern technologies and innovative design
          </motion.p>

          <div className="flex flex-wrap gap-3 md:gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full sm:w-auto"
            >
              <Button
                text="View Work"
                onClick={()=>document.getElementById("projects").scrollIntoView({behavior:"smooth"})}
                className="h-[45px] md:h-[50px] w-full sm:w-[170px] bg-pink-600 text-white text-sm md:text-base"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full sm:w-auto"
            >
              <Button
                text="Contact Me"
                onClick={()=>document.getElementById("contact").scrollIntoView({behavior:"smooth"})}
                className="h-[45px] md:h-[50px] w-full sm:w-[170px] border-2 border-pink-500 text-sm md:text-base"
              />
            </motion.div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div 
          className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] overflow-hidden rounded-full shadow-lg flex-shrink-0"
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          whileInView={{ 
            opacity: 1, 
            scale: 1, 
            y: [0, -15, 0],
            transition: { duration: 0.8 }
          }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.08, boxShadow: "0 25px 50px rgba(236, 72, 153, 0.4)" }}
          animate={{ y: [0, -15, 0] }}
          transition={{ 
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            default: { duration: 0.5 }
          }}
        >
          <img src={engineer} className="w-full h-full object-cover" />
        </motion.div>

      </div>

      {/* ABOUT SECTION */}
      <div className="flex flex-col items-center px-6 py-20">
        <motion.h1 
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About <span className="text-pink-600">Me</span>
        </motion.h1>

        <motion.p 
          className="text-gray-500 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Get to know more about my background and passion
        </motion.p>

        <motion.div 
          className="max-w-3xl text-justify text-gray-600  space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="max-w-3xl text-justify">
            I’m a Full Stack Developer who enjoys building web applications that are both functional and easy to use...
          </p>

          <p className="max-w-3xl text-justify">
            Over time, I’ve been improving my skills in technologies like React, Node.js, and databases...
          </p>
        </motion.div>
      </div>

      {/* SKILLS SECTION */}
      <div className="flex flex-col items-center py-20 px-6">

        <motion.h1 
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-pink-600">Skills</span>
        </motion.h1>

        <motion.p 
          className="text-gray-500 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Technologies I work with to bring ideas to life
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <SkillCart
              icon={<FaReact />}
              heading="Frontend Development"
              text="Building responsive and interactive user interfaces"
              btn1="React"
              btn2="TailwindCSS"
              btn3="JavaScript"
              btn4="Bootstrap"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <SkillCart
              icon={<FaServer />}
              heading="Backend Development"
              text="Creating robust server-side applications and APIs"
              btn1="Node.js"
              btn2="Express"
              btn3="JWT"
              btn4="PHP"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <SkillCart
              icon={<FaDatabase />}
              heading="Database Management"
              text="Designing and optimizing databases for performance"
              btn1="MongoDB"
              btn2="MySQL"
              btn3="SQL"
              btn4="Firebase"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <SkillCart
              icon={<FaTools />}
              heading="Tools & Technologies"
              text="Essential tools I use in my workflow"
              btn1="Git"
              btn2="GitHub"
              btn3="Postman"
              btn4="JIRA"
            />
          </motion.div>
        </div>
      </div>

    </div>
  );
}
export default Home;