<script>
  export let nakyvyysAika = 3000;
  let i = 0;

  const info = [
    'Siivoa jätökset',
    'Muista käyttää lenkillä',
    'Anna lemmikille ruokaa',
    'Leiki lemmikin kanssa',
  ];

  setInterval(() => {
    i = i < info.length - 1 ? i + 1 : 0;
  }, nakyvyysAika);

  $: vinkki = info[i];
</script>

<p>
  {vinkki}
</p>

<style>
  p {
    text-transform: uppercase;
    font-size: 1.25em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: black;
    padding: 1, 5em;
  }
</style>
