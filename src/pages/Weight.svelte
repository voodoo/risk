<script>
  //export let weight = null;
  import { state } from "../state.js";
  //import Field from "../components/Field.svelte";
</script>

<div class="card">
  <header class="card-header">
    <p class="card-header-title">Weight</p>
  </header>
  <div class="card-content">
    <div class="content">
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Waist</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="field">
              <p class="control">
                <input
                  class="input is-primary"
                  bind:value={$state.waist}
                  type="number"
                  placeholder="Waist size" />
              </p>
            </div>
            <p class="help">Your waist size</p>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Height</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="field">
              <p class="control">
                <input
                  class="input is-primary"
                  bind:value={$state.height}
                  type="number"
                  placeholder="Your height" />
              </p>
            </div>
            <p class="help">Your height</p>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Weight</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="field">
              <p class="control">
                <input
                  class="input is-primary"
                  bind:value={$state.weight}
                  type="number"
                  placeholder="Your weight in pounds" />
              </p>
            </div>
            <p class="help">Your weight in pounds</p>
          </div>
        </div>
      </div>
    </div>
    <!---content-->
  </div>
  <!-- card-content-->
  <!-- <footer class="card-footer">
    <a href="#" class="card-footer-item">Save</a>
    <a href="#" class="card-footer-item">Edit</a>
    <a href="#" class="card-footer-item">Delete</a>
    <a href="#" class="card-footer-item">Details</a>
  </footer> -->
</div>
<!-- card-->
