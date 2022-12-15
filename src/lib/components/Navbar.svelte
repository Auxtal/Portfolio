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
		class="bg-primary-100/10 fixed z-10 hidden w-full items-center justify-between px-4 py-4 backdrop-blur-sm lg:flex lg:min-h-[4rem]"
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
			<ul class="menu menu-horizontal mx-2 p-0">
				{#each Navlinks as Navlink}
					<li class="mx-4">
						<a
							href={Navlink.route}
							class={`px- rounded-lg px-5 py-2 hover:scale-110 hover:bg-secondary/50 hover:text-secondary ${
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
		<div class="ml-3">
			<ThemeToggle />
		</div>
	</div>

	<div class="navbar fixed z-20 backdrop-blur lg:hidden">
		<div class="flex-1 text-center">
			<a href="/" class="btn-ghost btn text-xl normal-case hover:bg-neutral">Auxtal</a>
		</div>
		<div class="flex items-center justify-end space-x-3">
			<label class="swap-rotate swap btn-circle btn">
				<input type="checkbox" on:click={toggleNavbar} />
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
	</div>
	<div class="fixed z-50 w-full translate-y-[4rem] transition-all lg:hidden" class:hidden={!navbar}>
		<ul id="mobile-menu" class="mx-2 rounded-xl bg-zinc-800/50 px-4 py-8 shadow backdrop-blur">
			{#each Navlinks as Navlink}
				<li
					class={`rounded-md hover:bg-secondary hover:text-primary ${
						$page.url.pathname === Navlink.route ? "bg-neutral font-bold text-secondary" : ""
					}`}
					on:click={toggleNavbar}
				>
					<a
						href={Navlink.route}
						class="mt-1 block w-full p-3 text-center transition"
						data-sveltekit-prefetch
					>
						{Navlink.name}
					</a>
				</li>
			{/each}
			<li>
				<a
					href="/Resume Redacted Info.pdf"
					class="mt-1 block w-full rounded-md p-3 text-center transition hover:bg-secondary hover:text-primary"
					download>Resume</a
				>
			</li>
		</ul>
	</div>
{/if}

<style>
	#mobile-menu {
		box-shadow: 0px 2px 2px rgba(34, 34, 34, 0.6);
	}
</style>
