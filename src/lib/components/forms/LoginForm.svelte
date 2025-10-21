<script>
    import { goto } from "$app/navigation";
    function navigateTo(route) {
        goto(route);
    }
</script>

<!-- AQUI INICIA EL HTML -->
<span>LoginForm works!</span>
<!-- AQUI TERMINA EL HTML -->
<button onclick={()=> navigateTo('/user/dashboard')}>Ingresar</button>

<style>
    
</style>
