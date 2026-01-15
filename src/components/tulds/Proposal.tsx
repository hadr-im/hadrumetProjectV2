const Proposal = () => {
    return (
        <section className="py-16 sm:py-20 bg-white text-black text-center px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Proposal</h2>
            <div className="w-full max-w-4xl mx-auto">
                <iframe
                    src="https://www.canva.com/design/DAG6Mv26Xnc/TDD_3SZCj826ur0fSPZfAw/view?embed"
                    className="w-full rounded shadow"
                    style={{ height: "clamp(300px, 60vh, 600px)" }}
                    allowFullScreen
                    loading="lazy"
                    frameBorder="0"
                    scrolling="yes"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
                ></iframe>
            </div>
        </section>
    )
}

export default Proposal
