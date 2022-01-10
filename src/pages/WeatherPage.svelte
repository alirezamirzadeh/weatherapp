<script>
// @ts-nocheck

import WeatherSearch from '../lib/WeatherSearch.svelte';
import {weather} from '../stores/weather';

const {weatherData,hoursData,weekData, loading,error,get}= weather();

const handleWeather = (e) => {
    get(e.detail)
    
}
</script>

<WeatherSearch on:city={handleWeather}/>

{#if $loading}

    ..loading

{:else if $error}

    error

{:else if $weatherData.cod === 200}


<div>
    {new Date($weatherData.dt * 1000).getHours()}
 {Math.round($weatherData.main.temp)}
<h6>{$weatherData.sys.sunrise}</h6>
{$weatherData.sys.sunset}
{$weatherData.weather[0].description}
<p>{$weatherData.weather[0].icon}
</p>{$weatherData.name}
</div>
<hr />

{#each $weekData as data,i (i)}

    <h6>{data.sunrise}</h6>
    {data.sunset}
    {Math.round(data.temp.min)}
    {Math.round(data.temp.max)}
    {data.weather[0].description}
    {data.weather[0].icon}
    {new Date(data.dt *1000).getDay()}

{/each} 

{#each $hoursData as data,i (i)}
<h5>    
    {new Date(data.dt * 1000).getHours()}
    {data.weather[0].icon}
{Math.round(data.temp)}
</h5>
{/each}




{/if}