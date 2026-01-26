export type BlogSectionType = 
  | 'h2' 
  | 'h3' 
  | 'p' 
  | 'table' 
  | 'list' 
  | 'callout' 
  | 'steps'
  | 'example';

export interface TableData {
  title: string;
  headers: string[];
  rows: string[][];
}

export interface CalloutData {
  title: string;
  content: string;
  variant: 'summary' | 'mistake' | 'note';
}

export interface BlogSection {
  type: BlogSectionType;
  content?: string; // For p, h2, h3
  id?: string; // For TOC linking (h2)
  tableData?: TableData;
  listItems?: string[];
  calloutData?: CalloutData;
  steps?: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  sections: BlogSection[];
  faqs: FAQ[];
  glossary: GlossaryTerm[];
  relatedSlugs: string[];
}
