<script lang="ts">
  import Animate from "$components/atoms/Animate.svelte";
  import BackButton from "$components/molecules/BackButton.svelte";
  import Button from "$components/atoms/Button.svelte";

  import { Toast } from "$utils/toast";

  import { fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { applyAction, enhance } from "$app/forms";

  import { persist } from "svelte-use-persist";

  import type { ActionData, Snapshot } from "./$types";
  import type { ActionResult } from "@sveltejs/kit";
  import type { SubmitFunction } from "$app/forms";

  type ActionResultData = ActionResult & {
    data: { errors: string[] };
  };

  type ActionFormData = ActionData & {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

  export let form: ActionFormData;

  let loading = false;
  let formData = {
    name: form?.name ?? "",
    email: form?.email ?? "",
    subject: form?.subject ?? "",
    message: form?.message ?? ""
  };

  export const snapshot: Snapshot = {
    capture: () => formData,
    restore: (value) => (formData = value)
  };

  const contactSubmit: SubmitFunction = ({ form }) => {
    loading = true;
    return async ({ result }) => {
      const resultData = result as ActionResultData;

      if (resultData?.data?.errors) {
        setTimeout(() => {
          loading = false;
        }, 500);
        return await applyAction(resultData);
      }

      if (resultData.type === "failure") {
        Toast.error(resultData?.data?.errorMessage);
        setTimeout(() => {
          loading = false;
        }, 500);
        await applyAction(resultData);
      }

      if (resultData.type === "success") {
        Toast.success("Email Sent Successfully");
        setTimeout(() => {
          loading = false;
        }, 500);
        form.reset();
        await applyAction(resultData);
      }
    };
  };
</script>

<svelte:head>
  <title>Contact</title>
  <meta name="description" content="Auxtal's Portfolio site contact form page." />
</svelte:head>

<Animate>
  <div
    class="mx-auto flex h-[calc(100vh-88px)] w-full max-w-xl flex-col justify-center p-6"
    transition:fade|local={{ duration: 800, easing: quintOut }}
  >
    <div class="py-4 lg:max-h-[calc(100vh-88px)]">
      <BackButton href="/contact" />
      <form
        class="mt-3.5"
        method="POST"
        action="?/contact"
        use:persist={{ key: "contactForm" }}
        use:enhance={contactSubmit}
      >
        <div class="form-item relative mb-5 mt-2">
          <input
            id="name"
            name="name"
            placeholder="Name"
            type="text"
            bind:value={formData.name}
            class="peer input my-2 block w-full !rounded-md bg-transparent px-4 text-sm text-secondary placeholder-secondary shadow-md outline outline-2 outline-secondary/20 backdrop-blur-sm transition-all focus-visible:outline-[2.5px] focus-visible:outline-neutral {form
              ?.errors?.name
              ? '!outline-red-500'
              : ''}"
          />
          {#if form?.errors?.name}
            <label
              class="absolute left-2.5 top-[18px] z-10 px-[10px] text-[12px] font-bold text-secondary transition-all peer-valid:top-[-9px] peer-valid:bg-primary peer-focus-visible:top-[-9px] peer-focus-visible:bg-primary"
              for="name"
            >
              <span class="text-red-500">{form?.errors?.name[0]}</span>
            </label>
          {/if}
        </div>
        <div class="form-item relative mb-5 mt-2">
          <input
            id="email"
            name="email"
            placeholder="Email"
            type="text"
            bind:value={formData.email}
            class="peer input my-2 block w-full !rounded-md bg-transparent px-4 text-sm text-secondary placeholder-secondary shadow-md outline outline-2 outline-secondary/20 backdrop-blur-sm transition-all focus-visible:outline-[2.5px] focus-visible:outline-neutral {form
              ?.errors?.email
              ? '!outline-red-500'
              : ''}"
          />
          {#if form?.errors?.email}
            <label
              class="absolute left-2.5 top-[18px] z-10 px-[10px] text-[12px] font-bold text-secondary transition-all peer-valid:top-[-9px] peer-valid:bg-primary peer-focus-visible:top-[-9px] peer-focus-visible:bg-primary"
              for="email"
            >
              <span class="text-red-500">{form?.errors?.email[0]}</span>
            </label>
          {/if}
        </div>
        <div class="form-item relative mb-5 mt-2">
          <input
            id="subject"
            name="subject"
            placeholder="Subject"
            type="text"
            bind:value={formData.subject}
            class="peer input my-2 block w-full !rounded-md bg-transparent px-4 text-sm text-secondary placeholder-secondary shadow-md outline outline-2 outline-secondary/20 backdrop-blur-sm transition-all focus-visible:outline-[2.5px] focus-visible:outline-neutral {form
              ?.errors?.subject
              ? '!outline-red-500'
              : ''}"
          />
          {#if form?.errors?.subject}
            <label
              class="absolute left-2.5 top-[18px] z-10 px-[10px] text-[12px] font-bold text-secondary transition-all peer-valid:top-[-9px] peer-valid:bg-primary peer-focus-visible:top-[-9px] peer-focus-visible:bg-primary"
              for="subject"
            >
              <span class="text-red-500">{form?.errors?.subject[0]}</span>
            </label>
          {/if}
        </div>
        <div class="form-item relative mb-5 mt-2">
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            bind:value={formData.message}
            class="peer textarea my-2 block w-full resize-none !rounded-md bg-transparent px-4 pt-3 text-sm text-secondary placeholder-secondary shadow-md outline outline-2 outline-secondary/20 backdrop-blur-sm transition-all focus-visible:outline-[2.5px] focus-visible:outline-neutral {form
              ?.errors?.message
              ? '!outline-red-500'
              : ''}"
            rows="5"
          />
          {#if form?.errors?.message}
            <label
              class="absolute left-2.5 top-[18px] z-10 px-[10px] text-[12px] font-bold text-secondary transition-all peer-valid:top-[-9px] peer-valid:bg-primary peer-focus-visible:top-[-9px] peer-focus-visible:bg-primary"
              for="message"
            >
              <span class="text-red-500">{form?.errors?.message[0]}</span>
            </label>
          {/if}
        </div>
        <Button classes="w-full" {loading}>Send</Button>
      </form>
    </div>
  </div>
</Animate>
