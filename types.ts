
export interface CasePost {
  id: number;
  title: string;
  childName?: string;
  age: number;
  medicalCondition: string;
  amountRequired: number;
  amountRaised: number;
  story: string;
  imageUrl: string;
  status: 'Open' | 'Funded' | 'Closed';
  location: string;
  publishDate: string;
}

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  featureImageUrl: string;
  excerpt: string;
  author: string;
  publishDate: string;
}

export interface ImpactStory {
    id: number;
    name: string;
    story: string;
    imageUrl: string;
    quote: string;
}
