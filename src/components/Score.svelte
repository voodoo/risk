<script>
  export let value = null;
</script>

<style>
  button.score {
    font-weight: bold;
  }

  button.high {
    background: firebrick;
    color: white;
  }

  button.medium {
    background: orange;
  }

  button.low {
    background: yellow;
  }
</style>

<button class="score {value.toLowerCase()}">{value}</button>
