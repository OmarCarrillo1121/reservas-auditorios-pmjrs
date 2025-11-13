<script>
    import './forms.css';
  import SelectField from "../input/SelectField.svelte";
  import SectionHeader from "../header/SectionHeader.svelte";
  import Boton from "../buttons/BotonSimple.svelte";
  import Alerta from "../alert/Alerta.svelte";

  let fechaSeleccionada = '';
    
  let recintoLista = [];
  let mesesLista = [];
  let diasLista = [];
  let horasLista = [];
</script>

<div class="form-step">
    <SectionHeader
    titulo={"Ingresar recursos requeridos"} paddingTop={0} paddingBottom={0}
  ></SectionHeader>
  <form on:submit|preventDefault={nextStep} class="formulario">
    <div class="container-input">
    <SelectField
      id={"recinto"}
      label={"Recinto"}
      optionsList={recintoLista}
    ></SelectField>
    </div>
    
    <div class="container-input doble-input">
      <SelectField
      id={"recinto"}
      label={"Mes"}
      optionsList={mesesLista}
    ></SelectField>

    <SelectField
      id={"recinto"}
      label={"Día"}
      optionsList={diasLista}
    ></SelectField>
    </div>
    
    <div class="container-input doble-input">
      <SelectField
      id={"recinto"}
      label={"Hora inicio"}
      optionsList={horasLista}
    ></SelectField>

    <SelectField
      id={"recinto"}
      label={"Hora término"}
      optionsList={horasLista}
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