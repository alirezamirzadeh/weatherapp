<script>
// @ts-nocheck
import Card from "../lib/Card.svelte";
import {cities} from '../data/index';
import WeatherSearch from "../lib/WeatherSearch.svelte";

</script>

<main>

  <WeatherSearch />

  <div class="box__card" >
      {#each cities as {id,city} (id)}
      <Card {city}  {id} />
      
      {/each}
  </div>
</main>

<style>
  main {
    width: min(90%,800px);
    margin-inline: auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

  }
.box__card{
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

}


</style>
