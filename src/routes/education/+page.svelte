<script>
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
</script>

<svelte:head>
	<title>Education</title>
</svelte:head>

<div class="flex h-screen items-center justify-center">
	<div class="absolute top-20 w-full lg:top-28 xl:relative xl:top-0">
		<Timeline position="alternate">
			{#each Education as Education, i}
				<TimelineItem style="margin:15px 0">
					<TimelineSeparator>
						<Animate>
							<span in:fly|local={{ delay: 250, y: (-100 / 2) * (i + 1), duration: 1000 }}>
								<TimelineDot style={`background-color: var(--neutral); border: none;`} />
							</span>
						</Animate>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<Animate>
							<h3 in:fly|local={{ x: -150, duration: 1000 }} class="font-secondary font-extrabold">
								{Education.place}
							</h3>
							<p
								in:slide|local={{ y: 150, delay: 500, duration: 1000 }}
								class="py-2 text-sm text-neutral"
							>
								{Education.year_start} - {Education.year_end}
							</p>
							<p in:fade|local={{ delay: 1000, duration: 1000 }} class="font-secondary text-accent">
								{Education.description}
							</p>
						</Animate>
					</TimelineContent>
				</TimelineItem>
			{/each}
		</Timeline>
	</div>
</div>
