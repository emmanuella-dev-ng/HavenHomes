import { useState} from "react";
const faqs = [
    {
        question: "How do i find a property on HavenHomes?",
        answer: "You can browse our property collection, use the search bar, and filter listings by category.",
    },
    {
        question: "Does HavenHomes offer properties for rent and sale?",
        answer: "Yes! We feature properties available for both rent and purchase.",
    },
    {
        question: "Which countries does HavenHomes cover?",
        answer: "We showcase properties across Nigeria, the UK, USA, Canada and UAE.",
    },
    {
        question: "How can i get more information about a property?",
        answer: "You can use the view details option on a property to explore more information.",
    },
    {
        question: "Can i contact HavenHomes for assistance?",
        answer: "Absolutely! Visit our contact section to send us an enquiry,"
    },
];
function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);
    return (
        <section id="faq" className="faq-section w-full bg-[#173b30] text-white py-24 px-[8%]">
            <div className="w-full flex flex-col items-center justify-center text-center mb-12">
                 <p className="section-subtitle text-sm font-semibold tracking-widest mb-4">GOT QUESTIONS?</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-base leading-relaxed opacity-80">
                    Find answers to some common questions about HavenHomes.
                </p>
            </div>
            <div className="w-full flex justify-center">
                <div className="faq-list w-full max-w-3xl flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <div className="faq-item self-center w-full bg-white/5 border border-white/10 rounded-xl overflow-hidden" key={index}>
                            <button className="faq-question w-full flex items-center justify-between gap-4 p-5 text-left font-semibold
                            text-white hover:bg-white/10 transition-colors"
                            onClick={() =>
                                setActiveIndex(
                                    activeIndex === index ? null : index
                                )
                            }
                            >
                                {faq.question}
                                <span>{activeIndex === index ? "-" : "+"}</span>
                            </button>
                            {activeIndex === index && (
                                <p className="faq-answer px-5 pb-5 text-white/80 leading-relaxed">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;