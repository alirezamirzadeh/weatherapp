<script>
// @ts-nocheck

import { weatherData } from "../stores/weather";


</script>

<div>
    {new Date($weatherData.dt * 1000).getHours()}
 {Math.round($weatherData.main.temp)}
<h6>{new Date($weatherData.sys.sunrise * 1000).getHours()}</h6>
<h6>{new Date($weatherData.sys.sunset * 1000).getHours()}</h6>

{$weatherData.weather[0].description}
<img src={`https://openweathermap.org/img/wn/${$weatherData.weather[0].icon}@2x.png`} alt="">
{$weatherData.name}
</div>