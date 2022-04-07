<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  import Modal from './Modal.svelte';
  import Painike from './Painike.svelte';

  let nimi = '';
  let kuvaus = '';
  let omistaja = '';

  function tallennaLemmikki() {
    dispatch('uusielain', {
      nimi: nimi,
      kuvaus: kuvaus,
      omistaja: omistaja,
    });
  }
</script>

<Modal>
  <h1 slot="header">Uusi lemmikki</h1>
  <div class="syotteet">
    <label for="nimi">Nimi</label>
    <input type="text" bind:value={nimi} id="nimi" />
    <label for="kuvaus">Kuvaus</label>
    <input type="text" bind:value={kuvaus} id="kuvaus" />
    <label for="omistaja">Omistaja</label>
    <input type="text" bind:value={omistaja} id="omistaja" />

    <div>
      <Painike on:click={tallennaLemmikki}>Tallenna</Painike>
      <Painike on:click={() => dispatch('peruuta')}>Peruuta</Painike>
      <Painike on:click={() => dispatch('sulje')}>Sulje</Painike>
    </div>
  </div>
</Modal>

<style>
  .syotteet {
    padding: 1em;
  }
</style>
