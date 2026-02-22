import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "John Doe",
            role: "Business Owner",
            quote: "This loan helped me get back on track when I needed it most. The application process was easy, and the team made sure I understood all the terms. I’m now able to expand my business and cover expenses with confidence!",
            rating: 5
        },
        {
            name: "Jane Smith",
            role: "Entrepreneur",
            quote: "I was able to get the loan I needed to renovate my shop and increase my inventory. The loan approval was quick, and the customer service was fantastic. I highly recommend this service to anyone looking for financial assistance.",
            rating: 5
        },
        {
            name: "Alex Johnson",
            role: "Freelancer",
            quote: "The loan process was seamless and hassle-free. I was able to secure the funds I needed without any stress. The terms were clear, and the support team was incredibly helpful throughout the whole process. Thank you for making it so easy!",
            rating: 5
        }
    ];

    return (
        <section className="py-20 bg-primary-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What People Say About Us</h2>
                    <p className="mt-4 text-xl text-gray-600">Real stories from satisfied customers</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-lg relative"
                        >
                            <Quote className="absolute top-6 right-6 text-primary-200 w-10 h-10" />
                            <div className="flex space-x-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-8 italic leading-relaxed">"{testimonial.quote}"</p>
                            <div>
                                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                <p className="text-sm text-primary-600">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
