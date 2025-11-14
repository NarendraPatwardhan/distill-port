// Types for Distill article components

export interface Author {
  name: string;
  personalURL?: string;
  affiliations: Affiliation[];
}

export interface Affiliation {
  name: string;
  url?: string;
}

export interface FrontMatter {
  title?: string;
  description?: string;
  authors: Author[];
  publishedDate?: string;
  publishedDay?: number;
  publishedMonth?: string;
  publishedYear?: number;
  doi?: string;
}

export interface Citation {
  key: string;
  title: string;
  author: string;
  journal?: string;
  year?: number;
  url?: string;
  doi?: string;
}
