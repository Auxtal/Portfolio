<script lang="ts">
  import Animate from "$components/atoms/Animate.svelte";
  import Container from "$components/atoms/Container.svelte";
  import BackButton from "$components/molecules/BackButton.svelte";
  import Button from "$components/atoms/Button.svelte";

  import { Toast, contactSchema } from "$lib/utils";

  import { fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  import { persist } from "svelte-use-persist";
  import { superForm } from "sveltekit-superforms/client";

  import { initFlash } from "sveltekit-flash-message/client";
  import { page } from "$app/stores";

  import type { PageData, Snapshot } from "./$types";

  export let data: PageData;
  const flash = initFlash(page);
  const { form, errors, enhance, delayed } = superForm(data.form, {
    resetForm: true,
    taintedMessage: null,
    validators: contactSchema
  });

  let formData = {
    name: $form.name,
    email: $form.email,
    subject: $form.subject,
    message: $form.message
  };

  export const snapshot: Snapshot = {
    capture: () => formData,
    restore: (value) => (formData = value)
  };

  $: if ($flash) {
    Toast($flash.type, $flash.message);
  }
</script>

<svelte:head>
  <title>Contact</title>
  <meta name="description" content="Auxtal's Portfolio site contact form page." />
</svelte:head>

<Animate>
  <Container>
    <div
      class="mx-auto flex h-[calc(100vh-88px)] w-full max-w-xl flex-col justify-center p-6"
      transition:fade|local={{ duration: 800, easing: quintOut }}
    >
      <div class="py-4 lg:max-h-[calc(100vh-88px)]">
        <BackButton href="/contact" />
        <form
          class="mt-4 transition-all"
          method="POST"
          action="?/contact"
          use:persist={{ key: "contactForm" }}
          use:enhance
          class:!mt-6={$errors.name}
        >
          <div class="form-item relative mb-5 mt-2">
            <input
              id="name"
              name="name"
              placeholder="Name"
              type="text"
              bind:value={$form.name}
              class="peer input my-2 block w-full !rounded-md bg-transparent px-4 text-sm text-secondary placeholder-secondary shadow-md outline outline-2 outline-secondary/20 backdrop-blur-sm transition-all focus-visible:outline-[2.5px] focus-visible:outline-neutral"
              class:!outline-red-500={$errors.name}
            />
            {#if $errors.name}
              <label
                class="absolute left-2.5 top-[18px] z-10 px-[10px] text-[12px] font-bold text-secondary transition-all peer-valid:top-[-9px] peer-valid:bg-primary peer-focus-visible:top-[-9px] peer-focus-visible:bg-primary"
                for="name"
              >
                <span class="text-red-500">{$errors?.name}</span>
              </label>
            {/if}
          </div>
          <div class="form-item relative mb-5 mt-2">
            <input
              id="email"
              name="email"
              placeholder="Email"
              type="text"
              bind:value={$form.email}
              class="peer input my-2 block w-full !rounded-md bg-transparent px-4 text-sm text-secondary placeholder-secondary shadow-md outline outline-2 outline-secondary/20 backdrop-blur-sm transition-all focus-visible:outline-[2.5px] focus-visible:outline-neutral"
              class:!outline-red-500={$errors.email}
            />
            {#if $errors.email}
              <label
                class="absolute left-2.5 top-[18px] z-10 px-[10px] text-[12px] font-bold text-secondary transition-all peer-valid:top-[-9px] peer-valid:bg-primary peer-focus-visible:top-[-9px] peer-focus-visible:bg-primary"
                for="email"
              >
                <span class="text-red-500">{$errors.email[0]}</span>
              </label>
            {/if}
          </div>
          <div class="form-item relative mb-5 mt-2">
            <input
              id="subject"
              name="subject"
              placeholder="Subject"
              type="text"
              bind:value={$form.subject}
              class="peer input my-2 block w-full !rounded-md bg-transparent px-4 text-sm text-secondary placeholder-secondary shadow-md outline outline-2 outline-secondary/20 backdrop-blur-sm transition-all focus-visible:outline-[2.5px] focus-visible:outline-neutral"
              class:!outline-red-500={$errors.subject}
            />
            {#if $errors.subject}
              <label
                class="absolute left-2.5 top-[18px] z-10 px-[10px] text-[12px] font-bold text-secondary transition-all peer-valid:top-[-9px] peer-valid:bg-primary peer-focus-visible:top-[-9px] peer-focus-visible:bg-primary"
                for="subject"
              >
                <span class="text-red-500">{$errors.subject}</span>
              </label>
            {/if}
          </div>
          <div class="form-item relative mb-5 mt-2">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              bind:value={$form.message}
              class="peer textarea my-2 block w-full resize-none !rounded-md bg-transparent px-4 pt-3 text-sm text-secondary placeholder-secondary shadow-md outline outline-2 outline-secondary/20 backdrop-blur-sm transition-all focus-visible:outline-[2.5px] focus-visible:outline-neutral"
              class:!outline-red-500={$errors.message}
              rows="5"
            />
            {#if $errors.message}
              <label
                class="absolute left-2.5 top-[18px] z-10 px-[10px] text-[12px] font-bold text-secondary transition-all peer-valid:top-[-9px] peer-valid:bg-primary peer-focus-visible:top-[-9px] peer-focus-visible:bg-primary"
                for="message"
              >
                <span class="text-red-500">{$errors.message}</span>
              </label>
            {/if}
          </div>
          <Button classes="w-full" loading={$delayed}>Send</Button>
        </form>
      </div>
    </div>
  </Container>
</Animate>
