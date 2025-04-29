
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg mb-2">Hi, I'm John Watson</p>
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-teal-400">Web</span> Developer
          </h1>
          <p className="text-gray-300 mb-8 max-w-lg">
            I create Digital Design and Photography and have been working as a UI Portfolio 
            Designer for 10+ years & I gained experience with large worldwide clients.
          </p>
          <div className="flex space-x-4">
            <motion.button 
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.button>
            <motion.button 
              className="border border-white hover:bg-white hover:text-gray-900 text-white px-6 py-3 rounded-md transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              My Portfolio
            </motion.button>
          </div>
        </motion.div>
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img 
            src="/lovable-uploads/ad4febfa-dc0c-4747-b010-fa439f33f345.png" 
            alt="John Watson" 
            className="max-w-full h-auto" 
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
