<script>
import { navigate } from "svelte-navigator";
import {getweather,weatherData} from '../stores/weather';

let value = '';

const handleSubmit = async () => {
    navigate(`/${value}`)

    getweather(value)

}

</script>






<form on:submit|preventDefault={handleSubmit}>
    <input type="text" bind:value placeholder="یک شهر وارد کن"/>
    <button type="submit">جستجو</button>

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
width: 78%;
border-radius: .5rem;
padding-right: 1rem;
text-decoration: right;
border: 0;
color: inherit;
font-size: 1.2rem;
font-family: inherit;
box-shadow: 0 1rem 1.45rem rgba(0, 0, 0, 0.2);
background: rgba(255, 255, 255, 0.2);
}
button {
border-radius: .5rem;
    width: 17%;
    border: 0;
    background-color: rgba(28, 35, 93, 0.4);
    color: #fff;
    font-size: 1.1rem;
    font-family: inherit;
    font-weight: 600;
    cursor: pointer;
    
}
button:hover {
    background-color: rgba(28, 35, 93, .8);

}
input:focus {
    outline:none;
    border: 3px solid #283593;opacity: .7;

}

@media  (max-width: 600px ){
    button{width: 30%;}
    input{width: 60%;}
}
</style>