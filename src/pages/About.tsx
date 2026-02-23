import { motion } from "framer-motion";
import businessLoan from "../assets/images/business-loan.png";
import personalLoan from "../assets/images/personal-loan.png";

const About = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            About Us
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are Smarty Lending Corporation. Our revolutionary technology and
            top-notch customer service provide a more holistic approach to
            financial credit decision-making.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100"
            >
              <h2 className="text-3xl font-bold text-primary-600 mb-6">
                Mission
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Our Mission is to invest in the global minded generation so
                  that they are empowered in their financial future.
                </p>
                <p>
                  We do our best to provide wide variety of credit facilities
                  that would help to provide strong and sustainable community.
                </p>
                <p>
                  We offer quality service to small companies that are seeking
                  financial requirements.
                </p>
                <p>
                  We provide fair and affordable credit facilities to company
                  employees to relieve them from financial trouble.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100"
            >
              <h2 className="text-3xl font-bold text-secondary-600 mb-6">
                Vision
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Our Mission is to invest in the global minded generation so
                  that they are empowered in their financial future.
                </p>
                <p>
                  We do our best to provide wide variety of credit facilities
                  that would help to provide strong and sustainable community.
                </p>
                <p>
                  We offer quality service to small companies that are seeking
                  financial requirements.
                </p>
                <p>
                  We provide fair and affordable credit facilities to company
                  employees to relieve them from financial trouble.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <img
                src={businessLoan}
                alt="Business"
                className="rounded-2xl w-full h-64 object-cover mb-6"
              />
              <h3 className="text-2xl font-bold text-primary-400">
                BUSINESS LOAN
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Smarty Lending Corporation offers Business Loan to companies or
                SME to manage their cash flow requirements. This facility is
                useful in case there is a requirement to pay sudden expenses and
                funds their daily operations. This is a term loan facility with
                fixed regular payment and usually with collateral.
              </p>
            </div>
            <div className="space-y-6">
              <img
                src={personalLoan}
                alt="Personal"
                className="rounded-2xl w-full h-64 object-cover mb-6"
              />
              <h3 className="text-2xl font-bold text-secondary-400">
                PERSONAL LOAN
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Smarty Lending Corporation offers Personal Loans to individuals
                who wish to start up a business on their own or need cash as
                soon as possible for personal reasons at very competitive low
                interest rates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
