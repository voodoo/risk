<script>
  import { state } from "../state.js";
  import Field from "../components/Field.svelte";
</script>

<div class="card">
  <header class="card-header">
    <p class="card-header-title">Weight</p>
  </header>
  <div class="card-content">
    <div class="content">

      <Field bind:value={$state.waist} label="Waist"/>
      <Field bind:value={$state.height} label="Height (inches)" />
      <Field bind:value={$state.weight} label="Weight (lbs)"/>

    </div><!---content-->
  </div><!---card-content-->
</div><!-- card-->
