import { useState } from 'react';
import { Smartphone, Battery, Zap, Droplet, ArrowRight, ArrowLeft, Check, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import db from '../data/db.json';

// Map icon strings to components
const iconMap = {
    Smartphone,
    Battery,
    Zap,
    Droplet
};

const steps = [
    { id: 1, name: 'Device' },
    { id: 2, name: 'Issue' },
    { id: 3, name: 'Service' },
    { id: 4, name: 'Schedule' },
];

const Booking = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        device: '',
        issue: '',
        serviceType: '', // 'doorstep' or 'pickup'
        date: '',
        time: '',
        price: ''
    });

    const handleNext = () => {
        if (currentStep < 4) setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const selectDevice = (deviceId) => {
        setFormData({ ...formData, device: deviceId });
        handleNext();
    };

    const selectIssue = (issueId, price) => {
        setFormData({ ...formData, issue: issueId, price: price });
        handleNext();
    };

    const selectServiceType = (type) => {
        setFormData({ ...formData, serviceType: type });
        handleNext();
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
                <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Book Your Repair</h1>
                <p className="mt-2 text-lg text-gray-600">Get your device running like new in minutes.</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex items-center justify-between relative">
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 -z-10"></div>
                    <div
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-blue-600 transition-all duration-500 ease-in-out -z-10"
                        style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                    ></div>
                    {steps.map((step) => (
                        <div key={step.id} className="flex flex-col items-center bg-white px-2">
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${currentStep >= step.id ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                                    }`}
                            >
                                {currentStep > step.id ? <Check className="w-5 h-5" /> : step.id}
                            </div>
                            <span className="text-xs mt-2 font-medium text-gray-500 hidden sm:block">{step.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dynamic Content */}
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden min-h-[400px] border border-gray-100 p-8">

                {/* Step 1: Device Selection */}
                {currentStep === 1 && (
                    <div className="animate-fadeIn">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Select your device</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {db.devices.map((device) => {
                                const IconComponent = iconMap[device.icon] || Smartphone;
                                return (
                                    <button
                                        key={device.id}
                                        onClick={() => selectDevice(device.name)}
                                        className={`p-6 rounded-xl border-2 flex flex-col items-center justify-center gap-4 transition-all ${formData.device === device.name
                                                ? 'border-blue-600 bg-blue-50 text-blue-700'
                                                : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                                            }`}
                                    >
                                        <IconComponent className={`w-10 h-10 ${formData.device === device.name ? 'text-blue-600' : 'text-gray-400'}`} />
                                        <span className="font-semibold">{device.name}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Step 2: Issue Selection */}
                {currentStep === 2 && (
                    <div className="animate-fadeIn">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">What's the issue?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {db.issues.map((issue) => {
                                const IconComponent = iconMap[issue.icon] || Smartphone;
                                return (
                                    <button
                                        key={issue.id}
                                        onClick={() => selectIssue(issue.name, issue.price)}
                                        className={`p-4 rounded-xl border-2 flex items-center justify-between text-left transition-all ${formData.issue === issue.name
                                                ? 'border-blue-600 bg-blue-50'
                                                : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`p-2 rounded-lg ${formData.issue === issue.name ? 'bg-blue-200' : 'bg-gray-100'}`}>
                                                <IconComponent className={`w-6 h-6 ${formData.issue === issue.name ? 'text-blue-700' : 'text-gray-600'}`} />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900">{issue.name}</h3>
                                                <p className="text-sm text-gray-500">Approx. {issue.duration}</p>
                                            </div>
                                        </div>
                                        <span className="font-bold text-blue-600">{issue.price}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Step 3: Service Type */}
                {currentStep === 3 && (
                    <div className="animate-fadeIn">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">How do you want it repaired?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <button
                                onClick={() => selectServiceType('doorstep')}
                                className={`relative p-6 rounded-xl border-2 text-left transition-all ${formData.serviceType === 'doorstep' ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-500 ring-opacity-50' : 'border-gray-200 hover:border-blue-400'
                                    }`}
                            >
                                <div className="absolute top-4 right-4 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-bold">Fastest</div>
                                <Truck className="w-10 h-10 text-blue-600 mb-4" />
                                <h3 className="text-xl font-bold text-gray-900">Doorstep Service</h3>
                                <p className="mt-2 text-gray-600 text-sm">We come to your home or office. Technician performs repair in our specialized van.</p>
                                <ul className="mt-4 space-y-2 text-sm text-gray-500">
                                    <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" /> No travel fee</li>
                                    <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" /> Done in ~45 mins</li>
                                </ul>
                            </button>

                            <button
                                onClick={() => selectServiceType('pickup')}
                                className={`p-6 rounded-xl border-2 text-left transition-all ${formData.serviceType === 'pickup' ? 'border-orange-500 bg-orange-50 ring-2 ring-orange-500 ring-opacity-50' : 'border-gray-200 hover:border-orange-400'
                                    }`}
                            >
                                <div className="absolute top-4 right-4 bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full font-bold">Convenient</div>
                                <Truck className="w-10 h-10 text-orange-500 mb-4" />
                                <h3 className="text-xl font-bold text-gray-900">Pickup & Delivery</h3>
                                <p className="mt-2 text-gray-600 text-sm">We pick up your device, fix it at our lab, and drop it back to you.</p>
                                <ul className="mt-4 space-y-2 text-sm text-gray-500">
                                    <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" /> Same day return</li>
                                    <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" /> Advanced testing</li>
                                </ul>
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 4: Schedule */}
                {currentStep === 4 && (
                    <div className="animate-fadeIn">
                        <div className="text-center mb-8">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                                <Check className="h-10 w-10 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Booking Confirmed!</h2>
                            <p className="mt-2 text-gray-600">Your technician has been assigned.</p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto border border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h3>
                            <dl className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <dt className="text-gray-500">Device</dt>
                                    <dd className="font-medium text-gray-900 capitalize">{formData.device}</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="text-gray-500">Issue</dt>
                                    <dd className="font-medium text-gray-900 capitalize">{formData.issue}</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="text-gray-500">Service Type</dt>
                                    <dd className="font-medium text-gray-900 capitalize">{formData.serviceType === 'pickup' ? 'Pickup & Delivery' : 'Doorstep Service'}</dd>
                                </div>
                                <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-lg">
                                    <dt className="text-gray-900">Total Estimate</dt>
                                    <dd className="text-blue-600">{formData.price}</dd>
                                </div>
                            </dl>
                        </div>

                        <div className="mt-8 text-center">
                            <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">
                                Return to home
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            {/* Navigation Buttons */}
            {currentStep < 4 && (
                <div className="mt-8 flex justify-between">
                    <button
                        onClick={handleBack}
                        disabled={currentStep === 1}
                        className={`flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back
                    </button>
                </div>
            )}
        </div>
    );
};

export default Booking;
