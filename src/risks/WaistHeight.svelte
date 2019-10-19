<script>
  export let waist = null
  export let height = null
  let risk  = null
  $: risk = (waist / height).toFixed(2)
</script>
<div class="risk">
    <div class="riskLabel">
      <b>Waist to Height ratio</b>
      </div>
    <div class="riskScore">
        <!-- <p class="score">
            Score =
            
        </p> -->
        <p>
            Ratio = (waist {waist}/height {height})
            <b>{risk}</b>
        </p>
        <ul>
            <li>Low risk if less than .51.</li>
            <li>Medium risk if between than .51 and .6</li>
            <li>High risk if greater than .6</li>
        </ul>    
    </div>
</div>



<style>
.risk{display:flex; border: 1px solid #ccc;padding: 12px;margin: 12px;margin-right:0}
.risk .riskLabel{flex: 1}
.risk .riskScore{flex: 4}
</style>