import { useState } from 'react';
import { Search, Package, Wrench, Truck, CheckCircle, Clock } from 'lucide-react';
import db from '../data/db.json';

const Tracking = () => {
    const [orderId, setOrderId] = useState('');
    const [status, setStatus] = useState(null);
    const [error, setError] = useState('');

    const handleTrack = (e) => {
        e.preventDefault();
        setError('');
        setStatus(null);

        const foundOrder = db.orders.find(o => o.id === orderId);

        if (foundOrder) {
            setStatus(foundOrder);
        } else {
            setError('Order not found. Try 123, 456, or 789.');
        }
    };

    const steps = [
        { id: 1, name: "Order Received", icon: Package, time: "10:30 AM" },
        { id: 2, name: "Device Picked Up", icon: Truck, time: "11:15 AM" },
        { id: 3, name: "Repair in Progress", icon: Wrench, time: "In Progress" },
        { id: 4, name: "Quality Check", icon: CheckCircle, time: "Pending" },
        { id: 5, name: "Out for Delivery", icon: Truck, time: "Pending" },
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-extrabold text-gray-900">Track Your Repair</h1>
                    <p className="mt-2 text-gray-600">Enter your Order ID to see real-time status.</p>
                </div>

                {/* Search Box */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <form onSubmit={handleTrack} className="flex gap-4">
                        <div className="relative flex-grow">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter Order ID (e.g., 123)"
                                value={orderId}
                                onChange={(e) => setOrderId(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center"
                        >
                            Track
                        </button>
                    </form>
                    {error && <p className="text-red-500 text-sm mt-2 ml-1">{error}</p>}
                </div>

                {/* Status Result */}
                {status && (
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fadeIn">
                        <div className="bg-blue-600 p-6 text-white flex justify-between items-center">
                            <div>
                                <h2 className="text-xl font-bold">Order #{status.id}</h2>
                                <p className="text-blue-100 text-sm mt-1">{status.device} • {status.service}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-blue-200 text-xs uppercase tracking-wide">Estimated Delivery</p>
                                <p className="font-bold text-lg">{status.estimatedDelivery}</p>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="relative">
                                {/* Vertical line for desktop */}
                                <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" aria-hidden="true"></div>

                                <ul className="space-y-8 relative">
                                    {steps.map((step, index) => {
                                        const isCompleted = step.id < status.currentStep;
                                        const isCurrent = step.id === status.currentStep;

                                        return (
                                            <li key={step.id} className="relative flex items-center md:items-start group">
                                                {/* Icon */}
                                                <div className={`flex items-center justify-center w-16 h-16 rounded-full border-4 z-10 bg-white flex-shrink-0 ${isCompleted ? 'border-green-500 text-green-500' :
                                                        isCurrent ? 'border-blue-600 text-blue-600 ring-4 ring-blue-100' :
                                                            'border-gray-200 text-gray-300'
                                                    }`}>
                                                    <step.icon className="w-8 h-8" />
                                                </div>

                                                <div className="ml-6 flex-grow p-4 rounded-lg bg-gray-50 md:bg-transparent md:p-0">
                                                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                                                        <h3 className={`text-lg font-bold ${isCompleted ? 'text-gray-900' :
                                                                isCurrent ? 'text-blue-600' :
                                                                    'text-gray-400'
                                                            }`}>
                                                            {step.name}
                                                        </h3>
                                                        <span className={`text-sm font-medium ${isCurrent ? 'text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block mt-2 md:mt-0' :
                                                                'text-gray-500 mt-1 md:mt-0'
                                                            }`}>
                                                            {step.time}
                                                        </span>
                                                    </div>
                                                    {isCurrent && (
                                                        <p className="mt-2 text-gray-600 text-sm">
                                                            Our technician is currently working on your device. All repairs are recorded for quality assurance.
                                                        </p>
                                                    )}
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {!status && !error && (
                    <div className="text-center py-12">
                        <Clock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900">No order selected</h3>
                        <p className="text-gray-500">Enter a mock ID (e.g., 123) to see the demo.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tracking;
