import React, { useState, useEffect } from "react";
import { Check, Send, Loader2 } from "lucide-react";

const events = [
    { id: "global-village", label: "Global Village" },
    { id: "meetup", label: "MeetupPro" },
    { id: "tulds", label: "TULDS" },
    { id: "long-term", label: "Long Term Partner" },
];

const BecomePartnerPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        organization: "",
        selectedEvents: [] as string[],
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleEventToggle = (eventId: string) => {
        setFormData((prev) => ({
            ...prev,
            selectedEvents: prev.selectedEvents.includes(eventId)
                ? prev.selectedEvents.filter((id) => id !== eventId)
                : [...prev.selectedEvents, eventId],
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setStatus("success");
        setFormData({
            name: "",
            email: "",
            organization: "",
            selectedEvents: [],
            message: "",
        });
    };

    if (status === "success") {
        return (
            <div className="min-h-screen pt-32 pb-12 flex items-center justify-center px-4 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-md w-full bg-white rounded-3xl p-10 shadow-2xl shadow-blue-500/10 border border-blue-50 text-center space-y-6 animate-fade-in">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                        <Check size={40} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Thank You!</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Your partnership inquiry has been received. Our team will get back to you shortly to discuss how we can work together.
                    </p>
                    <button
                        onClick={() => setStatus("idle")}
                        className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25"
                    >
                        Send Another Inquiry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-blue-400 opacity-10 blur-3xl rounded-full animate-pulse" />
                <div className="absolute top-1/2 -right-24 w-[500px] h-[500px] bg-cyan-400 opacity-10 blur-3xl rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-600 font-medium text-sm">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                        Partnership Opportunities
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
                        Become a <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Partner</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 font-light">
                        Join us in creating impactful experiences. Fill out the form below and let's explore how we can collaborate on our upcoming events.
                    </p>
                </div>

                <div className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-blue-900/5 border border-white/20">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Name */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all"
                                    value={formData.name}
                                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                />
                            </div>
                            {/* Email */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    placeholder="john@company.com"
                                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all"
                                    value={formData.email}
                                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                />
                            </div>
                        </div>

                        {/* Organization */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Organization / Company</label>
                            <input
                                required
                                type="text"
                                placeholder="Your Company Name"
                                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all"
                                value={formData.organization}
                                onChange={(e) => setFormData(prev => ({ ...prev, organization: e.target.value }))}
                            />
                        </div>

                        {/* Event Selection */}
                        <div className="space-y-4">
                            <label className="text-sm font-bold text-gray-700 ml-1">Which events are you interested in?</label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {events.map((event) => (
                                    <button
                                        key={event.id}
                                        type="button"
                                        onClick={() => handleEventToggle(event.id)}
                                        className={`flex items-center justify-between px-6 py-4 rounded-2xl border-2 transition-all duration-300 ${formData.selectedEvents.includes(event.id)
                                            ? "border-blue-600 bg-blue-50 text-blue-700 shadow-md"
                                            : "border-gray-100 bg-gray-50 text-gray-600 hover:border-blue-200"
                                            }`}
                                    >
                                        <span className="font-semibold">{event.label}</span>
                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${formData.selectedEvents.includes(event.id)
                                            ? "border-blue-600 bg-blue-600 text-white"
                                            : "border-gray-300 bg-white"
                                            }`}>
                                            {formData.selectedEvents.includes(event.id) && <Check size={14} strokeWidth={3} />}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Message / Inquiry</label>
                            <textarea
                                required
                                rows={4}
                                placeholder="Tell us more about your interest..."
                                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all resize-none"
                                value={formData.message}
                                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            disabled={status === "submitting"}
                            type="submit"
                            className="w-full py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:scale-100"
                        >
                            {status === "submitting" ? (
                                <>
                                    <Loader2 className="animate-spin" />
                                    Processing...
                                </>
                            ) : (
                                <>
                                    <Send size={20} />
                                    Submit Inquiry
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BecomePartnerPage;
