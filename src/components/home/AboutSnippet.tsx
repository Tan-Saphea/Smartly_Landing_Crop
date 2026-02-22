
const AboutSnippet = () => {
    return (
        <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Argentum Credit Corp</h2>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        Argentum Credit Corp offers flexible borrowing options. Leverage your current loan as collateral for the funds you need. Cover tuition, purchase equipment/furniture, travel, consolidate debt, or meet any financial requirement with our lending solutions.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed mb-10">
                        We offer a wide range of loan products and services to achieve your financial goals with ease. Apply now and start realizing your dreams.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="bg-gray-800 px-6 py-3 rounded-lg border border-gray-700">
                            <span className="block text-2xl font-bold text-primary-400">0.003</span>
                            <span className="text-sm text-gray-400">Fixed Interest Rate</span>
                        </div>
                        <div className="bg-gray-800 px-6 py-3 rounded-lg border border-gray-700">
                            <span className="block text-2xl font-bold text-primary-400">Up to 48 mos</span>
                            <span className="text-sm text-gray-400">Loan Installment</span>
                        </div>
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {['Purchase of appliances', 'Medical expenses', 'Education/Tuition', 'House renovation', 'Business investment', 'Vacation trips'].map((item, idx) => (
                        <div key={idx} className="bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm border border-gray-700/50">
                            <p className="text-gray-300 font-medium">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSnippet;
