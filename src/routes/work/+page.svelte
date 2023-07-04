<script lang="ts">
  import Animate from "$components/atoms/Animate.svelte";
  import Container from "$components/atoms/Container.svelte";
  import WorkCard from "$components/molecules/WorkCard.svelte";

  import Work from "$json/Work.json";
</script>

<svelte:head>
  <title>Work</title>
  <meta name="description" content="Auxtal's Portfolio site work page." />
</svelte:head>

<Animate>
  <Container centerInContainer={true}>
    <div
      class="mx-4 mb-6 mt-6 grid h-full max-w-md auto-rows-[1fr] grid-cols-1 justify-center gap-y-5 lg:mx-0 lg:my-auto lg:mb-0 lg:ml-36 lg:mr-20 lg:mt-0 lg:max-w-full lg:grid-cols-3 lg:gap-x-5 lg:gap-y-5"
    >
      {#each Work as Work}
        <WorkCard title={Work.place} footer={Work.role} current={Work.current}>
          <p>{Work.description}</p>
        </WorkCard>
      {/each}
    </div>
  </Container>
</Animate>
