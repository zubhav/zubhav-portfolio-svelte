<script>
  import { fade } from "svelte/transition";

  let visible = false;
  let quoteVisible = true;

  let quotes = [
    "When 'I' replaced with 'We', even the illness becomes wellness. - Malcolm X",
    "There comes a time when silence is betrayal. - Martin Luther King, Jr.",
    "Ideologies separate us. Dreams and anguish bring us together. – Eugene Ionesco",
    "No one is born hating another person because of the color of his skin or his background or his religion. People learn to hate, and if they can learn to hate, they can be taught to love, for love comes more naturally to the human heart than its opposite. - Nelson Mandela",
    "Whoever kills a human being, it is as though he has killed all mankind. - Holy Quran"
  ];

  let selectedQuoteIdx = 0;
  let selectedQuote = quotes[0];

  $: {
    selectedQuote = quotes[selectedQuoteIdx % quotes.length];
  }

  setTimeout(() => {
    visible = true;
  }, 200);

  setInterval(() => {
    quoteVisible = false;
    selectedQuoteIdx += 1;

    setTimeout(() => {
      quoteVisible = true;
    }, 1000);
  }, 6500);
</script>

<style>

</style>

<svelte:head>
  <title>Black Lives Matter</title>
</svelte:head>

<section class="text-center flex h-screen w-full">
  {#if visible}
    <section
      class="flex flex-col mx-auto justify-center xs:mb-16"
      transition:fade>
      <aside class="pb-2">
        <img
          class="avatar mx-auto rounded-full"
          alt="Black Lives Matter"
          src="./images/blm.png"
          style="min-width: 250px; max-width: 450px;"
          width="40%"
          height="400" />
      </aside>

      <header class="font-bold">
        <h1 class="text-4xl leading-relaxed">Black Lives Matter</h1>
        <section style="min-height: 100px; padding: 0 20px;">
          {#if quoteVisible}
            <h2 class="text-lg pt-2" transition:fade>
              {selectedQuote ? selectedQuote : ''}
            </h2>
          {/if}
        </section>
      </header>
    </section>
  {/if}
</section>
