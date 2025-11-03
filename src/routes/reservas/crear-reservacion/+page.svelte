<script>
    import CreateReservationForm from "$lib/components/forms/CreateReservationForm.svelte";
    import InputField from "$lib/components/input/InputField.svelte";
    import SelectField from "$lib/components/input/SelectField.svelte";

    import { postReservacion } from "$lib/services/reservaciones.service";

    let nuevaReservacion = {
        nombreRecinto: '',
        fechaEvento: '',
        horaInicio: '',
        horaTermino: '',
        nombreEvento: '',
        tipoEvento: '',
        origenEvento: '',
        ponentes: '',
        integrantesPresidium: '',
        recursosRequeridos: ''
    };
    $: console.log (nuevaReservacion);
</script>

<div class="container form-container bb">
    <SelectField id = "nombreRecinto" 
                type = "text" 
                label = {'Nombre del recinto'} 
                bind:value = {nuevaReservacion.nombreRecinto}
                />
    <InputField id = "nombreRecinto" 
                type = "text" 
                label = {'Nombre del recinto'} 
                bind:value = {nuevaReservacion.nombreRecinto}
                />
    <InputField id = "nombreRecinto" 
                type = "text" 
                label = {'Nombre del recinto'} 
                bind:value = {nuevaReservacion.nombreRecinto}
                />
    <InputField id = "nombreRecinto" 
                type = "text" 
                label = {'Nombre del recinto'} 
                bind:value = {nuevaReservacion.nombreRecinto}
                />
    <InputField id = "nombreRecinto" 
                type = "text" 
                label = {'Nombre del recinto'} 
                bind:value = {nuevaReservacion.nombreRecinto}
                />
    <InputField id = "nombreRecinto" 
                type = "text" 
                label = {'Nombre del recinto'} 
                bind:value = {nuevaReservacion.nombreRecinto}
                />
    <InputField id = "nombreRecinto" 
                type = "text" 
                label = {'Nombre del recinto'} 
                bind:value = {nuevaReservacion.nombreRecinto}
                />
    <InputField id = "nombreRecinto" 
                type = "text" 
                label = {'Nombre del recinto'} 
                bind:value = {nuevaReservacion.nombreRecinto}
                />
</div>

<form action="">
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

<CreateReservationForm/>

<style>
    .form-container {
        width: 400px;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: solid 1px #000;
    }
</style>
