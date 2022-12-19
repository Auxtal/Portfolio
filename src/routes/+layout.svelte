<script>
	import "../app.css";

	import Navbar from "$components/Navbar.svelte";
	import LeftNavigation from "$components/LeftNavigation.svelte";

	import { onMount } from "svelte";
	import { SvelteToast } from "@zerodevx/svelte-toast";

	import * as Sentry from "@sentry/svelte";
	import { BrowserTracing } from "@sentry/tracing";

	onMount(() => {
		Sentry.init({
			dsn: "https://1e272e4faac64e109dafa804c90c129b@o1057342.ingest.sentry.io/4504081997365248",
			integrations: [new BrowserTracing()],
			tracesSampleRate: 1.0,
			environment: import.meta.env.VITE_ENVVIRONMENT,
			release: "1.2.1"
		});
	});
</script>

<SvelteToast />
<Navbar />
<LeftNavigation />
<slot />
