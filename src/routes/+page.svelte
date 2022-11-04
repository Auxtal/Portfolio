<script>
	import Banner from "$lib/components/Banner.svelte";
	import { t } from "$lib/locales/i18n";
</script>

<svelte:head>
	<title>{$t("banner.name")}'s Portfolio</title>
</svelte:head>

<div class="flex h-full items-center justify-end">
	<Banner />
</div>
