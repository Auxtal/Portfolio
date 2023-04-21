<script lang="ts">
  import Icon from "@iconify/svelte";

  export let href: string;
</script>

<a
  {href}
  class="inline-block max-h-min -translate-x-2 text-secondary transition-transform hover:scale-[0.9] focus:scale-[0.9] focus:outline-none"
>
  <div class="inline-block">
    <Icon height="40" width="40" icon="eva:arrow-back-outline" style="display: inline-block;" />
    <p class="inline-block translate-y-0.5">Back</p>
  </div>
</a>
