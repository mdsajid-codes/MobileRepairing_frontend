import { MessageCircle, Phone, X } from 'lucide-react';
import { useState } from 'react';

const FloatingSupport = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            {/* Expanded Menu */}
            {isOpen && (
                <div className="bg-white rounded-lg shadow-xl p-4 mb-2 animate-fadeIn border border-gray-100 min-w-[200px]">
                    <p className="text-gray-500 text-sm mb-3 font-medium">How can we help?</p>
                    <div className="space-y-3">
                        <a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors"
                        >
                            <div className="p-2 bg-green-50 rounded-full">
                                <MessageCircle className="w-5 h-5 text-green-600" />
                            </div>
                            <span className="font-medium">WhatsApp Us</span>
                        </a>
                        <a
                            href="tel:+919876543210"
                            className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            <div className="p-2 bg-blue-50 rounded-full">
                                <Phone className="w-5 h-5 text-blue-600" />
                            </div>
                            <span className="font-medium">Call Support</span>
                        </a>
                    </div>
                </div>
            )}

            {/* Main Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${isOpen ? 'bg-gray-800 rotate-90' : 'bg-blue-600 hover:bg-blue-700'
                    }`}
            >
                {isOpen ? (
                    <X className="w-6 h-6 text-white" />
                ) : (
                    <MessageCircle className="w-7 h-7 text-white" />
                )}
            </button>
        </div>
    );
};

export default FloatingSupport;
