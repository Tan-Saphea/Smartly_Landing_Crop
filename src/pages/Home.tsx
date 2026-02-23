import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";
import Features from "../components/home/Features";
import AboutSnippet from "../components/home/AboutSnippet";
import Process from "../components/home/Process";
import Eligibility from "../components/home/Eligibility";
import Stats from "../components/home/Stats";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <AboutSnippet />
      <Process />
      <Features />
      <Testimonials />
      <Eligibility />
      <Stats />

      {/* Ready to apply CTA */}
      <section className="py-20 bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Ready to apply for an OFW loan?
          </h2>
          <button className="bg-primary-600 hover:bg-primary-700 text-white text-xl font-bold px-12 py-5 rounded-full transition-all transform hover:scale-105 shadow-2xl shadow-primary-600/50">
            <a
              href="https://smartylendingcorp.com/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
