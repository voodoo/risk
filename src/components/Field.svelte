<script>
  export let label = null
  export let value = null
</script>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">{label}</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="field">
        <p class="control">
          <input
            class="input is-primary"
            bind:value={value}
            type="number"
            placeholder={label} />
        </p>
      </div>
      <p class="help">{label}</p>
    </div>
  </div>
</div>
