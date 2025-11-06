<!-- <script>
  import { ProgressStepper, Label, Input, Button } from "flowbite-svelte";
  import { onMount } from "svelte";

  let currentStep = 0;

  const steps = [
    { label: "Account", status: "current" },
    { label: "Payment", status: "pending" },
    { label: "Confirm", status: "pending" }
  ];

  function updateStepper() {
    steps.forEach((s, i) => {
      if (i < currentStep) s.status = "completed";
      else if (i === currentStep) s.status = "current";
      else s.status = "pending";
    });
  }

  function nextStep() {
    if (currentStep < steps.length - 1) {
      currentStep++;
      updateStepper();
    }
  }

  function prevStep() {
    if (currentStep > 0) {
      currentStep--;
      updateStepper();
    }
  }

  onMount(updateStepper);
</script>

<ProgressStepper {steps} class="mb-8" />

{#if currentStep === 0}
  <form on:submit|preventDefault={nextStep}>
    <h3 class="mb-4 text-lg font-medium">Account details</h3>
    <div class="grid gap-4 sm:grid-cols-2 mb-4">
      <div>
        <Label for="username">Username</Label>
        <Input id="username" name="username" placeholder="username.example" required />
      </div>
      <div>
        <Label for="email">Email</Label>
        <Input id="email" type="email" placeholder="name@company.com" required />
      </div>
      <div>
        <Label for="password">Password</Label>
        <Input id="password" type="password" placeholder="••••••••" required />
      </div>
      <div>
        <Label for="confirm-password">Confirm password</Label>
        <Input id="confirm-password" type="password" placeholder="••••••••" required />
      </div>
    </div>
    <Button type="submit">Next Step: Payment Info</Button>
  </form>
{/if}

{#if currentStep === 1}
  <form on:submit|preventDefault={nextStep}>
    <h3 class="mb-4 text-lg font-medium">Payment Info</h3>
    <div class="grid gap-4 sm:grid-cols-2 mb-4">
      <div>
        <Label for="card">Card Number</Label>
        <Input id="card" placeholder="1234 5678 9012 3456" required />
      </div>
      <div>
        <Label for="expiry">Expiry Date</Label>
        <Input id="expiry" placeholder="MM/YY" required />
      </div>
      <div>
        <Label for="cvv">CVV</Label>
        <Input id="cvv" placeholder="123" required />
      </div>
    </div>
    <div class="flex justify-between">
      <Button color="gray" type="button" on:click={prevStep}>Back</Button>
      <Button type="submit">Next Step: Confirm</Button>
    </div>
  </form>
{/if}

{#if currentStep === 2}
  <section>
    <h3 class="mb-4 text-lg font-medium">Confirm Details</h3>
    <p class="mb-4">Review all your information before submitting.</p>
    <div class="flex justify-between">
      <Button color="gray" on:click={prevStep}>Back</Button>
      <Button color="green">Submit</Button>
    </div>
  </section>
{/if} -->

<script>
    import CreateReservationForm from "$lib/components/forms/CreateReservationForm.svelte";
    import InputField from "$lib/components/input/InputField.svelte";
    import SelectField from "$lib/components/input/SelectField.svelte";
    import HorizontalCalendar from "$lib/components/booking/HorizontalCalendar.svelte";
    import TimeChips from "$lib/components/booking/TimeChips.svelte";
    import Boton from "$lib/components/buttons/BotonSimple.svelte";

    import { postReservacion } from "$lib/services/reservaciones.service";

    let nuevaReservacion = {
        idRecinto: "",
        idSolicitante: "",
        fechaEvento: "",
        horaInicio: "",
        horaTermino: "",
        nombreEvento: "",
        tipoEvento: "",
        origenEvento: ""
    };
    $: console.log(nuevaReservacion);

    let auditoriums = [];
    let selectedAuditorium = "";
    let selectedDate = null;
    let availableTimes = ["07:00", "08:00", "09:00"];
    let selectedTimes = [];
    $: currentStep = 1;
    function changeStep(valor) {
        if (valor === 'ant' && currentStep >= 1) {
            currentStep --
            console.log(currentStep)
        }
        if (valor === 'sig' && currentStep <= 4) {
            currentStep ++
            console.log(currentStep)
        }   
    } 
</script>

<div class="container">
    <div class="contenedor-formulario">
        {#if currentStep === 1}
            <h4 class="section-title">Seleccionar fecha</h4>
            <HorizontalCalendar
                {selectedDate}
                on:select={(e) => (selectedDate = e.detail)}
            />

            <h4 class="section-title">Fechas disponibles</h4>
            <TimeChips
                {availableTimes}
                bind:selectedTimes
                on:update={(e) => (selectedTimes = e.detail)}
            />
            <Boton botonId={'ant'} botonType={"button"} tipo={'secundario'} textoBoton={'Anterior'} accion={() => changeStep('ant')}/>
            <Boton botonId={'sig'} botonType={"button"} tipo={'primario'} textoBoton={'Siguiente'} accion={() => changeStep('sig')}/>
            <Boton botonId={'enviar'} botonType={"submit"} tipo={'primario'} textoBoton={'Crear reservacion'} accion={() => postReservacion(nuevaReservacion)}/>
        {/if}
        {#if currentStep === 2}
            <form class="container form-container bb" action="#">
                <SelectField
                    id="nombreRecinto"
                    type="text"
                    label={"Nombre del recinto"}
                    bind:value={nuevaReservacion.nombreRecinto}
                />
                <InputField
                    id="nombreRecinto"
                    type="text"
                    label={"Nombre del recinto"}
                    bind:value={nuevaReservacion.nombreRecinto}
                />
                <InputField
                    id="nombreRecinto"
                    type="text"
                    label={"Nombre del recinto"}
                    bind:value={nuevaReservacion.nombreRecinto}
                />
                <Boton botonId={'ant'} botonType={"button"} tipo={'secundario'} textoBoton={'Anterior'} accion={() => changeStep('ant')}/>
                <Boton botonId={'sig'} botonType={"button"} tipo={'primario'} textoBoton={'Siguiente'} accion={() => changeStep('sig')}/>
            </form>
        {/if}
        {#if currentStep === 3}
            <form class="container form-container bb" action="#">
                <SelectField
                    id="nombreRecinto"
                    type="text"
                    label={"Nombre del recinto"}
                    bind:value={nuevaReservacion.nombreRecinto}
                />
                <InputField
                    id="nombreRecinto"
                    type="text"
                    label={"Nombre del recinto"}
                    bind:value={nuevaReservacion.nombreRecinto}
                />
                <InputField
                    id="nombreRecinto"
                    type="text"
                    label={"Nombre del recinto"}
                    bind:value={nuevaReservacion.nombreRecinto}
                />
                <Boton botonId={'ant'} botonType={"button"} tipo={'secundario'} textoBoton={'Anterior'} accion={() => changeStep('ant')}/>
                <Boton botonId={'sig'} botonType={"button"} tipo={'primario'} textoBoton={'Siguiente'} accion={() => changeStep('sig')}/>
            </form>
        {/if}
        {#if currentStep === 4}
            <form class="container form-container bb" action="#">
                <SelectField
                    id="nombreRecinto"
                    type="text"
                    label={"Nombre del recinto"}
                    bind:value={nuevaReservacion.nombreRecinto}
                />
                <InputField
                    id="nombreRecinto"
                    type="text"
                    label={"Nombre del recinto"}
                    bind:value={nuevaReservacion.nombreRecinto}
                />
                <InputField
                    id="nombreRecinto"
                    type="text"
                    label={"Nombre del recinto"}
                    bind:value={nuevaReservacion.nombreRecinto}
                />
                <Boton botonId={'ant'} botonType={"button"} tipo={'secundario'} textoBoton={'Anterior'} accion={() => changeStep('ant')}/>
                <Boton botonId={'sig'} botonType={"button"} tipo={'primario'} textoBoton={'Siguiente'} accion={() => changeStep('sig')}/>
            </form>
        {/if}
    </div>
</div>

<!-- <form action="">
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
        <button id="agregar_ponente" title="Agregar" type="button"
            >Agregar</button
        >
    </div>
    <div>
        <label for="presidium">Integrantes del presidium</label>
        <input id="presidium" type="text" />
        <button id="agregar_presidium" title="Agregar" type="button"
            >Agregar</button
        >
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
</form> -->

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
