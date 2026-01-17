import { ArrowRight, CheckCircle, Shield, Clock, Phone, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.png';
import doorstepIcon from '../assets/doorstep.png';
import pickupIcon from '../assets/pickup.png';

const Home = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-sm font-medium mb-4">
                                    <Star className="w-4 h-4 mr-1 fill-current" />
                                    #1 Rated Mobile Repair Service
                                </div>
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">We Fix Your Phone</span>{' '}
                                    <span className="block text-blue-600 xl:inline">at Your Doorstep</span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Fast, reliable, and secure mobile repair service. Choose between our premium Doorstep Service where we come to you, or our convenient Pickup & Delivery.
                                </p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <Link
                                            to="/book"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                                        >
                                            Book a Repair
                                        </Link>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <Link
                                            to="/services"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                                        >
                                            View Services
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src={heroImage}
                        alt="Mobile Repair Technician"
                    />
                </div>
            </section>

            {/* How it Works / Service Modes */}
            <section id="how-it-works" className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Process</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Two Ways to Get Fixed
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            We designed our service around your busy life. Choose the option that suits you best.
                        </p>
                    </div>

                    <div className="mt-10">
                        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
                            {/* Card 1: Doorstep */}
                            <div className="relative bg-white pt-6 px-6 pb-12 rounded-xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-50 rounded-full opacity-50 blur-xl"></div>
                                <div className="relative">
                                    <div className="h-48 w-full flex items-center justify-center mb-6 bg-blue-50 rounded-lg">
                                        <img src={doorstepIcon} alt="Doorstep Service" className="h-40 object-contain" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Doorstep Repair</h3>
                                    <p className="mt-4 text-base text-gray-500">
                                        Our certified technician comes to your home, office, or coffee shop. Most repairs are done in under 45 minutes inside our specialized repair van.
                                    </p>
                                    <ul className="mt-6 space-y-3">
                                        <li className="flex items-start">
                                            <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" />
                                            <span className="ml-3 text-base text-gray-700">Repair at your location</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" />
                                            <span className="ml-3 text-base text-gray-700">100% Data Safe</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" />
                                            <span className="ml-3 text-base text-gray-700">Watch the repair happen</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Card 2: Pickup */}
                            <div className="relative bg-white pt-6 px-6 pb-12 rounded-xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-orange-50 rounded-full opacity-50 blur-xl"></div>
                                <div className="relative">
                                    <div className="h-48 w-full flex items-center justify-center mb-6 bg-orange-50 rounded-lg">
                                        <img src={pickupIcon} alt="Pickup Service" className="h-40 object-contain" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Pickup & Delivery</h3>
                                    <p className="mt-4 text-base text-gray-500">
                                        Can't meet us? We'll pick up your device, repair it at our state-of-the-art lab, and deliver it back to you—often on the same day.
                                    </p>
                                    <ul className="mt-6 space-y-3">
                                        <li className="flex items-start">
                                            <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" />
                                            <span className="ml-3 text-base text-gray-700">Free Pickup & Drop</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" />
                                            <span className="ml-3 text-base text-gray-700">Advanced Lab Diagnostics</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" />
                                            <span className="ml-3 text-base text-gray-700">Secure Transport Box</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats / Trust */}
            <section className="bg-blue-600">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                            Trusted by thousands of happy customers
                        </h2>
                        <p className="mt-3 text-xl text-blue-200 sm:mt-4">
                            We pride ourselves on transparency, quality parts, and rigorous testing.
                        </p>
                    </div>
                    <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
                        <div className="flex flex-col">
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-200">Repairs Completed</dt>
                            <dd className="order-1 text-5xl font-extrabold text-white">100k+</dd>
                        </div>
                        <div className="flex flex-col mt-10 sm:mt-0">
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-200">Satisfaction Rate</dt>
                            <dd className="order-1 text-5xl font-extrabold text-white">99.8%</dd>
                        </div>
                        <div className="flex flex-col mt-10 sm:mt-0">
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-200">Warranty (Months)</dt>
                            <dd className="order-1 text-5xl font-extrabold text-white">12</dd>
                        </div>
                    </dl>
                </div>
            </section>
        </div>
    );
};

export default Home;
