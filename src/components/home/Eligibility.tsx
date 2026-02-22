import { Check } from 'lucide-react';
import eligibilityBg from '../../assets/images/eligibility.png';

const Eligibility = () => {
    const list = [
        "Age: 18 to 65 years old at the time the loan is fully paid off",
        "Minimum monthly income: 15,000 PHP",
        "Employment status: Permanent employee or practicing professional",
        "Eligible applicants: Employed individuals, Practicing professionals, OFWs (or their spouses)"
    ];

    return (
        <section className="py-20 bg-primary-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <img
                            src={eligibilityBg}
                            alt="Eligibility"
                            className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">Eligibility</h2>
                        <div className="space-y-6">
                            {list.map((item, i) => (
                                <div key={i} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="bg-primary-100 p-2 rounded-full flex-shrink-0">
                                        <Check className="w-5 h-5 text-primary-600" />
                                    </div>
                                    <p className="text-gray-700 font-medium">{item}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Latest News</h3>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <span className="text-xs font-bold text-primary-600 uppercase tracking-wide">News</span>
                                <h4 className="text-lg font-bold text-gray-900 mt-2">Unbiased news, opinions, and commentary</h4>
                                <p className="text-gray-600 mt-2 text-sm">Delivered reliably to our readers throughout the nation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Eligibility;
