import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-white overflow-hidden py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-primary-600">
                Smarty Lending Corporation
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-lg">
              {/* paypal */}
              Secure your future with the help of your loan value – a loan up to{" "}
              <span className="font-bold text-primary-600">
                ₱ 100,000 - ₱ 10,000,000
              </span>
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center space-x-2 bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg shadow-primary-600/30">
                <a
                  href="https://ofwfinancialservice.com/register"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
                <ArrowRight size={20} />
              </button>
              <button className="flex items-center justify-center space-x-2 bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all">
                <span>Learn More</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-secondary-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl"></div>
            <img
              src={heroBg}
              alt="Financial Growth"
              className="relative rounded-2xl shadow-2xl z-10 w-full object-cover h-[500px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
