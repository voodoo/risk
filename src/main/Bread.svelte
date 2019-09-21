<script>
  export let current;
</script>

<nav
  class="breadcrumb is-centered has-succeeds-separator"
  aria-label="breadcrumbs">
  <ul>
    {#each current as crumb}
      <li class="is-active">{crumb.text}</li>
    {/each}
  </ul>
</nav>
