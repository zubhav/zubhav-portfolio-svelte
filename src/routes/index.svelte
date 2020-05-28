<script context="module">
  import { fetchFromApi } from "../utils/fetchFromApi.utils";

  export async function preload(page, session) {
    const res = await fetchFromApi("/api/icons");
    const items = await res.json();
    return { items };
  }
</script>

<script>
  export let items;
</script>

<style>
  .avatar {
    box-shadow: 10px 7px 30px rgba(0, 0, 0, 0.35);
  }

  .landing-icon {
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
  }

  .linkedin img {
    margin-left: 2px;
    margin-bottom: 2px;
  }

  .twitter img {
    margin-top: 3px;
    margin-left: 2px;
  }

  .github img {
    margin-top: 3px;
    margin-right: 1px;
  }

  .stackoverflow img {
    margin-left: 2px;
    margin-bottom: 3px;
  }

  @media (max-width: 700px) {
    .cv {
      width: 40%;
    }
  }
</style>

<svelte:head>
  <title>Subhav Gautam</title>
</svelte:head>

<section class="text-center flex h-screen">
  <a
    href="mailto:me@zubhav.dev?subject=Request for CV&body=Hi Subhav, I'm
    ____.%0D%0DCould you please send me a copy of your CV?"
    title="Request my CV">
    <img
      class="cv absolute top-0 left-0 w-1/4"
      alt="Request my CV"
      src="./images/cv.png" />
  </a>

  <!-- <section class="flex flex-col mb-4 mx-auto justify-center xs:mt-16"> -->
  <section class="m-auto xs:mt-16">
    <aside class="pb-2">
      <img
        class="avatar mx-auto rounded-full"
        alt="Subhav Gautam avatar"
        src="./images/avatar.png"
        width="292" />
    </aside>

    <header class="font-bold">
      <h1 class="text-4xl leading-relaxed">Subhav Gautam</h1>
      <h2 class="text-lg pt-2">
        Software Engineer specialising in web technologies
      </h2>
    </header>

    <ul class="flex items-center justify-center h-16 mt-6">
      {#each items as item (item.id)}
        <li class="mr-6">
          <a
            class={`landing-icon bg-white rounded-full flex justify-center items-center h-16 w-16 ${item.title.toLowerCase()}`}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer">
            <img alt={item.title} src={item.iconHref} />
          </a>
        </li>
      {/each}
    </ul>
  </section>
</section>
