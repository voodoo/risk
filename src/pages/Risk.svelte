<script>
  import { state } from "../state.js";
  import Score from "../components/Score.svelte";
  import Chip from "../components/Chip.svelte";

  let riskWaistHeight,
    riskWaistHeightScore,
    riskBmi,
    riskBmiScore,
    tgHdl,
    tgHdlScore,
    remnant,
    remnantScore = null;
  let urlKeys = [];
  $state.scores = [];
  $: {
    $state.scores = [];
    if ($state.waist && $state.height) {
      riskWaistHeight = ($state.waist / $state.height).toFixed(2);
      if (riskWaistHeight < 0.51) {
        riskWaistHeightScore = "Low";
      } else if (riskWaistHeight < 0.61) {
        riskWaistHeightScore = "Medium";
      } else {
        riskWaistHeightScore = "High";
      }
      $state.scores.push(riskWaistHeightScore);
    }
    if ($state.height && $state.weight) {
      riskBmi = $state.weight / ($state.height * $state.height);
      riskBmi = riskBmi * 703;
      riskBmi = riskBmi.toFixed(2);

      if (riskBmi < 25) {
        riskBmiScore = "Low";
      } else if (riskBmi < 30) {
        riskBmiScore = "Medium";
      } else {
        riskBmiScore = "High";
      }
      $state.scores.push(riskBmiScore);
    }

    if ($state.tg && $state.hdl) {
      tgHdl = ($state.tg / $state.hdl).toFixed(2);
      tgHdlScore = "Low";
      $state.scores.push(tgHdlScore);
    }
    if ($state.chol && $state.hdl ** $state.ldl) {
      remnant = $state.chol - $state.hdl - $state.ldl;
      remnantScore = "Medium";
      $state.scores.push(remnantScore);
    }

    urlKeys = [];
    Object.keys($state).forEach(function(element) {
      if ($state[element] != null && element != "scores")
        urlKeys.push(element + "=" + $state[element]);
    });
    //console.log(urlKeys);
    window.history.replaceState({}, "Title", "?" + urlKeys.join("&"));
  }
</script>

<style>
  p.score {
    float: right;
  }
</style>

<h1 class="title">Risk</h1>
<h3 class="subtitle">Copy the url above to save or share</h3>

<div class="card">
  <header class="card-header">
    <p class="card-header-title">Weight</p>
  </header>
  <div class="card-content">
    <div class="content">
      {#if riskWaistHeightScore}
        <h3>Waist to Height ratio</h3>
        <p class="score">
          Score =
          <Score value={riskWaistHeightScore} />
        </p>
        <p>
          Ratio = (waist {$state.waist}/height {$state.height})
          <b>{riskWaistHeight}</b>
        </p>
        <ul>
          <li>Low risk if less than .5.</li>
          <li>Medium risk if between than .5 and .6</li>
          <li>High risk if greater than .6</li>
        </ul>
      {/if}
      {#if riskBmiScore}
        <h3>BMI</h3>
        <p class="score">
          Score =
          <Score value={riskBmiScore} />
        </p>
        <p>
          Ratio = (weight {$state.weight}/(height {$state.height} * height {$state.height}
          )) * 703) =
          <b>{riskBmi}</b>
        </p>
        <ul>
          <li>Low risk if less than 25</li>
          <li>Medium risk if between than 30</li>
          <li>High risk if greater than 30</li>
        </ul>
      {/if}
    </div>
  </div>
</div>
<hr />

<div class="card">
  <header class="card-header">
    <p class="card-header-title">Blood</p>
  </header>
  <div class="card-content">
    <div class="content">
      {#if tgHdlScore}
        <h3>Trig/HDL ratio</h3>
        <p class="score">
          Score =
          <Score value={tgHdlScore} />
        </p>
        <p>
          Ratio = (trig {$state.tg} / hdl {$state.hdl})
          <b>{tgHdl}</b>
        </p>
        <ul>
          <li>Low risk if less than .5.</li>
          <li>Medium risk if between than .5 and .6</li>
          <li>High risk if greater than .6</li>
        </ul>
      {/if}
      {#if remnantScore}
        <h3>Remnant Cholesterol</h3>
        <p class="score">
          Score =
          <Score value={remnantScore} />
        </p>
        <p>
          Ratio = (total cholesterol {$state.chol} - LDL {$state.ldl} - HDL {$state.hdl})
          =
          <b>{remnant}</b>
        </p>
        <ul>
          <li>Low risk if less than 25</li>
          <li>Medium risk if between than 30</li>
          <li>High risk if greater than 30</li>
        </ul>
      {/if}
    </div>
  </div>
</div>
