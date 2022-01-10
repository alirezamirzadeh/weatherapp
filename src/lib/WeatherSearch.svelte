<script>
import {createEventDispatcher} from 'svelte'

const dispatch =createEventDispatcher()

let value = '';

const handleSubmit = () => {
    console.log(value);
    dispatch('city',value)
}

</script>

<form on:submit|preventDefault={handleSubmit}>

    <input type="text" bind:value placeholder="یک شهر وارد کن"/>
    <button type="submit">جستجو</button>

</form>