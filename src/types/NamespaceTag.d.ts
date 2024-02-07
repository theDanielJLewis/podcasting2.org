type NamespaceTag = {
  label: string;
  tag: string;
  slug: string;
  popular?: boolean;
  description: {
    short?: string;
    long: string;
  };
  parents: string[];
  namespace: string;
  parentsDescription?: string;
  count: string;
  nodeValue?: string;
  attributes?: {
    name: string;
    required: boolean;
    recommended?: boolean;
    description: string;
  }[];
  attributesDescription?: string;
  documentationUrl?: string;
  examples: {
    label?: string;
    language: string;
    code: string;
    highlightLines?: (string | number)[];
  }[];
  exampleUrl?: string;
  exampleImageUrls?: string[];
  notes?: string;
};
