<script>
// @ts-nocheck

import { weatherData } from "../stores/weather";

console.log($weatherData);

</script>

<div class="today">
    <p>{$weatherData.name}</p>


<img src={`https://openweathermap.org/img/wn/${$weatherData.weather[0].icon}@2x.png`} height="150px" width="150px" alt="">
<p class="description">{$weatherData.weather[0].description}
</p>
<p> {Math.round($weatherData.main.temp)}
</p>
</div>

<style>
    .today {
        margin-top: 3rem;
        text-align: center;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-evenly;
        color: blue;
        font-size: 1.5rem;
        font-weight: 600;
    }
    .description {
        font-size: 1rem;

    }
</style>


