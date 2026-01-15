const Stats = () => {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-black text-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 text-center px-4">

                {/* Card 1 */}
                <div className="flex flex-col items-center">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold">+800</span>
                    <p className="mt-2 text-xs sm:text-sm uppercase tracking-wide">
                        Participants
                    </p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold">All Regions</span>
                    <p className="mt-2 text-xs sm:text-sm uppercase tracking-wide">
                        Youth from Tunisia
                    </p>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold">+3</span>
                    <p className="mt-2 text-xs sm:text-sm uppercase tracking-wide">
                        Days Conference
                    </p>
                </div>

                {/* Card 4 */}
                <div className="flex flex-col items-center">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold">+50</span>
                    <p className="mt-2 text-xs sm:text-sm uppercase tracking-wide">
                        Internationals
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Stats
