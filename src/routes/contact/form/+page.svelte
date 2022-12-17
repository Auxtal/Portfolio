<script>
	import Animate from "$components/Animate.svelte";
	import Button from "$components/Button.svelte";
	import BackButton from "$components/BackButton.svelte";
	import { Toast } from "$lib/helpers/toast";

	import { fade } from "svelte/transition";
	import { applyAction, enhance } from "$app/forms";

	export let form;
	let loading = false;
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<Animate>
	<div class="mx-auto flex h-screen w-full max-w-xl flex-col justify-center rounded-md p-6" in:fade>
		<BackButton href="/contact" />
		<form
			class="mt-6"
			method="POST"
			action="?/submit"
			use:enhance={({ form }) => {
				loading = true;
				return async ({ result }) => {
					if (result?.data?.errors) {
						setTimeout(() => {
							loading = false;
						}, 1000);
						return await applyAction(result);
					}
					if (result.type === "success") {
						Toast(
							"<strong>Email Sent Successfully</strong><br>I will get back to you as soon as possible"
						);
						setTimeout(() => {
							loading = false;
						}, 1000);
						form.reset();
						await applyAction(result);
					}
				};
			}}
		>
			<div class="form-item relative mt-2 mb-5 ">
				<input
					id="name"
					name="name"
					value={form?.name ?? ""}
					placeholder="Name"
					type="text"
					class="input my-2 block w-full bg-transparent px-4 text-sm text-secondary shadow-lg outline outline-1 outline-secondary backdrop-blur-sm transition-all focus:outline-[2.5px] focus:outline-neutral {form
						?.errors?.name
						? '!outline-red-500'
						: ''}"
				/>
				{#if form?.errors?.name}
					<label
						class="absolute left-2.5 top-[18px] z-10 px-[10px] text-[12px] font-bold text-secondary transition-all"
						for="name"
					>
						<span class="text-red-500">{form?.errors?.name[0]}</span>
					</label>
				{/if}
			</div>
			<div class="form-item relative mt-2 mb-5 ">
				<input
					id="email"
					name="email"
					value={form?.email ?? ""}
					placeholder="Email"
					type="text"
					class="input my-2 block w-full bg-transparent px-4 text-sm text-secondary shadow-lg outline outline-1 outline-secondary backdrop-blur-sm transition-all focus:outline-[2.5px] focus:outline-neutral {form
						?.errors?.email
						? '!outline-red-500'
						: ''}"
				/>
				{#if form?.errors?.email}
					<label
						class="absolute left-2.5 top-[18px] z-10 px-[10px] text-[12px] font-bold text-secondary transition-all"
						for="email"
					>
						<span class="text-red-500">{form?.errors?.email[0]}</span>
					</label>
				{/if}
			</div>
			<div class="form-item relative mt-2 mb-5 ">
				<input
					id="subject"
					name="subject"
					value={form?.subject ?? ""}
					placeholder="Subject"
					type="text"
					class="input my-2 block w-full bg-transparent px-4 text-sm text-secondary shadow-lg outline outline-1 outline-secondary backdrop-blur-sm transition-all focus:outline-[2.5px] focus:outline-neutral {form
						?.errors?.subject
						? '!outline-red-500'
						: ''}"
				/>
				{#if form?.errors?.subject}
					<label
						class="absolute left-2.5 top-[18px] z-10 px-[10px] text-[12px] font-bold text-secondary transition-all"
						for="subject"
					>
						<span class="text-red-500">{form?.errors?.subject[0]}</span>
					</label>
				{/if}
			</div>
			<div class="form-item relative mt-2 mb-5 ">
				<textarea
					id="message"
					name="message"
					value={form?.message ?? ""}
					placeholder="Message"
					class="textarea my-2 block w-full bg-transparent px-4 pt-3 text-sm text-secondary shadow-lg outline outline-1 outline-secondary backdrop-blur-sm transition-all focus:outline-[2.5px] focus:outline-neutral {form
						?.errors?.message
						? '!outline-red-500'
						: ''}"
					rows="5"
				/>
				{#if form?.errors?.message}
					<label
						class="absolute left-2.5 top-[18px] z-10 px-[10px] text-[12px] font-bold text-secondary transition-all"
						for="message"
					>
						<span class="text-red-500">{form?.errors?.message[0]}</span>
					</label>
				{/if}
			</div>
			<Button classes="w-full" {loading}>Send</Button>
		</form>
	</div>
</Animate>

<style>
	.form-item input:focus + label,
	.form-item input:valid + label,
	.form-item textarea:focus + label,
	.form-item textarea:valid + label {
		background: var(--primary);
		top: -9px;
	}
</style>
