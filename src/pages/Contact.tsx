import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-20">
      <section className="bg-primary-600 py-20 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl opacity-90">Let us Care for your Loved Ones.</p>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Care & Respect
                </h2>
                <p className="text-lg text-gray-600">
                  Our company cares about your loan and provides dedicated
                  support and advice throughout the entire process.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  {/* <div className="bg-primary-100 p-3 rounded-full text-primary-600">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">Contact</h3>
                                        <p className="text-gray-600">+63 910 650 6263</p>
                                    </div> */}
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Email</h3>
                    <p className="text-gray-600">
                      smartylendingcorporation.sl@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Location
                    </h3>
                    <p className="text-gray-600 max-w-sm">
                      Times Plaza,81 United Nations Ave, Ermita, Manila, 1000
                      Metro Manila, Philippines
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Message us
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full bg-primary-600 text-white font-bold py-4 rounded-lg hover:bg-primary-700 transition-colors flex justify-center items-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
