<script>
// @ts-nocheck
import {onMount} from 'svelte'
import WeatherSearch from '../lib/WeatherSearch.svelte';
import {weatherData,getweather,hoursData,weekData, loading,error} from '../stores/weather';
import { useParams } from "svelte-navigator";
import WeatherWeekly from '../lib/WeatherWeekly.svelte';
import WeatherHours from '../lib/WeatherHours.svelte';

import { fadeIn, fadeOut } from "../lib/PageFade";
import WeatherToday from '../lib/WeatherToday.svelte';




const params = useParams();

onMount(() => {
    getweather($params.city)
})

</script>

<svelte:head>
    <title>اب و هوای {$params.city}</title>
</svelte:head>


<main in:fadeIn out:fadeOut>

    <WeatherSearch />

    {#if $loading}

        ..loading

    {:else if $error}

        error

    {:else if $weatherData.cod === 200}

    <WeatherToday />


    <div class="box__hours">
        {#each $hoursData as data,i (i)}

            <WeatherHours {data}/>

        {/each}

    </div>


    <div class="box__weekly">

        {#each $weekData as data,i (i)}

        <WeatherWeekly {data} />

        {/each} 

    </div>

    {/if}

</main>



<style>
    main {
  width: min(90%,800px);
  margin-inline:  auto;
  margin-top: 5rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

}

.box__weekly {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;

}

.box__hours {
    display: flex;
    gap: 1rem;

    margin-top: 2rem;


}
</style>


