export type Page = "home" | "scrap";

export interface Filter {
  headline: string;
  date: string;
  country: string[];
}

export interface Article {
  _id: string;
  headline: { main: string };
  source: string;
  byline: { original: string };
  author: string;
  pub_date: string;
  isScrapped: boolean;
  web_url: string;
  keywords: { name: string; value: string }[];
}
