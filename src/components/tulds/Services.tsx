const services = [
    "Partnerships",
    "Booth Spaces",
    "Branding Opportunities",
    "Workshops / Speaking",
]

const Services = () => {
    return (
        <section id="services" className="py-16 sm:py-20 bg-gray-100 text-black">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-center">Our Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded shadow text-center hover:shadow-lg transition">
                            <h3 className="font-bold text-xl">{service}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
