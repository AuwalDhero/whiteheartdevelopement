
import React from 'react';
import { Link } from 'react-router-dom';

// FIX: Changed JSX.Element to React.ReactNode to fix "Cannot find namespace 'JSX'" error.
const ValueCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="text-center p-4">
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-medical-blue/10 mb-4 text-medical-blue">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-text-dark mb-2">{title}</h3>
    <p className="text-text-light">{description}</p>
  </div>
);

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-medical-blue/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-medical-blue">About White Heart</h1>
          <p className="mt-4 text-lg text-text-light max-w-3xl mx-auto">
            Learn about our journey, our mission, and the dedicated people working to create lasting change for children and families in Nigeria.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://picsum.photos/seed/about-story/800/600" alt="Founder of White Heart Initiative" className="rounded-2xl shadow-xl" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">Our Story</h2>
            <p className="text-text-light mb-4">
              Founded in [Year], White Heart Development Initiative was born from a simple yet powerful conviction: that access to healthcare and opportunity should be a right, not a privilege. Our founder, [Founder's Name], witnessed firsthand the struggles faced by families unable to afford critical medical care for their children.
            </p>
            <p className="text-text-light mb-4">
              Driven by compassion and a desire for action, a small group of volunteers came together to help one child. That single act of kindness sparked a movement. Today, White Heart has grown into a registered NGO, supported by a passionate community of donors and partners, all dedicated to serving Nigeria's most vulnerable.
            </p>
            <p className="text-text-light">
              We remain a grassroots organization at heart, ensuring that every donation is used efficiently and transparently to create the maximum possible impact on the ground.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-brand-bg py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 text-center md:text-left">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-medical-blue mb-3">Our Mission</h3>
              <p className="text-text-light">
                To provide timely and accessible healthcare, educational support, and economic empowerment to vulnerable children and women in Nigeria, fostering a future where they can thrive.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-heart-pink mb-3">Our Vision</h3>
              <p className="text-text-light">
                We envision a Nigeria where poverty and lack of access to basic services no longer limit the potential of any child or woman, creating healthier, stronger, and self-reliant communities.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Core Values</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  <ValueCard 
                      icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                      title="Compassion"
                      description="We lead with empathy, treating every individual with dignity and respect."
                  />
                  <ValueCard 
                      icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                      title="Integrity"
                      description="We are transparent and accountable in all our actions, especially with donor funds."
                  />
                  <ValueCard 
                      icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                      title="Impact"
                      description="We are results-driven, focusing on sustainable solutions that create lasting change."
                  />
                  <ValueCard 
                      icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                      title="Collaboration"
                      description="We work with communities, partners, and donors to achieve our shared goals."
                  />
              </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-bg py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-text-dark max-w-2xl mx-auto">Ready to Make a Difference?</h2>
            <p className="mt-4 mb-8 text-lg text-text-light max-w-2xl mx-auto">
                Your support can help us reach more children and write more success stories. Get involved today.
            </p>
            <Link to="/donate" className="bg-heart-pink text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-transform duration-300 hover:scale-105">
                Donate Now
            </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
