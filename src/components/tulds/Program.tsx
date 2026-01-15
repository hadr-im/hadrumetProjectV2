import { Users, Presentation, Handshake, Globe } from "lucide-react"

const program = [
    { icon: <Users size={32} />, title: "Leadership Sessions" },
    { icon: <Presentation size={32} />, title: "Workshops" },
    { icon: <Handshake size={32} />, title: "Networking Spaces" },
    { icon: <Globe size={32} />, title: "World’s Largest Lesson" },
]

const Program = () => {
    return (
        <section className="py-16 sm:py-20 bg-gray-100 text-black">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-center">Program</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
                    {program.map((item, index) => (
                        <div key={index} className="flex flex-col items-center bg-white p-6 rounded shadow hover:shadow-lg transition text-center">
                            <div className="text-blue-600">
                                {item.icon}
                            </div>
                            <h3 className="mt-4 font-bold">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Program
