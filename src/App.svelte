<script>
  import Otsikko from './Otsikko.svelte';
  import Elaimet from './Elaimet.svelte';
  import Vinkki from './Vinkki.svelte';
  import Painike from './Painike.svelte';
  import UusiElain from './UusiElain.svelte';
  export let elain;

  let nimi = '';
  let kuvaus = '';
  let omistaja = '';

  let lemmikit = [
    {
      nimi: 'Pörrö',
      kuvaus: 'Tuttavallinen ja leikkisä',
      omistaja: 'Pekka Pekkanen',
    },

    {
      nimi: 'Turri',
      kuvaus: 'Kohtelias ja kiltti',
      omistaja: 'Teppo Tepponen',
    },
    {
      nimi: 'Juho',
      kuvaus: 'Avulias ja villi',
      omistaja: 'Juhani tamminen',
    },
  ];
  let syoteNakyva = false;
  const muutaSyotteenNakyvyys = () => {
    syoteNakyva = !syoteNakyva;
  };

  const lisaaLemmikki = (ce) => {
    lemmikit = [
      ...lemmikit,
      {
        nimi: ce.detail.nimi,
        kuvaus: ce.detail.kuvaus,
        omistaja: ce.detail.omistaja,
      },
    ];
    syoteNakyva = false;
  };

  const poistaLemmikki = (ce) => {
    lemmikit = lemmikit.filter((elain) => elain.nimi !== ce.detail);
  };
</script>

<main>
  <h1>Konsta Hasanen</h1>
  <Otsikko {elain} />
  <Vinkki />
  <Elaimet {lemmikit} {elain} on:poista={poistaLemmikki} />
  <br />

  <Painike on:click={muutaSyotteenNakyvyys}>Lisää uusi</Painike>
  {#if syoteNakyva}
    <UusiElain
      on:peruuta={muutaSyotteenNakyvyys}
      on:uusielain={lisaaLemmikki}
      on:sulje={muutaSyotteenNakyvyys}
    />
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
