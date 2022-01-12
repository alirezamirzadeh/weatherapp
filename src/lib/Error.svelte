<script>
import { navigate } from "svelte-navigator";
import { onDestroy } from 'svelte';

const setTime =setTimeout(() => navigate('/'), 1500);

onDestroy(() => clearInterval(setTime));

</script>


<div>
    <p>شهر مورد نظر شما پیدا نشد
    </p>
</div>


<style>
div {
    margin-top: 3rem;
    height: 100vh;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
}
</style>