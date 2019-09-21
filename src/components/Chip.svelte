<script>
  export let count = null;
  import { sineOut } from "svelte/easing";

  let duration = 250;
  let delay = duration;

  let delayZero = 0;

  export const fadeIn = _ => ({
    duration,
    delay,
    easing: sineOut,
    css: t => `opacity: ${t}`
  });
  export const fadeOut = _ => ({
    duration,
    delayZero,
    easing: sineOut,
    css: t => `opacity: ${t}`
  });
</script>

<style>
  .chip {
    border-radius: 50%;
    width: 20px;
    height: 20px;
    padding: 2px;
    padding-top: 0;
    background: firebrick;
    border: 2px solid white;
    color: white;
    text-align: center;
    font-size: 12px;
    margin-left: 4px;
    font-weight: bold;
  }
</style>

<div class="chip" in:fadeIn out:fadeOut>{count}</div>
