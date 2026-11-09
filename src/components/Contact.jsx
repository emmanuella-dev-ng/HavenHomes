import { useState } from "react";

function Contact() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        e.target.reset();
    }

    return (
        <setion id="contact" className="contact w-full">
            <div className="w-full bg-[#101814] text-white py-24 px-[8%]">
                
                <div className="max-w-6xl mx-6 grid md:grid-cols-2 gap-12 md:mx-10">
                    
                    <div>
                        <p className="text-[#D4AF37] text-sm font-semibold tracking-widest mb-4">GET IN TOUCH</p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Find Your Perfect Place</h2>
                        <p className="text-white/70 leading-relaxed mb-8">
                        Have questions or need help finding your dream property?
                        Our team is ready to assist you.
                        </p>

                        <div className="space-y-5">
                        <p>&#128205; Nigeria, UK, USA, Canada & UAE</p>
                        <p>&#9993; hello@havenhomes.com</p>
                        <p>&#9742; Contact our team for more enquiries</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}
                    className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl space-y-5">
                    <input
                    type="text"
                    placeholder="Your Name" required
                    className="w-full p-4 rounded-lg bg-[#F5F0E6] text-[#173b30] outline-none focus:ring-2 focus:ring-[#D4AF37]"/>
                    <input
                    type="email"
                    placeholder="Your Email" required
                    className="w-full p-4 rounded-lg bg-[#F5F0E6] text-[#173b30] outline-none focus:ring-2 focus:ring-[#D4AF37]"/>
                    <input
                    type="text"
                    placeholder="Subject" required
                    className="w-full p-4 rounded-lg bg-[#F5F0E6] text-[#173b30] outline-none focus:ring-2 focus:ring-[#D4AF37]"/>
                    <textarea
                    placeholder="Your Message"
                    rows={5} required
                    className="w-full p-4 rounded-lg bg-[#F5F0E6] text-[#173b30] outline-none resize-none focus:ring-2 focus:ring-[#D4AF37]"/>
                    <button
                    type="submit"
                    className="w-full bg-[#D4AF37] text-[#173b30] font-semibold py-4 rounded-lg hover:bg-white transition-colors">
                        Send Message
                    </button>
                    {submitted && (
                        <p className="text-green-300 text-center">
                            Thank you! Your message has been submited.
                        </p>
                    )}
                    </form>
                </div>
            </div>
        </setion>
    );
}

export default Contact;