// type Level = "item" | "channel" | "liveItem";

type NamespaceTag = {
  name: string;
  label: string;
  tag: string;
  description?: string;
  levels: string[];
  documentationUrl: string;
  examples?: string[];
  exampleUrl?: string;
  exampleImageUrls?: string[];
};
