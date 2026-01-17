import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Get in touch</h1>
                    <p className="mt-4 text-lg text-gray-500">
                        Have a unique issue? Need a bulk repair quote for your business? We're here to help.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-50 text-blue-600">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <p className="text-lg font-medium text-gray-900">Phone</p>
                                    <p className="mt-1 text-gray-500">+1 (555) 123-4567</p>
                                    <p className="text-sm text-gray-400">Mon-Fri 8am to 8pm</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-50 text-blue-600">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <p className="text-lg font-medium text-gray-900">Email</p>
                                    <p className="mt-1 text-gray-500">support@quickfix.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-50 text-blue-600">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <p className="text-lg font-medium text-gray-900">Office</p>
                                    <p className="mt-1 text-gray-500">123 Tech Avenue<br />New York, NY 10001</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 rounded-lg overflow-hidden h-64 bg-gray-200">
                            {/* Placeholder for map */}
                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                Map View Integration
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Name </label>
                                <div className="mt-1">
                                    <input type="text" name="name" id="name" className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md border" placeholder="Your Name" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email </label>
                                <div className="mt-1">
                                    <input type="email" name="email" id="email" className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md border" placeholder="you@example.com" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700"> Message </label>
                                <div className="mt-1">
                                    <textarea id="message" name="message" rows="4" className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md border" placeholder="How can we help you?"></textarea>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Send Message <Send className="ml-2 w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
