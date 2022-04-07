<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  import Painike from './Painike.svelte';

  export let nimi;
  export let kuvaus;
  export let omistaja;

  export let laji;
  export let haku;
  const poistaLemmikki = () => dispatch('poista', nimi);
</script>

<div class="lemmikit">
  <div class="lemmikkienTiedot">
    <div class="nimi">
      <p>{laji} {nimi}</p>
    </div>
    <img src="https://loremflickr.com/320/240/{haku}?nimi={nimi}" alt="kuva" />
    <p>{kuvaus}</p>
    <p>{omistaja}</p>
    <Painike on:click={poistaLemmikki}>Poista</Painike>
  </div>
</div>

<style>
  .lemmikit {
    border-radius: 20px;
    width: 400px;
    margin: 2em;
    border: 1.5px solid white;
  }
  .lemmikkienTiedot {
    margin-bottom: 3em;
  }

  .nimi {
    padding: 0.25em;
    font-size: 1.25em;
    border-bottom: 0.25px solid gray;
    text-transform: uppercase;
  }
  img {
    border: 2px solid black;
    margin: 1em;
    border-radius: 10%;
    box-shadow: 10px 10px 5px grey;
  }

  p {
    font-size: 1em;
  }
</style>
