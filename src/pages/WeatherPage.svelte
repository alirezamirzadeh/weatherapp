<script>
// @ts-nocheck
import {onMount} from 'svelte'
import WeatherSearch from '../lib/WeatherSearch.svelte';
import {weatherData,getweather,hoursData,weekData, loading,error} from '../stores/weather';
import { useParams } from "svelte-navigator";
import WeatherWeekly from '../lib/WeatherWeekly.svelte';
import WeatherHours from '../lib/WeatherHours.svelte';

const params = useParams();

onMount(() => {
    getweather($params.city)
})

</script>

<svelte:head>
    <title>اب و هوای {$params.city}</title>
</svelte:head>

<WeatherSearch />

{#if $loading}

    ..loading

{:else if $error}

    error

{:else if $weatherData.cod === 200}


<hr />

{#each $weekData as data,i (i)}

<WeatherWeekly {data} />

{/each} 

{#each $hoursData as data,i (i)}
<WeatherHours {data}/>
{/each}




{/if}