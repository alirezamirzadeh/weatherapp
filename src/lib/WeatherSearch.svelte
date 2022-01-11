<script>
	import { useNavigate } from "svelte-navigator";
    import {getweather,weatherData} from '../stores/weather';


const navigate = useNavigate();

let value = '';

const handleSubmit = async() => {
    navigate(`/${value}`)

    getweather(value)
    console.log('xcc',$weatherData);

}

</script>






<form on:submit|preventDefault={handleSubmit}>
    <button type="submit">جستجو</button>

    <input type="text" bind:value placeholder="یک شهر وارد کن"/>
</form>






<style>
form {
width: 100%;
margin: 0 auto;
display: flex;
height: 3rem;
justify-content: space-between;

}

input {
width: 80%;
border-radius: .5rem;
padding-right: 1rem;
text-decoration: right;
direction: rtl;
border: 2px solid #111;
opacity: .5;
font-family: inherit;
box-shadow: 0 1rem 1.45rem rgba(0, 0, 0, 0.2);
}
button {
border-radius: .5rem;
    width: 17%;
    border: 0;
    background-color: #283593;
    color: #fff;
    font-size: 1.1rem;
    font-family: inherit;
    font-weight: 600;
    cursor: pointer;
    
}

input:focus {
    outline:none;
    border: 2px solid #283593;opacity: .7;

}
</style>