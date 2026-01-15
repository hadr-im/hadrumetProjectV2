const About = () => {
    return (
        <section id="about" className="py-16 sm:py-20 bg-white text-black">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center px-4">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">About TULD'S</h2>
                    <p className="text-base sm:text-lg">
                        TULD’S National Conference brings together youth from all regions of Tunisia for leadership, networking, and inspiration. Over 3 days, participants engage in sessions, workshops, and interactive experiences designed to empower the next generation.
                    </p>
                </div>
                <img
                    src="https://carthagemagazine.com/wp-content/uploads/2019/12/AIESEC-in-Tunisia-1.jpg"
                    alt="About TULD'S"
                    className="w-full rounded shadow-lg"
                />
            </div>
        </section>
    )
}

export default About
