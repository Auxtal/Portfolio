<script>
	import ThemeToggle from "$lib/components/ThemeToggle.svelte";
	import Navlinks from "$json/Navlinks.json";
	import Button from "$lib/components/Button.svelte";

	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
	import { page } from "$app/stores";

	let navbar = false;
	let screen;
	let animation = false;

	onMount(() => {
		screen = window.screen.width;
		animation = !animation;
	});

	const toggleNavbar = () => {
		const body = document.querySelector("body");
		navbar = !navbar;
		navbar ? body?.classList.add("overflow-hidden") : body?.classList.remove("overflow-hidden");
	};
</script>

{#if animation}
	<div
		class="bg-primary-100/10 mx-4 hidden items-center justify-between py-4 backdrop-blur-sm lg:!sticky lg:flex lg:min-h-[4rem]"
		transition:fade={{ delay: 300, duration: 800 }}
	>
		<div>
			<a
				href="/"
				class="dark:hover:bg-white btn-ghost btn text-xl normal-case hover:bg-secondary/50 hover:text-secondary"
				>Auxtal</a
			>
		</div>
		<div class="flex-1 justify-center text-sm">
			<ul class="menu menu-horizontal mx-5 p-0">
				{#each Navlinks as Navlink}
					<li class="mx-4">
						<a
							href={Navlink.route}
							class={`hover:scale-110 hover:bg-secondary/50 hover:text-secondary ${
								$page.url.pathname === Navlink.route ? "bg-neutral font-bold text-secondary" : ""
							}`}
							data-sveltekit-prefetch
						>
							{Navlink.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<Button href="/Resume Redacted Info.pdf" download={true} classes="px-9">Resume</Button>
		{#if screen >= 1024}
			<div class="ml-3">
				<ThemeToggle />
			</div>
		{/if}
	</div>
	<div class="navbar relative lg:hidden">
		<div class="flex-1 text-center">
			<a href="/" class="btn-ghost btn text-xl normal-case">Auxtal</a>
		</div>
		<label class="swap swap-rotate btn-circle btn" on:click={toggleNavbar}>
			<input type="checkbox" />
			<svg
				class="swap-off fill-current"
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 512 512"
				><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg
			>
			<svg
				class="swap-on fill-current"
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 512 512"
				><polygon
					points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
				/></svg
			>
		</label>
	</div>
	<div
		class={`${navbar ? `` : "hidden"} absolute top-16 z-50 h-full w-full bg-primary transition-all`}
	>
		<ul class="left-0 h-screen w-full bg-primary px-4 py-8 shadow">
			{#each Navlinks as Navlink}
				<li
					class={`rounded-md hover:bg-secondary hover:text-primary ${
						$page.url.pathname === Navlink.route ? "bg-neutral font-bold text-secondary" : ""
					}`}
					on:click={toggleNavbar}
				>
					<a href={Navlink.route} class="block w-full p-3" data-sveltekit-prefetch>
						{Navlink.name}
					</a>
				</li>
			{/each}
			{#if screen <= 1024}
				<div class="mt-10 text-center">
					<ThemeToggle />
				</div>
			{/if}
			<Button href="/Resume Redacted Info.pdf" download={true} classes="px-9">Resume</Button>
		</ul>
	</div>
{/if}
