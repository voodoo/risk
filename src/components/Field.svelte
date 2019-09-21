<script>
  export let label = "Label";
  export let field = null;
  export let help = "help";
  //import { state } from "../state.js";
</script>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">{label}</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="field">
        <p class="control">
          <slot />
        </p>
      </div>
      <p class="help">{label}</p>
    </div>
  </div>
</div>
