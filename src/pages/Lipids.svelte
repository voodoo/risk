<script>
  import { state } from "../state.js"
  import NumberField from "../components/NumberField.svelte"

</script>

<div class="card">
  <!-- <header class="card-header">
    <p class="card-header-title">Lipids</p>
  </header> -->
  <div class="card-content">
    <div class="content">

      <NumberField bind:value={$state.tg} label="Tryglicerides"/>
      <NumberField bind:value={$state.hdl} label="HDL"/>
      <NumberField bind:value={$state.ldl} label="LDL"/>
      <NumberField bind:value={$state.chol} label="Total Cholesterol"/>

      <!---content-->
    </div>
  </div>
  <!-- card-content-->
</div>
<!-- card-->
