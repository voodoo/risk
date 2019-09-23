<script>
  import { state } from "../state.js";
  import Field from "../components/Field.svelte";
</script>

<div class="card">
  <header class="card-header">
    <p class="card-header-title">Profile</p>
  </header>
  <div class="card-content">
    <div class="content">

      <Field bind:value={$state.name} label="Nick Name"/>
      <Field bind:value={$state.age} label="Age"/>
      <Field bind:value={$state.diet} label="Diet"/>
      <Field bind:value={$state.ideal_weight} label="Ideal Weight"/>
   
    </div> <!---content-->
  </div><!-- card-content-->
</div><!-- card-->

