<script>
	import BackButton from "$components/BackButton.svelte";
	import Animate from "$components/Animate.svelte";

	import { fade } from "svelte/transition";
</script>

<Animate>
	<BackButton href="/blog" />
	<article class="prose w-full max-w-full pt-14" in:fade|local={{ delay: 200, duration: 800 }}>
		<slot />
	</article>
</Animate>
