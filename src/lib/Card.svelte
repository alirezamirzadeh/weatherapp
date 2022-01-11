<script>
    import {Link} from 'svelte-navigator';
    import {fly} from 'svelte/transition';


	export let city;
    export let id;
</script>

<Link to={`/${city}`} class="card">
   <div class="city__card" transition:fly={{delay: id*300}} >

        <img src="src/assets/images/{city}.svg" alt="city iran" height="100%" width="100%">
        <span>{city}</span>
    
   </div> 
</Link>




<style>
    :global(.card){
        flex: 1;
        margin-top: 2rem;
 display: inline-flex;

    }
:global(.city__card){
   overflow: hidden;
   border: 2px solid #000;
   border-radius: 1.5rem;
    z-index: 10;
    height: 100%;
    width:100%;
    position: relative;

}

:global(.city__card):hover {
    background-color: #4FC3F7;
    border: 2px solid #4FC3F7;
    transition: .6s ease-in-out  ;


}


:global(.city__card):hover span{
    transform: translateX(0);


}
span {
    position: absolute;
    text-align: center;
    color: #fff;
    font-weight: 700;
    font-size: 1.5rem;
    
    right: 0;
    bottom: 0;
    transform: translateX(150%);
    background: linear-gradient(transparent,#1A237E);
    width: 100%;
    height: 35%;
    transition: 1s ease-in-out  ;
    border-radius:  0 1rem 1rem;
    
}
</style>