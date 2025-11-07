<script>
    import { goto } from "$app/navigation";
    import { navigateTo } from "$lib/utils/navigate.utils";
    
    function handleNavigate(route){
      goto(route);
    }
    export let botonId = ""
    export let botonType = ""
    export let tipo = ""
    export let textoBoton = "";
    export let accion = null;
    $: claseBoton = `boton boton-${tipo}`;
</script>

<!-- AQUI INICIA EL HTML -->
<br>
<hr>
<div class="grid-primera-tabla">
  <div class="celda">Auditorio:</div>
  <div class="celda">
    <div class="desplegable"> 
      <button class="boton boton-primario">Seleccionar auditorio</button>
      <div class="links">
        <a href="#">Auditorio Maestro Jose Antonio Echenique García</a>
        <a href="#">Auditorio Alfonso Ochoa Ravisé</a>
        <a href="#">Sala de profesores</a>
      </div>
    </div>
  </div>
  
  <div class="celda">Inicio:</div>
  <div class="celda">
    <input type="time" value="10:00">
  </div>
  
  <div class="celda">
    <div class="linea-vertical"></div>
  </div>
  <div class="celda">
  <!--<button class="boton" on:click={() => navigateTo('/user/dashboard')}>Consultar</button>-->
    <button class="boton boton-info" on:click={() => handleNavigate('/user/dashboard')}>
      Consultar
    </button>
    </div>
  </div>
  
  <div class="celda">Fecha del evento:</div>
  <div class="celda">
    <input type="date" value="2025-03-30" min="2021-04-30">
  </div>

  <div class="celda">Fin:</div>
  <div class="celda">
    <input type="time" value="10:00">
  </div>
  <div class="celda"></div>
  <div class="celda"></div>
    <hr>
    <br>
    <hr>
<div class="grid-primera-tabla">
  <div class="celda mensaje-combinado" style="grid-column: 1 / span 4;">
    Fecha y hora de reservación no disponible
  </div>
  
  <div class="celda"></div>
  <div class="celda">

    <button class="boton boton-secundario" on:click={() => handleNavigate('/user/dashboard')}>
      Elegir otra fecha
    </button>
    <!--<button class="boton" on:click={() => navigateTo('/user/dashboard')}>Elegir otra fecha</button> -->
    </div>
  </div>
<!-- AQUI TERMINA EL HTML -->
<style>
.grid-primera-tabla {
  display: grid;
  grid-template-columns: auto 1fr auto 1fr auto 1fr;
  gap: 10px;
  width: 100%;
}

.mensaje-combinado {
  grid-column: 1 / span 4; 
  justify-content: flex-start;
  padding-left: 0; 
}

.celda {
  padding: 10px;
  display: flex;
  align-items: center;
  min-height: 60px;
  font-family: var(--font-body); 
}
.boton {
  border-radius: 0.5rem;
  padding: 0.75rem 2rem;
  cursor: pointer;
  transition: background-color 0.2s;
  border: none;
  font-weight: 600;
  font-family: var(--font-body);
}
.boton-primario {
  background-color: var(--color-boton, #007262);
  color: var(--color-fondo, white);
}
.boton-primario:hover { 
  background-color: #1B7B5C; 
}
.boton-secundario {
  background-color: var(--color-fondo, #F5FAFD);
  color: var(--color-texto-primario, #1a1a1a);
  border: 1px solid var(--color-primary, #007262);
}
.boton-secundario:hover { 
  background-color: var(--color-fondo-tarjeta, #e9ecef); 
}
.boton-info {
  background-color: var(--color-info, #17a2b8);
  color: var(--color-fondo, white);
}

.boton-info:hover { 
  background-color: #138496; 
}
.desplegable {
  position: relative;
  display: inline-block;
}
.links {
  display: none;  
  position: absolute;
  background-color: var(--color-bg-cards);
  width: 300px;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
  z-index: 1000;
  border-radius: 0.5rem;
}
.links a {
  text-decoration: none;
  color: var(--color-text-primary);
  display: block;
  padding: 13px;
  border-bottom: 1px solid var(--color-primary-25);
  font-family: var(--font-body); 
}
.links a:hover {
  background-color: var(--color-primary-25);
}
.desplegable:hover .links {
  display: block;
}
.linea-vertical {
  border-left: 2px solid var(--color-primary);
  height: 80px;
  margin: 0 15px;
}
input[type="time"], input[type="date"] {
  padding: 10px;
  border: 1px solid var(--color-primary-50);
  border-radius: 4px;
  font-family: var(--font-body);
  width: 100%; 
}
@media (max-width: 768px) {  
  .boton {
    font-size: 16px;
    padding: 0.6rem 1.5rem;
  }
  .celda {
    font-size: 16px;
    min-height: auto;
    justify-content: flex-start;
  }
  .links a {
    font-size: 16px;
  }
  
  input[type="time"], input[type="date"] {
    font-size: 16px;
  }
  .grid-primera-tabla {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  .linea-vertical {
    display: none;
  }
}
</style>