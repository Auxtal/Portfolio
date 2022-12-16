<script>
	import Button from "$lib/components/Button.svelte";
	import BackButton from "$lib/components/BackButton.svelte";
	import Icon from "@iconify/svelte";
	import { Toast } from "$lib/helpers/toast";

	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
	import { applyAction, enhance } from "$app/forms";

	export let form;

	let animate = false;
	let loading = false;

	onMount(() => {
		animate = true;
	});
</script>

<svelte:head>
	<title>Contact Form</title>
</svelte:head>

{#if animate}
	<div class="mx-auto h-[90vh] max-w-xl" in:fade>
		<div class="flex h-full w-full flex-col justify-center gap-5 rounded-md p-6">
			<BackButton href="/contact" />
			<form
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
				<div class="form-item mt-2 mb-5 ">
					<input
						id="name"
						name="name"
						value={form?.name ?? ""}
						placeholder="Name"
						type="text"
						class="input-neutral font-secondary input my-2 w-full bg-white !text-sm text-primary shadow-lg {form
							?.errors?.name
							? '!outline-red-500'
							: ''}"
					/>
					{#if form?.errors?.name}
						<label for="name">
							<span class="text-red-500">{form?.errors?.name[0]}</span>
						</label>
					{/if}
				</div>
				<div class="form-item mt-2 mb-5 ">
					<input
						id="email"
						name="email"
						value={form?.email ?? ""}
						placeholder="Email"
						type="text"
						class="input-neutral font-secondary input my-2 w-full bg-white !text-sm text-primary shadow-lg {form
							?.errors?.email
							? '!outline-red-500'
							: ''}"
					/>
					{#if form?.errors?.email}
						<label for="email">
							<span class="text-red-500">{form?.errors?.email[0]}</span>
						</label>
					{/if}
				</div>
				<div class="form-item mt-2 mb-5 ">
					<input
						id="subject"
						name="subject"
						value={form?.subject ?? ""}
						placeholder="Subject"
						type="text"
						class="input-neutral font-secondary input my-2 w-full bg-white !text-sm text-primary shadow-lg {form
							?.errors?.subject
							? '!outline-red-500'
							: ''}"
					/>
					{#if form?.errors?.subject}
						<label for="subject">
							<span class="text-red-500">{form?.errors?.subject[0]}</span>
						</label>
					{/if}
				</div>
				<div class="form-item mt-2 mb-5 ">
					<textarea
						id="message"
						name="message"
						value={form?.message ?? ""}
						placeholder="Message"
						class="textarea-neutral font-secondary textarea w-full bg-white !pt-3 !text-sm text-primary {form
							?.errors?.message
							? '!outline-red-500'
							: ''}"
						rows="5"
					/>
					{#if form?.errors?.message}
						<label for="message">
							<span class="text-red-500">{form?.errors?.message[0]}</span>
						</label>
					{/if}
				</div>
				<Button classes="w-full" {loading}>Send</Button>
			</form>
		</div>
	</div>
{/if}

<style>
	.form-item {
		position: relative;
	}

	.form-item input,
	textarea {
		display: block;
		background: transparent;
		transition: all 0.3s ease;
		padding: 0 15px;
		color: var(--secondary);
		outline: 1px solid var(--secondary);
		backdrop-filter: blur(4px);
	}

	.form-item label {
		position: absolute;
		cursor: text;
		z-index: 2;
		top: 18px;
		left: 10px;
		font-size: 12px;
		font-weight: bold;
		padding: 0 10px;
		transition: all 0.3s ease;
		color: var(--secondary);
	}

	.form-item input:focus,
	textarea:focus {
		outline: 2.5px solid var(--neutral);
	}

	.form-item input:focus + label,
	.form-item input:valid + label,
	.form-item textarea:focus + label,
	.form-item textarea:valid + label {
		background: var(--primary);
		top: -9px;
	}
</style>
