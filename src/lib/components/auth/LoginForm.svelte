<html lang="en">
<script>
    import { goto } from "$app/navigation";
    import auditoriumsList from "$lib/data/auditoriums.js";
    function navigateTo(route) {
        goto(route);
    }
</script>
 
<body >
  <head>
  <title>LoginForm works!</title>
    <style type="text/css">

     .contenedor { 
      display: flex;
      justify-content: center;
      gap: 300px;
      height: 600px;
      align-items: center;
      border: 3px solid #000;   
     }

     .imagen-container img {
      display: flex;
      max-width: 100%;
      height: auto;
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
 </head>
<div class="contenedor">
  <div class="imagen-container">
       <img src="imagen">
   </div>
   <div class="formulario-container">
     <form action="#"> 
       <form action="/action_page.php">  
        <br>
        <br>
        <br>
       <h4>Iniciar sesión</h4>
       <label for="fname">Usuario</label>
       <br>
     	 <input type="text" value="">
       <br>
       <label>Contraseña</label>
       <br>
       <input type="text" value="">
       <br>
       <br>
       <button>Ingresar</button>
       <br>
       <br>
       <br>
       <label>Olvidé mi contraseña</label>
     </form>
     </form>
    </div>
</div>           

  </body>
</html>
