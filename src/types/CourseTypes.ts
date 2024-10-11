export enum ContentType {
  Text = "text",
  Video = "video",
  Audio = "audio",
  Podcast = "podcast",
}

export interface Content {
  type: ContentType;
  data: string;
}

export interface Lesson {
  title: string;
  description: string;
  topics?: Topic[];
  content: Content[];
}

export interface Module {
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: number;
  title: string;
  description: string;
  modules?: Module[];
}

export type Topic = string;
