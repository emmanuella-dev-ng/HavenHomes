function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <p className="hero-subtitle">WELCOME TO HAVENHOMES</p>

                <h1>
                    Find Your Place,<br />Feel at Home.
                </h1>

                <p className="hero-description">
                    Discover beautiful properties across the world.
                    Whether you're buying or renting, your perfect space starts here.
                </p>

                <div className="hero-buttons">
                    <a href="#properties" className="primary-btn">Expore Properties</a>
                    <a href="#about" className="secondary-btn">Learn More</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;