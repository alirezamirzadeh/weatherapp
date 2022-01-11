<script>
export let data;
</script>


<h6>{new Date(data.sunrise * 1000).getHours()}</h6>
<h6>{new Date(data.sunset * 1000).getHours()}</h6>
    {Math.round(data.temp.min)}
    {Math.round(data.temp.max)}
    <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="">

    {data.weather[0].description}
    {new Date(data.dt *1000).getDay()}