<script>
	import Animate from "$components/Animate.svelte";
	import { t } from "$lib/locales/i18n";

	import Icon from "@iconify/svelte";
	import { fly } from "svelte/transition";
</script>

<Animate>
	<div
		transition:fly|local={{ y: 200, duration: 2000 }}
		class="fixed z-10 hidden h-screen w-24 lg:block"
	>
		<div class="absolute flex h-full w-full flex-col items-center justify-end px-2 ">
			<ul class="mb-7 flex h-44 flex-col justify-between">
				<a href={$t("github.link")} target="_blank" rel="noreferrer">
					<li
						class="shadow-base flex min-h-max items-center rounded-md bg-neutral p-2 text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-blue-700"
						transition:fly|local={{ x: 200, duration: 2300 }}
					>
						<Icon height="30" width="30" icon="akar-icons:github-fill" />
					</li>
				</a>
				<a href={$t("discord.link")} target="_blank" rel="noreferrer">
					<li
						class="shadow-base mt-3 flex min-h-max items-center rounded-md bg-neutral p-2 text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-blue-700"
						transition:fly|local={{ x: 300, duration: 2500 }}
					>
						<Icon height="30" width="30" icon="akar-icons:discord-fill" />
					</li>
				</a>
				<a href="/contact/form">
					<li
						class="shadow-base mt-3 flex min-h-max items-center rounded-md bg-neutral p-2 text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-blue-700"
						transition:fly|local={{ x: 400, duration: 2800 }}
					>
						<Icon height="30" width="30" icon="fluent:mail-16-filled" />
					</li>
				</a>
			</ul>
		</div>
	</div>
</Animate>
