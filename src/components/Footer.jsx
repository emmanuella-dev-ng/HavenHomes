function Footer() {
    return (
        <footer className="footer w-full bg-[#173b30] text-white px-5 sm:px-8 lg:px-[8%] py-12">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12">
                    <div>
                        <a href="#home" className="text-2xl font-bold">Haven<span className="text-[#D4AF37]">Homes.</span></a>
                        <p className="text-white/70 mt-4 leading-relaxed">
                        Find Your Place, Feel at Home.
                        Discover beautiful properties and find a place that fill like yours.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
                        <ul className="space-y-3 text-white/70">
                        <li><a href="#home" className="hover:text-[#D4AF37]">Home</a></li>
                        <li><a href="#about" className="hover:text-[#D4AF37]">About</a></li>
                        <li><a href="#properties" className="hover:text-[#D4AF37]">Properties</a></li>
                        <li><a href="#faq" className="hover:text-[#D4AF37]">FAQ</a></li>
                        <li><a href="#contact" className="hover:text-[#D4AF37]">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-5">Get in Touch</h3>
                        <p className="text-white/70 mb-3">hello@havenhomes.com</p>
                        <p className="text-white/70">Nigeria | UK | USA | Canada | UAE</p>
                    </div>

                </div>
                <div className="border-t border-white/20 pt-6 text-center text-sm text-white/60">&copy; 2026 HavenHomes. All rights reserved</div>
            </div>
        </footer>
    );
}

export default Footer;