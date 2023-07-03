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
  class="mx-4 mb-6 mt-6 flex h-full justify-center lg:mx-0 lg:mb-0 lg:ml-36 lg:mr-20 lg:mt-0 lg:h-[calc(100vh-88px)] lg:py-4"
>
  <div
    class="grid max-w-md auto-rows-[1fr] grid-cols-1 gap-y-5 lg:my-auto lg:max-h-[calc(100vh-88px)] lg:max-w-full lg:grid-cols-3 lg:gap-x-5 lg:gap-y-5"
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
