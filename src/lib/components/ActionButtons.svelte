<script lang="ts">
	import Animate from "$components/Animate.svelte";
	import Icon from "@iconify/svelte";

	import { fly } from "svelte/transition";
	import { quintOut } from "svelte/easing";
</script>

<Animate>
	<div
		transition:fly|local={{ y: 200, duration: 1000, easing: quintOut }}
		class="fixed z-10 hidden h-screen w-24 lg:block"
	>
		<div class="absolute flex h-full w-full flex-col items-center justify-end px-2">
			<ul class="mb-7 flex h-44 flex-col justify-between">
				<a href="https://github.com/Auxtal/Portfolio" target="_blank" rel="noreferrer">
					<li
						class="shadow-base flex min-h-max items-center rounded-md bg-neutral p-2 text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-blue-700"
						transition:fly|local={{ x: 100, duration: 1100, easing: quintOut }}
					>
						<Icon height="30" width="30" icon="akar-icons:github-fill" />
					</li>
				</a>
				<a href="https://dsc.gg/Auxtal" target="_blank" rel="noreferrer">
					<li
						class="shadow-base mt-3 flex min-h-max items-center rounded-md bg-neutral p-2 text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-blue-700"
						transition:fly|local={{ x: 150, duration: 1200, easing: quintOut }}
					>
						<Icon height="30" width="30" icon="akar-icons:discord-fill" />
					</li>
				</a>
				<a href="/contact/form">
					<li
						class="shadow-base mt-3 flex min-h-max items-center rounded-md bg-neutral p-2 text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-blue-700"
						transition:fly|local={{ x: 200, duration: 1300, easing: quintOut }}
					>
						<Icon height="30" width="30" icon="fluent:mail-16-filled" />
					</li>
				</a>
			</ul>
		</div>
	</div>
</Animate>
