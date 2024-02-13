export const podcastNamespaceTags: NamespaceTag[] = [
  {
    label: "Transcript",
    tag: "<podcast:transcript>",
    slug: "transcript",
    namespace: "podcast",
    popular: true,
    documentationUrl:
      "https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#transcript",
    description: {
      short: "Timestamped captions and transcripts",
      long: `This tag is used to link to a transcript or closed captions file. Multiple tags can be present for multiple transcript formats.

Detailed file format information and example files are [here](../transcripts/transcripts.md).`,
    },
    guide: {
      title: "How to add transcripts to your podcast",
      content: `Podcasting 2.0 transcripts require two parts: a transcript file (one per language for each episode) and the \`<podcast:transcript>\` tag in the episode in your RSS feed.

1. **Create and edit a transcript file for your podcast episode(s)**. SRT or VTT are the best file formats for this. These are easiest to produce with a transcription service or AI-powered app. (See below for tools.)
2. **Upload the transcript file** to your podcast-hosting provider or a file-hosting service (preferrably a CDN). Make sure the file is publicly accessible.
3. (Skip this step if your podcast-hosting provider does this for you.) **Add the URL for your transcript file** to your episode's transcript field, or in the \`<podcast:transcript>\` tag in your RSS feed. ([Learn more about the Transcript tag.](/podcast-namespace/tags/transcript))

## Tools for generating transcripts

- [Descript](https://www.descript.com/)
- [Otter](https://otter.ai/)
- [MacWhisper](https://macwhisper.com/)
- [CastMagic](https://castmagic.io/)`,
    },

    parents: ["<item>"],

    count: "multiple",

    attributes: [
      {
        name: "url",
        required: true,
        description: "URL of the podcast transcript.",
      },

      {
        name: "type",
        required: true,
        description:
          "Mime type of the file such as `text/plain`, `text/html`, `text/vtt`, `application/json`, `application/x-subrip`",
      },

      {
        name: "language",
        required: false,
        description:
          "The language of the linked transcript. If there is no language attribute given, the linked file is assumed to be the same language that is specified by the RSS `<language>` element.",
      },

      {
        name: "rel",
        required: false,
        description:
          'If the rel="captions" attribute is present, the linked file is considered to be a closed captions file, regardless of what the mime type is. In that scenario, time codes are assumed to be present in the file in some capacity.',
      },
    ],
    examples: [
      {
        language: "xml",
        code: '<podcast:transcript url="https://example.com/episode1/transcript.html" type="text/html" />',
      },

      {
        language: "xml",
        code: '<podcast:transcript url="https://example.com/episode1/transcript.vtt" type="text/vtt" />',
      },

      {
        language: "xml",
        code: `<podcast:transcript
  url="https://example.com/episode1/transcript.json"
  type="application/json"
  language="es"
  rel="captions"
/>`,
      },

      {
        language: "xml",
        code: `<podcast:transcript
  url="https://example.com/episode1/transcript.srt"
  type="application/x-subrip"
  rel="captions"
/>`,
      },
    ],
  },
  {
    label: "Locked",
    tag: "<podcast:locked>",
    slug: "locked",
    namespace: "podcast",
    documentationUrl:
      "https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#locked",
    description: {
      short: "Require permission to migrate a feed",
      long: "This tag may be set to `yes` or `no`. The purpose is to tell other podcast hosting platforms whether they are allowed to import this feed. A value of `yes` means that any attempt to import this feed into a new platform should be rejected.",
    },
    parents: ["<channel>"],

    count: "single",

    nodeValue: "The node value must be `yes` or `no`.",

    attributes: [
      {
        name: "owner",
        required: false,
        description:
          "The owner attribute is an email address that can be used to verify ownership of this feed during move and import operations. This could be a public email or a virtual email address at the hosting provider that redirects to the owner's true email address.",
      },
    ],
    examples: [
      {
        language: "xml",
        code: "<podcast:locked>yes</podcast:locked>",
      },

      {
        language: "xml",
        code: '<podcast:locked owner="email@example.com">no</podcast:locked>',
      },
    ],
  },
  {
    label: "Funding",
    tag: "<podcast:funding>",
    slug: "funding",
    namespace: "podcast",
    documentationUrl:
      "https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#funding",
    description: {
      short: "Links to financially support a show",
      long: "This tag lists possible donation/funding links for the podcast. The content of the tag is the recommended string to be used with the link.",
    },

    parents: ["<channel>"],

    count: "multiple",

    nodeValue:
      "This is a free form string supplied by the creator which they expect to be displayed in the app next to the link. Please do not exceed `128 characters` for the node value or it may be truncated by aggregators.",

    attributes: [
      {
        name: "url",
        required: true,
        description: "The URL to be followed to fund the podcast.",
      },
    ],
    examples: [
      {
        language: "xml",
        code: '<podcast:funding url="https://www.example.com/donations">Support the show!</podcast:funding>',
      },

      {
        language: "xml",
        code: '<podcast:funding url="https://www.example.com/members">Become a member!</podcast:funding>',
      },
    ],
  },
  {
    label: "Chapters",
    tag: "<podcast:chapters>",
    slug: "chapters",
    namespace: "podcast",
    popular: true,
    documentationUrl:
      "https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#chapters",
    description: {
      short: "Independently editable, enhanced chapters",
      long: `Links to an external file (see example file) containing chapter data for the episode. See the [jsonChapters.md](https://github.com/Podcastindex-org/podcast-namespace/blob/main/chapters/jsonChapters.md) file for a description of the chapter file syntax. And, see the [example.json](https://github.com/Podcastindex-org/podcast-namespace/blob/main/chapters/example.json) example file for a real world example.

Benefits with this approach are that chapters do not require altering audio files, and the chapters can be edited after publishing, since they are a separate file that can be requested on playback (or cached with download). JSON chapter information also allows chapters to be displayed by a wider range of playback tools, including web browsers (which typically have no access to ID3 tags), thus greatly simplifying chapter support; and images can be retrieved on playback, rather than bloating the filesize of the audio. The data held is compatible with normal ID3 tags, thus requiring no additional work for the publisher.`,
    },

    parents: ["<item>"],

    count: "single",

    attributes: [
      {
        name: "url",
        required: true,
        description: "The URL where the chapters file is located.",
      },
      {
        name: "type",
        required: true,
        description:
          "Mime type of file - JSON prefered, 'application/json+chapters'.",
      },
    ],
    examples: [
      {
        label: "RSS tag",
        language: "xml",
        code: '<podcast:chapters url="https://example.com/episode1/chapters.json" type="application/json+chapters" />',
      },
      {
        label: "Example JSON file with chapters",
        language: "js",
        code: `{
  "version": "1.2.0",
  "chapters": [
    {
      "startTime": 0,
      "title": "Intro"
    },
    {
      "startTime": 168,
      "title": "Hearing Aids",
      "img": "https://example.com/images/hearing_aids.jpg"
    },
    {
      "startTime": 260,
      "title": "Progress Report"
    },
    {
      "startTime": 410,
      "title": "Namespace",
      "img": "https://example.com/images/namepsace_example.jpg",
      "url": "https://github.com/Podcastindex-org/podcast-namespace"
    },
    {
      "startTime": 3990,
      "title": "Just Break Up",
      "img": "https://example.com/images/justbreakuppod.png"
    },
    {
      "startTime": 4600,
      "title": "Donations",
      "url": "https://example.com/paypal_link"
    },
    {
      "startTime": 5510,
      "title": "The Big Players"
    },
    {
      "startTime": 5854,
      "title": "Spread the Word"
    },
    {
      "startTime": 6089,
      "title": "Outro"
    }
  ]
}`,
      },
    ],
  },
  {
    label: "Soundbite",
    tag: "<podcast:soundbite>",
    slug: "soundbite",
    namespace: "podcast",
    documentationUrl:
      "https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#soundbite",
    description: {
      short: "Suggested clips for sharing and promotion",
      long: "Points to one or more soundbites within a podcast episode. The intended use includes episodes previews, discoverability, audiogram generation, episode highlights, etc. It should be assumed that the audio/video source of the soundbite is the audio/video given in the item's [`<enclosure>`](https://cyber.harvard.edu/rss/rss.html#ltenclosuregtSubelementOfLtitemgt) element.",
    },

    parents: ["<item>"],

    count: "multiple",

    nodeValue:
      "This is a free form string from the podcast creator to specify a title for the soundbite. If the podcaster does not provide a value for the soundbite title, then leave the value blank, and podcast apps can decide to use the episode title or some other placeholder value in its place. Please do not exceed `128 characters` for the node value or it may be truncated by aggregators.",

    attributes: [
      {
        name: "startTime",
        required: true,
        description: "The time where the soundbite begins",
      },
      {
        name: "duration",
        required: true,
        description:
          "How long is the soundbite (recommended between 15 and 120 seconds)",
      },
    ],
    examples: [
      {
        language: "xml",
        code: '<podcast:soundbite startTime="73.0" duration="60.0" />',
      },

      {
        language: "xml",
        code: `<podcast:soundbite startTime="1234.5" duration="42.25">
  Why the Podcast Namespace Matters
</podcast:soundbite>`,
      },
    ],
  },
  {
    label: "Person",
    tag: "<podcast:person>",
    slug: "person",
    namespace: "podcast",
    documentationUrl:
      "https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#person",
    description: {
      short: "Credits for hosts and guests",
      long: "This element specifies a person of interest to the podcast. It is primarily intended to identify people like hosts, co-hosts and guests. Although, it is flexible enough to allow fuller credits to be given using the roles and groups that are listed in the [Podcast Taxonomy Project](https://podcasttaxonomy.com/)",
    },

    parents: ["<channel>", "<item>"],
    parentsDescription: `It is suggested that \`<channel>\` is always populated, and \`<item>\` is populated where needed for an individual episode. Where present, people information in \`<item>\` wholly replaces all information from the \`<channel>\`.

Publishers are expected to use the \`podcast:person\` element in the \`<channel>\` parent to set the _regular_ people involved in the podcast: the detail that would be expected to be seen in an overview of the show.

Publishers are expected to use the \`podcast:person\` in the \`<item>\` parent to **replace** all existing information for an individual episode.

#### For example: _Terry and June_

The fictional podcast _Terry and June_ is normally hosted by Terry Scott and June Whitfield. Within \`<channel>\`, Terry Scott and June Whitfield are listed as the hosts. A podcast directory, or podcast app, should show Terry Scott and June Whitfield as the hosts of this show.

For one episode, _Terry and June_ was hosted by Reginald Marsh and June Whitfield (Terry was away). In this case, the \`<item>\` for this episode should contain Reginald Marsh and June Whitfield as the hosts of this episode. A podcast app, when playing this episode, should show only Reginald Marsh and June Whitfield as the hosts of this episode. Because people information in \`<item>\` replaces all existing people information in \`<channel>\`, Terry Scott should not be visible as a host of this episode.

#### For example: _Big Daddy_

The fictional podcast _Big Daddy Interviews_ is hosted by Big Daddy, a wrestler. Within \`<channel>\`, Big Daddy is listed as the host. A podcast directory, or podcast app, should show Big Daddy as the host of this show.

For one episode, _Big Daddy Interviews_ had a guest of Sid James. In this case, the \`<item>\` for this episode should contain Sid James as a guest, **and** Big Daddy as the host of this episode. Because people information in \`<item>\` replaces all existing people information in \`<channel>\`, Big Daddy should be re-stated as the host of this episode.`,

    count: "multiple",

    nodeValue:
      "This is the full name or alias of the person. This value cannot be blank. Please do not exceed 128 characters for the node value or it may be truncated by aggregators.",

    attributes: [
      {
        name: "role",
        required: false,
        description:
          'Used to identify what role the person serves on the show or episode. This should be a reference to an official role within the Podcast Taxonomy Project list (see below). If `role` is missing then "host" is assumed.',
      },
      {
        name: "group",
        required: false,
        description:
          'This should be a reference to an official group within the Podcast Taxonomy Project list. If `group` is not present, then "cast" is assumed.',
      },
      {
        name: "img",
        required: false,
        description: "This is the url of a picture or avatar of the person.",
      },
      {
        name: "href",
        required: false,
        description:
          "The url to a relevant resource of information about the person, such as a homepage of third-party profile platform. Please see the [example feed](https://github.com/Podcastindex-org/podcast-namespace/blob/main/example.xml) for possible choices of what to use here.",
      },
    ],
    attributesDescription: `The \`role\` and \`group\` attributes are case-insensitive. So, "Host" is the same as "host", and "Cover Art Designer" is the same as "cover art designer".

The full taxonomy list is [here](https://github.com/Podcastindex-org/podcast-namespace/blob/main/taxonomy.json) as a json file.`,
    examples: [
      {
        language: "xml",
        code: `<podcast:person href="https://example.com/johnsmith/blog" img="http://example.com/images/johnsmith.jpg">
  John Smith
</podcast:person>`,
      },

      {
        language: "xml",
        code: `<podcast:person role="guest" href="https://www.imdb.com/name/nm0427852888/" img="http://example.com/images/janedoe.jpg">
  Jane Doe
</podcast:person>`,
      },
      {
        language: "xml",
        code: `<podcast:person role="guest" href="https://www.wikipedia/alicebrown" img="http://example.com/images/alicebrown.jpg">
  Alice Brown
</podcast:person>`,
      },
      {
        language: "xml",
        code: `<podcast:person group="writing" role="guest" href="https://www.wikipedia/alicebrown" img="http://example.com/images/alicebrown.jpg">
  Alice Brown
</podcast:person>`,
      },

      {
        language: "xml",
        code: `<podcast:person group="visuals" role="Cover Art Designer" href="https://example.com/artist/beckysmith">
  Becky Smith
</podcast:person>`,
      },
    ],
  },
  {
    label: "Location",
    tag: "<podcast:location>",
    slug: "location",
    namespace: "podcast",
    documentationUrl:
      "https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#location",
    description: {
      short: "Where is this podcast about?",
      long: 'This tag is intended to describe the location of editorial focus for a podcast\'s content (i.e. "what place is this podcast about?"). The tag has many use cases and is one of the more complex ones. You are **highly encouraged** to read the full [implementation document](https://github.com/Podcastindex-org/podcast-namespace/blob/main/location/location.md) before starting to code for it.',
    },

    parents: ["<channel>"],

    count: "single",

    nodeValue:
      'This is a free-form string meant to be a human readable location. It may conform to conventional location verbiage (i.e. "Austin, TX"), but it shouldn\'t be depended on to be parseable in any specific way. This value cannot be blank. Please do not exceed 128 characters for the node value or it may be truncated by aggregators.',

    attributes: [
      {
        name: "geo",
        required: false,
        recommended: true,
        description:
          'This is a latitude and longitude given in ["geo" notation](https://github.com/Podcastindex-org/podcast-namespace/blob/main/location/location.md#geo-recommended) (i.e. "geo:30.2672,97.7431").',
      },
      {
        name: "osm",
        required: false,
        recommended: true,
        description:
          'The Open Street Map identifier of this place, given using the OSM notation (i.e. "R113314")',
      },
    ],
    examples: [
      {
        language: "xml",
        code: '<podcast:location geo="geo:30.2672,97.7431" osm="R113314">Austin, TX</podcast:location>',
      },

      {
        language: "xml",
        code: '<podcast:location geo="geo:33.51601,-86.81455" osm="R6930627">Birmingham Civil Rights Museum</podcast:location>',
      },

      {
        language: "xml",
        code: '<podcast:location geo="geo:-27.86159,153.3169" osm="W43678282">Dreamworld (Queensland)</podcast:location>',
      },
    ],
  },
  {
    label: "Season",
    tag: "<podcast:season>",
    slug: "season",
    namespace: "podcast",
    documentationUrl:
      "https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#season",
    description: {
      short: "Named or numbered seasons/series",
      long: 'This element allows for identifying which episodes in a podcast are part of a particular "season", with an optional season name attached.',
    },

    parents: ["<item>"],

    count: "single",

    nodeValue:
      'The node value is an integer, and represents the season "number". It is required.',

    attributes: [
      {
        name: "name",
        required: false,
        description: `This is the "name" of the season. If this attribute is present, applications are free to **not** show the season number to the end user, and may use it simply for chronological sorting and grouping purposes.

Please do not exceed 128 characters for the name attribute.`,
      },
    ],
    examples: [
      {
        language: "xml",
        code: "<podcast:season>5</podcast:season>",
      },

      {
        language: "xml",
        code: '<podcast:season name="Race for the Whitehouse 2020">3</podcast:season>',
      },

      {
        language: "xml",
        code: '<podcast:season name="Egyptology: The 19th Century">1</podcast:season>',
      },

      {
        language: "xml",
        code: '<podcast:season name="The Yearling - Chapter 3">3</podcast:season>',
      },
    ],
  },
  {
    label: "Episode",
    tag: "<podcast:episode>",
    slug: "episode",
    namespace: "podcast",
    documentationUrl:
      "https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#episode",
    description: {
      short: "Episode numbers and names",
      long: 'This element exists largely for compatibility with the `season` tag. But, it also allows for a similar idea to what "name" functions as in that element.',
    },

    parents: ["<item>"],

    count: "single",

    nodeValue: "The node value is a decimal number. It is required.",

    attributes: [
      {
        name: "display",
        required: false,
        description:
          "If this attribute is present, podcast apps and aggregators are encouraged to show its value instead of the purely numerical node value. This attribute is a string.",
      },
    ],
    attributesDescription: `The episode numbers are decimal, so numbering such as \`100.5\` is acceptable if there was a special mini-episode published between two other episodes. In that scenario, the number would help with proper chronological sorting, while the \`display\` attribute could specify an alternate special "number" (a moniker) to display for the episode in a podcast player app UI.

Please do not exceed 32 characters for the display attribute.`,
    examples: [
      {
        language: "xml",
        code: "<podcast:episode>3</podcast:episode>",
      },

      {
        language: "xml",
        code: "<podcast:episode>315.5</podcast:episode>",
      },

      {
        language: "xml",
        code: '<podcast:episode display="Ch.3">204</podcast:episode>',
      },

      {
        language: "xml",
        code: '<podcast:episode display="Day 5">9</podcast:episode>',
      },
    ],
  },
  {
    label: "Trailer",
    tag: "<podcast:trailer>",
    slug: "trailer",
    namespace: "podcast",
    documentationUrl:
      "https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#trailer",
    description: {
      short: "Show or season trailer",
      long: `This element is used to define the location of an audio or video file to be used as a trailer for the entire podcast or a specific season. There can be more than one trailer present in the channel of the feed. This element is basically just like an [\`<enclosure>\`](https://cyber.harvard.edu/rss/rss.html#ltenclosuregtSubelementOfLtitemgt) with the extra \`pubdate\` and \`season\` attributes added.

If there is more than one trailer tag present in the channel, the most recent one (according to its \`pubdate\`) should be chosen as the preview by default within podcast apps.`,
    },

    parents: ["<channel>"],

    count: "multiple",

    nodeValue:
      "The node value is a string, which is the title of the trailer. It is required. Please do not exceed 128 characters for the node value or it may be truncated by aggregators.",

    attributes: [
      {
        name: "url",
        required: true,
        description:
          "This is a url that points to the audio or video file to be played. This attribute is a string.",
      },
      {
        name: "pubdate",
        required: true,
        description:
          "The date the trailer was published. This attribute is an RFC2822 formatted date string.",
      },
      {
        name: "length",
        required: false,
        recommended: true,
        description:
          "The length of the file in bytes. This attribute is a number.",
      },
      {
        name: "type",
        required: false,
        recommended: true,
        description: "The mime type of the file. This attribute is a string.",
      },
      {
        name: "season",
        required: false,
        description:
          "If this attribute is present it specifies that this trailer is for a particular season number. This attribute is a number.",
      },
    ],

    attributesDescription:
      'If the the `season` attribute is present, it must be a number that matches the format of the `<podcast:season>` tag. So, for a podcast that has 3 published seasons, a new `<podcast:trailer season="4">` tag can be put in the channel to later be matched up with a `<podcast:season>4<podcast:season>` tag when it is published within a new `<item>`.',
    examples: [
      {
        language: "xml",
        code: `<podcast:trailer
  pubdate="Thu, 01 Apr 2021 08:00:00 EST"
  url="https://example.org/trailers/teaser"
  length="12345678"
  type="audio/mp3"
>
  Coming April 1st, 2021
</podcast:trailer>`,
      },

      {
        language: "xml",
        code: `<podcast:trailer
  pubdate="Thu, 01 Apr 2021 08:00:00 EST"
  url="https://example.org/trailers/season4teaser"
  length="12345678"
  type="video/mp4"
  season="4"
>
  Season 4: Race for the Whitehouse
</podcast:trailer>

<!-- (later matches with) -->

<podcast:season name="Race for the Whitehouse">4</podcast:season>`,
      },
    ],
  },
  {
    label: "License",
    tag: "<podcast:license>",
    slug: "license",
    namespace: "podcast",
    documentationUrl:
      "https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#license",
    description: {
      short: "Indicate the show's license",
      long: "This element defines a license that is applied to the audio/video content of a single episode, or the audio/video of the podcast as a whole. Custom licenses must always include a url attribute. Implementors are encouraged to read the license tag companion [document](https://github.com/Podcastindex-org/podcast-namespace/blob/main/proposal-docs/license/license.md) for a more complete picture of what this tag is intended to accomplish.",
    },

    parents: ["<item>"],

    count: "single",

    nodeValue:
      'The node value must be a lower-cased reference to a license "identifier" defined in the [SPDX License List](https://spdx.org/licenses/) file if the license being used is a well-known, public license. Or, if it is a custom license, it must be a free form abbreviation of the name of the license as you reference it publicly. Please do not exceed 128 characters for the node value or it may be truncated by aggregators.',

    attributes: [
      {
        name: "url",
        required: false,
        description:
          "This is a url that points to the full, legal language of the license being referenced. This attribute is optional for well-known public licenses. For new, or custom licenses it is required.",
      },
    ],
    examples: [
      {
        language: "xml",
        code: "<podcast:license>cc-by-4.0</podcast:license>",
      },

      {
        language: "xml",
        code: `<podcast:license url="https://example.org/mypodcastlicense/full.pdf">
  my-podcast-license-v1
</podcast:license>`,
      },
    ],
  },
  {
    label: "Alternate Enclosure",
    tag: "<podcast:alternateEnclosure>",
    slug: "alternateEnclosure",
    namespace: "podcast",
    documentationUrl:
      "https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#alternate-enclosure",
    description: {
      short: "Offer additional bitrates, video versions, etc.",
      long: `This element is meant to provide different versions of, or companion media to the main [\`<enclosure>\`](https://cyber.harvard.edu/rss/rss.html#ltenclosuregtSubelementOfLtitemgt) file. This could be an audio only version of a video podcast to allow apps to switch back and forth between audio/video, lower (or higher) bitrate versions for bandwidth constrained areas, alternative codecs for different device platforms, alternate URI schemes and download types such as IPFS or WebTorrent, commentary tracks or supporting source clips, etc.

 This is a complex tag, so implementors are highly encouraged to read the companion [document](https://github.com/Podcastindex-org/podcast-namespace/blob/main/proposal-docs/alternateEnclosure/alternateEnclosure.md) for a fuller understanding of how this tag works and what it is capable of.`,
    },

    parents: ["<item>"],

    count: "multiple",

    nodeValue:
      "The node value must be one or more `<podcast:source>` elements that each define a uri where the media file can be downloaded or streamed. A single, optional `<podcast:integrity>` element may also be included to allow for file integrity checking.",

    attributes: [
      {
        name: "type",
        required: true,
        description: "Mime type of the media asset.",
      },
      {
        name: "length",
        required: false,
        recommended: true,
        description: "Length of the file in bytes.",
      },
      {
        name: "bitrate",
        required: false,
        description:
          "Average encoding bitrate of the media asset, expressed in bits per second.",
      },
      {
        name: "height",
        required: false,
        description: "Height of the media asset for video formats.",
      },
      {
        name: "lang",
        required: false,
        description:
          "An [IETF language tag (BCP 47)](https://en.wikipedia.org/wiki/BCP_47) code identifying the language of this media.",
      },
      {
        name: "title",
        required: false,
        description:
          "A human-readable string identifying the name of the media asset. Should be limited to 32 characters for UX.",
      },
      {
        name: "rel",
        required: false,
        description:
          'Provides a method of offering and/or grouping together different media elements. If not set, or set to "default", the media will be grouped with the enclosure and assumed to be an alternative to the enclosure\'s encoding/transport. This attribute can and should be the same for items with the same content encoded by different means. Should be limited to 32 characters for UX.',
      },
      {
        name: "codecs",
        required: false,
        description:
          "An [RFC 6381](https://tools.ietf.org/html/rfc6381) string specifying the codecs available in this media.",
      },
      {
        name: "default",
        required: false,
        description:
          "Boolean specifying whether or not the given media is the same as the file from the enclosure element and should be the preferred media element. The primary reason to set this is to offer alternative transports for the enclosure. If not set, this should be assumed to be false.",
      },
    ],
    examples: [
      {
        language: "xml",
        code: `<enclosure url="https://example.com/file-0.mp3" length="43200000" type="audio/mpeg" />

<podcast:alternateEnclosure type="audio/mpeg" length="43200000" bitrate="128000" default="true" title="Standard">
  <podcast:source uri="https://example.com/file-0.mp3" />
  <podcast:source uri="ipfs://someRandomMpegFile" />
</podcast:alternateEnclosure>

<podcast:alternateEnclosure type="audio/opus" length="32400000" bitrate="96000" title="High quality">
  <podcast:source uri="https://example.com/file-high.opus" />
  <podcast:source uri="ipfs://someRandomHighBitrateOpusFile" />
</podcast:alternateEnclosure>

<podcast:alternateEnclosure type="audio/aac" length="54000000" bitrate="160000" title="High quality AAC">
  <podcast:source uri="https://example.com/file-proprietary.aac" />
  <podcast:source uri="ipfs://someRandomProprietaryAACFile" />
</podcast:alternateEnclosure>

<podcast:alternateEnclosure type="audio/opus" length="5400000" bitrate="16000" title="Low bandwidth">
  <podcast:source uri="https://example.com/file-low.opus" />
  <podcast:source uri="ipfs://someRandomLowBitrateOpusFile" />
</podcast:alternateEnclosure>`,
      },

      {
        language: "xml",
        code: `<podcast:alternateEnclosure type="audio/mpeg" length="2490970" bitrate="160707.74">
  <podcast:source uri="https://example.com/file-0.mp3" />
  <podcast:source uri="ipfs://QmdwGqd3d2gFPGeJNLLCshdiPert45fMu84552Y4XHTy4y" />
  <podcast:source uri="https://example.com/file-0.torrent" contentType="application/x-bittorrent" />
  <podcast:source uri="http://example.onion/file-0.mp3" />
</podcast:alternateEnclosure>

<podcast:alternateEnclosure type="video/mp4" length="10562995" bitrate="681483.55" height="1080">
  <podcast:source uri="https://example.com/file-1080.mp4" />
  <podcast:source uri="ipfs://QmfQKJcp2xdByEt8mzWr1AJUhwvb9rdWPoacvdq2roDhgh" />
  <podcast:source uri="https://example.com/file-1080.torrent" contentType="application/x-bittorrent" />
  <podcast:source uri="http://example.onion/file-1080.mp4" />
</podcast:alternateEnclosure>`,
      },
    ],
  },
  {
    label: "Source",
    tag: "<podcast:source>",
    slug: "source",
    namespace: "podcast",
    description: {
      short: "A source for an alternate enclosure",
      long: "This element defines a URI location for a `<podcast:alternateEnclosure>` media file. It is meant to be used as a child of the `<podcast:alternateEnclosure>` element. At least one `<podcast:source>` element must be present within every `<podcast:alternateEnclosure>` element.",
    },

    parents: ["<podcast:alternateEnclosure>"],

    count: "multiple",

    attributes: [
      {
        name: "uri",
        required: true,
        description: "This is the URI where the media file resides.",
      },
      {
        name: "contentType",
        required: false,
        description:
          "This is a string that declares the mime-type of the file. It is useful if the transport mechanism is different than the file being delivered, as is the case with a torrents.",
      },
    ],
    examples: [
      {
        language: "xml",
        code: `<podcast:alternateEnclosure type="video/mp4" length="7924786" bitrate="511276.52" height="720">
  <podcast:source uri="https://example.com/file-720.mp4" />
  <podcast:source uri="ipfs://QmX33FYehk6ckGQ6g1D9D3FqZPix5JpKstKQKbaS8quUFb" />
  <podcast:source uri="https://example.com/file-720.torrent" contentType="application/x-bittorrent" />
  <podcast:source uri="http://example.onion/file-720.mp4" />
</podcast:alternateEnclosure>`,
        highlightLines: ["2:5"],
      },
    ],
  },
  {
    label: "Integrity",
    tag: "<podcast:integrity>",
    slug: "integrity",
    namespace: "podcast",
    description: {
      short: "A method of verifying integrity of the media",
      long: "This element defines a method of verifying integrity of the media given either an [SRI-compliant integrity string](https://www.w3.org/TR/SRI/) (preferred) or a base64 encoded PGP signature. This element is optional within a `<podcast:alternateEnclosure>` element. It allows to ensure that the file has not been tampered with.",
    },

    parents: ["<podcast:alternateEnclosure>"],

    count: "single",

    attributes: [
      {
        name: "type",
        required: true,
        description: `Type of integrity, either "sri" or "pgp-signature".`,
      },
      {
        name: "value",
        required: true,
        description: "Value of the sri string or base64 encoded pgp signature.",
      },
    ],
    examples: [
      {
        language: "xml",
        code: `<podcast:alternateEnclosure type="video/mp4" length="7924786" bitrate="511276.52" height="720">
  <podcast:source uri="https://example.com/file-720.mp4" />
  <podcast:source uri="ipfs://QmX33FYehk6ckGQ6g1D9D3FqZPix5JpKstKQKbaS8quUFb" />
  <podcast:integrity type="sri" value="sha384-ExVqijgYHm15PqQqdXfW95x+Rs6C+d6E/ICxyQOeFevnxNLR/wtJNrNYTjIysUBo" />
</podcast:alternateEnclosure>`,
        highlightLines: [4],
      },
    ],
  },
  {
    label: "GUID",
    tag: "<podcast:guid>",
    slug: "guid",
    namespace: "podcast",
    documentationUrl:
      "https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#guid",
    description: {
      short: "Globally unique identifier for the podcast",
      long: `This element is used to declare a unique, global identifier for a podcast. The value is a UUIDv5, and is easily generated from the RSS feed url, with the **protocol scheme and trailing slashes stripped off**, combined with a unique "podcast" namespace which has a UUID of \`ead4c236-bf58-58c6-a2c6-a6b28d128cb6\`. Tools like [this one](https://www.uuidtools.com/v5) can help generate these values by hand. Or, language libraries like [this one](https://github.com/sporkmonger/uuidtools) in Ruby are widely available. Specifically for podcasts, [this tool from RSS Blue](https://tools.rssblue.com/podcast-guid) can help generate a GUID by hand.

A podcast gets assigned a podcast:guid once in its lifetime using its current feed url (at the time of assignment) as the seed value. That GUID is then meant to follow the podcast from then on, for the duration of its life, even if the feed url changes. This means that when a podcast moves from one hosting platform to another, its podcast:guid should be discovered by the new host and imported into the new platform for inclusion into the feed.

Using this pattern, podcasts can maintain a consistent identity across the open RSS ecosystem without a central authority.

**Tips:**

- All podcasts in the Podcast Index have already been assigned a GUID; but if one exists in the RSS feed, that value is canonical.
- You can programmatically spot a GUID: it is 36 characters long, and contains four hyphen characters.
- Be aware that Amazon Music also uses separate UUIDv5 identifiers within their podcast directory, which are calculated differently and unrelated to this specification.
- The following regular expression (regex) will match a GUID \`[0-9a-fA-F]{8}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{12}\``,
    },

    parents: ["<channel>"],

    count: "single",

    nodeValue: "The node value is a UUIDv5 string.",

    examples: [
      {
        label: "Example GUID for feed url `mp3s.nashownotes.com/pc20rss.xml`",
        language: "xml",
        code: "<podcast:guid>917393e3-1b1e-5cef-ace4-edaa54e1f810</podcast:guid>",
      },

      {
        label: "Example GUID for feed url `podnews.net/rss`",
        language: "xml",
        code: "<podcast:guid>9b024349-ccf0-5f69-a609-6b82873eab3c</podcast:guid>",
      },
    ],
    notes: `### Guid-enabled fast-follow share links

The \`podcast:guid\` value above enables podcasters to produce a link that can share a podcast on a variety of different platforms.

The format of the link is \`https://(a podcast website link)#fastfollow-(type):(a podcast guid)\`

\`type\` is currently \`podcast\`, but may be extended in future.

A working example is https://podnews.net/podcast/i8xe9/listen#fastfollow-podcast:9b024349-ccf0-5f69-a609-6b82873eab3c or the QR code given below.

![podnews-qr](https://user-images.githubusercontent.com/231941/127796108-d819de43-6c0e-4c7b-9579-ed1f19989443.png)

When scanned on a mobile phone's camera app, this link will go to the specified podcast website. Behavior of this website is up to the creator: some may use a default homepage, others may sniff the useragent and open a default podcast app on a device. In the working example, above, an iPhone user may be taken to Apple Podcasts; an Android user may be taken to Google Podcasts; and another device will be given a page with a player.

When scanned on a QR code reader inside a podcast app, like [CurioCaster](https://curiocaster.com/), the app can parse the \`podcast:guid\` value from the URL, allowing the podcast to be opened within the application.`,
  },
  {
    label: "Value",
    tag: "<podcast:value>",
    slug: "value",
    namespace: "podcast",
    documentationUrl:
      "https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#value",
    description: {
      short: "Enable streaming micropayments to the podcast",
      long: `This element designates the cryptocurrency or payment layer that will be used, the transport method for transacting the payments, and a suggested amount denominated in the given cryptocurrency.

This element can exist at either the \`<channel>\` or \`<item>\` level. When it exists at the \`<item>\` level, it should be treated as an "override" of whatever is defined at the \`<channel>\` level.

This is a complex tag, so implementors are HIGHLY encouraged to read the companion [document](https://github.com/Podcastindex-org/podcast-namespace/blob/main/value/value.md) for a complete understanding of how this tag works and what it is capable of.`,
    },

    parents: ["<channel>", "<item>"],

    count: "multiple",

    nodeValue:
      "The node value must be one or more `<podcast:valueRecipient>` elements.",

    attributes: [
      {
        name: "type",
        required: true,
        description:
          "This is the service slug of the cryptocurrency or protocol layer.",
      },
      {
        name: "method",
        required: true,
        description: "This is the transport mechanism that will be used.",
      },
      {
        name: "suggested",
        required: false,
        description:
          "This is an optional suggestion on how much cryptocurrency to send with each payment.",
      },
    ],
    examples: [
      {
        language: "xml",
        code: '<podcast:value type="lightning" method="keysend" suggested="0.00000005000"></podcast:value>',
      },
    ],
  },
  {
    label: "Value Recipient",
    tag: "<podcast:valueRecipient>",
    slug: "valueRecipient",
    namespace: "podcast",
    description: {
      short: "Designate destinations for streaming micropayments",
      long: `The \`valueRecipient\` tag designates various destinations for payments to be sent to during consumption of the enclosed media. Each recipient is considered to receive a "split" of the total payment according to the number of shares given in the \`split\` attribute.

This element may only exist within a parent \`<podcast:value>\` element.

There is no limit on how many \`valueRecipient\` elements can be present in a given \`<podcast:value>\` element.

This is a complex tag, so implementors are HIGHLY encouraged to read the companion [document](https://github.com/Podcastindex-org/podcast-namespace/blob/main/value/value.md) for a complete understanding of how this tag works and what it is capable of.`,
    },

    parents: ["<podcast:value>"],

    count: "multiple",

    attributes: [
      {
        name: "name",
        required: false,
        recommended: true,
        description:
          "A free-form string that designates who or what this recipient is.",
      },
      {
        name: "customKey",
        required: false,
        description:
          "The name of a custom record key to send along with the payment.",
      },
      {
        name: "customValue",
        required: false,
        description:
          "A custom value to pass along with the payment. This is considered the value that belongs to the `customKey`.",
      },
      {
        name: "type",
        required: true,
        description:
          "A slug that represents the type of receiving address that will receive the payment.",
      },
      {
        name: "address",
        required: true,
        description: "This denotes the receiving address of the payee.",
      },
      {
        name: "split",
        required: true,
        description:
          "The number of shares of the payment this recipient will receive.",
      },
      {
        name: "fee",
        required: false,
        description:
          "If this attribute is not specified, it is assumed to be false.",
      },
    ],
    examples: [
      {
        language: "xml",
        code: `<podcast:value type="lightning" method="keysend" suggested="0.00000015000">
  <podcast:valueRecipient
    name="Alice (Podcaster)"
    type="node"
    address="02d5c1bf8b940dc9cadca86d1b0a3c37fbe39cee4c7e839e33bef9174531d27f52"
    split="40"
  />
  <podcast:valueRecipient
    name="Bob (Podcaster)"
    type="node"
    address="032f4ffbbafffbe51726ad3c164a3d0d37ec27bc67b29a159b0f49ae8ac21b8508"
    split="40"
  />
  <podcast:valueRecipient
    name="Carol (Producer)"
    type="node"
    address="02dd306e68c46681aa21d88a436fb35355a8579dd30201581cefa17cb179fc4c15"
    split="15"
  />
  <podcast:valueRecipient
    name="Hosting Provider"
    type="node"
    address="03ae9f91a0cb8ff43840e3c322c4c61f019d8c1c3cea15a25cfc425ac605e61a4a"
    split="5"
    fee="true"
  />
</podcast:value>`,
      },
    ],
  },
  {
    label: "Medium",
    tag: "<podcast:medium>",
    slug: "medium",
    namespace: "podcast",
    documentationUrl:
      "https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#medium",
    description: {
      short: "Trigger a UI based on the type of content",
      long: `The \`medium\` tag tells an application what the content contained within the feed _is_, as opposed to what the content is _about_ in the case of a category. This allows a podcast app to modify it's behavior or UI to give a better experience to the user for this content. For example, if a podcast has \`<podcast:medium>music</podcast:medium>\` an app may choose to reset playback speed to 1x and adjust it's EQ settings to be better for music vs. spoken word.

Accepted medium names are curated within a list maintained by the community as new mediums are discovered over time. Newly proposed mediums should require some level of justification to be added to this list. One may argue and/or prove use of a new medium even for only one application, should it prove different enough from existing mediums to have meaning.`,
    },

    parents: ["<channel>"],

    count: "single",

    nodeValue: `The node value is a string denoting one of the following possible values:

 \`podcast\` (default) - Describes a feed for a podcast show. If no \`medium\` tag is present in the channel, this medium is assumed.

 \`music\` - A feed of music organized into an "album" with each item a song within the album.

\`video\` - Like a "podcast" but used in a more visual experience. Something akin to a dedicated video channel like would be found on YouTube.

\`film\` - Specific types of videos with one item per feed. This is different than a \`video\` medium because the content is considered to be cinematic; like a movie or documentary.

\`audiobook\` - Specific types of audio with one item per feed, or where items represent chapters within the book.

\`newsletter\` - Describes a feed of curated written articles. Newsletter articles now sometimes have an spoken version audio enclosure attached.

\`blog\` - Describes a feed of informally written articles. Similar to \`newsletter\` but more informal as in a traditional blog platform style.`,

    notes: `### List Mediums

In addition to the above mediums, each medium also has a counterpart "list" variant, where the original medium name is suffixed by the letter "L" to indicate that it is a "List" of that type of content. For example, \`podcast\` would become \`podcastL\`, \`music\` would become \`musicL\`, \`audiobook\` would become \`audiobookL\`, etc.

There is also a dedicated list medium for mixed content:

- \`mixed\` - This list medium type describes a feed of \`<podcast:remoteItem>\`\'s that point to different remote medium types. For instance, a single list feed might point to music, podcast and audiobook items in other feeds. An example would be a personal consumption history feed.

A "list" medium feed should not be expected to have regular \`<item>\`\'s,\`<podcast:liveItem>\`\'s, or any future similar new item type. Rather, a "List" feed is intended to exclusively contain one or more \`<podcast:remoteItem>\`\'s, allowing one to reference a feed by its \`<podcast:guid>\` and the guid of an item.`,
    examples: [
      {
        label: 'Example use for a standard "podcast" feed',
        language: "xml",
        code: "<podcast:medium>podcast</podcast:medium>",
      },

      {
        label: 'Example use for a "music" feed',
        language: "xml",
        code: "<podcast:medium>music</podcast:medium>",
      },

      {
        label: 'Example use for a "music" playlist feed',
        language: "xml",
        code: `<rss
  xmlns:podcast="https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md"
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
  version="2.0"
>
  <channel>
    <title>Picking the Hits 2.0!</title>
    <description>All the hits played on the Podcasting 2.0 show.</description>
    <link>https://podcastindex.org</link>
    <language>en-US</language>
    <pubDate>Wed, 07 Jun 2023 04:30:38 GMT</pubDate>
    <image>
      <url>https://example.com/images/pci_avatar-massive.jpg</url>
    </image>
    
    <podcast:guid>3f2a8e4e-263a-51aa-9d3d-0d71f82a1564</podcast:guid>
    <podcast:medium>musicL</podcast:medium>
    <itunes:image>https://example.com/images/pci_avatar-massive.jpg</itunes:image>
    
    <podcast:value type="lightning" method="keysend" suggested="0.00000005000">
      <podcast:valueRecipient name="podcaster" type="node" 
        address="036557ea56b3b86f08be31bcd2557cae8021b0e3a9413f0c0e52625c6696972e57" split="99" />
      <podcast:valueRecipient name="hosting company" type="node" 
        address="036557ea56b3b86f08be31bcd2557cae8021b0e3a9413f0c0e52625c6696972e57" split="1" />
    </podcast:value>
    
    <podcast:remoteItem
      feedGuid="ff519475-6e90-5231-91a0-37d092088d88"
      feedUrl="https://media.rss.com/joemartinmusic/feed.xml"
      itemGuid="e75771b1-e8d4-4133-9392-c579822247d9"
      medium="music"
    />
    
    <podcast:remoteItem
      feedGuid="47081700-bd65-511f-b535-f545f3cd660c"
      feedUrl="https://player.wavlake.com/feed/d1ed0ec9-21a8-4eda-b2c9-b17c8019a7e8"
      itemGuid="7b03666e-b323-499d-93a7-ca51ce627ffd"
      medium="music"
    />
      
    <podcast:remoteItem
      feedGuid="483dde8e-7e94-59a7-8eb0-2b0dc64a87bd"
      feedUrl="https://player.wavlake.com/feed/1dd1bbd8-1084-4fdc-9788-dddaa62fbc6a"
      itemGuid="8501fb64-a6a3-475a-8b10-9c746f0fe579"
      medium="music"
    />
      
    <podcast:remoteItem
      feedGuid="b40ffcf7-2c48-5cfe-8daa-b65d766b2c25"
      feedUrl="https://www.wavlake.com/feed/92b04241-97f5-4ff7-be11-cf45f70812e7"
      itemGuid="9a48aab8-6da6-4cc1-9951-5b049c333580"
      medium="music"
    />
  </channel>
</rss>`,
      },
    ],
  },
  {
    label: "Images",
    tag: "<podcast:images>",
    slug: "images",
    namespace: "podcast",
    documentationUrl:
      "https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#images",
    description: {
      short: "Multiple image resources for the podcast",
      long: "This tag, when present, allows for specifying many different image sizes in a compact way at either the episode or channel level. The syntax is borrowed from the HTML5 [srcset](https://html.spec.whatwg.org/multipage/images.html#srcset-attributes) syntax. It allows for describing multiple image sources with width and pixel hints directly in the attribute. Although the HTML5 `srcset` attribute allows relative urls, absolute urls are required in this tag - since the feed url may not represent an appropriate base url for relativization.",
    },

    parents: ["<item>"],

    count: "single",

    attributes: [
      {
        name: "srcset",
        required: true,
        description:
          "A string that denotes each image url followed by a space and the pixel width, with each one separated by a comma. See the example for a clear view of the syntax.",
      },
    ],
    examples: [
      {
        label: "Example of specifying four different image sizes",
        language: "xml",
        code: `<podcast:images
  srcset="https://example.com/images/ep1/pci_avatar-massive.jpg 1500w, 
    https://example.com/images/ep1/pci_avatar-middle.jpg 600w, 
    https://example.com/images/ep1/pci_avatar-small.jpg 300w, 
    https://example.com/images/ep1/pci_avatar-tiny.jpg 150w"
/>`,
      },
    ],
  },
  {
    label: "Live Item",
    tag: "<podcast:liveItem>",
    slug: "liveItem",
    namespace: "podcast",
    documentationUrl:
      "https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#live-item",
    description: {
      short: "Live-streaming within podcast apps",
      long: `The \`liveItem\` tag is used for a feed to deliver a live audio or video stream to podcast apps. It takes the same format as a standard \`<item>\` episode tag, and all tags that are allowed as children of a normal \`<item>\` are also allowed as children of \`<podcast:liveItem>\`. Note that "allowed" is not the same as "supported". So, just like a normal \`<item>\`, you cannot depend on all apps to support all tags within \`<podcast:liveItem>\`, especially when the function of the tag is not obvious. For instance, including an \`<itunes:duration>\` tag in a live item is probably a waste of time since apps will not know what to do with that value in the context of live media.

This tag will also make use of the [podping](https://podping.cloud) notification network. A podping notification SHOULD be sent out by the host when the live stream starts, to let apps know.`,
    },

    parents: ["<channel>"],

    count: "multiple",

    nodeValue: `All tags that are valid as children of a standard \`<item>\` tag are also valid as children here.

When specifying the audio/video source, the [\`<podcast:alternateEnclosure>\`](#alternate-enclosure) tag is highly encouraged since it gives the broadest coverage of possible stream types and is explicit in it's communication of what transport protocol and media codecs are being used. In addition to [\`<podcast:alternateEnclosure>\`](#alternate-enclosure), a standard [\`<enclosure>\`](https://cyber.harvard.edu/rss/rss.html#ltenclosuregtSubelementOfLtitemgt) should also be given as a fallback to support podcast apps that don't yet implement [\`<podcast:alternateEnclosure>\`](#alternate-enclosure).

Regardless of which enclosure tag is used, feed owners must be conscious of the fact that choosing a non-mainstream streaming protocol/codec will limit the number of apps that can play the content. For that reason, it's highly recommended to use only the two most widely supported protocols (mp3 and mp4/h.264) to ensure compatibility with the broadest number of apps on various platforms. Choosing a streaming format that is outside of this narrow list might exclude many apps from playing your content. As broader adoption of HLS, Opus, etc. becomes apparent, this recommendation will change to include newer formats.

The [\`<podcast:contentLink>\`](#content-link) tag is also required to be present, to ensure that listeners have a fallback option in case their chosen app cannot play the given content stream directly. In most instances this will just be a link to an HTML page that can play the live stream. Such a page can reside on the podcaster's own website, a page provided by their hosting company or a third party platform they have chosen to use. Podcasters who live stream to multiple platforms at once can also use the [\`<podcast:contentLink>\`](#content-link) tag to provide links to those other platforms.

A robust, well-written \`<podcast:liveItem>\` tag will include all three of: [\`<podcast:alternateEnclosure>\`](#alternate-enclosure), [\`<enclosure>\`](https://cyber.harvard.edu/rss/rss.html#ltenclosuregtSubelementOfLtitemgt) and [\`<podcast:contentLink>\`](#content-link) to ensure the broadest interopability with podcast apps.

The function of \`<guid>\` within a live item tag is the same as it is within a regular item. If the \`<guid>\` of a \`<podcast:liveItem>\` changes, it MUST be considered a new stream by podcast apps.`,

    attributes: [
      {
        name: "status",
        required: true,
        description:
          "A string that must be one of `pending`, `live` or `ended`.",
      },
      {
        name: "start",
        required: true,
        description:
          "A string representing an ISO8601 timestamp that denotes the time when the stream is intended to start.",
      },
      {
        name: "end",
        required: false,
        recommended: true,
        description:
          "A string representing an ISO8601 timestamp that denotes the time when the stream is intended to end.",
      },
    ],

    attributesDescription: `The \`start\` and \`end\` attributes denote when the live stream "should" start and end. But, real life dictates that those times might not be adhered to. Apps are therefore encouraged not to rely solely on those times as anything more than an approximation. The canonical way to know if a stream has started is with the \`status\` attribute. If \`status\` is "live" then the stream has started.`,

    examples: [
      {
        label: "A complete example",
        language: "xml",
        code: `<podcast:liveItem status="live"
  start="2021-09-26T07:30:00.000-0600"
  end="2021-09-26T09:30:00.000-0600"
>
  <title>Podcasting 2.0 Live Show</title>
  <description>
    A look into the future of podcasting and how we get to Podcasting 2.0!
  </description>
  <link>https://example.com/podcast/live</link>
  <guid isPermaLink="true">https://example.com/live</guid>
  <author>John Doe (john@example.com)</author>
  <podcast:images srcset="https://example.com/images/live/pci_avatar-massive.jpg 1500w,
    https://example.com/images/live/pci_avatar-middle.jpg 600w,
    https://example.com/images/live/pci_avatar-small.jpg 300w,
    https://example.com/images/live/pci_avatar-tiny.jpg 150w"
  />
  <podcast:person href="https://www.podchaser.com/creators/adam-curry-107ZzmWE5f"
    img="https://example.com/images/adamcurry.jpg">Adam Curry</podcast:person>
  <podcast:person role="guest" href="https://github.com/daveajones/"
    img="https://example.com/images/davejones.jpg">Dave Jones</podcast:person>
  <podcast:person group="visuals" role="cover art designer"
    href="https://example.com/artist/beckysmith">Becky Smith</podcast:person>
  <podcast:alternateEnclosure type="audio/mpeg" length="312" default="true">
    <podcast:source uri="https://example.com/pc20/livestream" />
  </podcast:alternateEnclosure>
  <enclosure url="https://example.com/pc20/livestream?format=.mp3" type="audio/mpeg" length="312" />
  <podcast:contentLink href="https://youtube.com/pc20/livestream">YouTube!</podcast:contentLink>
  <podcast:contentLink href="https://twitch.com/pc20/livestream">Twitch!</podcast:contentLink>
  <podcast:contentLink href="https://example.com/html/livestream">Listen Live!</podcast:contentLink>
</podcast:liveItem>`,
      },

      {
        label: "A bare bones example",
        language: "xml",
        code: `<podcast:liveItem status="live" start="2021-09-26T07:30:00.000-0600" end="2021-09-26T09:30:00.000-0600">
  <title>Podcasting 2.0 Live Stream</title>
  <guid>e32b4890-983b-4ce5-8b46-f2d6bc1d8819</guid>
  <enclosure url="https://example.com/pc20/livestream?format=.mp3" type="audio/mpeg" length="312" />
  <podcast:contentLink href="https://example.com/html/livestream">Listen Live!</podcast:contentLink>
</podcast:liveItem>`,
      },
    ],
  },
  {
    label: "Content Link",
    tag: "<podcast:contentLink>",
    slug: "contentLink",
    namespace: "podcast",
    description: {
      short: "Link to content delivered outside the app",
      long: `The \`contentLink\` tag is used to indicate that the content begin delivered by the parent element can be found at an external location instead of, or in addition to, being delivered directly to the tag itself within an app. In most instances it is used as a fallback link for the user to use when the app itself can't handle a certain content delivery directly.

For instance, perhaps a podcast feed specifies a \`<podcast:liveItem>\` to deliver a live stream to apps. The feed may also give a \`<podcast:contentLink>\` pointing to YouTube and Twitch versions of the live stream as well, just in case the listener uses an app that doesn't fully support live streaming content.

Currently this tag is only indicated for use in the \`<podcast:liveItem>\` tag. In the future, its use will be expanded.`,
    },

    parents: ["<podcast:liveItem>"],

    count: "multiple",

    nodeValue:
      "The node value is a free form string meant to explain to the user where this content link points and/or the nature of it's purpose.",

    attributes: [
      {
        name: "href",
        required: true,
        description:
          "A string that is the uri pointing to content outside of the application.",
      },
    ],
    examples: [
      {
        language: "xml",
        code: `<podcast:contentLink href="https://youtube.com/blahblah/livestream">
  Live on YouTube!
</podcast:contentLink>`,
      },

      {
        language: "xml",
        code: `<podcast:contentLink href="https://twitter.com/statuses/somepost">
  Chat on Twitter!
</podcast:contentLink>`,
      },
    ],
  },
  {
    label: "Social Interact",
    tag: "<podcast:socialInteract>",
    slug: "socialInteract",
    namespace: "podcast",
    documentationUrl:
      "https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#social-interact",
    description: {
      short: "Comments on podcast episodes",
      long: `The \`socialInteract\` tag allows a podcaster to attach the url of a "root post" of a comment thread to an episode. This "root post" is treated as the canonical location of where the comments and discussion around this episode will take place. This can be thought of as the "official" social media comment space for this episode. If a protocol such as "activitypub" is used, or some other protocol that allows programmatic API access, these comments can be directly pulled into the app, and replies can be posted back to the thread from the app itself.

If multiple \`socialInteract\` tags are given for an \`<item>\`, the \`priority\` attribute is strongly recommended to give the app an indication as to which comments to display first.

This tag can also be used as a signal to platforms and apps that the podcaster does not want public comments shown alongside this episode. For this purpose a \`protocol\` value of "disabled" can be specified, with no other attributes or node value present.`,
    },

    parents: ["<item>"],

    count: "multiple",

    attributes: [
      {
        name: "uri",
        required: true,
        description: "The uri/url of root post comment.",
      },
      {
        name: "protocol",
        required: true,
        description:
          "The [protocol](/socialprotocols.txt) in use for interacting with the comment root post.",
      },
      {
        name: "accountId",
        required: false,
        recommended: true,
        description:
          "The account id (on the commenting platform) of the account that created this root post.",
      },
      {
        name: "accountUrl",
        required: false,
        description:
          "The public url (on the commenting platform) of the account that created this root post.",
      },
      {
        name: "priority",
        required: false,
        description:
          "When multiple socialInteract tags are present, this integer gives order of priority. A lower number means higher priority.",
      },
    ],

    examples: [
      {
        label: "Example (simple)",
        language: "xml",
        code: `<podcast:socialInteract
  uri="https://podcastindex.social/web/@dave/108013847520053258"
  protocol="activitypub"
  accountId="@dave"
/>`,
      },

      {
        label: "Example (complex)",
        language: "xml",
        code: `<podcast:socialInteract priority="1"
  uri="https://podcastindex.social/web/@dave/108013847520053258"
  protocol="activitypub"
  accountId="@dave"
  accountUrl="https://podcastindex.social/web/@dave"
/>
<podcast:socialInteract
  priority="2"
  uri="https://twitter.com/PodcastindexOrg/status/1507120226361647115"
  protocol="twitter"
  accountId="@podcastindexorg"
  accountUrl="https://twitter.com/PodcastindexOrg"
/>`,
      },

      {
        label: "Example (disabled)",
        language: "xml",
        code: `<podcast:socialInteract protocol="disabled" />`,
      },
    ],

    notes:
      "For **activitypub**, Mastodon or Pleroma's posting API returns a URI (a fully-formed URL with a GUID in it), and a URL (the HTML page where the comment lives). While both of these are acceptable values for the `uri` field referenced in the `socialInteract` specification, we'd recommend using the URI value.",
  },
  {
    label: "Block",
    tag: "<podcast:block>",
    slug: "block",
    namespace: "podcast",
    documentationUrl:
      "https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#block",
    description: {
      short: "Request to not be consumable by an app or directory",
      long: `This element allows a podcaster to express which platforms are allowed to publicly display this feed and its contents. In its basic form, it is a direct drop-in replacement for the \`<itunes:block>\` tag, but allows for greater flexibility by the inclusion of the \`id\` attribute and by including multiple copies of itself in the feed.

Platforms should not ingest a feed for public display/use if their slug exists in the \`id\` of a \`yes\` block tag, or if an unbounded \`yes\` block tag exists (meaning block all public ingestion). Conversely, if a platform finds their slug in the \`id\` of a \`no\` block tag, they are free to ingest that feed for public display/usage.

In plain language, the sequence of discovery an ingesting platform should use is as follows:

1. Does \`<podcast:block id="[myslug]">no</podcast:block>\` exist in this feed? Safe to ingest.
2. Does \`<podcast:block id="[myslug]">yes</podcast:block>\` exist in this feed? Do not ingest.
3. Does \`<podcast:block>yes</podcast:block>\` exist in this feed? Do not ingest.`,
    },

    parents: ["<channel>"],

    count: "multiple",

    attributes: [
      {
        name: "id",
        required: false,
        description:
          "A single entry from the [service slug list](https://github.com/Podcastindex-org/podcast-namespace/blob/main/serviceslugs.txt).",
      },
    ],

    nodeValue: "The node value must be `yes` or `no`.",

    examples: [
      {
        label: "Block everything",
        language: "xml",
        code: "<podcast:block>yes</podcast:block>",
      },
      {
        label: "Block nothing (same as not present",
        language: "xml",
        code: "<podcast:block>no</podcast:block>",
      },

      {
        label: "Block only Google and Amazon",
        language: "xml",
        code: `<podcast:block id="google">yes</podcast:block>
<podcast:block id="amazon">yes</podcast:block>`,
      },
      {
        label: "Block ever platform _except_ Google and Amazon",
        language: "xml",
        code: `<podcast:block>yes</podcast:block>
<podcast:block id="google">no</podcast:block>
<podcast:block id="amazon">no</podcast:block>`,
      },
    ],
  },
  {
    label: "TXT",
    tag: "<podcast:txt>",
    slug: "txt",
    namespace: "podcast",
    documentationUrl:
      "https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#txt",
    description: {
      short: "Freeform text, like a DNS TXT record",
      long: `This element holds free-form text and is modeled after the DNS "[TXT](https://en.wikipedia.org/wiki/TXT_record)" record. It\'s meant to allow for usages that might be niche or otherwise not rise to the level of needing a dedicated tag. Just like TXT records in DNS allowed for new things like [SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework#Implementation) to evolve, this tag can allow novel techniques to be created and sandboxed without a formalization process.`,
    },

    parents: ["<item>"],

    count: "multiple",

    attributes: [
      {
        name: "purpose",
        required: false,
        description: `A service specific string that will be used to denote what purpose this tag serves. This could be something like "example.com" if it\'s a third party hosting platform needing to insert this data, or something like "verify", "release" or any other free form bit of info that is useful to the end consumer that needs it. The free form nature of this tag requires that this attribute is also free formed. This value should not exceed 128 characters.`,
      },
    ],
    notes: `### Purposes

The following are a list of strings known to be in common use. This list is in no way exhaustive. As new purposes come into common use, this list will be updated by the community to reflect that.

- \`verify\` - The node value is expected to contain a string that is given by a third party platform to a podcaster in order to prove that they are the owner of the feed and are in control of it. This is meant to replace the need for emails to exist in feeds. See example section below.`,

    nodeValue:
      " This is a free form string. Please do not exceed `4000 characters` for the node value or it may be truncated by aggregators.",

    examples: [
      {
        language: "xml",
        code: "<podcast:txt>naj3eEZaWVVY9a38uhX8FekACyhtqP4JN</podcast:txt>",
      },

      {
        language: "xml",
        code: '<podcast:txt purpose="verify">S6lpp-7ZCn8-dZfGc-OoyaG</podcast:txt>',
      },

      {
        language: "xml",
        code: '<podcast:txt purpose="release">2022-10-26T04:45:30.742Z</podcast:txt>',
      },
    ],
  },
  {
    label: "Remote Item",
    tag: "<podcast:remoteItem>",
    slug: "remoteItem",
    namespace: "podcast",
    documentationUrl:
      "https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#remote-item",
    description: {
      short: "Point to another feed or item",
      long: `This element provides a way to \"point\" to another feed or an \`<item>\` in another feed in order to obtain some sort of data that the other feed or feed item has. This allows a podcast app to know where to go and fetch the data being requested. What data is being requested is determined by the parent item. For instance, if the parent item is a \`<podcast:podroll>\` element, then the remote feed's \`<channel>\` metadata is needed.

Using the \`feedGuid\` attribute is the preferred way to address a remote feed since, but there are times when an app may not have access to a list of resolvable \`<podcast:guid>\`'s. In that case, it can be beneficial to include the \`feedUrl\` attribute for those cases as a fallback. If both are present and the app is capable the \`feedGuid\` should be resolved and used.`,
    },

    parents: ["<podcast:valueTimeSplit>"],

    count: "multiple",

    attributes: [
      {
        name: "feedGuid",
        required: true,
        description:
          "The `<podcast:guid>` of the remote feed being pointed to.",
      },
      {
        name: "feedUrl",
        required: false,
        description: "The url of the remote feed being pointed to.",
      },
      {
        name: "itemGuid",
        required: false,
        description:
          "If this remote item element is intended to point to an `<item>` in the remote feed, this attribute should contain the value of the `<guid>` of that `<item>`.",
      },
      {
        name: "medium",
        required: false,
        description:
          "If the feed being pointed to is not of medium type 'podcast', this attribute should contain it's `<podcast:medium>` type from the [list](#medium) of types available in this document. The reason this is helpful is to give the app a heads up on what type of data this is expected to be since that may affect the way it approaches fetch and display.",
      },
    ],
    examples: [
      {
        language: "xml",
        code: '<podcast:remoteItem feedGuid="917393e3-1b1e-5cef-ace4-edaa54e1f810" />',
      },

      {
        language: "xml",
        code: '<podcast:remoteItem feedGuid="917393e3-1b1e-5cef-ace4-edaa54e1f810"itemGuid="asdf089j0-ep240-20230510"/>',
      },

      {
        language: "xml",
        code: `<podcast:remoteItem
  feedGuid="917393e3-1b1e-5cef-ace4-edaa54e1f810"
  feedUrl="https://feeds.example.org/917393e3-1b1e-5cef-ace4-edaa54e1f810/rss.xml"
  itemGuid="asdf089j0-ep240-20230510"
  medium="music"
/>`,
      },
    ],
  },
  {
    label: "Podroll",
    tag: "<podcast:podroll>",
    slug: "podroll",
    namespace: "podcast",
    popular: true,
    documentationUrl:
      "https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#podroll",
    description: {
      short: "Recommend other podcasts",
      long: `This element allows for a podcaster to include references to one or more podcasts in it\'s \`<channel>\` as a way of "recommending" other podcasts to their listener.`,
    },

    parents: ["<channel>"],

    count: "single",

    nodeValue:
      "The node value must be one or more `<podcast:remoteItem>` elements.",

    examples: [
      {
        language: "xml",
        code: `<podcast:podroll>
  <podcast:remoteItem feedGuid="29cdca4a-32d8-56ba-b48b-09a011c5daa9" />
  <podcast:remoteItem feedGuid="396d9ae0-da7e-5557-b894-b606231fa3ea" />
  <podcast:remoteItem feedGuid="917393e3-1b1e-5cef-ace4-edaa54e1f810" />
</podcast:podroll>`,
      },
    ],
  },
  {
    label: "Update Frequency",
    tag: "<podcast:updateFrequency>",
    slug: "updateFrequency",
    namespace: "podcast",
    documentationUrl:
      "https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#update-frequency",
    description: {
      short: "Intended release schedule",
      long: "This element allows a podcaster to express their intended release schedule as structured data and text.",
    },

    parents: ["<channel>"],

    count: "single",

    nodeValue:
      "The node value is a free-form string, which might be displayed alongside other information about the podcast. Please do not exceed 128 characters for the node value or it may be truncated by aggregators.",

    attributes: [
      {
        name: "complete",
        required: false,
        description:
          "Boolean specifying if the podcast has no intention to release further episodes. If not set, this should be assumed to be false.",
      },
      {
        name: "dtstart",
        required: false,
        description:
          "The `date` or `datetime` the recurrence rule begins as an [ISO8601-fornmatted](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) string. If the `rrule` contains a value for `COUNT`, then this attribute is required. If the `rrule` contains a value for `UNTIL`, then the value of this attribute must be formatted to the same date/datetime standard.",
      },
      {
        name: "rrule",
        required: false,
        recommended: true,
        description:
          "A recurrence rule as defined in [iCalendar RFC 5545 Section 3.3.10](https://www.rfc-editor.org/rfc/rfc5545#section-3.3.10).",
      },
    ],
    examples: [
      {
        label:
          "Recreating most of Apple Podcasts Connect’s “Update Frequency” values is easily achieved",
        language: "xml",
        code: `<podcast:updateFrequency rrule="FREQ=DAILY">Daily</podcast:updateFrequency>

<podcast:updateFrequency rrule="FREQ=WEEKLY">Weekly</podcast:updateFrequency>

<podcast:updateFrequency rrule="FREQ=WEEKLY;INTERVAL=2">Biweekly</podcast:updateFrequency>

<podcast:updateFrequency rrule="FREQ=MONTHLY">Monthly</podcast:updateFrequency>

<podcast:updateFrequency rrule="FREQ=MONTHLY;INTERVAL=2">Bimonthly</podcast:updateFrequency>

<podcast:updateFrequency rrule="FREQ=MONTHLY">Monthly</podcast:updateFrequency>

<podcast:updateFrequency rrule="FREQ=YEARLY">Yearly</podcast:updateFrequency>`,
      },

      {
        label: "However, greater precision can be easily communicated",
        language: "xml",
        code: `<podcast:updateFrequency rrule="FREQ=DAILY;INTERVAL=1;BYDAY=MO,TU,WE,TH,FR">
  Every weekday
</podcast:updateFrequency>

<podcast:updateFrequency rrule="FREQ=WEEKLY;BYDAY=MO,WE">
  Every Monday and Wednesday
</podcast:updateFrequency>

<podcast:updateFrequency rrule="FREQ=WEEKLY;BYDAY=FR;BYMONTHDAY=13">
  Every friday the 13th
</podcast:updateFrequency>

<podcast:updateFrequency rrule="FREQ=YEARLY;BYDAY=+4TH;BYMONTH=11">
  Every year on American Thanksgiving
</podcast:updateFrequency>`,
      },

      {
        label:
          "Limited-run podcasts can indicate when they’ll go on hiatus by setting an UNTIL date or a COUNT",
        language: "xml",
        code: `<podcast:updateFrequency rrule="FREQ=WEEKLY;INTERVAL=2;BYDAY=MO;COUNT=10" dtstart="2023-08-28T00:00:00.000Z">
  Every other Monday for 10 episodes starting on Aug 28, 2023
</podcast:updateFrequency>

<podcast:updateFrequency rrule="FREQ=WEEKLY;UNTIL=2023-12-31T00:00:00.000Z;BYDAY=MO">
  Every Monday until Dec 31, 2023
</podcast:updateFrequency>`,
      },

      {
        label:
          "Podcasts currently on hiatus can indicate their intention to resume production by setting a DTSTART value in the future",
        language: "xml",
        code: `<podcast:updateFrequency dtstart="2025-01-01T00:00:00.000Z" rrule="FREQ=WEEKLY">
  Weekly, starting in 2025
</podcast:updateFrequency>`,
      },

      {
        label:
          "Complete podcasts with no intention to release further episodes",
        language: "xml",
        code: `<podcast:updateFrequency complete="true">That’s all folks!</podcast:updateFrequency>`,
      },
    ],
  },
  {
    label: "Podping",
    tag: "<podcast:podping>",
    slug: "podping",
    namespace: "podcast",
    documentationUrl:
      "https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#podping",
    description: {
      short: "Indicate the podcast uses Podping",
      long: "This element allows feed owners to signal to aggregators that the feed sends out [`Podping`](https://github.com/Podcastindex-org/podping) notifications when changes are made to it, reducing the need for frequent speculative feed polling.",
    },

    parents: ["<channel>"],

    count: "single",
    examples: [
      {
        language: "xml",
        code: '<podcast:podping usesPodping="true"/>',
      },
    ],
  },
  {
    label: "Value Time Split",
    tag: "<podcast:valueTimeSplit>",
    slug: "valueTimeSplit",
    namespace: "podcast",
    documentationUrl:
      "https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#value-time-split",

    description: {
      short: "Time-based wallet-switching for streaming micropayments",
      long: `This element allows different value splits for a certain period of time. It is a combination of the concept of \`<podcast:soundbite>\` and \`<podcast:remoteItem>\` where a start time and a duration is supplied with alternative value recipients. The alternative value recipients are not required to be remote, as the recipients may not have an RSS feed/item of their own to reference.

The \`<podcast:valueTimeSplit>\` element allows time-based changes of value recipient information during playback of a feed's enclosure content.

This can either contain one or more \`<podcast:valueRecipient>\` tags _or_ exactly one \`<podcast:remoteItem>\` tag. If a \`<podcast:remoteItem>\` tag is present, the \`remotePercentage\` attribute can be defined to control how much the remote value block's \`<podcast:valueRecipient>\` tags will receive as a whole on top of the default, non-fee \`<podcast:valueRecipient>\` tags.

If the remote value block contains any \`<podcast:valueTimeSplit>\` tags, they should be ignored even if the \`remoteStartTime\` indicates it's in a position that would invoke them. When referencing a remote value block, only the root level block splits should be used and any \`<podcast:valueTimeSplit>\` children are to be ignored.

Fees from the default \`<podcast:valueRecipient>\` tags should remain to be calculated before anything is taken out from \`<podcast:valueTimeSplit>\`.`,
    },

    parents: ["<podcast:value>"],

    count: "multiple",

    nodeValue:
      "A single `<podcast:remoteItem>` element OR one or more `<podcast:valueRecipient>` elements.",

    attributes: [
      {
        name: "startTime",
        required: true,
        description:
          "The time, in seconds, to stop using the currently active value recipient information and start using the value recipient information contained in this element.",
      },
      {
        name: "duration",
        required: true,
        description:
          "How many seconds the playback app should use this element's value recipient information before switching back to the value recipient information of the parent feed.",
      },
      {
        name: "remoteStartTime",
        required: false,
        description:
          "The time in the remote item where the value split begins. Allows the timestamp to be set correctly in value metadata. If not defined, defaults to 0.",
      },
      {
        name: "remotePercentage",
        required: false,
        description:
          "The percentage of the payment the remote recipients will receive if a `<podcast:remoteItem>` is present. If not defined, defaults to 100. If the value is less than 0, 0 is assumed. If the value is greater than 100, 100 is assumed.",
      },
    ],

    examples: [
      {
        label: "Remote Item",
        language: "xml",
        code: `<rss xmlns:podcast="https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md" version="2.0">
  <channel>
    <title>Metal Showcase</title>
    <description>A great playlist of my favorite metal tracks.</description>
    <link>https://example.com/rss-metal-showcase.xml</link>
    <language>en</language>
    <pubDate>Fri, 21 Apr 2023 18:56:30 -0500</pubDate>
    <podcast:medium>music</podcast:medium>
    <item>
      <title>Special interview with Torcon VII</title>
      <!-- Other tags here -->
      <podcast:value type="lightning" method="keysend">
        <podcast:valueRecipient name="Alice (Podcaster)" type="node" 
          address="02d5c1bf8b940dc9cadca86d1b0a3c37fbe39cee4c7e839e33bef9174531d27f52"
          split="95" />
        <podcast:valueRecipient name="Hosting Provider" type="node" 
          address="03ae9f91a0cb8ff43840e3c322c4c61f019d8c1c3cea15a25cfc425ac605e61a4a"
          split="5" fee="true" />
        <podcast:valueTimeSplit startTime="60" duration="237" remotePercentage="95">
          <podcast:remoteItem itemGuid="https://podcastindex.org/podcast/4148683#1"
            feedGuid="a94f5cc9-8c58-55fc-91fe-a324087a655b" medium="music" />
        </podcast:valueTimeSplit>
        <podcast:valueTimeSplit startTime="330" duration="53" remoteStartTime="174" remotePercentage="95">
          <podcast:remoteItem itemGuid="https://podcastindex.org/podcast/4148683#3"
            feedGuid="a94f5cc9-8c58-55fc-91fe-a324087a655b" medium="music" />
        </podcast:valueTimeSplit>
      </podcast:value>
   </item>
  
  </channel>
</rss>`,
        highlightLines: ["19:26"],
      },

      {
        label: "Locally Specified",
        language: "xml",
        code: `<rss xmlns:podcast="https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md" version="2.0">
  <channel>
  <title>Cool Pod</title>
  <description>This is a cool pod</description>
  <link>https://example.com/rss-cool-pod.xml</link>
  <language>en</language>
  <pubDate>Fri, 21 Apr 2023 18:56:30 -0500</pubDate>
  <podcast:medium>podcast</podcast:medium>
  <item>
    <title>Adam Hates the word "pod" (and I do, too)</title>
    <!-- Other tags here -->
    <podcast:value type="lightning" method="keysend">
      <podcast:valueRecipient name="Alice (Podcaster)" type="node" 
        address="02d5c1bf8b940dc9cadca86d1b0a3c37fbe39cee4c7e839e33bef9174531d27f52"
        split="95" />
      <podcast:valueRecipient name="Hosting Provider" type="node" 
        address="03ae9f91a0cb8ff43840e3c322c4c61f019d8c1c3cea15a25cfc425ac605e61a4a"
        split="5" fee="true" />
      <podcast:valueTimeSplit startTime="63" duration="388">
        <podcast:valueRecipient name="Alice (Podcaster)" type="node" 
          address="02d5c1bf8b940dc9cadca86d1b0a3c37fbe39cee4c7e839e33bef9174531d27f52"
          split="85" />
        <podcast:valueRecipient name="Jimbob (Guest)" type="node" 
          address="02dd306e68c46681aa21d88a436fb35355a8579dd30201581cefa17cb179fc4c15"
          split="10" />
      </podcast:valueTimeSplit>
      <podcast:valueTimeSplit startTime="367" duration="246">
        <podcast:valueRecipient name="Alice (Podcaster)" type="node" 
          address="02d5c1bf8b940dc9cadca86d1b0a3c37fbe39cee4c7e839e33bef9174531d27f52"
          split="85" />
        <podcast:valueRecipient name="Bobjim (Guest)" type="node" 
          address="032f4ffbbafffbe51726ad3c164a3d0d37ec27bc67b29a159b0f49ae8ac21b8508"
          split="10" />
      </podcast:valueTimeSplit>
    </podcast:value>
  </item>

  </channel>
</rss>`,
        highlightLines: ["19:34"],
      },
    ],
  },
];
