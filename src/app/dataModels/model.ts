export interface Project {
  name: string;
  client: string;
  duration: string;
  domain: string;
  techanology: string[];
  platform: string[];
  desc: string;
  link: string;
  images: string[];
}

export interface Techanologies {
  icon?: string;
  skill: string;
  category_color: string;
}