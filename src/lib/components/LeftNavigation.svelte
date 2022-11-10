<script>
	import Icon from "@iconify/svelte";
	import { t } from "$lib/locales/i18n";

	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

	let animation = false;
	onMount(() => {
		animation = !animation;
	});
</script>

{#if animation}
	<div transition:fly|local={{ y: 200, duration: 2000 }} class="fixed hidden h-[95%] w-24 lg:block">
		<div class="absolute flex h-full w-full flex-col items-center justify-end px-2 ">
			<ul class="flex h-1/4 flex-col justify-between">
				<a href={$t("github.link")} target="_blank" rel="noreferrer">
					<li
						class="flex min-h-max items-center rounded-md bg-primary p-2 text-base-100 shadow shadow-neutral transition-colors hover:text-secondary hover:shadow-secondary"
						transition:fly|local={{ x: 200, duration: 2300 }}
					>
						<Icon height="30" width="30" icon="akar-icons:github-fill" />
					</li>
				</a>
				<a href={$t("discord.link")} target="_blank" rel="noreferrer">
					<li
						class="mt-3 flex min-h-max items-center rounded-md bg-primary p-2 text-base-100 shadow shadow-neutral transition-colors hover:text-secondary hover:shadow-secondary"
						transition:fly|local={{ x: 300, duration: 2500 }}
					>
						<Icon height="30" width="30" icon="akar-icons:discord-fill" />
					</li>
				</a>
				<a href="/contact/form">
					<li
						class="mt-3 flex min-h-max items-center rounded-md bg-primary p-2 text-base-100 shadow shadow-neutral transition-colors hover:text-secondary hover:shadow-secondary"
						transition:fly|local={{ x: 400, duration: 2800 }}
					>
						<Icon height="30" width="30" icon="fluent:mail-16-filled" />
					</li>
				</a>
			</ul>
		</div>
	</div>
{/if}
