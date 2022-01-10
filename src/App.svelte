<script>
import HomePage from './pages/HomePage.svelte';
import {Router,Route} from 'svelte-navigator';
import WeatherPage from './pages/WeatherPage.svelte';

</script>


<Router>

  <Route path="/" component={WeatherPage} />

  <Route path="/weather" component={HomePage}/>

</Router>