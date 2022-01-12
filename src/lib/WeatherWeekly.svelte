<script>
import {week} from '../utils/index'
export let data;
</script>


<div class="weekly">
        <p>{week[new Date(data.dt *1000).getDay()]}</p> 
        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} height="100px" width="100px" alt="اب و هوای هفتگی">

<div>
        <span class="min">º{Math.round(data.temp.min)}</span>
        <span>º{Math.round(data.temp.max)}</span>
</div>

</div>



<style>
    .weekly {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        font-weight: 600;
        
    }
    .min {
        opacity: .7;
        margin-right: .5rem;
    }

    

</style>