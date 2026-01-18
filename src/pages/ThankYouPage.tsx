
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const ThankYouPage: React.FC = () => {
    const { state } = useLocation();
    const amount = state?.amount || 0;
    const purpose = state?.purpose || 'our cause';

    return (
        <div className="bg-brand-bg py-20 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl text-center">
                    <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-medical-blue/10 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-medical-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">Thank You for Your Generosity!</h1>
                    <p className="text-lg text-text-light mb-6">
                        Your incredible donation of <strong className="text-heart-pink">₦{amount.toLocaleString()}</strong> towards <strong className="text-heart-pink">{purpose}</strong> will make a real and lasting difference.
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg text-left text-sm text-text-light space-y-3">
                        <h3 className="font-bold text-text-dark">What happens next?</h3>
                        <p>
                            <strong className="text-medical-blue">1. Donation Receipt:</strong> An automated donation receipt has been sent to your email address. Please check your inbox (and spam folder).
                        </p>
                        <p>
                            <strong className="text-medical-blue">2. Impact Updates:</strong> We will keep you updated on the impact of your gift through our newsletters and impact reports.
                        </p>
                        <p>
                            <strong className="text-medical-blue">3. Spread the Word:</strong> Your voice is powerful. Share your support on social media to inspire others to join our cause.
                        </p>
                    </div>
                    <Link to="/" className="mt-8 inline-block bg-medical-blue text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-colors duration-300">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ThankYouPage;
