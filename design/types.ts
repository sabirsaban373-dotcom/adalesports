
export enum Category {
  POLITICS = 'Politics',
  LIFESTYLE = 'Lifestyle',
  TECHNOLOGY = 'Technology',
  ENVIRONMENT = 'Environment',
  ALL = 'All Stories'
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: Category;
  author: string;
  readTime: string;
  imageUrl: string;
  featured?: boolean;
  aspectRatio?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
