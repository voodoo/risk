<script>
  import { onMount } from "svelte";
  import "./bulma.scss";
  import { state } from "./state.js";
  import Risk from "./pages/Risk.svelte";
  import Weight from "./pages/Weight.svelte";
  import Blood from "./pages/Blood.svelte";
  import Metabolism from "./pages/Metabolism.svelte";

  import Chip from "./components/Chip.svelte";

  import { getQueryParams, openTab } from "./util.js";
  //onMount(() => {
  let params = getQueryParams();
  Object.keys(params).forEach(element => {
    $state[element] = params[element];
  });
  //});
</script>

<div class="tabs is-centered">

  <ul>
    <li class="tab is-active" on:click={() => openTab(event, 'Risk')}>
      <a>
        Risk
        {#if $state.scores && $state.scores.length > 0}
          <Chip count={$state.scores.length} />
        {/if}
      </a>
    </li>
    <li class="tab" on:click={() => openTab(event, 'Weight')}>
      <a>Weight</a>
    </li>
    <li class="tab" on:click={() => openTab(event, 'Blood')}>
      <a>Blood</a>
    </li>
    <li class="tab" on:click={() => openTab(event, 'Metabolism')}>
      <a>Metabolism</a>
    </li>
    <li class="tab" on:click={() => openTab(event, 'Profile')}>
      <a>Profile</a>
    </li>

  </ul>
</div>

<div class="container section">
  <div id="Risk" class="content-tab">
    <Risk />
  </div>
  <div id="Weight" class="content-tab" style="display:none">
    <Weight />
  </div>
  <div id="Blood" class="content-tab" style="display:none">
    <Blood />
  </div>
  <div id="Metabolism" class="content-tab" style="display:none">
    <Metabolism />
  </div>
  <div id="Profile" class="content-tab" style="display:none">Profile</div>
</div>

<div class="container section has-text-centered">
<a href="https://github.com/voodoo/risk" target="_blank">Open Source. 
<i class="fab fa-github"></i>
</a>
<br/>
Free to use. In any way.
<br/>
Built with 
<a href="https://svelte.dev" target="_blank">Svelte</a> and 
<a href="https://www.netlify.com" target="_blank">Netlify</a>.
<br/>  
And love  for software development and staying healthy.
<br/><i class="fas fa-heartbeat fa-2x"></i>

</div>
