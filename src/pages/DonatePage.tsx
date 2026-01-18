
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Frequency = 'one-time' | 'monthly';
type Purpose = 'Child Medical Support' | 'Education Support' | 'Women Empowerment' | 'Emergency Fund';

const amountTiers = [5000, 10000, 25000];

const DonatePage: React.FC = () => {
  const navigate = useNavigate();
  const [frequency, setFrequency] = useState<Frequency>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number>(10000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [purpose, setPurpose] = useState<Purpose>('Child Medical Support');
  const [formError, setFormError] = useState<string>('');

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };
  
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers
    if (/^\d*$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(0); // Deselect tiers when typing custom amount
    }
  };

  const finalAmount = customAmount ? parseInt(customAmount, 10) : selectedAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!finalAmount || finalAmount < 500) {
        setFormError('Please enter an amount of at least ₦500.');
        return;
    }
    setFormError('');
    // Here you would integrate with a payment gateway like Paystack or Flutterwave
    console.log({
        frequency,
        amount: finalAmount,
        purpose,
        //...donor info
    });
    // On successful payment callback, navigate to thank you page
    navigate('/thank-you', { state: { amount: finalAmount, purpose } });
  };


  return (
    <div className="bg-brand-bg py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
                {/* Donation Form */}
                <div className="bg-white p-8 rounded-2xl shadow-2xl">
                    <h2 className="text-2xl font-bold text-text-dark mb-6">Make a Secure Donation</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Frequency */}
                        <div>
                            <label className="block text-sm font-medium text-text-light mb-2">Select Frequency</label>
                            <div className="flex rounded-full bg-gray-100 p-1">
                                <button type="button" onClick={() => setFrequency('one-time')} className={`w-1/2 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${frequency === 'one-time' ? 'bg-medical-blue text-white' : 'text-gray-600'}`}>
                                    One-Time
                                </button>
                                <button type="button" onClick={() => setFrequency('monthly')} className={`w-1/2 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${frequency === 'monthly' ? 'bg-medical-blue text-white' : 'text-gray-600'}`}>
                                    Monthly
                                </button>
                            </div>
                        </div>

                        {/* Amount */}
                        <div>
                            <label className="block text-sm font-medium text-text-light mb-2">Choose Amount (NGN)</label>
                            <div className="grid grid-cols-3 gap-2 mb-2">
                                {amountTiers.map(tier => (
                                    <button key={tier} type="button" onClick={() => handleAmountClick(tier)} className={`py-3 px-2 text-sm font-bold border rounded-lg transition-colors duration-300 ${selectedAmount === tier ? 'bg-heart-pink text-white border-heart-pink' : 'bg-white text-text-dark border-gray-300 hover:border-medical-blue'}`}>
                                        ₦{tier.toLocaleString()}
                                    </button>
                                ))}
                            </div>
                            <input
                                type="text"
                                value={customAmount}
                                onChange={handleCustomAmountChange}
                                placeholder="Or Enter Custom Amount"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-medical-blue focus:border-medical-blue"
                            />
                        </div>

                        {/* Purpose */}
                        <div>
                            <label htmlFor="purpose" className="block text-sm font-medium text-text-light mb-2">Donate To</label>
                            <select id="purpose" value={purpose} onChange={(e) => setPurpose(e.target.value as Purpose)} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-medical-blue focus:border-medical-blue">
                                <option>Child Medical Support</option>
                                <option>Education Support</option>
                                <option>Women Empowerment</option>
                                <option>Emergency Fund</option>
                            </select>
                        </div>
                        
                        {/* Donor Information */}
                        <div className="pt-4 border-t">
                             <h3 className="text-lg font-semibold text-text-dark mb-4">Personal Information</h3>
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-text-light">First Name</label>
                                    <input type="text" id="firstName" required className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-medical-blue focus:border-medical-blue" />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-text-light">Last Name</label>
                                    <input type="text" id="lastName" required className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-medical-blue focus:border-medical-blue" />
                                </div>
                                <div className="sm:col-span-2">
                                     <label htmlFor="email" className="block text-sm font-medium text-text-light">Email Address</label>
                                    <input type="email" id="email" required className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-medical-blue focus:border-medical-blue" />
                                </div>
                             </div>
                        </div>
                        
                        {formError && <p className="text-red-500 text-sm">{formError}</p>}

                        <button type="submit" className="w-full bg-heart-pink text-white font-bold py-4 px-6 rounded-lg text-lg hover:bg-opacity-90 transition-transform duration-300 hover:scale-105">
                            Donate ₦{finalAmount > 0 ? finalAmount.toLocaleString() : '0'}
                        </button>
                        <p className="text-xs text-gray-500 text-center">
                            By donating, you agree to our terms of service. Your donation will be processed securely.
                        </p>
                    </form>
                </div>

                {/* Why Donate Info */}
                <div className="mt-8 lg:mt-0">
                    <h2 className="text-3xl font-bold text-medical-blue mb-4">Your Donation is a Lifeline</h2>
                    <p className="text-text-light mb-6">
                        At White Heart, we ensure that every Naira you give goes directly to where it's needed most. Your generosity transforms into life-saving surgeries, educational opportunities, and a path to self-reliance for families.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <svg className="w-6 h-6 text-heart-pink mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            <p><strong className="text-text-dark">Change a life:</strong> Fund critical care for a sick child.</p>
                        </div>
                        <div className="flex items-start">
                             <svg className="w-6 h-6 text-heart-pink mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            <p><strong className="text-text-dark">Build a future:</strong> Keep a bright child in school for a term.</p>
                        </div>
                        <div className="flex items-start">
                             <svg className="w-6 h-6 text-heart-pink mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            <p><strong className="text-text-dark">Empower a family:</strong> Help a mother start a small business.</p>
                        </div>
                    </div>
                    <div className="mt-8 bg-medical-blue/10 p-6 rounded-xl">
                        <h4 className="font-bold text-text-dark mb-2">Payment Gateway Information</h4>
                        <p className="text-sm text-text-light">
                            We suggest integrating with trusted Nigerian payment gateways like <strong className="text-medical-blue">Paystack</strong> or <strong className="text-medical-blue">Flutterwave</strong>. They provide secure, reliable, and easy-to-use APIs for collecting one-time and recurring payments via cards, bank transfers, and USSD.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default DonatePage;
