<script>
    export let data;
</script>

<h5>    
    {new Date(data.dt * 1000).getHours()}
    <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="">
{Math.round(data.temp)}
</h5>