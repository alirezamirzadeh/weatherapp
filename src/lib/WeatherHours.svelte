<script>
    export let data;
</script>

<div class="hours">    
{#if new Date(data.dt * 1000).getHours() < 10}0{/if}{new Date(data.dt * 1000).getHours()}:00
    <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} height="75px" width="75px" alt="24 ساعت">
{Math.round(data.temp)}º
</div>



<style>
.hours {
    text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
}
</style>