<script>
	import Animate from "$components/Animate.svelte";
	import Button from "$components/Button.svelte";
	import ThemeToggle from "$components/ThemeToggle.svelte";

	import Navlinks from "$json/Navlinks.json";
	import Icon from "@iconify/svelte";
	import OutClick from "svelte-outclick";

	import { fade } from "svelte/transition";
	import { page } from "$app/stores";

	let navbar = false;

	const toggleNavbar = () => (navbar = !navbar);
	const hideNavbar = () => (navbar = false);
</script>

<Animate>
	<nav>
		<div
			class="bg-primary-100/10 fixed z-20 hidden w-full items-center justify-between border-b border-secondary/10 px-4 py-4 backdrop-blur lg:flex lg:min-h-[4rem]"
			transition:fade={{ delay: 300, duration: 800 }}
		>
			<a href="/">
				<div
					class="dark:hover:bg-white btn-ghost btn mr-1.5 flex items-center text-xl normal-case hover:bg-secondary/50 hover:text-secondary"
				>
					<img
						class="mr-2.5 w-9 rounded-full shadow-lg"
						src="/Logo Round.png"
						alt="Auxtal Logo Round"
					/>
					<p class="text-xl">Auxtal</p>
				</div>
			</a>
			<div class="flex-1 justify-center text-sm">
				<ul class="menu menu-horizontal">
					{#each Navlinks as Navlink}
						<li class="mx-2">
							<a
								href={Navlink.route}
								class={`rounded-lg px-5 py-2 hover:scale-110 hover:bg-secondary/50 hover:text-secondary focus:scale-110 focus:bg-secondary/50 focus:text-secondary ${
									$page.url.pathname.includes(Navlink.route)
										? "bg-neutral font-bold text-secondary"
										: ""
								}`}
								data-sveltekit-prefetch
							>
								{Navlink.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<Button href="/Resume Redacted Info.pdf" download="/Resume Redacted Info.pdf" classes="px-9">
				<Icon
					height="20"
					width="20"
					icon="mdi:resume"
					style="display: inline-block; margin-right: 5px;"
				/>Resume
			</Button>
			<div class="ml-3">
				<ThemeToggle />
			</div>
		</div>

		<div class="navbar fixed z-20 border-b border-secondary/10 backdrop-blur lg:hidden">
			<dir class="m-0 flex w-full p-0">
				<a
					href="/"
					class="dark:hover:bg-white btn-ghost btn mr-1.5 text-xl normal-case hover:bg-secondary/50 hover:text-secondary"
				>
					<img
						class="mr-2.5 w-9 rounded-full shadow-lg"
						src="/Logo Round.png"
						alt="Auxtal Logo Round"
					/>
					<p class="text-xl">Auxtal</p>
				</a>
			</dir>
			<div class="flex items-center space-x-3">
				<label id="mobileMenuToggle" class="swap swap-rotate btn-circle btn">
					<input type="checkbox" on:click={toggleNavbar} bind:checked={navbar} />
					<svg
						class="swap-off fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 512 512"
						><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
					</svg>
					<svg
						class="swap-on fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 512 512"
					>
						<polygon
							points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
						/>
					</svg>
				</label>
			</div>
		</div>
		{#if navbar}
			<div
				class="fixed z-50 mt-2 w-full translate-y-[4rem] lg:hidden"
				transition:fade={{ duration: 100 }}
			>
				<OutClick on:outclick={hideNavbar} excludeQuerySelectorAll={["#mobileMenuToggle"]}>
					<ul id="mobileMenu" class="mx-2 rounded-xl bg-zinc-800/50 px-4 py-8 shadow backdrop-blur">
						{#each Navlinks as Navlink}
							<li
								class={`rounded-md hover:bg-secondary hover:text-primary ${
									$page.url.pathname.includes(Navlink.route)
										? "bg-neutral font-bold text-secondary"
										: ""
								}`}
							>
								<a
									href={Navlink.route}
									class="mt-1 block w-full p-3 text-center transition"
									on:click={hideNavbar}
									data-sveltekit-prefetch
								>
									{Navlink.name}
								</a>
							</li>
						{/each}
						<li>
							<a
								href="/Resume Redacted Info.pdf"
								download="/Resume Redacted Info.pdf"
								class="mt-1 block w-full rounded-md p-3 text-center transition hover:bg-secondary hover:text-primary"
							>
								Resume
							</a>
						</li>
					</ul>
				</OutClick>
			</div>
		{/if}
	</nav>
</Animate>

<style>
	#mobileMenu {
		box-shadow: 0px 2px 2px rgba(34, 34, 34, 0.6);
	}
</style>
