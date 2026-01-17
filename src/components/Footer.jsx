import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold">
                                Quick<span className="text-blue-500">Fix</span>
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Professional mobile repair service at your doorstep using premium quality parts. Fast, reliable, and guaranteed.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-200">Our Services</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link to="/services" className="hover:text-blue-500 transition-colors">Screen Replacement</Link></li>
                            <li><Link to="/services" className="hover:text-blue-500 transition-colors">Battery Replacement</Link></li>
                            <li><Link to="/services" className="hover:text-blue-500 transition-colors">Charging Port Fix</Link></li>
                            <li><Link to="/services" className="hover:text-blue-500 transition-colors">Water Damage Repair</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-200">Contact Us</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-blue-500" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-blue-500" />
                                <span>support@quickfix.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin className="w-4 h-4 text-blue-500" />
                                <span>123 Tech Avenue, NY 10001</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-200">Stay Updated</h3>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                            />
                            <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2024 QuickFix. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
