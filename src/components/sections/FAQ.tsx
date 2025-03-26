
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What are generic medicines?",
      answer: "Generic medicines are bioequivalent to their branded counterparts but are sold at a much lower price. They contain the same active ingredients, dosage, safety, strength, quality, performance, and intended use as branded medicines."
    },
    {
      question: "How do Yugrow Pharmacy's medicines compare to branded ones?",
      answer: "All our medicines are WHO-GMP certified and manufactured under stringent quality control. They contain the same active ingredients as branded medicines, but are priced 30-80% lower, making them a cost-effective alternative without compromising on quality."
    },
    {
      question: "How can I become a Yugrow franchise partner?",
      answer: "You can apply for a franchise partnership by visiting our 'Partner With Us' page or by contacting us directly. We offer comprehensive support including location selection, store setup, inventory management, marketing, and ongoing operational assistance."
    },
    {
      question: "What is the investment required for a Yugrow franchise?",
      answer: "The investment varies based on location and store size, but typically ranges from ₹5-10 lakhs. This includes franchise fee, store setup, initial inventory, and marketing costs. We offer flexible payment options and support to help you get started."
    },
    {
      question: "Does Yugrow Pharmacy provide medicines for all health conditions?",
      answer: "Yes, we offer a comprehensive range of generic medicines covering most therapeutic categories including cardiovascular, diabetic, neurological, gastrointestinal, antibiotics, antivirals, and many more. We're continuously expanding our product range to meet diverse healthcare needs."
    }
  ];

  return (
    <section className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Get answers to the most common questions about our medicines and franchise opportunities.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <AccordionTrigger className="text-left font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
