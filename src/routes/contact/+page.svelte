<script>
	import Button from "$lib/components/Button.svelte";
	import { t } from "$lib/locales/i18n";
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<div class="mx-auto flex h-full max-w-xl flex-col items-center justify-center px-8 lg:px-0">
	<div class="flex flex-col items-center justify-center ">
		<h1 class="mb-10 text-5xl font-bold text-neutral backdrop-blur-sm">Get In Touch</h1>
		<p class="text- font-secondary mb-10 text-center leading-6 text-secondary backdrop-blur-sm">
			If you want to say hello or if you have any questions, my inbox is always open for queries!
		</p>
		<Button href="/contact/form">Send me an Email</Button>
	</div>
</div>
