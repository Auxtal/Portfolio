<script lang="ts">
  import Animate from "$components/atoms/Animate.svelte";
  import Button from "$components/atoms/Button.svelte";
  import ThemeToggle from "$components/molecules/ThemeToggle.svelte";
  import ConfettiToggle from "$components/molecules/ConfettiToggle.svelte";

  import Navlinks from "$json/Navlinks.json";

  import { fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { page } from "$app/stores";

  import Icon from "@iconify/svelte";
  import OutClick from "svelte-outclick";
  // @ts-expect-error Resolve declaration issue
  import { Confetti } from "svelte-confetti";

  let mobileMenu = false;

  const toggleMobileMenu = () => (mobileMenu = !mobileMenu);
  const hideMobileMenu = () => (mobileMenu = false);
</script>

<Animate>
  <nav id="nav">
    <!-- Desktop Navbar -->
    <div
      class="fixed z-20 hidden w-full items-center justify-between border-b border-secondary/20 bg-primary/60 px-4 py-4 backdrop-blur-md transition-[background-color] lg:flex lg:min-h-[4rem]"
      transition:fade={{ duration: 800, easing: quintOut }}
    >
      <a
        href="/"
        class="btn-ghost no-animation btn flex items-center justify-center rounded-md text-xl normal-case outline-none transition-colors hover:bg-secondary/50 hover:text-primary focus-visible:bg-secondary/50 focus-visible:text-primary focus-visible:outline-none hover:dark:text-secondary focus-visible:dark:text-secondary"
        data-sveltekit-preload-data
      >
        <img
          class="mr-2.5 rounded-full shadow-lg"
          src="/images/Logo-Round.webp"
          alt="Auxtal Logo Round"
          width="36"
          height="36"
        />
        <p class="text-xl">Auxtal</p>
      </a>
      <div class="justify-center text-sm">
        <ul class="menu menu-horizontal">
          {#each Navlinks as Navlink}
            <li class="mx-2">
              <a
                href={Navlink.route}
                class={`rounded-md px-5 py-2 hover:scale-110 hover:bg-secondary/50 hover:text-primary focus-visible:scale-110 focus-visible:bg-neutral focus-visible:bg-secondary/50 focus-visible:font-bold focus-visible:text-primary active:text-primary hover:dark:text-secondary focus-visible:dark:text-secondary ${
                  $page.url.pathname.includes(Navlink.route)
                    ? "!bg-neutral font-bold text-primary active:text-primary dark:text-secondary"
                    : ""
                }`}
                data-sveltekit-preload-data
              >
                {Navlink.name}
              </a>
            </li>
          {/each}
        </ul>
      </div>
      <div class="flex items-center justify-center">
        <ConfettiToggle>
          <svelte:fragment slot="content">
            <Button
              href="/pdf/Resume Redacted Info.pdf"
              download="Resume Redacted Info.pdf"
              classes="px-9"
            >
              <Icon
                height="20"
                width="20"
                icon="mdi:resume"
                style="display: inline-block; margin-right: 5px;"
              />Resume
            </Button>
          </svelte:fragment>
          <Confetti noGravity x={[-0.5, 0.5]} y={[-0.5, 0.5]} delay={[0, 250]} duration="400" />
        </ConfettiToggle>
        <ThemeToggle classes="ml-3" />
      </div>
    </div>

    <!-- Mobile Navbar -->
    <div
      class="navbar fixed z-20 justify-between border-b border-secondary/20 bg-primary/60 backdrop-blur transition-[background_color] lg:hidden"
    >
      <div class="m-0 flex w-full p-0">
        <a
          href="/"
          class="btn-ghost no-animation btn flex items-center justify-center rounded-md text-xl normal-case outline-none transition-colors hover:bg-transparent active:bg-secondary/50 active:text-primary active:outline-none active:dark:text-secondary"
          data-sveltekit-preload-data
        >
          <img
            class="mr-2.5 rounded-full shadow-lg"
            src="/images/Logo-Round.webp"
            alt="Auxtal Logo Round"
            width="36"
            height="36"
          />
          <p class="text-xl">Auxtal</p>
        </a>
      </div>
      <div class="flex items-center space-x-3">
        <ThemeToggle />
        <label
          id="mobileMenuToggle"
          class="swap swap-rotate no-animation btn h-[48px] w-[48px] rounded-md border-none bg-secondary/20 text-secondary duration-150 hover:bg-secondary/20 active:bg-neutral active:text-primary active:dark:text-secondary"
        >
          <input
            type="checkbox"
            on:click={toggleMobileMenu}
            bind:checked={mobileMenu}
            aria-label="Mobile Menu Toggle"
          />
          <svg
            class="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
            ><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg
            class="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon
              points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
            />
          </svg>
        </label>
      </div>
    </div>
    {#if mobileMenu}
      <div
        class="fixed z-20 mt-2 w-full translate-y-[4rem] lg:hidden"
        transition:fade={{ duration: 300, easing: quintOut }}
      >
        <OutClick on:outclick={hideMobileMenu} excludeQuerySelectorAll={"#mobileMenuToggle"}>
          <ul class="mx-2 rounded-xl bg-zinc-800/50 p-4 shadow backdrop-blur transition">
            {#each Navlinks as Navlink}
              <li
                class={`transition-bg rounded-md text-primary hover:bg-primary/5 dark:text-secondary hover:dark:bg-secondary/5 ${
                  $page.url.pathname.includes(Navlink.route)
                    ? "bg-neutral font-bold text-primary dark:text-secondary"
                    : ""
                }`}
              >
                <a
                  href={Navlink.route}
                  class="mt-1 block w-full p-3 text-center transition"
                  on:click={hideMobileMenu}
                  data-sveltekit-preload-data
                >
                  {Navlink.name}
                </a>
              </li>
            {/each}
            <li>
              <a
                href="/pdf/Resume Redacted Info.pdf"
                download="Resume Redacted Info.pdf"
                class="mt-1 block w-full rounded-md p-3 text-center text-primary transition hover:bg-primary/5 active:bg-primary/5 dark:text-secondary hover:dark:bg-secondary/5 active:dark:bg-secondary/5"
              >
                Resume
              </a>
            </li>
          </ul>
        </OutClick>
      </div>
    {/if}
  </nav>
</Animate>
