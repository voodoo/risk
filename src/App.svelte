<script>
  import "./bulma.scss";
  import { state } from "./state.js";
  import Risk from "./pages/Risk.svelte";
  import Weight from "./pages/Weight.svelte";
  import Lipids from "./pages/Lipids.svelte";
  import Metabolism from "./pages/Metabolism.svelte";
  import Profile from "./pages/Profile.svelte";

  import Chip from "./components/Chip.svelte";

  import { getQueryParams, openTab, updateUrlState  } from "./util.js";

  let params = getQueryParams();
  Object.keys(params).forEach(element => {
    $state[element] = decodeURIComponent(params[element]);
  });

  $:{
    // all pages use this
    updateUrlState($state) 
  }

</script>
  <p/>
<div class="tabs  is-fullwidth">

  <ul>
    <!-- <li class="tab is-active" on:click={(event) => openTab(event, 'Risk')}>
      <a>
        Risk
        {#if $state.scores && $state.scores.length > 0}
          <Chip count={$state.scores.length} />
        {/if}
      </a>
    </li>
    <li class="tab" on:click={(event) => openTab(event, 'Weight')}>
      <a>Weight</a>
    </li> -->
    <li class="tab is-active" on:click={(event) => openTab(event, 'Lipids')}>
      <a>Lipids</a>
    </li>
    <li class="tab" on:click={(event) => openTab(event, 'Metabolism')}>
      <a>Metabolism</a>
    </li>
    <li class="tab" on:click={(event) => openTab(event, 'Profile')}>
      <a>Profile</a>
    </li>

  </ul>
</div>

<div class="container section">
  <!-- <div id="Risk" class="content-tab">
    <Risk />
  </div>
  <div id="Weight" class="content-tab" style="display:none">
    <Weight />
  </div> -->
  <div id="Lipids" class="content-tab">
    <Lipids />
  </div>
  <div id="Metabolism" class="content-tab" style="display:none">
    <Metabolism />
  </div>
  <div id="Profile" class="content-tab" style="display:none">
    <Profile/>
  </div>
</div>

<div class="container section has-text-centered">
<a href="https://github.com/voodoo/risk" target="_blank">Open Source. 
<i class="fab fa-github fa-2x"></i>
</a>
<br/>
Free to <a target="_blank" href="https://github.com/voodoo/risk/blob/master/LICENSE">use in any way</a>.
<br/>
Built with 
<a href="https://svelte.dev" target="_blank">Svelte</a> and 
<a href="https://www.netlify.com" target="_blank">Netlify</a>.
<br/>  
Stay healthy my friends.
<br/><i class="fas fa-heartbeat fa-2x"></i>

</div>
