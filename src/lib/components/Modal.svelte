<script context="module">
	export const hydrate = true;
</script>

<script>
	export let title = "";
	export let message = "";
	export let openModal = false;
</script>

<input type="checkbox" class="modal-toggle" bind:checked={openModal} />
<label for="my-modal-4" class="modal cursor-pointer">
	<label class="modal-box relative" for="">
		<h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
		<p class="py-4">
			You've been selected for a chance to get one year of subscription to use Wikipedia for free!
		</p>
	</label>
</label>

<input type="checkbox" class="modal-toggle" bind:checked={openModal} />
<div class="modal" on:click>
	<div class="modal-box relative ml-12 w-[700px] max-w-5xl bg-neutral text-primary">
		<h3 class="text-center text-2xl font-bold">{title}</h3>
		<p class="py-8 text-center">{message}</p>
	</div>
</div>
