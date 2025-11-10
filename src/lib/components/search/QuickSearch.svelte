<script>
    import { goto } from "$app/navigation";
    import { navigateTo } from "$lib/utils/navigate.utils";
    import Input from "$lib/components/input/InputField.svelte";
    
    function handleNavigate(route){
      goto(route);
    }

    let auditorioSeleccionado = '';
    let fechaEvento = '2025-03-30';
    let horaInicio = '09:00';
    let horaFin = '20:00';
    let mostrarError = false;

    // Límites de hora 
    function esHorarioValido(horaInicio, horaFin) {
        const inicio = convertirHoraANumero(horaInicio);
        const fin = convertirHoraANumero(horaFin);
        const horarioPermitido = inicio >= 9 && fin <= 20;
        const ordenCorrecto = fin > inicio;
        const duracionMinima = (fin - inicio) >= 1;
        return horarioPermitido && ordenCorrecto && duracionMinima;
    }

    function convertirHoraANumero(horaString) {
        const [horas, minutos] = horaString.split(':').map(Number);
        return horas + (minutos / 60);
    }

    // Límites de tiempo
    function getFechaMinima(){
      const hoy = new Date();
      const unaSemanaDespues = new Date();
      unaSemanaDespues.setDate(hoy.getDate() + 7);
      return unaSemanaDespues.toISOString().split('T')[0];
    }

    function getFechaMaxima(){
      const hoy = new Date();
      const seisMeses = new Date(hoy.setMonth(hoy.getMonth() + 6));
      return seisMeses.toISOString().split('T')[0]; 
    }

    // Límites de día
    function esDiaValido(fecha){
      const dia = new Date(fecha).getDay();
      return dia !== 0; 
    }

    function obtenerProximaFechaValida(){
      let proximaFecha = new Date(getFechaMinima());
      while (!esDiaValido(proximaFecha.toISOString().split('T')[0])){
        proximaFecha.setDate(proximaFecha.getDate() + 1);
      }
      return proximaFecha.toISOString().split('T')[0]; 
    }

    function validarFecha(fecha) {
      const fechaSel = new Date(fecha);
      const fechaMin = new Date(fechaMinima);
      const fechaMax = new Date(fechaMaxima);
      
     
      if (fechaSel < fechaMin || fechaSel > fechaMax) {
        fechaEvento = obtenerProximaFechaValida();
        return false;
      }
      
      
      if (!esDiaValido(fecha)) {
        fechaEvento = obtenerProximaFechaValida();
        return false;
      }
      
      return true;
    }

    function validarTodo() {
      const fechaValida = validarFecha(fechaEvento);
      const horarioValido = esHorarioValido(horaInicio, horaFin);
      
      if (!fechaValida || !horarioValido) {
        mostrarError = true;
        return false;
      }
      
      mostrarError = false;
      return true;
    }

    function corregirHorario() {
        const inicioNum = convertirHoraANumero(horaInicio);
        const finNum = convertirHoraANumero(horaFin);
        if (inicioNum < 9) {
            horaInicio = '09:00';
        }
        if (finNum > 20) {
            horaFin = '20:00';
        }
        if (finNum <= convertirHoraANumero(horaInicio)) {
            horaFin = '10:00'; 
        }
    }

    export let botonId = ""
    export let botonType = ""
    export let tipo = ""
    export let textoBoton = "";
    export let accion = null;

    $: claseBoton = `boton boton-${tipo}`;
    $: fechaMinima = getFechaMinima();
    $: fechaMaxima = getFechaMaxima();
    $: if (horaInicio && horaFin) {
        corregirHorario();
    }
    $: if (typeof fechaEvento === 'undefined'){
      fechaEvento = obtenerProximaFechaValida();
    }
</script>

<!-- AQUI INICIA EL HTML -->
<div class="formulario-reserva">
    <div class="fila-formulario">
        <div class="campo-grupo"> 
            <!-- svelte-ignore a11y_label_has_associated_control -->
            <label class="etiqueta">Auditorio:</label>
            <div class="desplegable">
                <button class="boton boton-primario" type="button">
                    {auditorioSeleccionado || 'Seleccionar auditorio'}
                </button>
                <div class="opciones-desplegable">
                    <a href="#" on:click|preventDefault={() => auditorioSeleccionado = 'Auditorio Maestro Jose Antonio Echenique García'}>
                        Auditorio Maestro Jose Antonio Echenique García
                    </a>
                    <a href="#" on:click|preventDefault={() => auditorioSeleccionado = 'Auditorio Alfonso Ochoa Ravisé'}>
                        Auditorio Alfonso Ochoa Ravisé
                    </a>
                    <a href="#" on:click|preventDefault={() => auditorioSeleccionado = 'Sala de profesores'}>
                        Sala de profesores
                    </a>
                </div>
            </div>
        </div>
        
         <div class="campo-grupo">
            <Input
                id="hora-inicio"
                type="time"
                label="Inicio:" 
                bind:value={horaInicio}
                />
        </div>
        
        <div class="campo-grupo accion-principal">
            <button class="boton boton-primario" on:click={() => {
                if (validarTodo()){
                  handleNavigate('user/dashboard');
                }
            }}>
                Consultar
            </button>
        </div>
    </div>
    
    <!-- Fila 2: Fecha evento | Fin | (vacío) -->
    <div class="fila-formulario">
        <div class="campo-grupo">
            <Input
              id="fecha-evento" 
                type="date"
                label="Fecha del evento"
                bind:value={fechaEvento}
                min={fechaMinima}
                max={fechaMaxima}
                on:change={() => validarFecha(fechaEvento)}
            />
        </div>
        <div class="campo-grupo">
            <Input 
              id="hora-fin"
                type="time"
                label="Fin:"
                bind:value={horaFin}
            />
        </div>
        <div class="campo-grupo"></div>
    </div>
    
    <div class="info-dias">*Reservación disponible de lunes a sabado. Importante: 1 semana de anticipación 
              como minimo*
    </div>

    {#if mostrarError}
    <div class="mensaje-error">
        <div class="contenido-error">
            <div class="texto-error">
                <span class="icono-advertencia">⚠️</span>
                Fecha y hora de reservación no disponible
            </div>
            <button class="boton boton-primario" on:click={() => {
                mostrarError = false;
                corregirHorario();
            }}>
                Elegir otra fecha
            </button>
        </div>
    </div>
    {/if}
</div>
      <!--<button class="boton boton-primario">Seleccionar auditorio</button>
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
  <div class="celda">-->
  <!--<button class="boton" on:click={() => navigateTo('/user/dashboard')}>Consultar</button>
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
    </button>-->
    <!--<button class="boton" on:click={() => navigateTo('/user/dashboard')}>Elegir otra fecha</button> -->
<!-- AQUI TERMINA EL HTML -->
<style>
.info-dias {
  font-family: var(--fuente-cuerpo);
  color: var(--color-texto-secundario);
  margin-top: 1rem;
  grid-column: 1/-1;
  text-align: center;
  padding: 0.75rem;
  background-color:var(--color-fondo-tarjeta);
  border-radius: 0.5rem;
  border: 1px solid var(--color-bordes);
}
.formulario-reserva {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: var(--color-fondo-tarjeta);
  border-radius: 0.5rem;
  border: 1px solid var(--color-bordes);
}    
.fila-formulario {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: end;
  gap: 1rem;
}    
.campo-grupo {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.accion-principal {
  justify-self: end;
}
.etiqueta {
  font-family: var(--fuente-cuerpo);
  font-weight: 500;
  color: var(--color-texto-primario);
}
.boton {
  border-radius: 0.5rem;
  padding: 0.75rem 2rem;
  cursor: pointer;
  transition: background-color 0.2s;
  border: none;
  font-weight: 600;
}
.boton-primario {
  background-color: var(--color-primario);
  color: var(--color-fondo);
}
.boton-primario:hover { 
  background-color: #1B7B5C; 
}
.boton-advertencia {
  background-color: var(--color-advertencia);
  color: var(--color-fondo);
}
.boton-advertencia:hover { 
  background-color: #e0a800; 
}
.desplegable {
  position: relative;
  display: block;
}
.opciones-desplegable {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: var(--color-fondo-tarjeta);
  border: 1px solid var(--color-bordes);
  border-radius: 0.5rem;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.15);
  z-index: 1000;
  margin-top: 0.25rem;
}

.opciones-desplegable a {
  display: block;
  padding: 0.75rem 1rem;
  text-decoration: none;
  color: var(--color-texto-primario);
  border-bottom: 1px solid var(--color-bordes);
  font-family: var(--fuente-cuerpo);
  transition: background-color 0.2s;
}
.opciones-desplegable a:hover {
  background-color: var(--color-primario-25);
  color: var(--color-primario);
}
.opciones-desplegable a:last-child {
  border-bottom: none;
}
.desplegable:hover .opciones-desplegable {
  display: block;
}
.mensaje-error {
  background-color: var(--color-advertencia);
  border: 1px solid var(--color-advertencia);
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 1rem;
}
.contenido-error {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
.texto-error {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--fuente-cuerpo);
  color: var(--color-texto-primario);
  font-weight: 500;
}
.icono-advertencia {
  font-size: 1.2rem;
}
@media (max-width: 768px) {
.fila-formulario {
  grid-template-columns: 1fr;
  gap: 1rem;
}

.contenido-error {
  flex-direction: column;
  align-items: stretch;
  text-align: center;
}
.accion-principal {
  justify-self: stretch;
}        
.boton {
  padding: 0.6rem 1rem;
}
}
</style>