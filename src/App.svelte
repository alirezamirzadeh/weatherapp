<script>
import HomePage from './pages/HomePage.svelte';
import {Router,Route} from 'svelte-navigator';
import WeatherPage from './pages/WeatherPage.svelte';

</script>

<svelte:head>
  <link rel="stylesheet" href="src/assets/global.css">
</svelte:head>

<Router>

  <Route path="/" component={HomePage} />


  <Route path=":city" component={WeatherPage}>
  </Route>




</Router>


