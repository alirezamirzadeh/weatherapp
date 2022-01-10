<script>
import Card from "../lib/Card.svelte";
import {cities} from '../data/index';

</script>

<main>


  <div>
      {#each cities as {id,city} (id)}
      
      <Card {city} />

      {/each}
  </div>
</main>
