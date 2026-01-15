import { useState } from "react"

const Button = ({ text, outline = false, onClick }: { text: string; outline?: boolean; onClick?: () => void }) => (
    <button
        onClick={onClick}
        className={
            outline
                ? "px-6 py-3 border border-white text-white rounded hover:bg-white hover:text-black transition cursor-pointer"
                : "px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition cursor-pointer"
        }
    >
        {text}
    </button>
)

const TuldsHero = () => {
    const [showVideo, setShowVideo] = useState(false)

    const handleWatchRecap = () => {
        setShowVideo(true)
    }

    const handleLearnMore = () => {
        const aboutSection = document.getElementById("about")
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <>
            {/* Video Modal */}
            {showVideo && (
                <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4">
                    <div className="relative w-full max-w-4xl">
                        <button
                            onClick={() => setShowVideo(false)}
                            className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300 z-10"
                        >
                            ✕
                        </button>
                        <div className="aspect-video w-full">
                            <iframe
                                className="w-full h-full rounded shadow-2xl"
                                src="https://www.youtube.com/embed/IlwSNF_8G4c?autoplay=1&controls=1"
                                allow="autoplay; fullscreen"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                {/* Video Background with Blur */}
                <div className="absolute inset-0 blur-sm scale-110">
                    <iframe
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        src="https://www.youtube.com/embed/IlwSNF_8G4c?autoplay=1&mute=1&loop=1&playlist=IlwSNF_8G4c&controls=0&modestbranding=1&showinfo=0&rel=0"
                        allow="autoplay; fullscreen"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
                    <div className="animate-fade-in-up">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                            TULD'S <span className="text-blue-500">National</span> Conference
                        </h1>
                        <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-light text-gray-200">
                            See you in April
                        </p>
                        <div className="mt-10 flex gap-4 flex-wrap justify-center">
                            <Button text="Watch Recap" onClick={handleWatchRecap} />
                            <Button text="Learn More" outline onClick={handleLearnMore} />
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
        </>
    )
}

export default TuldsHero
