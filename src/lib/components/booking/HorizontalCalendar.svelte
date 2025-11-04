<!-- <script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let selectedDate;
  const today = new Date();

  const days = Array.from({ length: 30 }, (_, i) => {
    const d = new Date();
    d.setDate(today.getDate() + i);
    return d;
  });

  function selectDay(day) {
    dispatch('select', day);
  }
</script>

<div class="flex overflow-x-auto gap-2 p-2">
  {#each days as day}
    <button
      class="px-3 py-2 rounded-lg min-w-[70px] text-center border 
             {selectedDate?.toDateString() === day.toDateString()
               ? 'bg-blue-500 text-white'
               : 'bg-white text-gray-700'}"
      on:click={() => selectDay(day)}>
      <div>{day.toLocaleDateString('es-MX', { weekday: 'short' })}</div>
      <div class="font-bold">{day.getDate()}</div>
    </button>
  {/each}
</div>

<style>

</style> -->

<script>
  import { format, getDaysInMonth } from "date-fns";
  import { es } from "date-fns/locale";
  import Icon from "$lib/components/icons/Icon.svelte";
  import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
  const fechaActual = new Date();
  const diaActualNumero = format(fechaActual, "dd");
  const diaActualNombre = format(fechaActual, "EEEE", { locale: es });
  const mesActualNumero = format(fechaActual, "MM");
  const mesActualNombre = format(fechaActual, "MMMM", { locale: es });
  const anio = format(fechaActual, "yyyy");
  const diasDelMes = getDaysInMonth(fechaActual);
  console.log(
    fechaActual,
    diaActualNumero,
    diaActualNombre,
    mesActualNumero,
    mesActualNombre,
    anio,
    diasDelMes,
  );
  let mesSeleccionado = mesActualNumero;
  let mesSeleccionadoNombre = mesActualNombre;
  let diasDisponibles = [];

  for (let i = diaActualNumero; i <= diasDelMes; i++) {
    const fechaFor = new Date(anio, mesSeleccionado - 1, i);
    let dia = {
      diaFecha: format(fechaFor, 'yyyy-MM-dd'),
      diaNumero: i,
      diaNombre: format(fechaFor, 'EEEE', { locale: es }),
      diaNombreCorto: format(fechaFor, 'EEEE', { locale: es }).slice(0,3)
    };
    diasDisponibles.push(dia);
  }

  console.log(diasDisponibles);
</script>

<div class="container">
  <div class="selector-mes">
    <div class=flecha-seleccion-mes>
      <Icon
        path={mdiChevronLeft}
        size={32}
        color={"var(--color-texto-secundario)"}
      />
    </div>
    {mesSeleccionadoNombre}
    <div class=flecha-seleccion-mes>
      <Icon
        path={mdiChevronRight}
        size={32}
        color={"var(--color-texto-secundario)"}
      />
    </div>
  </div>

  <div class="dias-disponibles-container">
  {#each diasDisponibles as diaDisp}
    <div class="dia-container bb">
      <div>{diaDisp.diaNumero}</div>
      <div>{diaDisp.diaNombreCorto}</div>
    </div>
  {/each}
  </div>
  <!-- {#each days as day}
    <button
      class="px-3 py-2 rounded-lg min-w-[70px] text-center border 
             {selectedDate?.toDateString() === day.toDateString()
               ? 'bg-blue-500 text-white'
               : 'bg-white text-gray-700'}"
      on:click={() => selectDay(day)}>
      <div>{day.toLocaleDateString('es-MX', { weekday: 'short' })}</div>
      <div class="font-bold">{day.getDate()}</div>
    </button>
  {/each} -->
</div>

<style>
  .selector-mes {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding-bottom: 2rem;
  }

  .dias-disponibles-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    overflow-x: auto;
  }

  .dia-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    cursor: pointer;
    border-radius: 0.5rem;
  }

  .flecha-seleccion-mes {
    border-radius: 50%;
    border: solid 1px var(--color-texto-secundario);
  }

  .flecha-seleccion-mes:hover {
    background-color: var(--color-fondo-tarjeta);
  }
</style>
