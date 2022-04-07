<script>
  import Elain from './Elain.svelte';
  export let lemmikit;
  export let elain;
</script>

<div class="lemmikit">
  {#each lemmikit as lemmikki}
    <Elain
      nimi={lemmikki.nimi}
      kuvaus={lemmikki.kuvaus}
      omistaja={lemmikki.omistaja}
      {...elain}
      on:poista
    />
  {/each}
</div>

<style>
  .lemmikit {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
