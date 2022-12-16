<script>
	import Icon from "@iconify/svelte";

	export let href;
</script>

<a
	{href}
	class="inline-block max-w-fit -translate-x-2 text-secondary transition-transform hover:scale-[0.9]"
>
	<div class="inline-block">
		<Icon height="40" width="40" icon="eva:arrow-back-outline" style="display: inline-block;" /> Back
	</div>
</a>
