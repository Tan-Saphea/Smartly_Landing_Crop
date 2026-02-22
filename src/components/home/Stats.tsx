
const Stats = () => {
    const stats = [
        { label: "YEARS ON LOAN", value: "12" },
        { label: "LICENSE SOLD", value: "2.4M" },
        { label: "END USERS", value: "10M" },
        { label: "5 STARS RATING", value: "6M" }
    ];

    return (
        <section className="py-16 bg-primary-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-primary-500/30">
                    {stats.map((stat, i) => (
                        <div key={i} className="p-4">
                            <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
                            <div className="text-sm lg:text-base text-primary-100 font-medium tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
