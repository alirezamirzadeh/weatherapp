import { writable } from "svelte/store";

const key = 'f29547a948f6a76c7f3c4d9fa0fceb0c';
const url = 'https://api.openweathermap.org/data/2.5/'


export const weather = () => {

  const weatherData = writable([]);
  const loading = writable(false);
  const error = writable(false);
  const hoursData = writable([])
  const weekData = writable([])


  const get = async (city) => {

    loading.set(true)
    error.set(false)

    try {
        
      const res = await( await fetch(`${url}weather?q=${city}&appid=${key}&units=metric&lang=fa`)).json();

      const res2= await( await fetch(`${url}onecall?lat=${res.coord.lat}&lon=${res.coord.lon}&exclude=minutely,alert&units=metric&lang=fa&appid=${key}`)).json();
       
      weatherData.set(res)
      hoursData.set(res2.hourly.slice(0, 24))
      weekData.set(res2.daily.slice(0,7))
      console.log(res);


    } catch (e) {
        console.log(e);
        error.set(e)
    }

    loading.set(false)

  };

  return {weatherData,hoursData,weekData,loading,error,get}
};
