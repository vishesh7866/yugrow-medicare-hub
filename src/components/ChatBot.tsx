
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([
    { text: "👋 Welcome to Yugrow Pharmacy! How can we assist you today?", isUser: false }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(prev => !prev);
  };

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (input.trim() === '') return;
    
    // Add user message
    setMessages(prev => [...prev, { text: input, isUser: true }]);
    setInput('');
    
    // Show typing indicator
    setIsTyping(true);
    
    // Enhanced bot responses based on keywords
    setTimeout(() => {
      setIsTyping(false);
      const userInput = input.toLowerCase();
      
      // Find matching response based on keywords
      const response = findResponse(userInput);
      
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Function to find appropriate response based on user input
  const findResponse = (input: string): string => {
    // Check for common greetings first
    if (/\b(hi|hello|hey|greetings)\b/i.test(input)) {
      return "Hello! Welcome to Yugrow Pharmacy! How can I assist you today?";
    }
    
    // Check for thank you messages
    if (/\b(thanks|thank you|thx)\b/i.test(input)) {
      return "You're welcome! Feel free to reach out if you need anything else. We're here to help with all your pharmacy needs.";
    }
    
    // Check for goodbye messages
    if (/\b(bye|goodbye|see you|talk later)\b/i.test(input)) {
      return "Thank you for chatting with us! Have a great day and remember, your health is our priority at Yugrow Pharmacy.";
    }

    // Comprehensive list of pharmacy-related queries and responses
    const queryResponses = [
      // General Pharmacy Questions
      { keywords: ["business hour", "opening hour", "timing", "when open", "when close"], 
        response: "Yugrow Pharmacy is open Monday to Saturday from 9:00 AM to 9:00 PM, and Sunday from 10:00 AM to 7:00 PM." },
      
      { keywords: ["location", "address", "where", "find you", "direction"], 
        response: "Our headquarters is located at: 1346/14, Gala No. R-108, 1st Floor, Jai Matadi Compound, Kalher, Thane, Bhiwandi - 421 302, Maharashtra, India." },
      
      { keywords: ["contact", "phone", "call", "number", "email"],
        response: "You can reach us at +91 80970 74455 or email us at prm@yugrowpharmacy.com. Our team is available to assist you during business hours." },
      
      { keywords: ["delivery", "home delivery", "shipping", "ship to", "deliver"],
        response: "Yes, we offer home delivery services! We deliver medications right to your doorstep. Delivery is free for orders above ₹500 and typically takes 24-48 hours depending on your location." },
      
      // Generic Medicines
      { keywords: ["generic", "alternative", "cheaper", "affordable", "low cost", "price difference"],
        response: "Yugrow Pharmacy specializes in high-quality, affordable generic medicines. Our products are 30-80% lower in price compared to branded alternatives while maintaining the same quality and efficacy." },
      
      { keywords: ["generic safe", "quality generic", "trust generic", "generic effective"],
        response: "Yes, our generic medicines are completely safe and effective. They contain the same active ingredients as branded medications and are approved by regulatory authorities." },
      
      { keywords: ["difference generic brand", "branded vs generic", "why generic cheaper"],
        response: "Generic medicines are more affordable because manufacturers don't have to invest in research and development or extensive marketing like branded medications. They contain the same active ingredients and must meet the same quality standards." },
      
      // Prescriptions
      { keywords: ["prescription", "doctor prescription", "need prescription", "without prescription"],
        response: "For prescription medications, we require a valid prescription from a registered medical practitioner. Please upload or send us your prescription via WhatsApp or email before ordering prescription medicines." },
      
      { keywords: ["refill", "renew prescription", "repeat prescription"],
        response: "We offer easy prescription refills. You can use our website, app, or send us a message with your previous prescription details, and we'll handle your refill promptly." },
      
      { keywords: ["transfer prescription", "move prescription"],
        response: "We make transferring your prescriptions easy. Simply provide us with your current pharmacy's details and prescription information, and we'll handle the transfer process for you." },
      
      // Product Availability
      { keywords: ["available", "in stock", "out of stock", "have this medicine", "medicine availability"],
        response: "Please specify the medicine you're looking for, and I'll check its availability for you. We maintain a comprehensive inventory of commonly prescribed medications and can procure specialty medicines within 24-48 hours." },
      
      { keywords: ["brand", "specific brand", "particular brand"],
        response: "We carry most major pharmaceutical brands. If you're looking for a specific brand, please mention the name, and we'll check availability or suggest generic alternatives if appropriate." },
      
      // Health Conditions & Medications
      { keywords: ["diabetes", "diabetic", "blood sugar", "insulin", "metformin", "glimepiride"],
        response: "We stock a complete range of diabetes medications, including insulin products, oral antidiabetics, blood glucose monitoring supplies, and diabetes management tools. We also offer consultations on proper medication use and storage." },
      
      { keywords: ["heart", "cardiac", "blood pressure", "hypertension", "cholesterol"],
        response: "Our pharmacy carries comprehensive cardiovascular medications, including antihypertensives, statins, anticoagulants, and other heart health medications. We also provide blood pressure monitoring services." },
      
      { keywords: ["pain", "painkiller", "analgesic", "relief", "ache", "paracetamol", "ibuprofen"],
        response: "We offer various pain relief options, from over-the-counter analgesics to prescription pain management medications. Our pharmacists can help recommend appropriate options based on your specific needs." },
      
      { keywords: ["antibiotic", "infection", "bacterial", "amoxicillin", "azithromycin", "doxycycline"],
        response: "Antibiotics require a valid prescription from a doctor. Please consult a healthcare professional before taking antibiotics, as improper use can lead to antibiotic resistance." },
      
      { keywords: ["skin", "dermatology", "cream", "ointment", "lotion", "rash", "acne"],
        response: "We stock a variety of dermatological products for different skin conditions, including prescription medications, over-the-counter treatments, and specialized skincare products." },
      
      { keywords: ["allergy", "allergic", "antihistamine", "cetirizine", "loratadine", "fexofenadine"],
        response: "Our pharmacy carries a wide range of allergy medications, including antihistamines, decongestants, and combination products. We can help you find the right option for your specific allergy symptoms." },
      
      { keywords: ["cold", "flu", "cough", "fever", "congestion", "sore throat"],
        response: "We have numerous options for cold and flu relief, including symptom-specific treatments for cough, congestion, fever, and sore throat. Our pharmacists can recommend appropriate combinations based on your symptoms." },
      
      { keywords: ["vitamin", "supplement", "mineral", "multivitamin", "immunity"],
        response: "We offer a comprehensive range of vitamins, minerals, and dietary supplements for various health needs, including immunity support, bone health, cardiovascular health, and general wellness." },
      
      { keywords: ["stomach", "digestive", "antacid", "acid reflux", "heartburn", "constipation", "diarrhea", "indigestion"],
        response: "We have multiple options for digestive health, including antacids, acid reducers, laxatives, anti-diarrheals, and digestive aids. Our pharmacists can help you choose the appropriate product for your digestive concerns." },
      
      { keywords: ["sleep", "insomnia", "sleeping aid", "melatonin", "drowsy"],
        response: "We carry various sleep aids, ranging from natural supplements like melatonin to prescription sleep medications. We recommend consulting with a healthcare provider for chronic sleep issues." },
      
      { keywords: ["eye", "vision", "eye drop", "contact lens", "optical"],
        response: "We stock eye medications, lubricating eye drops, contact lens solutions, and eye care products. For specialized eye medication needs, please bring a prescription from your ophthalmologist." },
      
      { keywords: ["baby", "infant", "pediatric", "child", "children"],
        response: "We have a dedicated section for pediatric health, including baby formulas, children's medications, baby care products, and infant nutritional supplements. All properly dosed for children's safety." },
      
      { keywords: ["women", "feminine", "menstrual", "pregnancy", "contraceptive", "birth control"],
        response: "We provide a full range of women's health products, including menstrual care, pregnancy tests, prenatal vitamins, contraceptives, and medications for women's health conditions." },
      
      { keywords: ["men", "masculine", "prostate", "testosterone", "erectile", "shaving"],
        response: "Our men's health section includes products for prostate health, personal care, shaving needs, and medications for specific men's health concerns. Prescription required for certain medications." },
      
      { keywords: ["elderly", "senior", "geriatric", "old age"],
        response: "We offer specialized support for elderly medication management, including pill organizers, easy-open packaging options, and guidance on medication interactions which are more common in seniors taking multiple medications." },
      
      // Insurance & Payment
      { keywords: ["insurance", "medical insurance", "health insurance", "coverage", "claim"],
        response: "We accept most major health insurance plans. Please bring your insurance card when visiting, and our team will help verify coverage for your medications." },
      
      { keywords: ["payment", "pay", "online payment", "credit card", "debit card", "cash on delivery", "upi"],
        response: "We accept multiple payment methods including credit cards, debit cards, UPI payments, net banking, and cash on delivery for your convenience." },
      
      { keywords: ["discount", "offer", "coupon", "promotion", "sale", "deal"],
        response: "We regularly offer discounts on various medications and health products. Ask about our current promotions, loyalty program, or bulk purchase discounts for recurring medications." },
      
      // Services
      { keywords: ["service", "provide", "offering", "consultation", "counseling"],
        response: "Beyond medication dispensing, we offer medication counseling, health screenings, vaccination services, and personalized medication management consultations." },
      
      { keywords: ["health check", "screening", "test", "diagnostic"],
        response: "We provide basic health screening services such as blood pressure monitoring, blood glucose testing, and BMI assessments. Please visit our store for these services." },
      
      { keywords: ["vaccine", "vaccination", "immunization", "flu shot", "covid"],
        response: "We offer vaccination services including flu shots, COVID-19 vaccines, and other adult immunizations. Please check with us for current vaccine availability." },
      
      { keywords: ["return", "refund", "exchange", "policy"],
        response: "For safety reasons, we cannot accept returns on dispensed medications. Please check your order carefully before leaving our store or accepting delivery. Unopened medical devices and equipment may be eligible for exchange under certain conditions." },
      
      // Specific Products
      { keywords: ["medical device", "equipment", "blood pressure monitor", "glucometer", "nebulizer"],
        response: "We stock various medical devices including blood pressure monitors, glucometers, nebulizers, and other home healthcare equipment. Our staff can demonstrate proper use and maintenance." },
      
      { keywords: ["first aid", "bandage", "antiseptic", "wound care"],
        response: "Our pharmacy carries comprehensive first aid supplies, including bandages, antiseptics, wound cleaning solutions, dressings, and first aid kits for home and travel." },
      
      { keywords: ["herbal", "ayurvedic", "natural", "homeopathic", "alternative"],
        response: "We offer a selection of herbal medicines, Ayurvedic formulations, and natural health products alongside conventional medications to provide holistic healthcare options." },
      
      { keywords: ["covid", "corona", "pandemic", "mask", "sanitizer", "ppe"],
        response: "We maintain stocks of COVID-19 essentials including masks, sanitizers, immunity boosters, and home testing kits. We also provide vaccination services by appointment." },
      
      // Business and Partnership
      { keywords: ["partner", "franchise", "business opportunity", "collaboration"],
        response: "Yugrow Pharmacy offers excellent partnership and franchise opportunities. Please visit our 'Partner With Us' page on the website or contact our business development team at partners@yugrowpharmacy.com for more information." },
      
      { keywords: ["career", "job", "employment", "work", "vacancy", "position", "hiring"],
        response: "We regularly have openings for pharmacists, pharmacy assistants, and other roles. Please visit the Careers section of our website for current opportunities and application details." },
      
      { keywords: ["about", "company", "history", "background", "yugrow"],
        response: "Yugrow Pharmacy is a patient-focused pharmacy chain committed to providing high-quality, affordable medicines to all. Founded with a mission to make healthcare accessible, we specialize in generic medicines that offer significant cost savings without compromising on quality." },
      
      { keywords: ["mission", "vision", "value", "goal"],
        response: "Our mission is to provide accessible, affordable healthcare solutions to all. We envision a world where quality healthcare is not limited by financial constraints, and we value integrity, compassion, excellence, and innovation in everything we do." },
      
      { keywords: ["complaint", "feedback", "suggestion", "issue", "problem"],
        response: "We value your feedback and take complaints seriously. Please share details of your concern, and we'll ensure it reaches the appropriate department for prompt resolution. You can also email concerns to feedback@yugrowpharmacy.com." },
      
      { keywords: ["app", "application", "mobile app", "download"],
        response: "Yes, we have a mobile app for easier ordering! Download the Yugrow Pharmacy app from Google Play Store or Apple App Store for convenient medicine ordering, prescription uploads, refill reminders, and health tips." },
      
      { keywords: ["website", "online", "order online"],
        response: "You can browse our products and place orders through our website at www.yugrowpharmacy.com. The site also features health articles, medication information, and online consultations." },
      
      // Regulatory and Safety
      { keywords: ["expire", "expiration", "expiry", "shelf life"],
        response: "We strictly monitor medication expiry dates and ensure all products are well within their shelf life. Each medication package is labeled with its expiration date for your reference." },
      
      { keywords: ["side effect", "adverse reaction", "drug reaction"],
        response: "All medications may have potential side effects. Our pharmacists can provide information about common side effects of your medications and when to contact a doctor about adverse reactions." },
      
      { keywords: ["drug interaction", "medication interaction", "medicine clash"],
        response: "Drug interactions can be serious. We recommend informing us of all medications you're taking so we can check for potential interactions before dispensing your prescriptions." },
      
      { keywords: ["storage", "keep medicine", "preserve", "medicine storage"],
        response: "Most medications should be stored in a cool, dry place away from direct sunlight. Some require refrigeration. Our pharmacists provide specific storage instructions for each medication dispensed." },
      
      { keywords: ["authenticate", "genuine", "real", "fake", "counterfeit"],
        response: "All our medicines are sourced from licensed manufacturers and distributors. We maintain a secure supply chain and verification processes to ensure authenticity of all products we dispense." },
      
      { keywords: ["license", "certification", "pharmacist", "registered", "qualification"],
        response: "Yugrow Pharmacy is fully licensed and our pharmacists are registered professionals with degrees in pharmacy and valid practicing licenses. Our operations comply with all pharmaceutical regulations and standards." },
      
      // Specialized Services
      { keywords: ["chronic", "long term", "ongoing medication", "regular medicine"],
        response: "We offer specialized services for patients with chronic conditions, including automatic refill programs, medication adherence packaging, and regular check-ins to ensure your long-term medication needs are consistently met." },
      
      { keywords: ["adherence", "compliance", "remember medicine", "forget dose", "medication reminder"],
        response: "To help with medication adherence, we offer pill organizers, medication charts, automated refill reminders, and our mobile app with scheduled dose reminders to help you stay on track with your treatment." },
      
      { keywords: ["emergency", "urgent", "after hours", "immediate"],
        response: "For medication emergencies outside business hours, please call our emergency helpline at +91 80970 74499. For medical emergencies, please contact your local emergency services immediately." },
      
      { keywords: ["education", "awareness", "health information", "learn about medicine"],
        response: "We provide patient education materials about diseases, medications, and self-care. Our pharmacists also conduct regular health awareness sessions in-store and through our digital platforms." },
      
      // COVID-specific
      { keywords: ["covid vaccine", "coronavirus vaccine", "covid-19 shot", "covid booster"],
        response: "We administer COVID-19 vaccines by appointment. Please check our website or call us for current vaccine availability, eligibility requirements, and to schedule your vaccination." },
      
      { keywords: ["covid test", "coronavirus test", "rt-pcr", "rapid test", "antigen test"],
        response: "We stock COVID-19 home testing kits and can guide you on proper use. For RT-PCR tests, we can direct you to nearby testing facilities or home collection services." },
      
      // Default response
      { keywords: ["default"],
        response: "How else can I help you with your pharmacy needs today? Feel free to ask about our medicines, services, generic alternatives, or any health-related queries." },
    ];

    // Try to find a matching response
    for (const item of queryResponses) {
      // Check if any keyword matches the user input
      if (item.keywords.some(keyword => input.includes(keyword))) {
        return item.response;
      }
    }

    // If no specific match is found, return a default response
    return "Thank you for your question. How can I assist with your pharmacy needs? You can ask about medications, prescription requirements, generic alternatives, deliveries, or any other healthcare queries.";
  };

  return (
    <div className="fixed bottom-4 right-6 z-40">
      <Button
        onClick={toggleChat}
        className={cn(
          "w-14 h-14 rounded-full shadow-lg flex items-center justify-center",
          "bg-[#076FD8] hover:bg-[#0A4A8C] dark:bg-[#FF7E3D] dark:hover:bg-[#FF570A] transition-all duration-300"
        )}
        aria-label="Chat with us"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>

      <div 
        className={cn(
          "absolute bottom-20 right-0 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all duration-300 transform",
          "flex flex-col border border-border",
          isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"
        )}
        style={{ height: isOpen ? '400px' : '0' }}
      >
        {/* Header */}
        <div className="bg-[#076FD8] dark:bg-[#FF7E3D] p-4 text-white">
          <h3 className="font-bold">Yugrow Pharmacy Support</h3>
          <p className="text-xs opacity-80">How can we help you today?</p>
        </div>
        
        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto flex flex-col space-y-3">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={cn(
                "max-w-[80%] p-3 rounded-lg animate-slide-up",
                message.isUser 
                  ? "bg-[#076FD8] dark:bg-[#FF7E3D] text-white self-end rounded-br-none"
                  : "bg-gray-100 dark:bg-gray-700 dark:text-white self-start rounded-bl-none"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {message.text}
            </div>
          ))}
          {isTyping && (
            <div className="flex space-x-2 p-3 bg-gray-100 dark:bg-gray-700 self-start rounded-lg max-w-[80%]">
              <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input */}
        <div className="p-3 border-t border-border flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#076FD8] dark:focus:ring-[#FF7E3D] dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
          <Button 
            onClick={handleSend}
            className="rounded-l-none bg-[#076FD8] hover:bg-[#0A4A8C] dark:bg-[#FF7E3D] dark:hover:bg-[#FF570A]"
            disabled={input.trim() === ''}
          >
            <Send size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
