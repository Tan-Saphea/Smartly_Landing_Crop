import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Banknote, Briefcase } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Heart size={32} />,
            title: "Respect & Compassion",
            description: "We treat every client with the utmost respect and compassion, understanding your unique financial needs."
        },
        {
            icon: <Banknote size={32} />,
            title: "Up to 80% Value",
            description: "Employed borrowers can loan up to 80% of the value, while self-employed borrowers can borrow up to 70%."
        },
        {
            icon: <Briefcase size={32} />,
            title: "Flexible Terms",
            description: "Term Length: Up to 15 years. With Collateral: Up to 15 years (owner-occupied) or 10 years (not)."
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "High Loan Angles",
            description: "For existing clients, min loan PHP 200,000. New clients up to PHP 10,000,000."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
                    <p className="mt-4 text-xl text-gray-600">Comprehensive financial solutions tailored for you</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100"
                        >
                            <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
