type Level = "item" | "channel" | "liveItem";

type PodcastNamespaceTag = {
  name: string;
  description: string;
  level: Level[];
  documentationUrl: string;
};
