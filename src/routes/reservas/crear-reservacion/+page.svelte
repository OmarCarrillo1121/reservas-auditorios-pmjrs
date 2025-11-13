<script>
  import { ProgressStepper, Label, Input, Button } from "flowbite-svelte";
  import CrearReservacion1 from "$lib/components/forms/CrearReservacion1.svelte";
  import CrearReservacion2 from "$lib/components/forms/CrearReservacion2.svelte";
  import CrearReservacion3 from "$lib/components/forms/CrearReservacion3.svelte";
  import CrearReservacion4 from "$lib/components/forms/CrearReservacion4.svelte";
  import SectionHeader from "$lib/components/header/SectionHeader.svelte";
  import Stepper from "$lib/components/stepper/Stepper.svelte";
  import { onMount } from "svelte";

  const pasos = [
    { id: 0, nombre: "Recinto y fecha", contenido: CrearReservacion1, estatus: "actual" },
    { id: 1, nombre: "Datos del evento", contenido: CrearReservacion2, estatus: "pendiente" },
    { id: 2, nombre: "Recursos requeridos", contenido: CrearReservacion3, estatus: "pendiente" },
    { id: 3, nombre: "Confirmar y crear", contenido: CrearReservacion4, estatus: "pendiente" },
  ];

</script>

<div class="container">
  <SectionHeader titulo={'Crear reservacion'}></SectionHeader>
  <Stepper {pasos}></Stepper>
</div>
  

<style>
</style>
