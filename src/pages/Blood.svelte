<script>
  import { state } from "../state.js";
</script>

<div class="card">
  <header class="card-header">
    <p class="card-header-title">Weight</p>
  </header>
  <div class="card-content">
    <div class="content">

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Triglycerides</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="field">
              <p class="control">
                <input
                  class="input is-primary"
                  bind:value={$state.tg}
                  type="number"
                  placeholder="Your Triglycerides" />
              </p>
            </div>
            <p class="help">Your Triglycerides</p>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">HDL</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="field">
              <p class="control">
                <input
                  class="input is-primary"
                  bind:value={$state.hdl}
                  type="number"
                  placeholder="Your HDL" />
              </p>
            </div>
            <p class="help">Your HDL</p>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">LDL</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="field">
              <p class="control">
                <input
                  class="input is-primary"
                  bind:value={$state.ldl}
                  type="number"
                  placeholder="Your LDL" />
              </p>
            </div>
            <p class="help">Your LDL</p>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Total Cholesterol</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="field">
              <p class="control">
                <input
                  class="input is-primary"
                  bind:value={$state.chol}
                  type="number"
                  placeholder="Your total Cholesterol" />
              </p>
            </div>
            <p class="help">Your total Cholesterol</p>
          </div>
        </div>
      </div>

      <!---content-->
    </div>
  </div>
  <!-- card-content-->
</div>
<!-- card-->
