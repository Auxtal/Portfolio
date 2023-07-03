<script lang="ts">
  import Animate from "$components/atoms/Animate.svelte";
  import Button from "$components/atoms/Button.svelte";

  import { page } from "$app/stores";

  interface Status {
    title: string;
    message: string;
  }

  interface StatusMessages {
    [status: number]: Status;
  }

  const statusMessages: StatusMessages = {
    404: {
      title: "Looks Like You're Lost!",
      message: "Oops, Looks like you're lost! The page you're trying to access doesn't exist"
    }
  };
</script>

<svelte:head>
  <title>{$page.status ?? ""} Error</title>
  <meta name="description" content="Auxtal's Portfolio site error page." />
</svelte:head>

<Animate>
  <div class="flex h-[calc(100vh-88px)] w-full flex-col items-center justify-center px-8 lg:px-0">
    <h1 class="mb-3 text-center text-5xl font-bold text-neutral backdrop-blur-sm">
      {statusMessages[$page.status]
        ? statusMessages[$page.status].title
        : "Sorry An Error Occurred"}
    </h1>
    {#if $page.error?.errorId && !($page.status in statusMessages)}
      <p class="mb-2 max-w-md text-center leading-6 text-secondary backdrop-blur-sm">
        <strong>Error ID:</strong>
        {$page.error?.errorId}
      </p>
    {/if}
    {#if $page.status in statusMessages}
      <p class="mb-2 max-w-md text-center leading-6 text-secondary backdrop-blur-sm">
        {statusMessages[$page.status].message}
      </p>
    {/if}
    <Button href="/" classes="px-14 mt-5">Go Home</Button>
  </div>
</Animate>
