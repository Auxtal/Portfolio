<script lang="ts">
  import Animate from "$components/Animate.svelte";
  import Button from "$components/Button.svelte";

  import { page } from "$app/stores";

  interface StatusMessages {
    [key: number]: string;
  }

  const statusMessages: StatusMessages = {
    404: "Oops, Looks like you're lost! The page you're trying to access doesn't exist"
  };
</script>

<svelte:head>
  <title>{$page.status ?? ""} Error</title>
  <meta name="description" content="Auxtal's Portfolio site error page." />
</svelte:head>

<Animate>
  <div class="flex h-screen w-full flex-col items-center justify-center px-8 lg:px-0">
    <h1 class="mb-3 text-center text-5xl font-bold text-neutral backdrop-blur-sm">
      Sorry An Error Occurred
    </h1>
    {#if $page.error?.errorId && !($page.status in statusMessages)}
      <p class="mb-2 max-w-md text-center leading-6 text-secondary backdrop-blur-sm">
        <strong>Error ID:</strong>
        {$page.error?.errorId}
      </p>
    {/if}
    {#if $page.status in statusMessages}
      <p class="mb-2 max-w-md text-center leading-6 text-secondary backdrop-blur-sm">
        {statusMessages[$page.status]}
      </p>
    {/if}
    <Button href="/" classes="px-14 mt-5">Go Home</Button>
  </div>
</Animate>
