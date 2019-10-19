<script>
  import { state } from "../state.js";
  import TextField from "../components/TextField.svelte";
  import NumberField from "../components/NumberField.svelte";
  import WaistHeight from "../risks/WaistHeight.svelte";
</script>

<div class="card">
  <!-- <header class="card-header">
    <p class="card-header-title">Profile</p>
  </header> -->
  <div class="card-content">
    <div class="content">

      <TextField bind:value={$state.name} label="Nick Name"/>
      <NumberField bind:value={$state.age} label="Age"/>
      <TextField bind:value={$state.diet} label="Diet" help="e.g. Keto, Low carb, Standard"/>
      <NumberField bind:value={$state.temp} label="Basal Temperature"/>
      <NumberField bind:value={$state.waist} label="Waist"/>
      <NumberField bind:value={$state.height} label="Height (inches)" help="eg 5 foot is 60 inches" />
      {#if $state.waist && $state.height}
        <WaistHeight waist={$state.waist} height={$state.height}/>  
      {/if} 

      <NumberField bind:value={$state.weight} label="Weight (lbs)"/>

      <NumberField bind:value={$state.goal_weight} label="Goal Weight" help="The weight you would like to get up/down to"/>
   
    </div> <!---content-->
  </div><!-- card-content-->
</div><!-- card-->

