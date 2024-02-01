type SupportedElement = {
  elementName: string;
  elementUrl: string;
};

export type PodcastIndexApps = {
  appName: string;
  appType: string[];
  appUrl: string;
  appIconUrl: string;
  platforms: string[];
  supportedElements: SupportedElement[];
};
