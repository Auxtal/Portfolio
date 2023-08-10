import { recentTracks } from "$utils/lastfm";
import { env } from "$env/dynamic/private";
import { t } from "../trpc";
import { z } from "zod";

export const fetchCurrentTrack = async () => {
  const query = new URLSearchParams({
    method: "user.getrecenttracks",
    user: env.LAST_FM_USERNAME,
    api_key: env.LAST_FM_API_KEY,
    format: "json",
    limit: "1",
    extended: "true"
  });

  const response = await fetch(`https://ws.audioscrobbler.com/2.0/?${query}`)
    .then((r) => r.json())
    .then(recentTracks.parse);

  const latest = response.recenttracks.track[0] ?? null;
  return latest?.["@attr"]?.nowplaying != true ? null : latest;
};

export const lastFmRouter = t.router({
  currentTrack: t.procedure
    .output(
      z
        .object({
          title: z.string(),
          artist: z.object({
            url: z.string(),
            name: z.string()
          }),
          album: z.string(),
          artwork: z.string().url().nullable(),
          url: z.string().url(),
          loved: z.boolean()
        })
        .nullable()
    )
    .query(async () => {
      const current = await fetchCurrentTrack();
      if (!current) {
        return null;
      }

      return {
        title: current.name,
        artist: {
          name: current.artist.name,
          url: current.artist.url
        },
        album: current.album["#text"],
        artwork: current.image[current.image.length - 1]?.["#text"] ?? null,
        url: current.url,
        loved: current.loved ?? false
      };
    })
});
