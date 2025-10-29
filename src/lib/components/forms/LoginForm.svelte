<script>
    import { goto } from "$app/navigation";
    function navigateTo(route) {
        goto(route);
    }
</script>

<!-- AQUI INICIA EL HTML -->
<!-- <div class="imagen-container">
        <img src="imagen" alt=''/>
    </div> -->
<!-- <div class="componente-container">
    <h4>Iniciar sesión</h4>
    <form class="formulario-container">
        <label for="Usuario">Usuario</label>
        <input id="Usuario" type="text" value="" />
        <label for="Contraseña">Contraseña</label>
        <input id="Contraseña" type="text" value="" />
        <button onclick={() => navigateTo("/reservas")}>Ingresar</button>
        <label for="">Olvidé mi contraseña</label>
    </form>
</div> -->
<div class="contenedor">
    <div class="formulario-container">
     <form action="#"> 
        <br>
        <br>
        <br>
       <h4>Iniciar sesión</h4>
       <label for="fname">Usuario</label>
       <br>
     	 <input type="text" value="">
       <br>
       <label for="password">Contraseña</label>
       <br>
       <input id="password" type="text" value="">
       <br>
       <br>
       <button>Ingresar</button>
       <br>
       <br>
       <br>
       <p>Olvidé mi contraseña</p>
     </form>
    </div>
</div>   

<!-- AQUI TERMINA EL HTML -->

<style>
    /* .contenedor {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 300px;
        height: 600px;
        align-items: center;
        border: 3px solid red;
    } */

    /* .imagen-container img {
        display: flex;
        max-width: 100%;
        height: auto;
    } */

    /* .componente-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        border: 2px solid red;
    }

    .formulario-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 2px solid #ccc;
    } */

    .contenedor { 
      display: flex;
      justify-content: center;
      gap: 300px;
      height: 600px;
      align-items: center;
      border: 3px solid #000;
     }

     .formulario-container {
      width: 100%;
      text-align: center;
      border: 2px solid #ccc;
      height: 400px;
      margin: 100px 0px;
     }

    /*.cajitaIS {
     position:absolute;
     top:0px;
     bottom:0;
     right:0;
     left:0;
     border:3px solid #ccc;*/
</style>
