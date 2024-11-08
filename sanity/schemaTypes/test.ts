import { defineField, defineType } from "sanity";
import { youtubeInput } from "sanity-plugin-youtube-input";

export const test = defineType({
    name: 'youtubeEmbed',
    type: 'object',
    fields: [
      {
        name: 'video',
        type: 'youtubeVideo',
      },
      {
        name: 'autoplay',
        type: 'boolean',
        initialValue: false,
      },
      {
        name: 'controls',
        type: 'boolean',
        initialValue: true,
      },
    ]
  })