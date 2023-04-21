<script lang="ts">
  import Icon from "@iconify/svelte";

  export let href: string;
</script>

<a {href} class="group flex w-min items-center text-secondary no-underline focus:outline-none">
  <div class="transition-transform group-hover:-translate-x-0.5">
    <Icon height="40" width="40" icon="eva:arrow-back-outline" />
  </div>
  <div>
    <p class="-translate-y-0.5 translate-x-1">Back</p>
  </div>
</a>
