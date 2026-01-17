import { Wrench, Battery, Zap, Droplet, Smartphone, Speaker, Wifi, Camera, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import db from '../data/db.json';

const iconMap = {
    Smartphone,
    Battery,
    Zap,
    Droplet,
    Camera,
    Speaker,
    Wifi,
    Database
};

const Services = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Our Capabilities</h2>
                    <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Everything Your Phone Needs
                    </p>
                    <p className="max-w-xl mx-auto mt-5 text-xl text-gray-500">
                        From simple screen swaps to complex board-level diagnostics, we handle it all.
                    </p>
                </div>

                <div className="mt-16">
                    {db.services.map((category, idx) => (
                        <div key={idx} className="mb-16">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">{category.category}</h3>
                            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                {category.items.map((service) => {
                                    const IconComponent = iconMap[service.icon] || Smartphone;
                                    return (
                                        <div key={service.name} className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-auto mb-4">
                                                <div className="p-3 bg-blue-50 rounded-lg inline-block">
                                                    <IconComponent className="h-8 w-8 text-blue-600" />
                                                </div>
                                            </div>
                                            <div className="mt-4 flex justify-between">
                                                <div>
                                                    <h3 className="text-lg font-medium text-gray-900">
                                                        <Link to="/book">
                                                            <span aria-hidden="true" className="absolute inset-0" />
                                                            {service.name}
                                                        </Link>
                                                    </h3>
                                                    <p className="mt-1 text-sm text-gray-500">{service.description}</p>
                                                </div>
                                            </div>
                                            <div className="mt-4 flex justify-between items-center text-sm">
                                                <span className="font-semibold text-gray-900">{service.price}</span>
                                                <span className="text-gray-500 flex items-center gap-1">
                                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                                    {service.duration}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl font-extrabold text-white">Don't see your issue?</h2>
                    <p className="mt-4 text-lg text-blue-100 mb-8">
                        We can likely fix it. Contact our expert technicians for a free consultation.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-white py-3 px-8 border border-transparent rounded-md text-base font-medium text-blue-600 hover:bg-blue-50"
                    >
                        Contact Support
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Services;
