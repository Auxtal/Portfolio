<script lang="ts">
	import Animate from "$components/Animate.svelte";
	import Button from "$components/Button.svelte";

	import { page } from "$app/stores";

	interface StatusMessages {
		[key: number]: string;
	}

	const statusMessages: StatusMessages = {
		404: "Oops, Looks like you're lost! The page you're trying to access doesn't exist"
	};
</script>

<svelte:head>
	<title>{$page.status ?? ""} Error</title>
</svelte:head>

<Animate>
	<div class="flex h-screen w-full flex-col items-center justify-center px-8 lg:px-0">
		<h1 class="mb-10 text-center text-5xl font-bold text-neutral backdrop-blur-sm">
			An Error Occurred
		</h1>
		<p class="font-secondary mb-10 max-w-md text-center leading-6 text-secondary backdrop-blur-sm">
			{$page.status in statusMessages
				? statusMessages[$page.status]
				: "Oops, an unexpected error occurred"}
		</p>
		<Button href="/" classes="px-14">Go Home</Button>
	</div>
</Animate>
