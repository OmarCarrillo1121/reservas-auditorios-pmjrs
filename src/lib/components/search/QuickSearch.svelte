<script>
    import { goto } from "$app/navigation";
    function navigateTo(route) {
        goto(route);
    }
</script>
<!-- AQUI INICIA EL HTML -->
    <br>
    <hr>
    <div class="grid-primera-tabla">
  <div class="celda">Auditorio:</div>
  <div class="celda">
    <div class="desplegable"> 
      <button class="boton">Seleccionar auditorio</button>
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
    <div class="desplegable"> 
      <button class="boton" on:click={() => navigateTo('/user/dashboard')}>Consultar</button>
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
</div>
    <hr>
    <br>
    <hr>
<div class="grid-primera-tabla">
  <div class="celda mensaje-combinado" style="grid-column: 1 / span 4;">
    Fecha y hora de reservación no disponible
  </div>
  
  <div class="celda"></div>
  <div class="celda">
    <div class="desplegable"> 
      <button class="boton" on:click={() => navigateTo('/user/dashboard')}>Elegir otra fecha</button>
    </div>
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

h1 {
  font-size: 40px;
  font-family: var(--font-title);
}

.boton {
  background-color: var(--color-primary);  
  color: white;
  border-radius: 16px;
  padding: 16px 24px;
  margin: 16px;
  cursor: pointer;
  min-width: 48px;
  min-height: 48px;
  text-align: left;
  border: none;
  font-family: var(--font-body);
}

.boton:hover {
  background-color: var(--color-primary-hover);
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
  h1 {
    font-size: 32px;
  }
  
  .boton {
    font-size: 16px;
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