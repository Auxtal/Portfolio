<script lang="ts">
  import Animate from "$components/atoms/Animate.svelte";
  import Container from "$components/atoms/Container.svelte";
  import Education from "$json/Education.json";

  import { fade, fly, slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineContent
  } from "svelte-vertical-timeline";
</script>

<svelte:head>
  <title>Education</title>
  <meta name="description" content="Auxtal's Portfolio site education page." />
</svelte:head>

<Animate>
  <Container noMobileFlex={true}>
    <div transition:fade|local={{ duration: 500 }}>
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
                  class="font-extrabold"
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
                  transition:fade|local={{ delay: 150, duration: 500, easing: quintOut }}
                  class="text-accent"
                >
                  {Education.description}
                </p>
              </Animate>
            </TimelineContent>
          </TimelineItem>
        {/each}
      </Timeline>
    </div>
  </Container>
</Animate>
