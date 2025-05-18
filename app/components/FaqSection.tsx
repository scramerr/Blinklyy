import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
    return (
        <section id="faq" className="max-w-4xl mx-auto py-20 px-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
                Got <span className="text-pink-500">Questions?</span> We Got Answers.
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((item, idx) => (
                    <AccordionItem
                        key={idx}
                        value={`faq-${idx}`}
                        className={`rounded-xl overflow-hidden shadow-xl backdrop-blur-md transition-all duration-300 border-none text-left ${gradientStyles[idx % gradientStyles.length]
                            }`}
                    >
                        <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-gray-900 dark:text-white">
                            {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 pt-0 text-gray-700 dark:text-gray-300">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}

            </Accordion>
        </section>
    )
}

const faqData = [
    {
        question: "Is blinklyy free to use?",
        answer: "Yes! blinklyy offers a free plan with everything you need. Upgrade anytime for more features.",
    },
    {
        question: "Can I customize my page?",
        answer: "Totally. Drag, drop, and vibe your page with our stylish themes and aesthetic presets.",
    },
    {
        question: "Does it support link analytics?",
        answer: "Yep! Track every click in real-time and know exactly what’s working.",
    },
    {
        question: "Can I share my page on TikTok or Instagram?",
        answer: "Absolutely. blinklyy pages are optimized for every platform — just copy your link and share!",
    },
]

const gradientStyles = [
    "bg-gradient-to-br from-pink-200 via-pink-100 to-white",
    "bg-gradient-to-br from-blue-200 via-blue-100 to-white",
    "bg-gradient-to-br from-purple-200 via-violet-100 to-white",
    "bg-gradient-to-br from-yellow-100 via-orange-100 to-white",
    "bg-gradient-to-br from-green-200 via-lime-100 to-white",
  ]
  
