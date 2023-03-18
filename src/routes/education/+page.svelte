<script lang="ts">
  import Animate from "$components/Animate.svelte";
  import Education from "$json/Education.json";

  import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineContent
  } from "svelte-vertical-timeline";

  import { fade, fly, slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
</script>

<svelte:head>
  <title>Education</title>
</svelte:head>

<Animate>
  <div class="flex h-screen items-center justify-center">
    <div
      class="absolute top-20 w-full lg:top-28 xl:relative xl:top-0"
      transition:fade|local={{ duration: 500 }}
    >
      <Timeline position="alternate">
        {#each Education as Education, i}
          <TimelineItem style="margin:15px 0">
            <TimelineSeparator>
              <Animate>
                <span
                  transition:fly|local={{
                    delay: 50,
                    y: (-100 / 2) * (i + 1),
                    duration: 500,
                    easing: quintOut
                  }}
                >
                  <TimelineDot style={`background-color: var(--neutral); border: none;`} />
                </span>
              </Animate>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Animate>
                <h3
                  transition:fly|local={{ x: -150, duration: 500, easing: quintOut }}
                  class="font-secondary font-extrabold"
                >
                  {Education.place}
                </h3>
                <p
                  transition:slide|local={{ delay: 150, duration: 500, easing: quintOut }}
                  class="py-2 text-sm text-neutral"
                >
                  {Education.year_start} - {Education.year_end}
                </p>
                <p
                  transition:fade|local={{ delay: 150, duration: 800, easing: quintOut }}
                  class="font-secondary text-accent"
                >
                  {Education.description}
                </p>
              </Animate>
            </TimelineContent>
          </TimelineItem>
        {/each}
      </Timeline>
    </div>
  </div>
</Animate>
