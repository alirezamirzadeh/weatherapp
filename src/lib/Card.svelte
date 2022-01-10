<script>
    import {Link} from 'svelte-navigator'

	export let city;
</script>
    
<Link to={`/:${city}`}>
    <img src="src/assets/svelte.png" alt="city iran" height="200px" width="200px">
    <span>{city}</span>
</Link>