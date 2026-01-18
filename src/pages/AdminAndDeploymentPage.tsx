
import React from 'react';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-12">
        <h2 className="text-3xl font-bold text-medical-blue mb-6 pb-2 border-b-2 border-medical-blue/20">{title}</h2>
        {children}
    </div>
);

const SubSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h3 className="text-xl font-bold text-text-dark mb-4">{title}</h3>
        {children}
    </div>
);

const CodeBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <pre className="bg-gray-800 text-white p-4 rounded-lg text-sm overflow-x-auto">
        <code>{children}</code>
    </pre>
);

const AdminAndDeploymentPage: React.FC = () => {
    const casePostSchema = `
    {
      "title": "String",
      "childName": "String (Optional)",
      "age": "Number",
      "medicalCondition": "String",
      "amountRequired": "Number",
      "amountRaised": "Number",
      "story": "Rich Text / Markdown",
      "images": "Media Upload (Multiple)",
      "videoUrl": "String (URL, e.g., YouTube/Vimeo)",
      "status": "Select ('Open', 'Funded', 'Closed')",
      "donationButtonLink": "String (URL)",
      "location": "String",
      "publishDate": "Date"
    }
    `;

    const blogPostSchema = `
    {
      "title": "String",
      "category": "Select ('News', 'Event', 'Update')",
      "featureImage": "Media Upload (Single)",
      "gallery": "Media Upload (Multiple, Optional)",
      "videoEmbed": "String (Embed Code, Optional)",
      "contentBody": "Rich Text / Markdown",
      "author": "Relation (to Authors collection)",
      "tags": "Tags Input (Array of strings)",
      "publishDate": "Date",
      "seoMetaTitle": "String",
      "seoMetaDescription": "Text"
    }
    `;

    return (
        <div className="bg-brand-bg py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-12">Admin & Deployment Documentation</h1>
                    
                    <Section title="Admin CMS - Content Fields">
                        <p className="mb-6 text-text-light">This outlines the recommended schema for a headless CMS (like Strapi, Sanity, or a custom backend) to manage website content.</p>
                        <SubSection title="Case Posts (Children/Patients Needing Help)">
                            <p className="mb-4 text-text-light">This content type allows admins to feature individual stories of children who need funding.</p>
                            <CodeBlock>{casePostSchema.trim()}</CodeBlock>
                        </SubSection>
                        <SubSection title="Blog/News Posts">
                            <p className="mb-4 text-text-light">For sharing updates, news, and articles to keep the community engaged.</p>
                            <CodeBlock>{blogPostSchema.trim()}</CodeBlock>
                        </SubSection>
                    </Section>

                    <Section title="Hosting & Deployment Setup">
                        <p className="mb-6 text-text-light">A modern, scalable, and cost-effective stack is recommended for an NGO website.</p>
                        
                        <SubSection title="Recommended Stack">
                            <ul className="list-disc list-inside space-y-2 text-text-light">
                                <li><strong>Frontend:</strong> React with Vite (as generated) or Next.js for Server-Side Rendering (SSR) and SEO benefits.</li>
                                <li><strong>Backend:</strong> A Headless CMS (e.g., Strapi, Sanity.io, Contentful) is highly recommended for easy content management. Alternatively, a custom Node.js (Express/NestJS) API.</li>
                                <li><strong>Database:</strong> PostgreSQL (if using Strapi/custom API) or MongoDB.</li>
                            </ul>
                        </SubSection>

                        <SubSection title="Hosting Recommendations">
                             <ul className="list-disc list-inside space-y-2 text-text-light">
                                <li><strong>Frontend:</strong> Vercel or Netlify. Both offer excellent free tiers, automatic deployments from Git, global CDNs, and easy custom domain setup.</li>
                                <li><strong>Backend/CMS:</strong> Render or Railway for Node.js backends. For a headless CMS, use their provided cloud hosting (e.g., Sanity Studio).</li>
                                <li><strong>Database:</strong> Supabase (PostgreSQL) or MongoDB Atlas. These platforms manage database scaling, backups, and security.</li>
                            </ul>
                        </SubSection>

                        <SubSection title="Best Practices">
                             <ul className="list-disc list-inside space-y-2 text-text-light">
                                <li><strong>Domain & SSL:</strong> Purchase a domain from a registrar like Namecheap. Vercel/Netlify provide free SSL certificates automatically.</li>
                                <li><strong>Backups:</strong> Managed database providers (Supabase, Atlas) offer automated daily backups. Regularly back up CMS content as well.</li>
                                <li><strong>Security:</strong> Use environment variables for all sensitive keys (API keys, database URLs). Implement standard security headers. Follow data protection laws (e.g., NDPR in Nigeria) for donor information.</li>
                                <li><strong>Performance:</strong> Optimize images before uploading. Use a CDN (included with Vercel/Netlify). Code-split your application to reduce initial load times.</li>
                             </ul>
                        </SubSection>
                    </Section>
                </div>
            </div>
        </div>
    );
};

export default AdminAndDeploymentPage;
