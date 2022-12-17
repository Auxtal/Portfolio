<script>
	import Button from "$lib/components/Button.svelte";
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<div class="flex h-screen w-full flex-col items-center justify-center px-8 lg:px-0">
	<h1 class="mb-10 text-center text-5xl font-bold text-neutral backdrop-blur-sm">Get In Touch</h1>
	<p class="font-secondary mb-10 max-w-md text-center leading-6 text-secondary backdrop-blur-sm">
		If you want to say hello or if you have any questions, my inbox is always open for queries!
	</p>
	<Button href="/contact/form" classes="px-14">Send me an Email</Button>
</div>
