
import React from 'react';
import { ImpactStory } from '../types';

// Dummy Data
const stories: ImpactStory[] = [
    {
        id: 1,
        name: "Aisha's New Heartbeat",
        story: "Six-year-old Aisha was born with a severe heart condition that left her constantly weak and unable to play like other children. Her parents, small-scale traders, could not afford the multi-million Naira surgery required to save her life. Through the generous support of White Heart donors, Aisha underwent successful open-heart surgery. Today, she is a vibrant, energetic girl with a bright future ahead. Her laughter now fills her home, a sound her parents once feared they would lose.",
        imageUrl: "https://picsum.photos/seed/aisha-story/800/600",
        quote: "White Heart gave my daughter a second chance at life. We will be forever grateful."
    },
    {
        id: 2,
        name: "Mrs. Adebayo's Sewing Business",
        story: "Mrs. Adebayo is the mother of Samuel, a beneficiary of our education support program. While grateful for the help with school fees, she struggled to provide for her family's other needs. Through our Women Empowerment Program, she received training in tailoring and a startup grant to purchase a sewing machine. She now runs a small but thriving business from her home, making clothes for her neighbors. She is not only able to support her family but has also become a role model in her community.",
        imageUrl: "https://picsum.photos/seed/adebayo-story/800/600https://paradigmnews.ng/wp-content/uploads/IMG-20241123-WA0100.jpg",
        quote: "I can now feed my children and pay my rent without fear. White Heart taught me how to fish for myself."
    },
    {
        id: 3,
        name: "David's Journey to the Classroom",
        story: "David, an exceptionally bright 10-year-old, was on the verge of dropping out of school after his father lost his job. His dream of becoming an engineer seemed to be slipping away. White Heart's Education Support program stepped in, covering his tuition and providing him with all the necessary school materials. With that burden lifted, David is now at the top of his class and is mentoring younger students.",
        imageUrl: "https://picsum.photos/seed/david-story/800/600",
        quote: "Because of White Heart, I can continue to dream. I will make them proud."
    }
];

const StoryCard: React.FC<{ story: ImpactStory, reverse?: boolean }> = ({ story, reverse = false }) => (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-5 items-center gap-8 p-6 md:p-0 ${reverse ? 'md:grid-flow-col-dense' : ''}`}>
        <div className={`md:col-span-2 ${reverse ? 'md:col-start-4' : ''}`}>
            <img src={story.imageUrl} alt={story.name} className="object-cover w-full h-64 md:h-full rounded-xl" />
        </div>
        <div className={`md:col-span-3 p-6 ${reverse ? 'md:col-start-1 md:row-start-1' : ''}`}>
            <h3 className="text-2xl font-bold text-medical-blue mb-2">{story.name}</h3>
            <p className="text-text-light mb-4">{story.story}</p>
            <blockquote className="border-l-4 border-heart-pink pl-4 italic text-text-dark font-medium">
                "{story.quote}"
            </blockquote>
        </div>
    </div>
);


const ImpactStoriesPage: React.FC = () => {
    return (
        <div>
            {/* Page Header */}
            <div className="bg-brand-bg py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-medical-blue">Stories of Hope</h1>
                    <p className="mt-4 text-lg text-text-light max-w-3xl mx-auto">
                        These are the real stories of the lives you've changed. Each one represents a family transformed and a future rewritten.
                    </p>
                </div>
            </div>

            {/* Stories List */}
            <section className="py-16 md:py-24 bg-brand-bg">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    {stories.map((story, index) => (
                        <StoryCard key={story.id} story={story} reverse={index % 2 !== 0} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ImpactStoriesPage;
