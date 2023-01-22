<script lang="ts">
	import Animate from "$components/Animate.svelte";
	import ActionButtons from "$json/ActionButtons.json";

	import { fly } from "svelte/transition";
	import { quintOut } from "svelte/easing";

	import Icon from "@iconify/svelte";
</script>

<Animate>
	<div
		transition:fly|local={{ y: 200, duration: 1000, easing: quintOut }}
		class="fixed z-10 hidden h-screen w-24 lg:block"
	>
		<div class="absolute flex h-full w-full flex-col items-center justify-end px-2">
			<ul class="mb-7 flex h-44 flex-col justify-between">
				{#each ActionButtons as ActionButton}
					<a
						href={ActionButton.url}
						target={ActionButton.external ? "_blank" : ""}
						rel={ActionButton.external ? "noreferrer" : ""}
						class="group focus:outline-none"
					>
						<li
							class="flex min-h-max items-center rounded-md bg-neutral p-2 text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-blue-700 group-focus:-translate-y-0.5 group-focus:shadow-blue-700 group-focus:outline-none"
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
	</div>
</Animate>
