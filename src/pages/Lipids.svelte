<script>
  import { state } from "../state.js";
  import Field from "../components/Field.svelte";
</script>

<div class="card">
  <header class="card-header">
    <p class="card-header-title">Lipids</p>
  </header>
  <div class="card-content">
    <div class="content">

      <Field bind:value={$state.tg} label="Trigs"/>
      <Field bind:value={$state.hdl} label="HDL"/>
      <Field bind:value={$state.ldl} label="LDL"/>
      <Field bind:value={$state.chol} label="Total Cholesterol"/>

      <!---content-->
    </div>
  </div>
  <!-- card-content-->
</div>
<!-- card-->
