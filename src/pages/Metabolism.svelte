<script>
  import { state } from "../state.js";
  import Field from "../components/Field.svelte";
</script>

<div class="card">
  <header class="card-header">
    <p class="card-header-title">Metabolism</p>
  </header>
  <div class="card-content">
    <div class="content">
      <Field label="TSH">
        <input
          class="input is-primary"
          bind:value={$state.tsh}
          type="number"
          placeholder="TSH" />
      </Field>
      <Field label="T3">
        <input
          class="input is-primary"
          bind:value={$state.t3}
          type="number"
          placeholder="T3" />
      </Field>
      <Field label="T4">
        <input
          class="input is-primary"
          bind:value={$state.t4}
          type="number"
          placeholder="T4" />
      </Field>
      <Field label="Basal Temperature">
        <input
          class="input is-primary"
          bind:value={$state.temp}
          type="number"
          placeholder="Basal Temperature" />
      </Field>

      <!---content-->
    </div>
  </div>
  <!-- card-content-->
</div>
<!-- card-->
