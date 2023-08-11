<script lang="ts">
  export let title: string;
  export let description: string;
  export let handle: string;
  export let image: string;
</script>

<div class="my-3 flex rounded border-l-4 border-secondary pl-1">
  <img
    class="aspect-square !h-[150px] !w-[150px] rounded object-cover drop-shadow-md"
    alt="Top Floor {title}"
    srcset={image}
    width="150"
    height="150"
  />
  <div class="pl-4 text-sm">
    <h3 class="mb-2 text-lg font-semibold text-secondary">{title}</h3>
    <p class="text-accent">{description}</p>
    <a class="text-neutral underline" href="https://www.instagram.com/{handle}/" target="_blank"
      >@{handle}</a
    >
  </div>
</div>
