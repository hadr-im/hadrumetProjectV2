import React from "react";

const team = [
    {
        role: "Responsible for Events",
        name: "Sarah Johnson",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        contact: "events@hadrumet.com",
        phone: "+216 00 000 000"
    },
    {
        role: "Responsible for Partnerships",
        name: "Michael Chen",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        contact: "partners@hadrumet.com",
        phone: "+216 11 111 111"
    }
];

const AboutUsPage: React.FC = () => {
    return (
        <div className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-blue-400 opacity-10 blur-3xl rounded-full animate-pulse" />
                <div className="absolute top-1/2 -right-24 w-[400px] h-[400px] bg-cyan-400 opacity-10 blur-3xl rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-20 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-600 font-medium text-sm">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                        Who We Are
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
                        About <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Us</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed font-light">
                        Hadrumet Projects is a dynamic studio dedicated to crafting immersive digital experiences.
                        We blend creativity with cutting-edge technology to create events and partnerships that leave a lasting impact.
                        Our mission is to turn every interaction into a meaningful connection.
                    </p>
                </div>

                {/* Team Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2"
                        >
                            <div className="flex flex-col items-center text-center space-y-6">
                                {/* Image Wrapper */}
                                <div className="relative w-40 h-40">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-20" />
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="relative w-full h-full object-cover rounded-2xl shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div className="space-y-2">
                                    <div className="text-blue-600 font-bold text-sm uppercase tracking-widest">
                                        {member.role}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        {member.name}
                                    </h3>
                                </div>

                                {/* Contact Info */}
                                <div className="w-full pt-6 border-t border-gray-100 space-y-3">
                                    <a
                                        href={`mailto:${member.contact}`}
                                        className="flex items-center justify-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span className="font-medium">{member.contact}</span>
                                    </a>
                                    <div className="flex items-center justify-center gap-2 text-gray-500">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <span>{member.phone}</span>
                                    </div>
                                </div>

                                {/* CTA */}
                                <button className="w-full py-3 bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-semibold rounded-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                                    Get in Touch
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
