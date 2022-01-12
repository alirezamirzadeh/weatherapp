<script>
// @ts-nocheck

    import {weatherData} from '../stores/weather';
    let nameVideo = ''

$: switch ($weatherData.weather[0].icon) {
        case '01d':
           nameVideo = 'Clouds'
        break
        case '01n':
           nameVideo = 'Moon'
           break
        case '02d':
           nameVideo = 'CloudAndSky'
           break
        case '02n':
           nameVideo = 'MoonAndCloud'
           break
        case '03d':
           nameVideo = 'CloudAndSky'
           break
        case '03n':
           nameVideo = 'MoonAndCloud'
           break
        case '04d':
           nameVideo = 'CloudAndSky'
           break
        case '04n':
           nameVideo = 'MoonAndCloud'
           break
        case '09d':
           nameVideo = 'Rain'
           break
        case '09n':
           nameVideo = 'Rain'
           break
        case '10d':
           nameVideo = 'Rain'
           break
        case '10n':
           nameVideo = 'Rain'
           break
        case '11d':
           nameVideo = 'CloudAndSky'
           break
        case '11n':
           nameVideo = 'MoonAndCloud'
           break
        case '13d':
           nameVideo = 'CloudAndSky'
           break
        case '13n':
           nameVideo = 'MoonAndCloud'
           break
        case '50d':
           nameVideo = 'CloudAndSky'
           break
        case '50n':
           nameVideo = 'MoonAndCloud'
           default:
           nameVideo = 'Clouds'

}
   

 

</script>


<video
autoPlay
loop
muted
playsInline
src="src/assets/videos/{nameVideo}.webm">
Your browser does not support the video tag.
</video>
<div>
</div>


<style>
         video {
               position: fixed;
               right: 0;
               bottom: 0;
               min-width: 100%; 
               min-height: 100%;
               z-index: -99;
            
         }
         div {
            position: fixed;
            bottom: 0;
            right: 0;

            background: rgba(0, 0, 0, .4);
            width: 100%;
            height: 100%;
               z-index: -1;

         }
</style>