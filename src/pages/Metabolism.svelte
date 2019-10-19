<script>
  import { state } from "../state.js";
  import NumberField from "../components/NumberField.svelte";
</script>

<div class="card">
  <!-- <header class="card-header">
    <p class="card-header-title">Metabolism</p>
  </header> -->
  <div class="card-content">
    <div class="content">


      <h4>Thyroid</h4>
      <NumberField bind:value={$state.tsh} label="TSH"/>
      <NumberField bind:value={$state.t3} label="Free T3"/>
      <NumberField bind:value={$state.t3r} label="Reverse T3"/>
      <NumberField bind:value={$state.t4} label="Free T4"/>
      <h4>Liver</h4>
      <NumberField bind:value={$state.ast} label="AST"/>
      <NumberField bind:value={$state.alt} label="ALT"/>
      <h4>Kidneys</h4>
      <NumberField bind:value={$state.creatine} label="Creatine"/>
      <NumberField bind:value={$state.uracid} label="Uric Acid"/>
      

     
    </div> <!---content-->
  </div><!-- card-content-->
</div><!-- card-->

