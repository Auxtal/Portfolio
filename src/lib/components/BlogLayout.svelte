<script lang="ts">
	import Animate from "$components/Animate.svelte";
	import BackButton from "$components/BackButton.svelte";

	import { fade } from "svelte/transition";
	import { quintOut } from "svelte/easing";
</script>

<Animate>
	<BackButton href="/blog" />
	<article
		class="prose w-full max-w-full pt-7"
		transition:fade|local={{ duration: 800, easing: quintOut }}
	>
		<slot />
	</article>
</Animate>
