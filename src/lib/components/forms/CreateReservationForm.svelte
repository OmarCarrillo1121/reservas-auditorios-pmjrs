<!-- <script>
    import InputField from "../input/InputField.svelte";
</script>

<h2>Crear nueva reservacion</h2>

<form action="">
    <div>
        
    </div>
    <div>
        <label for="auditorio">Recinto</label>
        <select id="auditorio" name="Auditorio">
            <option value="1">Auditorio1</option>
            <option value="2">Auditorio2</option>
            <option value="3">Auditorio3</option>
            <option value="4">Auditorio4</option>
            <option value="5">Auditorio5</option>
        </select>
    </div>
    <div>
        <label for="fecha_reservacion">Fecha de reservacion</label>
        <input id="fecha_reservacion" type="text" />
    </div>
    <div>
        <label for="hora_inicio">Hora de inicio</label>
        <input id="Hora_inicio" type="text" />
    </div>
    <div>
        <label for="hora_termino">Hora de termino</label>
        <input id="hora_termino" type="text" />
    </div>
    <div>
        <label for="">Nombre del evento</label>
        <input id="" type="text" />
    </div>
    <div>
        <label for="tipo_evento">Tipo de evento</label>
        <select id="tipo_evento" name="Auditorio">
            <option value="1">Taller</option>
            <option value="2">Conferencia</option>
            <option value="3">Conversatorio</option>
            <option value="4">Charlas</option>
            <option value="5">Auditorio5</option>
        </select>
    </div>
    <div>
        <label for="tipo_evento">Origen de evento</label>
        <select id="tipo_evento" name="Auditorio">
            <option value="1">Taller</option>
            <option value="2">Conferencia</option>
            <option value="3">Conversatorio</option>
            <option value="4">Charlas</option>
            <option value="5">Auditorio5</option>
        </select>
    </div>
    <div>
        <label for="">Ponentes</label>
        <input id="" type="text" />
        <button id="agregar_ponente" title="Agregar" type="button">Agregar</button>
    </div>
    <div>
        <label for="presidium">Integrantes del presidium</label>
        <input id="presidium" type="text" />
        <button id="agregar_presidium" title="Agregar" type="button">Agregar</button>
    </div>
    <div>
        <label for="recursos">Recursos requeridos</label>
        <select id="recursos" name="Recursos">
            <option value="1">Taller</option>
            <option value="2">Conferencia</option>
            <option value="3">Conversatorio</option>
            <option value="4">Charlas</option>
            <option value="5">Auditorio5</option>
        </select>
    </div>
    <button type="submit" title="Enviar">Crear Reservacion</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: solid 1px #000;
    }

    input {
        border: solid 1px #000;
    }
</style> -->


<script>
//   import AuditoriumSelect from './AuditoriumSelect.svelte';
  import HorizontalCalendar from '../booking/HorizontalCalendar.svelte';
  import TimeChips from '../booking/TimeChips.svelte';

  let auditoriums = [];
  let selectedAuditorium = '';
  let selectedDate = null;
  let availableTimes = ['07:00','08:00','09:00'];
  let selectedTimes = [];

//   async function fetchAvailableTimes(auditorio, date) {
//     if (!auditorio || !date) return [];
//     const formattedDate = date.toISOString().split('T')[0];
//     const res = await fetch(`/api/horarios?auditorio=${auditorio}&fecha=${formattedDate}`);
//     return await res.json();
//   }

//   $: if (selectedAuditorium && selectedDate) {
//     fetchAvailableTimes(selectedAuditorium, selectedDate).then(data => {
//       availableTimes = data;
//       selectedTimes = [];
//     });
//   }
</script>

<div class="flex flex-col gap-4">
  <!-- <AuditoriumSelect
    {auditoriums}
    bind:selected={selectedAuditorium}
    on:change={(e) => (selectedAuditorium = e.detail)} /> -->

  <HorizontalCalendar
    {selectedDate}
    on:select={(e) => (selectedDate = e.detail)} />

  <TimeChips
    {availableTimes}
    bind:selectedTimes
    on:update={(e) => (selectedTimes = e.detail)} />

  <button
    class="bg-blue-600 text-white rounded-lg p-2 mt-4 disabled:opacity-50"
    disabled={!selectedAuditorium || !selectedDate || selectedTimes.length === 0}>
    Reservar
  </button>
</div>