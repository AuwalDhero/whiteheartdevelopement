
import React from 'react';
import { Link } from 'react-router-dom';

const InvolvementCard: React.FC<{
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  // FIX: Changed JSX.Element to React.ReactNode to fix "Cannot find namespace 'JSX'" error.
  icon: React.ReactNode;
}> = ({ title, description, ctaText, ctaLink, icon }) => (
  <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
    <div className="text-heart-pink mb-4">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-text-dark mb-3">{title}</h3>
    <p className="text-text-light mb-6 flex-grow">{description}</p>
    <Link to={ctaLink} className="mt-auto bg-medical-blue text-white font-medium py-2 px-6 rounded-full hover:bg-opacity-90 transition-colors duration-300">
      {ctaText}
    </Link>
  </div>
);

const GetInvolvedPage: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-brand-bg py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-medical-blue">Get Involved</h1>
          <p className="mt-4 text-lg text-text-light max-w-3xl mx-auto">
            You have the power to change a life. Discover the different ways you can join our mission and bring hope to those in need.
          </p>
        </div>
      </div>

      {/* Ways to Help Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InvolvementCard
              title="Donate"
              description="Your financial contribution, no matter the size, directly funds life-saving medical treatments, educational materials, and empowerment grants. Be a lifeline for a child or family today."
              ctaText="Give Now"
              ctaLink="/donate"
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
            />
            <InvolvementCard
              title="Volunteer"
              description="Lend us your skills and your time. We need passionate individuals for fundraising events, administrative support, and community outreach programs. Make a hands-on difference."
              ctaText="Contact Us"
              ctaLink="mailto:volunteer@whiteheartinitiative.org"
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
            />
            <InvolvementCard
              title="Corporate Partnership"
              description="Align your brand with a cause that matters. We welcome partnerships for event sponsorship, cause marketing campaigns, and employee giving programs. Let's create impact together."
              ctaText="Partner With Us"
              ctaLink="mailto:partnerships@whiteheartinitiative.org"
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
            />
          </div>
        </div>
      </section>

      {/* Trust & Transparency Section */}
      <section className="bg-brand-bg py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold text-text-dark mb-4">Your Trust is Our Priority</h2>
                <p className="text-text-light mb-4">
                    We are committed to the highest standards of accountability and transparency. We ensure that every donation is used effectively to maximize its impact. Our financial records are available for review, and we provide regular updates on the projects you support.
                </p>
                <div className="flex space-x-8 mt-6">
                    <div className="flex items-center space-x-2">
                        <svg className="w-8 h-8 text-medical-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span className="font-semibold">CAC Registered</span>
                    </div>
                     <div className="flex items-center space-x-2">
                        <svg className="w-8 h-8 text-medical-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                        <span className="font-semibold">Secure Donations</span>
                    </div>
                </div>
            </div>
            <div>
                <img src="https://picsum.photos/seed/trust/800/600" alt="Financial report document" className="rounded-2xl shadow-lg" />
            </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolvedPage;
