type SupportedElement = {
  elementName: string;
  elementUrl: string;
};

type PodcastIndexApps = {
  appName: string;
  appType: string[];
  appUrl: string;
  appIconUrl: string;
  platforms: string[];
  supportedElements: SupportedElement[];
};
