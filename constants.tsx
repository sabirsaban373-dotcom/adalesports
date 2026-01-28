
import { Category, Article } from './types';

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'The Future of Sustainable Tech',
    excerpt: 'Exploring how the latest innovations in green energy, modular hardware, and efficient AI are reshaping our digital world for a cleaner future.',
    category: Category.TECHNOLOGY,
    author: 'Sarah Jenkins',
    readTime: '12 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiSHqULewDzdtyyA7rQHZoQQRkR7893qjbVrI1WrFKCcpQlGrNitHc3VyvryK1yg8YmlWYwjsoIGUr6Yc3BPzCIVA3ObhVeLqu0I-y9AFvTgcChzsyzDgk_8P678yE7fuPy0JVl6mg6zoCpnidrCyGSZl08qhWvYWJ9cbmolBCrav0OjoDyKBTBmEU9pd00WTdRI-dMtvtGcPo8LlVFiZPX59b3YMbxOe6RRYQnErjQh6Kj3svtgfHMRavtSI4EDVQqcfd2sbpdWzQ',
    featured: true
  },
  {
    id: '2',
    title: 'Global Policy Shifts: What to Expect in Late 2024',
    excerpt: 'As international relations enter a new phase of decentralization, we examine the five key treaties that will define trade...',
    category: Category.POLITICS,
    author: 'Sarah Jenkins',
    readTime: '4 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIRx8fyE8owSJKkl8E3-WlbRm7SCGbNx5Yn8Q-G6Mb3xUAbYrPT3fN2_zFNg0-qFy3G5yJiB7VYWC0irGoGlJwCj0c8ah-i2Y5qrrFzEb7IEGDKs6-uMZaaTFEvIUSOCfYJ9nRKA5Bj3Hj5ZK8C5898sNPjqTCCSRgmIxMHJrvR7mHr9dQ2KTf3hWR9YPSM_QSKfz0kV9obIOsZTYM34ZngEq9Z73FrAJRBgimz7cmobxUCcY_yVlELhgEoEbBmrQ0LOXv6g_fx-ux',
    aspectRatio: 'video'
  },
  {
    id: '3',
    title: 'The New Minimalist Wellness Trend Taking Over Homes',
    excerpt: 'Why stripping back your environment might be the ultimate key to mental clarity and productivity in a digital-first world.',
    category: Category.LIFESTYLE,
    author: 'Marcus Thorne',
    readTime: '6 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwziV0IhiI1TLLe0FhTrwfpNNCqj6mu4txD-_QhGmBXknrLtotMMSpdmOhbQJv-NMO7lP4kiGtmPeVUknboMmQMLMQ7s3oBE1dlXNkuQGKFqPqlUdDN-vjyLnr1IqQJOW_N1aIA2r8RRcV3Pfx4w1FR6EQ84B28nvmUosJ3YAzzWCS_MnLVKH82Sqntl_4-iJCY9eyTcEH-Ykhodx-RuNvSNxqadDAAXZihmgcHb3wa_1cz4SACduzhqhCw4TtTpsqVPPKGolhPHNu',
    aspectRatio: '[3/4]'
  },
  {
    id: '4',
    title: 'Urban Reforestation: Cities Turning Into Vertical Jungles',
    excerpt: 'New research shows that integrating 20% more flora into urban layouts can reduce city-wide temperatures by 3 degrees...',
    category: Category.ENVIRONMENT,
    author: 'David Loe',
    readTime: '8 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC36fLsnlTCHRg1h7S9LiodKxI7XIzO5tjjApjlNsNxGknSsKE4I8ZXJ4g4A2KsXOzebVggAjxwADdSDOdsxJlHFHF4nRlTmzVgr3bCez52fQ5iLR8gU89MgUSd_B-hSIH6cuGzg9qygM4yChQtlfaygJeLVAkGRWQjBA5Yw8xnSiKaP0bOhGf_CpcZiy4OTfn3KDHu9dznHzp-mBkUCXm1lOZttIj9Sp3tNExt0kq9x7E6Gwv74jawpowcqJAvsg9rgsBsmj-qaHS5',
    aspectRatio: 'square'
  },
  {
    id: '5',
    title: "AI's Invisible Role in Modern Edge Computing",
    excerpt: 'Beyond the chatbots: How deep learning is quietly optimizing the devices in your pocket without an internet connection.',
    category: Category.TECHNOLOGY,
    author: 'Elena R.',
    readTime: '5 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArephVYdx1tUpdLtr_IhqGsruinRlRJBof7wfzGogk-lk2P5zxDeYXkuMGULhDuXy28PWO_v_Jn22Z3CnNLxg4348KpwBtWUrfd_coMkWGRGmejSu3mjWd652SdOyectIz7AyL1lPWIf2N26LNtrUWBfJbVhdHifQFo6RWsKBg3DtCLw4rrnQw6X6_tN02Or3SaTCshpyVkcWrOxAF_nxlfgxn9nTqsPX_J7-Er5SPz9BmXgVcZSjGm2btRul7Ull4cnVcZMueOm9z',
    aspectRatio: 'video'
  },
  {
    id: '6',
    title: 'Creative Home Office Setups for Small Spaces',
    excerpt: "You don't need a spare room to have a professional workspace. We explore modular furniture and lighting solutions that transform any corner into a productivity hub.",
    category: Category.LIFESTYLE,
    author: 'Sophie C.',
    readTime: '3 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOHIKrTdUSr2-NpPz35edeXOg-2jo28zHPwSqy1J0_Y3YshRYRUA31HFWHLLDmbRJxRPXN_BFEzcIZRrwXybISQF8G4rLkIb24o8hr04oH9Zkp4o8pAUMDtm2NKZPzoDipezCCNDaybzvXL6rc2mOVYAOC4wsrLA2fZCeek52ypftkzve5OZbf_a8LicMjZEnDlY2E8QB5ksg71tfpR89CKbp-pd6EMT1n6mKQU-YReeu_AdFiiz5DmpEiJco26oR__cgfPgQDvehQ',
    aspectRatio: 'video'
  },
  {
    id: '7',
    title: 'Marine Conservation: The Success of Protected Zones',
    excerpt: 'How 2024 saw a record recovery of biodiversity in the North Atlantic thanks to strict new fishing corridors...',
    category: Category.ENVIRONMENT,
    author: 'Eco Watch',
    readTime: '5 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCF_SybcChx2cR68BkIj28hS20Z32Asiqa3hEc-c3ICy5KKDFyFb1JUcz-i1KiWHS36W_S1IXuvMgwoZRzMHcVpwq242yNbEKsHklt9AQF6eSF_KHFQhSQWMkn3jvdJKLH7ZuLkH-g0XxDqgb-9pixKHiUIX7GcJsuR-cdPSXWx3xgUv5S3Mz-v8gMYTLb2Pu6xQhF76Iqu8eMYgr2biBBCPaYiQFnTm6TP-iwP9lnYv4ftlyAThZtgCvszt6HzG5w-71S_qR8Bm7_M',
    aspectRatio: '[4/3]'
  }
];

export const CATEGORY_COLORS: Record<Category, string> = {
  [Category.POLITICS]: 'bg-politics-red',
  [Category.LIFESTYLE]: 'bg-lifestyle-pink',
  [Category.TECHNOLOGY]: 'bg-tech-blue',
  [Category.ENVIRONMENT]: 'bg-env-green',
  [Category.ALL]: 'bg-primary'
};

export const CATEGORY_HOVER_COLORS: Record<Category, string> = {
  [Category.POLITICS]: 'hover:border-politics-red',
  [Category.LIFESTYLE]: 'hover:border-lifestyle-pink',
  [Category.TECHNOLOGY]: 'hover:border-tech-blue',
  [Category.ENVIRONMENT]: 'hover:border-env-green',
  [Category.ALL]: 'hover:border-primary'
};
