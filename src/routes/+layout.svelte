<script>
	import "../app.css";

	import Loader from "$lib/components/Loader.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
	import LeftNavigation from "$lib/components/LeftNavigation.svelte";

	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	import { SvelteToast } from "@zerodevx/svelte-toast";

	import * as Sentry from "@sentry/svelte";
	import { BrowserTracing } from "@sentry/tracing";

	let loading = true;

	onMount(() => {
		loading = false;
		Sentry.init({
			dsn: "https://1e272e4faac64e109dafa804c90c129b@o1057342.ingest.sentry.io/4504081997365248",
			integrations: [new BrowserTracing()],
			tracesSampleRate: 1.0,
			environment: import.meta.env.VITE_ENVVIRONMENT,
			release: "1.1.1"
		});
	});
</script>

<SvelteToast />
{#if loading}
	<div
		class="flex h-screen items-center justify-center"
		transition:fade={{ delay: 250, duration: 300 }}
	>
		<Loader color="var(--neutral)" duration="1.5s" size="85" />
	</div>
{:else}
	<Navbar />
	<LeftNavigation />
	<slot />
{/if}
