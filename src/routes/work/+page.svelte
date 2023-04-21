<script lang="ts">
  import Animate from "$components/atoms/Animate.svelte";
  import WorkCard from "$components/molecules/WorkCard.svelte";

  import Work from "$json/Work.json";
</script>

<svelte:head>
  <title>Work</title>
  <meta name="description" content="Auxtal's Portfolio site work page." />
</svelte:head>

<div
  class="mx-4 flex h-full justify-center pb-4 pt-[5rem] sm:mx-0 lg:ml-36 lg:mr-20 lg:h-screen lg:pb-0 xl:pt-0"
>
  <div
    class="grid max-w-md auto-rows-[1fr] grid-cols-1 gap-y-5 md:my-auto md:max-w-full md:gap-x-5 lg:grid-cols-3 lg:gap-y-5"
  >
    <Animate>
      {#each Work as Work}
        <WorkCard title={Work.place} footer={Work.role} current={Work.current}>
          <p>{Work.description}</p>
        </WorkCard>
      {/each}
    </Animate>
  </div>
</div>
