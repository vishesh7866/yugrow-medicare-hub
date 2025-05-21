
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
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasPlayedAudio, setHasPlayedAudio] = useState(false);

  // Predefined quick questions for users to click
  const quickQuestions = [
    "How do I partner with Yugrow?",
    "Where is your warehouse located?",
    "What are your business hours?",
    "How to contact customer support?",
    "Do you offer home delivery?",
    "What is your return policy?"
  ];

  const toggleChat = () => {
    setIsOpen(prev => {
      const newIsOpen = !prev;
      
      // Play audio when chat is opened, but only once
      if (newIsOpen && !hasPlayedAudio) {
        playAudio();
        setHasPlayedAudio(true);
      } else if (!newIsOpen) {
        // Stop audio when chat is closed
        stopAudio();
      }
      
      return newIsOpen;
    });
  };

  const playAudio = () => {
    try {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(err => {
          console.log("Audio play failed:", err);
        });
      }
    } catch (err) {
      console.log("Error playing audio:", err);
    }
  };

  const stopAudio = () => {
    try {
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    } catch (err) {
      console.log("Error stopping audio:", err);
    }
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
    
    // Hide suggestions after user asks a question
    setShowSuggestions(false);
    
    // Show typing indicator
    setIsTyping(true);
    
    // Enhanced bot responses based on keywords
    setTimeout(() => {
      setIsTyping(false);
      const userInput = input.toLowerCase();
      
      // Find matching response based on keywords
      const response = findResponse(userInput);
      
      setMessages(prev => [...prev, { text: response, isUser: false }]);
      
      // Show suggestions again after bot responds
      setTimeout(() => {
        setShowSuggestions(true);
      }, 1000);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickQuestionClick = (question: string) => {
    setInput(question);
    setMessages(prev => [...prev, { text: question, isUser: true }]);
    
    // Hide suggestions after clicking a quick question
    setShowSuggestions(false);
    
    // Show typing indicator
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      const response = findResponse(question.toLowerCase());
      setMessages(prev => [...prev, { text: response, isUser: false }]);
      
      // Show suggestions again after bot responds
      setTimeout(() => {
        setShowSuggestions(true);
      }, 1000);
    }, 1000);
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
      // Partnership
      { keywords: ["partner", "franchise", "business opportunity", "collaboration", "how do i partner", "become a partner"],
        response: "We offer excellent partnership opportunities! To partner with Yugrow Pharmacy, please email us at partners@yugrowpharmacy.com or visit our 'Partner With Us' page on the website. Our business development team will contact you within 48 hours with details about our franchise model, investment requirements, and expected returns." },
      
      // Warehouse Location
      { keywords: ["warehouse", "where is", "location of warehouse", "storage facility"],
        response: "Our main warehouse is located at: 1346/14, Gala No. R-108, 1st Floor, Jai Matadi Compound, Kalher, Thane, Bhiwandi - 421 302, Maharashtra, India. We also have regional distribution centers in key metros across India." },
      
      // Business Hours
      { keywords: ["business hour", "opening hour", "timing", "when open", "when close"], 
        response: "Yugrow Pharmacy is open Monday to Saturday from 9:00 AM to 9:00 PM, and Sunday from 10:00 AM to 7:00 PM. Our customer service team is available during these hours to assist with your queries." },
      
      // Contact Info
      { keywords: ["contact", "phone", "call", "number", "email", "customer support", "helpline"],
        response: "You can reach our customer support team at +91 80970 74455 or email us at prm@yugrowpharmacy.com. For urgent medication needs, our emergency helpline is available 24/7 at +91 80970 74499." },
      
      // Delivery
      { keywords: ["delivery", "home delivery", "shipping", "ship to", "deliver"],
        response: "Yes, we offer home delivery services! We deliver medications right to your doorstep. Delivery is free for orders above ₹500 and typically takes 24-48 hours depending on your location. Same-day delivery is available in select cities for orders placed before 1 PM." },
      
      // Returns
      { keywords: ["return", "refund", "exchange", "policy"],
        response: "For safety reasons, we cannot accept returns on dispensed medications. Please check your order carefully before leaving our store or accepting delivery. Unopened medical devices and equipment may be eligible for exchange within 7 days if in original packaging. For quality issues, please contact our customer service within 24 hours." },
      
      // Generic Medicines
      { keywords: ["generic", "alternative", "cheaper", "affordable", "low cost", "price difference"],
        response: "Yugrow Pharmacy specializes in high-quality, affordable generic medicines. Our products are 30-80% lower in price compared to branded alternatives while maintaining the same quality and efficacy. We source directly from WHO-GMP certified manufacturers to ensure quality." },
      
      { keywords: ["generic safe", "quality generic", "trust generic", "generic effective"],
        response: "Yes, our generic medicines are completely safe and effective. They contain the same active ingredients as branded medications and are approved by DCGI and other regulatory authorities. We only source from WHO-GMP certified manufacturers and conduct additional quality checks." },
      
      { keywords: ["difference generic brand", "branded vs generic", "why generic cheaper"],
        response: "Generic medicines are more affordable because manufacturers don't have to invest in research and development or extensive marketing like branded medications. They contain the same active ingredients and must meet the same quality standards. At Yugrow, we pass these cost savings directly to our customers." },
      
      // Prescriptions
      { keywords: ["prescription", "doctor prescription", "need prescription", "without prescription"],
        response: "For prescription medications, we require a valid prescription from a registered medical practitioner. You can upload or send us your prescription via WhatsApp or email before ordering prescription medicines. We maintain digital records of your prescriptions for easy refills." },
      
      { keywords: ["refill", "renew prescription", "repeat prescription"],
        response: "We offer easy prescription refills. You can use our website, app, or send us a message with your previous prescription details, and we'll handle your refill promptly. Set up auto-refill reminders so you never run out of important medications." },
      
      { keywords: ["transfer prescription", "move prescription"],
        response: "We make transferring your prescriptions easy. Simply provide us with your current pharmacy's details and prescription information, and we'll handle the transfer process for you. Our team will coordinate with your current pharmacy and ensure a smooth transition." },
      
      // Product Availability
      { keywords: ["available", "in stock", "out of stock", "have this medicine", "medicine availability"],
        response: "Please specify the medicine you're looking for, and I'll check its availability for you. We maintain a comprehensive inventory of commonly prescribed medications and can procure specialty medicines within 24-48 hours. You can also check real-time availability on our website or app." },
      
      { keywords: ["brand", "specific brand", "particular brand"],
        response: "We carry most major pharmaceutical brands. If you're looking for a specific brand, please mention the name, and we'll check availability or suggest generic alternatives if appropriate. We partner with over 200 pharmaceutical companies to ensure wide brand coverage." },
      
      // Health Conditions & Medications
      { keywords: ["diabetes", "diabetic", "blood sugar", "insulin", "metformin", "glimepiride"],
        response: "We stock a complete range of diabetes medications, including insulin products, oral antidiabetics, blood glucose monitoring supplies, and diabetes management tools. We also offer consultations on proper medication use and storage. Our diabetes care packages include regular monitoring reminders and educational materials." },
      
      { keywords: ["heart", "cardiac", "blood pressure", "hypertension", "cholesterol"],
        response: "Our pharmacy carries comprehensive cardiovascular medications, including antihypertensives, statins, anticoagulants, and other heart health medications. We also provide blood pressure monitoring services and heart health educational materials for better medication adherence." },
      
      { keywords: ["pain", "painkiller", "analgesic", "relief", "ache", "paracetamol", "ibuprofen"],
        response: "We offer various pain relief options, from over-the-counter analgesics to prescription pain management medications. Our pharmacists can help recommend appropriate options based on your specific needs and medical history to ensure safe and effective pain relief." },
      
      { keywords: ["antibiotic", "infection", "bacterial", "amoxicillin", "azithromycin", "doxycycline"],
        response: "Antibiotics require a valid prescription from a doctor. Please consult a healthcare professional before taking antibiotics, as improper use can lead to antibiotic resistance. We ensure all antibiotics dispensed are accompanied by proper usage instructions and completion reminders." },
      
      { keywords: ["skin", "dermatology", "cream", "ointment", "lotion", "rash", "acne"],
        response: "We stock a variety of dermatological products for different skin conditions, including prescription medications, over-the-counter treatments, and specialized skincare products. Our pharmacists can provide guidance on proper application and usage for optimal results." },
      
      { keywords: ["allergy", "allergic", "antihistamine", "cetirizine", "loratadine", "fexofenadine"],
        response: "Our pharmacy carries a wide range of allergy medications, including antihistamines, decongestants, and combination products. We can help you find the right option for your specific allergy symptoms, whether seasonal or chronic." },
      
      { keywords: ["cold", "flu", "cough", "fever", "congestion", "sore throat"],
        response: "We have numerous options for cold and flu relief, including symptom-specific treatments for cough, congestion, fever, and sore throat. Our pharmacists can recommend appropriate combinations based on your symptoms to help you feel better faster." },
      
      { keywords: ["vitamin", "supplement", "mineral", "multivitamin", "immunity"],
        response: "We offer a comprehensive range of vitamins, minerals, and dietary supplements for various health needs, including immunity support, bone health, cardiovascular health, and general wellness. Our pharmacists can help you choose products based on your specific health goals." },
      
      { keywords: ["stomach", "digestive", "antacid", "acid reflux", "heartburn", "constipation", "diarrhea", "indigestion"],
        response: "We have multiple options for digestive health, including antacids, acid reducers, laxatives, anti-diarrheals, and digestive aids. Our pharmacists can help you choose the appropriate product for your digestive concerns and provide guidance on lifestyle modifications." },
      
      { keywords: ["sleep", "insomnia", "sleeping aid", "melatonin", "drowsy"],
        response: "We carry various sleep aids, ranging from natural supplements like melatonin to prescription sleep medications. We recommend consulting with a healthcare provider for chronic sleep issues. Our pharmacists can also provide guidance on sleep hygiene practices." },
      
      { keywords: ["eye", "vision", "eye drop", "contact lens", "optical"],
        response: "We stock eye medications, lubricating eye drops, contact lens solutions, and eye care products. For specialized eye medication needs, please bring a prescription from your ophthalmologist. We offer detailed guidance on proper administration of eye medications." },
      
      { keywords: ["baby", "infant", "pediatric", "child", "children"],
        response: "We have a dedicated section for pediatric health, including baby formulas, children's medications, baby care products, and infant nutritional supplements. All properly dosed for children's safety with clear administration instructions for parents." },
      
      { keywords: ["women", "feminine", "menstrual", "pregnancy", "contraceptive", "birth control"],
        response: "We provide a full range of women's health products, including menstrual care, pregnancy tests, prenatal vitamins, contraceptives, and medications for women's health conditions. Our female pharmacists are available for private consultations on women's health issues." },
      
      { keywords: ["men", "masculine", "prostate", "testosterone", "erectile", "shaving"],
        response: "Our men's health section includes products for prostate health, personal care, shaving needs, and medications for specific men's health concerns. Prescription required for certain medications. We offer discreet packaging and consultation for sensitive men's health issues." },
      
      { keywords: ["elderly", "senior", "geriatric", "old age"],
        response: "We offer specialized support for elderly medication management, including pill organizers, easy-open packaging options, and guidance on medication interactions which are more common in seniors taking multiple medications. Our home delivery service is particularly beneficial for elderly patients." },
      
      // Insurance & Payment
      { keywords: ["insurance", "medical insurance", "health insurance", "coverage", "claim"],
        response: "We accept most major health insurance plans. Please bring your insurance card when visiting, and our team will help verify coverage for your medications. We also provide documentation for reimbursement claims if your insurer requires it." },
      
      { keywords: ["payment", "pay", "online payment", "credit card", "debit card", "cash on delivery", "upi"],
        response: "We accept multiple payment methods including credit cards, debit cards, UPI payments, net banking, and cash on delivery for your convenience. Digital payments are eligible for our loyalty program points which can be redeemed for discounts on future purchases." },
      
      { keywords: ["discount", "offer", "coupon", "promotion", "sale", "deal"],
        response: "We regularly offer discounts on various medications and health products. Ask about our current promotions, loyalty program, or bulk purchase discounts for recurring medications. Senior citizens and patients with chronic conditions are eligible for special discount programs." },
      
      // Services
      { keywords: ["service", "provide", "offering", "consultation", "counseling"],
        response: "Beyond medication dispensing, we offer medication counseling, health screenings, vaccination services, and personalized medication management consultations. Our pharmacists provide detailed medication usage instructions and potential side effect information with every prescription." },
      
      { keywords: ["health check", "screening", "test", "diagnostic"],
        response: "We provide basic health screening services such as blood pressure monitoring, blood glucose testing, and BMI assessments. Please visit our store for these services. We also partner with diagnostic labs for home collection of samples for more comprehensive testing." },
      
      { keywords: ["vaccine", "vaccination", "immunization", "flu shot", "covid"],
        response: "We offer vaccination services including flu shots, COVID-19 vaccines, and other adult immunizations. Please check with us for current vaccine availability and make an appointment for a quick and convenient vaccination experience." },
      
      // Specific Products
      { keywords: ["medical device", "equipment", "blood pressure monitor", "glucometer", "nebulizer"],
        response: "We stock various medical devices including blood pressure monitors, glucometers, nebulizers, and other home healthcare equipment. Our staff can demonstrate proper use and maintenance. We also provide calibration and maintenance services for these devices." },
      
      { keywords: ["first aid", "bandage", "antiseptic", "wound care"],
        response: "Our pharmacy carries comprehensive first aid supplies, including bandages, antiseptics, wound cleaning solutions, dressings, and first aid kits for home and travel. We can help you assemble a customized first aid kit based on your specific needs." },
      
      { keywords: ["herbal", "ayurvedic", "natural", "homeopathic", "alternative"],
        response: "We offer a selection of herbal medicines, Ayurvedic formulations, and natural health products alongside conventional medications to provide holistic healthcare options. Our pharmacists can provide guidance on potential interactions with conventional medications." },
      
      { keywords: ["covid", "corona", "pandemic", "mask", "sanitizer", "ppe"],
        response: "We maintain stocks of COVID-19 essentials including masks, sanitizers, immunity boosters, and home testing kits. We also provide vaccination services by appointment and can help you understand the latest COVID-19 guidelines and precautions." },
      
      // Business and Partnership
      { keywords: ["career", "job", "employment", "work", "vacancy", "position", "hiring"],
        response: "We regularly have openings for pharmacists, pharmacy assistants, delivery personnel, and other roles. Please visit the Careers section of our website for current opportunities and application details. We offer competitive compensation and growth opportunities." },
      
      { keywords: ["about", "company", "history", "background", "yugrow"],
        response: "Yugrow Pharmacy is a patient-focused pharmacy chain committed to providing high-quality, affordable medicines to all. Founded with a mission to make healthcare accessible, we specialize in generic medicines that offer significant cost savings without compromising on quality." },
      
      { keywords: ["mission", "vision", "value", "goal"],
        response: "Our mission is to provide accessible, affordable healthcare solutions to all. We envision a world where quality healthcare is not limited by financial constraints, and we value integrity, compassion, excellence, and innovation in everything we do." },
      
      { keywords: ["complaint", "feedback", "suggestion", "issue", "problem"],
        response: "We value your feedback and take complaints seriously. Please share details of your concern, and we'll ensure it reaches the appropriate department for prompt resolution. You can also email concerns to feedback@yugrowpharmacy.com. We aim to resolve all issues within 48 hours." },
      
      { keywords: ["app", "application", "mobile app", "download"],
        response: "Yes, we have a mobile app for easier ordering! Download the Yugrow Pharmacy app from Google Play Store or Apple App Store for convenient medicine ordering, prescription uploads, refill reminders, and health tips. The app also offers exclusive mobile-only discounts." },
      
      { keywords: ["website", "online", "order online"],
        response: "You can browse our products and place orders through our website at www.yugrowpharmacy.com. The site also features health articles, medication information, and online consultations. Create an account to save your prescriptions and medication history for faster reordering." },
      
      // Regulatory and Safety
      { keywords: ["expire", "expiration", "expiry", "shelf life"],
        response: "We strictly monitor medication expiry dates and ensure all products are well within their shelf life. Each medication package is labeled with its expiration date for your reference. We conduct regular inventory audits to remove products nearing expiration." },
      
      { keywords: ["side effect", "adverse reaction", "drug reaction"],
        response: "All medications may have potential side effects. Our pharmacists can provide information about common side effects of your medications and when to contact a doctor about adverse reactions. We also provide printed information sheets with important medications." },
      
      { keywords: ["drug interaction", "medication interaction", "medicine clash"],
        response: "Drug interactions can be serious. We recommend informing us of all medications you're taking so we can check for potential interactions before dispensing your prescriptions. Our system automatically flags potential interactions for pharmacist review." },
      
      { keywords: ["storage", "keep medicine", "preserve", "medicine storage"],
        response: "Most medications should be stored in a cool, dry place away from direct sunlight. Some require refrigeration. Our pharmacists provide specific storage instructions for each medication dispensed, and our packaging includes storage information icons for easy reference." },
      
      { keywords: ["authenticate", "genuine", "real", "fake", "counterfeit"],
        response: "All our medicines are sourced from licensed manufacturers and distributors. We maintain a secure supply chain and verification processes to ensure authenticity of all products we dispense. You can verify authenticity through batch number checking on manufacturer websites." },
      
      { keywords: ["license", "certification", "pharmacist", "registered", "qualification"],
        response: "Yugrow Pharmacy is fully licensed and our pharmacists are registered professionals with degrees in pharmacy and valid practicing licenses. Our operations comply with all pharmaceutical regulations and standards set by the Pharmacy Council of India." },
      
      // Specialized Services
      { keywords: ["chronic", "long term", "ongoing medication", "regular medicine"],
        response: "We offer specialized services for patients with chronic conditions, including automatic refill programs, medication adherence packaging, and regular check-ins to ensure your long-term medication needs are consistently met. Ask about our chronic care program for additional benefits." },
      
      { keywords: ["adherence", "compliance", "remember medicine", "forget dose", "medication reminder"],
        response: "To help with medication adherence, we offer pill organizers, medication charts, automated refill reminders, and our mobile app with scheduled dose reminders to help you stay on track with your treatment. Our packaging can be customized with time-of-day indicators for easier adherence." },
      
      { keywords: ["emergency", "urgent", "after hours", "immediate"],
        response: "For medication emergencies outside business hours, please call our emergency helpline at +91 80970 74499. For medical emergencies, please contact your local emergency services immediately. We maintain an emergency medication supply for critical needs." },
      
      { keywords: ["education", "awareness", "health information", "learn about medicine"],
        response: "We provide patient education materials about diseases, medications, and self-care. Our pharmacists also conduct regular health awareness sessions in-store and through our digital platforms. Subscribe to our newsletter for monthly health tips and medication information." },
      
      // COVID-specific
      { keywords: ["covid vaccine", "coronavirus vaccine", "covid-19 shot", "covid booster"],
        response: "We administer COVID-19 vaccines by appointment. Please check our website or call us for current vaccine availability, eligibility requirements, and to schedule your vaccination. We maintain all necessary cold chain requirements for vaccine efficacy." },
      
      { keywords: ["covid test", "coronavirus test", "rt-pcr", "rapid test", "antigen test"],
        response: "We stock COVID-19 home testing kits and can guide you on proper use. For RT-PCR tests, we can direct you to nearby testing facilities or home collection services. Results from rapid tests should be confirmed with RT-PCR if positive or if symptoms persist despite a negative result." },
      
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
      {/* Hidden audio element */}
      <audio 
        ref={audioRef} 
        src="/lovable-uploads/yugrowchatai.mp3" 
        preload="auto" 
      />
      
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
          "absolute bottom-20 right-0 w-80 md:w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 transform",
          "flex flex-col border border-border",
          isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"
        )}
        style={{ height: isOpen ? '500px' : '0', maxHeight: '80vh' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#076FD8] to-[#1E90FF] dark:from-[#FF7E3D] dark:to-[#FF9F55] p-5 text-white flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg flex items-center">
              <div className="h-3 w-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Yugrow Pharmacy
            </h3>
            <p className="text-xs opacity-90">How can we help you today?</p>
          </div>
          <button 
            onClick={toggleChat}
            className="text-white hover:bg-white/10 p-1 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto flex flex-col space-y-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={cn(
                "max-w-[85%] p-4 rounded-2xl shadow-sm animate-slide-up",
                message.isUser 
                  ? "bg-[#076FD8] dark:bg-[#FF7E3D] text-white self-end rounded-tr-none"
                  : "bg-white dark:bg-gray-700 dark:text-white self-start rounded-tl-none border border-gray-100 dark:border-gray-600"
              )}
              style={{ 
                animationDelay: `${index * 100}ms`,
                opacity: 0,
                animation: "fade-in 0.3s ease forwards"
              }}
            >
              <p className="text-sm">{message.text}</p>
              <span className="text-[10px] opacity-70 block text-right mt-1">
                {message.isUser ? 'You' : 'Yugrow Support'}
              </span>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex space-x-2 p-3 bg-white dark:bg-gray-700 self-start rounded-2xl max-w-[85%] animate-fade-in shadow-sm border border-gray-100 dark:border-gray-600">
              <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
            </div>
          )}
          
          {showSuggestions && messages.length < 5 && (
            <div className="pt-2 pb-1 animate-fade-in self-center">
              <p className="text-xs text-center text-gray-500 dark:text-gray-400 mb-2">Frequently asked questions:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {quickQuestions.map((question, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickQuestionClick(question)}
                    className="bg-white dark:bg-gray-700 text-[#076FD8] dark:text-[#FF7E3D] text-xs py-1.5 px-3 rounded-full shadow-sm border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors animate-scale-in whitespace-nowrap"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input */}
        <div className="p-4 border-t border-border bg-white dark:bg-gray-800">
          <div className="flex items-center bg-gray-50 dark:bg-gray-700 rounded-full overflow-hidden border border-gray-200 dark:border-gray-600 focus-within:border-[#076FD8] dark:focus-within:border-[#FF7E3D] transition-colors">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your question here..."
              className="flex-1 px-4 py-3 bg-transparent border-none focus:outline-none text-sm dark:text-white"
            />
            <Button 
              onClick={handleSend}
              className="rounded-full h-9 w-9 p-0 mr-1 bg-[#076FD8] hover:bg-[#0A4A8C] dark:bg-[#FF7E3D] dark:hover:bg-[#FF570A] flex items-center justify-center"
              disabled={input.trim() === ''}
            >
              <Send size={16} />
            </Button>
          </div>
          <div className="text-center mt-2">
            <p className="text-xs text-gray-400">Powered by Yugrow Pharmacy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
