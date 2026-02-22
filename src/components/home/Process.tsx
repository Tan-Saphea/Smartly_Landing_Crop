import { FileText, PhoneCall, CheckCircle, Wallet } from 'lucide-react';

const Process = () => {
    const steps = [
        {
            icon: <FileText size={32} />,
            title: "Step 1",
            subtitle: "Fill out the application form online",
            desc: "Fill out the form completely."
        },
        {
            icon: <PhoneCall size={32} />,
            title: "Step 2",
            subtitle: "Get ready for our interview",
            desc: "Prepare documents. We will inform you about your application via mobile."
        },
        {
            icon: <CheckCircle size={32} />,
            title: "Step 3",
            subtitle: "Wait for approval",
            desc: "We will inform you about your final approval conditions."
        },
        {
            icon: <Wallet size={32} />,
            title: "Step 4",
            subtitle: "Get your approved loan",
            desc: "Get your approved loan from your account!"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Getting a Personal Loan is Easy</h2>
                    <p className="mt-4 text-xl text-gray-600">A quick & transparent process</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-[80%] h-0.5 bg-gray-200 -z-10"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="w-24 h-24 bg-white border-4 border-primary-50 rounded-full flex items-center justify-center mb-6 group-hover:border-primary-600 transition-colors shadow-sm">
                                <div className="text-primary-600">
                                    {step.icon}
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                            <h4 className="font-semibold text-gray-800 mb-2">{step.subtitle}</h4>
                            <p className="text-gray-500 text-sm max-w-xs">{step.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="bg-primary-600 text-white px-10 py-3 rounded-full font-bold shadow-lg hover:bg-primary-700 transition-colors">
                        <a href="https://ofwfinancialservice.com/register" target="_blank" rel="noopener noreferrer">Apply Now</a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Process;
