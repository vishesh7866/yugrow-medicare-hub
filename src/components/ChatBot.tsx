
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
      let botResponse = "";
      const userInput = input.toLowerCase();
      
      if (userInput.includes("medicine") || userInput.includes("prescription") || userInput.includes("drugs")) {
        botResponse = "We offer a wide range of medicines. Please provide your prescription details or the medicine name, and we'll check availability and pricing for you.";
      } 
      else if (userInput.includes("order") || userInput.includes("delivery")) {
        botResponse = "We provide home delivery services. Please provide your address and the list of items you need, and we'll arrange for delivery as soon as possible.";
      }
      else if (userInput.includes("price") || userInput.includes("cost")) {
        botResponse = "Please specify the medicine or product you are interested in, and we'll provide you with the current price and any available discounts.";
      }
      else if (userInput.includes("contact") || userInput.includes("number") || userInput.includes("email")) {
        botResponse = "You can reach us at +91 80970 74455 or email us at prm@yugrowpharmacy.com. Our team is available to assist you.";
      }
      else if (userInput.includes("hello") || userInput.includes("hi") || userInput.includes("hey")) {
        botResponse = "Hello! Welcome to Yugrow Pharmacy! How can we help you today? Are you looking for specific medicines, information about our services, or something else?";
      }
      else if (userInput.includes("thank")) {
        botResponse = "You're welcome! Feel free to reach out if you need anything else. We're here to help with all your pharmacy needs.";
      }
      else if (userInput.includes("generic") || userInput.includes("affordable")) {
        botResponse = "Yugrow Pharmacy specializes in high-quality, affordable generic medicines. Our products are 30-80% lower in price compared to branded alternatives while maintaining the same quality and efficacy.";
      }
      else if (userInput.includes("location") || userInput.includes("address")) {
        botResponse = "Our headquarters is located at: 1346/14, Gala No. R-108, 1st Floor, Jai Matadi Compound, Kalher, Thane, Bhiwandi - 421 302, Maharashtra, India.";
      }
      else if (userInput.includes("partner") || userInput.includes("franchise")) {
        botResponse = "We offer excellent partnership and franchise opportunities. Please visit our 'Partner With Us' page for more information or contact our business development team.";
      }
      else {
        botResponse = "How can we help you with your pharmacy needs today? Are you looking for medicines, delivery options, or have a prescription? Feel free to ask about our products, services, or generic medicine advantages.";
      }
      
      setMessages(prev => [...prev, { text: botResponse, isUser: false }]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-6 z-40">
      <Button
        onClick={toggleChat}
        className={cn(
          "w-14 h-14 rounded-full shadow-lg flex items-center justify-center",
          "bg-[#076FD8] hover:bg-[#0A4A8C] dark:bg-[#FF7E3D] dark:hover:bg-[#FF570A] transition-all duration-300", 
          !isOpen && "animate-bounce"
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
