import React from 'react';
import { Link } from 'react-router-dom';
import { CasePost } from '../types';  // adjust path if needed after moving types.ts

// Import your local images from src/assets/
import heroImage from '../assets/hero.png';
import missionImage from '../assets/mission.png';
import aishaImage from '../assets/aisha.png';
import samuelImage from '../assets/samuel.png';

// Dummy Data - updated with local image imports
const featuredCases: CasePost[] = [
    {
        id: 1,
        title: "Urgent Heart Surgery for Aisha",
        childName: "Aisha",
        age: 6,
        medicalCondition: "Congenital Heart Defect",
        amountRequired: 3500000,
        amountRaised: 1200000,
        story: "Aisha needs urgent surgery to correct a life-threatening heart condition. Your help can give her a chance at a healthy childhood.",
        imageUrl: aishaImage,
        status: 'Open',
        location: "Lagos",
        publishDate: "2023-10-15"
    },
    {
        id: 2,
        title: "Sponsor Samuel's Education",
        childName: "Samuel",
        age: 9,
        medicalCondition: "Education Support",
        amountRequired: 150000,
        amountRaised: 150000,
        story: "Samuel is a brilliant boy who dreams of becoming a doctor. Thanks to our donors, his school fees for the year are fully covered!",
        imageUrl: samuelImage,
        status: 'Funded',
        location: "Enugu",
        publishDate: "2023-09-20"
    }
];

// Reusable Components defined outside the main component
const StatCounter: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="text-center">
    <p className="text-4xl md:text-5xl font-bold text-medical-blue">{value.toLocaleString()}+</p>
    <p className="text-sm md:text-base text-text-light mt-1">{label}</p>
  </div>
);

// FIX: Changed JSX.Element to React.ReactNode to fix "Cannot find namespace 'JSX'" error.
const ProgramCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-medical-blue/10 mb-4 text-medical-blue">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-text-light text-sm">{description}</p>
    </div>
);

const CaseCard: React.FC<{ caseItem: CasePost }> = ({ caseItem }) => {
    const percentageRaised = Math.min((caseItem.amountRaised / caseItem.amountRequired) * 100, 100);
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
            <img className="h-56 w-full object-cover" src={caseItem.imageUrl} alt={caseItem.title} />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-text-dark mb-2">{caseItem.title}</h3>
                <p className="text-sm text-text-light mb-4 flex-grow">{caseItem.story}</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div className="bg-heart-pink h-2.5 rounded-full" style={{ width: `${percentageRaised}%` }}></div>
                </div>
                <div className="flex justify-between text-sm mb-4">
                    <span className="font-semibold text-text-light">Raised: <span className="text-heart-pink">₦{caseItem.amountRaised.toLocaleString()}</span></span>
                    <span className="font-semibold text-text-light">Goal: ₦{caseItem.amountRequired.toLocaleString()}</span>
                </div>
                <Link to="/donate" className="mt-auto w-full text-center bg-medical-blue text-white font-medium py-2 px-4 rounded-full hover:bg-opacity-90 transition-all duration-300">
                    Help Now
                </Link>
            </div>
        </div>
    );
};

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="bg-brand-bg pt-10 md:pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark leading-tight">
              Healing Hearts, <span className="text-medical-blue">Building Futures</span> in Nigeria
            </h1>
            <p className="mt-4 text-lg text-text-light max-w-xl mx-auto md:mx-0">
              We provide critical medical support, educational opportunities, and empowerment programs for vulnerable children and women across Nigeria.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/donate" className="bg-heart-pink text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-transform duration-300 hover:scale-105">
                Donate Now
              </Link>
              <Link to="/about" className="bg-medical-blue/10 text-medical-blue font-bold py-3 px-8 rounded-full text-lg hover:bg-medical-blue/20 transition-all duration-300">
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative">
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-heart-pink/10 rounded-full filter blur-xl"></div>
             <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-medical-blue/10 rounded-full filter blur-xl"></div>
            <img 
              src={heroImage} 
              alt="Happy children" 
              className="rounded-2xl shadow-2xl relative z-10 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-md p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCounter value={500} label="Children Supported" />
          <StatCounter value={150} label="Medical Cases Funded" />
          <StatCounter value={200} label="Women Empowered" />
          <StatCounter value={10} label="Communities Reached" />
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission: A Healthier Tomorrow for Every Child</h2>
          <p className="text-text-light mb-4">
            White Heart Development Initiative is a Nigerian non-governmental organization committed to bridging the gap in healthcare and social support for the most vulnerable members of our communities. We believe that every child deserves a chance to live a healthy, fulfilling life.
          </p>
          <p className="text-text-light mb-6">
            Our vision is a Nigeria where poverty and lack of access to basic services no longer prevent children and women from reaching their full potential.
          </p>
          <Link to="/about" className="text-medical-blue font-semibold hover:underline">
            Read Our Full Story →
          </Link>
        </div>
        <div className="order-1 md:order-2">
            <img 
              src={missionImage} 
              alt="NGO team members" 
              className="rounded-2xl shadow-xl w-full object-cover"
            />
        </div>
      </section>

      {/* Our Programs Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">What We Do</h2>
            <p className="text-lg text-text-light mb-12 max-w-2xl mx-auto">We focus on key areas to create sustainable impact for families and communities.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <ProgramCard 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
                    title="Child Medical Support"
                    description="Funding life-saving surgeries, treatments, and essential healthcare for children in critical need."
                />
                <ProgramCard 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" /></svg>}
                    title="Education Support"
                    description="Providing scholarships, school supplies, and mentorship to ensure children can stay in school and build a bright future."
                />
                <ProgramCard 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 016-6h6a6 6 0 016 6v1h-3M18.121 16.121A3 3 0 1115.293 19 3 3 0 0118.12 16.12z" /></svg>}
                    title="Women Empowerment"
                    description="Offering skills training and small business grants to mothers, enabling them to support their families independently."
                />
                <ProgramCard 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                    title="Emergency Fund"
                    description="Responding swiftly to urgent family crises, providing food, shelter, and aid during unexpected hardships."
                />
            </div>
        </div>
      </section>

      {/* Featured Cases Section */}
       <section className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Their Future is in Your Hands</h2>
            <p className="text-lg text-text-light text-center mb-12 max-w-2xl mx-auto">These children are waiting for a hero. Your donation today can change their story.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {featuredCases.map(caseItem => <CaseCard key={caseItem.id} caseItem={caseItem} />)}
            </div>
        </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-medical-blue rounded-2xl p-8 md:p-16 text-center text-white relative overflow-hidden">
             <div className="absolute -bottom-20 -right-20 w-48 h-48 border-4 border-white/20 rounded-full"></div>
             <div className="absolute -top-20 -left-20 w-48 h-48 border-4 border-white/20 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us in Making a Difference</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Every donation, no matter the size, contributes to a wave of positive change. Be a part of the White Heart family today.
            </p>
            <Link to="/donate" className="bg-heart-pink text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-transform duration-300 hover:scale-105 inline-block">
                Give Hope Today
            </Link>
        </div>
      </section>

    </div>
  );
};

export default HomePage;