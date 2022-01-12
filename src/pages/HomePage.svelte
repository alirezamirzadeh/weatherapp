<script>
// @ts-nocheck
import Card from "../lib/Card.svelte";
import {cities} from '../utils/index';

</script>


<svelte:head>
    <title>اب و هوای تمام شهرای دنیا</title>
</svelte:head>


<main>


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
  min-height: 100vh;
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
