<script>
// @ts-nocheck

import { weatherData } from "../stores/weather";

console.log($weatherData);

</script>

<div class="today">
    <p>{$weatherData.name}</p>
    <img src={`https://openweathermap.org/img/wn/${$weatherData.weather[0].icon}@2x.png`} height="150px" width="150px" alt={$weatherData.name}>
    <p class="description">{$weatherData.weather[0].description}</p>
    <p> {Math.round($weatherData.main.temp)}</p>
</div>

<style>
    .today {
        margin-top: 3rem;
        text-align: center;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-evenly;
        font-size: 2rem;
        font-weight: 900;
        background-color: rgba(255, 255, 220, 0.2);
        border-radius: 1rem;
        min-width: 290px;
        margin-inline: auto;
        box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.2);
    }
    .description {
        font-size: 1.2rem;
        font-weight: 600;

    }
</style>


