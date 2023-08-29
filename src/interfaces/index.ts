export interface Blog {
  title: string;
  date: string;
  slug: string;
  subtitle: string;
  image: string;
  contentImage: string;
  id: number;
  content: string;
  cooked: boolean;
}

export type FixMeLater = any;

export interface Reel {
  image: string;
  title: string;
  link: string;
  id: number;
}
