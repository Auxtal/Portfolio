<script lang="ts">
	import "$src/app.postcss";

	import ActionButtons from "$components/ActionButtons.svelte";
	import Navbar from "$components/Navbar.svelte";

	import { onMount } from "svelte";
	import { Toaster } from "svelte-french-toast";

	import * as Sentry from "@sentry/svelte";
	import { BrowserTracing } from "@sentry/tracing";

	onMount(() => {
		Sentry.init({
			dsn: "https://1e272e4faac64e109dafa804c90c129b@o1057342.ingest.sentry.io/4504081997365248",
			integrations: [new BrowserTracing()],
			tracesSampleRate: 1.0,
			environment: import.meta.env.VITE_ENVIRONMENT,
			release: "2.2.4"
		});
	});
</script>

<Toaster />
<Navbar />
<ActionButtons />
<slot />
