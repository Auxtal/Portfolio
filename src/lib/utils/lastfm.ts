import { z } from "zod";

export const imageSize = z.union([
  z.literal("small"),
  z.literal("medium"),
  z.literal("large"),
  z.literal("extralarge")
]);

export const image = z.object({
  size: imageSize,
  "#text": z.string().url()
});

export const artist = z.object({
  url: z.string(),
  name: z.string(),
  image: image.array(),
  mbid: z.string()
});

export const album = z.object({
  mbid: z.string(),
  "#text": z.string()
});

export const date = z.object({
  uts: z.string(),
  "#text": z.string()
});

export const trackAttr = z.object({
  nowplaying: z.coerce.boolean()
});

export const track = z.object({
  artist,
  streamable: z.coerce.number(),
  image: z.array(image),
  mbid: z.string(),
  album,
  name: z.string(),
  url: z.string().url(),
  date: date.optional(),
  "@attr": trackAttr.optional(),
  loved: z
    .custom((data) => data === "1" || data === "0")
    .transform((data) => data === "1")
    .optional()
});

export const recentTracksAttr = z.object({
  user: z.coerce.string(),
  totalPages: z.coerce.number(),
  page: z.coerce.number(),
  perPage: z.coerce.number(),
  total: z.coerce.number()
});

export const recentTracks = z.object({
  recenttracks: z.object({
    track: z.array(track),
    "@attr": recentTracksAttr
  })
});

export type Artist = z.infer<typeof artist>;
export type ImageSize = z.infer<typeof imageSize>;
export type Image = z.infer<typeof image>;
export type Album = z.infer<typeof album>;
export type Date = z.infer<typeof date>;
export type Track = z.infer<typeof track>;
export type RecentTracksAttr = z.infer<typeof recentTracksAttr>;
export type RecentTracks = z.infer<typeof recentTracks>;
