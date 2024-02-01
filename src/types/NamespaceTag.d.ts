// type Level = "item" | "channel" | "liveItem";

type NamespaceTag = {
  name: string;
  tag: string;
  description?: string;
  levels: string[];
  documentationUrl: string;
  examples?: string[];
  exampleUrl?: string;
};
