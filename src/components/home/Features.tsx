import { CheckCircle2 } from 'lucide-react';
import featuresBg from '../../assets/images/features.png';

const Features = () => {
    const features = [
        "Easy Access to Credit",
        "Fast & Convenient",
        "Flexible Loan Terms",
        "Encourages Financial Inclusion"
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">What Are You Getting?</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Experience a loan process designed with your needs in mind. We provide financial solutions that empower you to reach your goals.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <CheckCircle2 className="text-primary-600 flex-shrink-0" size={24} />
                                    <span className="font-semibold text-gray-800">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary-600 rounded-3xl transform rotate-3 opacity-10"></div>
                        <img
                            src={featuresBg}
                            alt="Features"
                            className="relative rounded-3xl shadow-xl w-full object-cover h-[400px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
