
import React from 'react';
import { Link } from 'react-router-dom';

const ProgramDetailCard: React.FC<{
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean;
}> = ({ title, description, imageUrl, imageAlt, reverse = false }) => {
  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:grid-flow-col-dense' : ''}`}>
      <div className={`${reverse ? 'md:col-start-2' : ''}`}>
        <img src={imageUrl} alt={imageAlt} className="rounded-2xl shadow-xl object-cover w-full h-80" />
      </div>
      <div className={`${reverse ? 'md:col-start-1' : ''}`}>
        <h3 className="text-3xl font-bold text-text-dark mb-4">{title}</h3>
        <p className="text-text-light">{description}</p>
      </div>
    </div>
  );
};

const ProgramsPage: React.FC = () => {
  const programs = [
    {
      title: "Child Medical Support",
      description: "This is our flagship program. We identify children from low-income families with critical health conditions—such as congenital heart defects, cancer, or conditions requiring major surgery—and we fund their treatment. We work with partner hospitals to ensure the highest quality of care. From diagnosis to recovery, we stand with the families, providing not just financial aid but also emotional support.",
      imageUrl: "https://picsum.phhttps://paradigmnews.ng/wp-content/uploads/IMG-20241123-WA0100.jpgotos/seed/program1/800/600",
      imageAlt: "Doctor examining a child"
    },
    {
      title: "Education Support",
      description: "We believe education is the key to breaking the cycle of poverty. Our 'Keep a Child in School' initiative provides scholarships that cover tuition, uniforms, books, and other essential supplies. We also run after-school tutoring and mentorship programs to help students excel academically and build confidence for a brighter future.",
      imageUrl: "https://picsum.photos/seed/program2/800/600",
      imageAlt: "Children in a classroom"
    },
    {
      title: "Women Empowerment",
      description: "Empowering a woman means empowering a family and a community. This program provides vocational skills training (like tailoring, catering, or digital literacy) and small startup grants to mothers of the children we support. This enables them to generate a stable income, fostering financial independence and ensuring their families' long-term well-being.",
      imageUrl: "https://picsum.photos/seed/program3/800/600",
      imageAlt: "Woman working at a sewing machine"
    },
    {
      title: "Emergency Fund",
      description: "Life is unpredictable. Our Emergency Fund allows us to respond rapidly to families facing sudden crises, such as job loss, displacement, or natural disasters. We provide immediate relief in the form of food packages, temporary shelter, and urgent financial aid to help them navigate through difficult times without compromising their children's health and safety.",
      imageUrl: "https://picsum.photos/seed/program4/800/600",
      imageAlt: "Aid worker distributing supplies"
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="bg-brand-bg py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-medical-blue">Our Programs</h1>
          <p className="mt-4 text-lg text-text-light max-w-3xl mx-auto">
            Discover our targeted initiatives designed to deliver sustainable and life-changing impact for vulnerable communities across Nigeria.
          </p>
        </div>
      </div>
      
      {/* Programs List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {programs.map((program, index) => (
            <ProgramDetailCard 
              key={program.title}
              title={program.title}
              description={program.description}
              imageUrl={program.imageUrl}
              imageAlt={program.imageAlt}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-bg py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text-dark max-w-2xl mx-auto">Your Support Powers Our Work</h2>
          <p className="mt-4 mb-8 text-lg text-text-light max-w-2xl mx-auto">
            A donation to any of our programs can set in motion a lifetime of positive change.
          </p>
          <Link to="/donate" className="bg-heart-pink text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-transform duration-300 hover:scale-105">
            Donate to a Program
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
