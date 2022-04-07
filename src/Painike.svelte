<script>
  export let disabled = false;
</script>

<button {disabled} on:click><slot /></button>

<style>
  button {
    background-color: royalblue;
    color: white;
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    display: inline-block;
    font-size: 16px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  button:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }

  button:disabled {
    background-color: #ccc;
  }
</style>
