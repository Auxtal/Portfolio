<script lang="ts">
  import Animate from "$components/atoms/Animate.svelte";
  import ActionButtons from "$json/ActionButtons.json";

  import { trpc } from "$lib/trpc/client";

  import { fade, fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { page } from "$app/stores";

  import { createQuery } from "@tanstack/svelte-query";
  import Icon from "@iconify/svelte";

  let spotifyHover = false;
  let asideHeight: number;

  $: track = createQuery({
    queryFn: () => trpc($page).lastfm.currentTrack.query(),
    queryKey: ["currentTrack"]
  });
</script>

<Animate>
  <aside
    transition:fly|local={{ y: 200, duration: 1000, easing: quintOut }}
    class="fixed z-10 hidden h-screen w-24 lg:block"
    bind:clientHeight={asideHeight}
  >
    {#if (asideHeight > 380 && $track.data) || (asideHeight > 310 && !$track.data)}
      <div
        class="absolute flex h-full w-full flex-col items-center justify-end px-2 pb-7"
        transition:fade={{ duration: 500, easing: quintOut }}
      >
        <ul>
          {#if $track.data}
            <!-- svelte-ignore a11y-mouse-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <li
              class="spotify-glow peer relative flex min-h-max items-center rounded-md bg-[#1DB954] p-2 text-primary outline-none transition group-focus-visible:outline-none dark:text-secondary"
              tabindex="0"
              in:fade={{ duration: 500, delay: 800, easing: quintOut }}
              out:fade={{ duration: 500, easing: quintOut }}
              on:mouseover={() => (spotifyHover = true)}
              on:mouseleave={() => (spotifyHover = false)}
              on:focusin={() => (spotifyHover = true)}
              on:focusout={() => (spotifyHover = false)}
            >
              <Icon height="30" width="30" icon="mdi:spotify" />
              {#if spotifyHover}
                <div
                  class="top-100 absolute left-[4.2rem] flex h-max w-64 rounded-lg border border-secondary/20 bg-secondary/10 p-2 shadow-md backdrop-blur-lg hover:flex"
                  transition:fade|local={{ duration: 150, easing: quintOut }}
                >
                  <div>
                    <a href={$track.data?.url} target="_blank">
                      <img
                        class="aspect-square h-auto w-16 rounded-md object-cover shadow-md"
                        src={$track.data?.artwork}
                        alt="Album Artwork"
                      />
                    </a>
                  </div>
                  <div class="ml-3">
                    <h1 class="mb-2 max-w-[17ch] truncate font-bold text-secondary">
                      {$track.data?.title}
                    </h1>
                    <p class="text-accent">{$track.data?.artist.name}</p>
                  </div>
                </div>
              {/if}
            </li>
          {/if}
          {#each ActionButtons as ActionButton}
            <a
              href={ActionButton.url}
              target={ActionButton.external ? "_blank" : ""}
              rel={ActionButton.external ? "noreferrer" : ""}
              class="group focus-visible:outline-none"
            >
              <li
                class="my-5 flex min-h-max items-center rounded-md bg-neutral p-2 text-primary shadow-md outline-none transition last:mb-0 hover:-translate-y-0.5 hover:shadow-[0px_0px_10px_0px] hover:shadow-neutral group-focus-visible:-translate-y-0.5 group-focus-visible:shadow-[0px_0px_10px_0px] group-focus-visible:shadow-neutral group-focus-visible:outline-none dark:text-secondary"
                in:fly={{
                  x: ActionButton.x,
                  duration: ActionButton.duration,
                  easing: quintOut
                }}
              >
                <Icon height="30" width="30" icon={ActionButton.icon} />
              </li>
            </a>
          {/each}
        </ul>
      </div>
    {/if}
  </aside>
</Animate>

<style>
  .spotify-glow {
    animation: pulse 3s ease-in-out infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0px 0px 15px 0px rgba(1, 219, 150, 0.2);
    }
    50% {
      box-shadow: 0px 0px 15px 0px rgba(1, 219, 150, 0.9);
    }
    100% {
      box-shadow: 0px 0px 15px 0px rgba(1, 219, 150, 0.2);
    }
  }
</style>
