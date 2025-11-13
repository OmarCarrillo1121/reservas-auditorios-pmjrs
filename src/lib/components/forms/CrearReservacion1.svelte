<script>
  import './forms.css';
  import SelectField from "../input/SelectField.svelte";
  import DateInput from "../input/DateInput.svelte";
  import TimeInput from "../input/TimeInput.svelte";
  import Boton from "../buttons/BotonSimple.svelte";
  import Alerta from "../alert/Alerta.svelte";
  import SectionHeader from "../header/SectionHeader.svelte";
    
  let recintoLista = [];
  let mesesLista = [];
  let diasLista = [];
  let horasLista = [];

  export let formulario1 = {
    recinto: '',
    mes: '',
    dia: '',
    horaInicio: '',
    horaTermino: ''
  }
</script>

<div class="form-step">
  <SectionHeader
    titulo={"Selecciona recinto y fecha"} paddingTop={0} paddingBottom={0}
  ></SectionHeader>

  <form on:submit|preventDefault={nextStep} class="formulario">
    <div class="container-input">
    <SelectField
      id={"recinto"}
      label={"Recinto"}
      optionsList={recintoLista}
      bind:value={formulario1.recinto}
    ></SelectField>
    </div>
    
    <div class="container-input doble-input">
      <SelectField
      id={"recinto"}
      label={"Mes"}
      optionsList={mesesLista}
      bind:value={formulario1.mes}
    ></SelectField>

    <SelectField
      id={"recinto"}
      label={"Día"}
      optionsList={diasLista}
      bind:value={formulario1.dia}
    ></SelectField>
    </div>
    
    <div class="container-input doble-input">
      <SelectField
      id={"recinto"}
      label={"Hora inicio"}
      optionsList={horasLista}
      bind:value={formulario1.horaInicio}
    ></SelectField>

    <SelectField
      id={"recinto"}
      label={"Hora término"}
      optionsList={horasLista}
      bind:value={formulario1.horaTermino}
    ></SelectField>
    </div>
    
    <Alerta
      titulo='¡Importante!'
      contenido='Recuerda que las reservaciones deben hacerse con al menos 3 días de anticipación.'
      tipo='info'
      icono={true}>
    </Alerta>
    
  </form>
</div>

<style>

</style>