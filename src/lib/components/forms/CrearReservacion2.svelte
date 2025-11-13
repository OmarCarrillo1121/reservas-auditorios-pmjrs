<script>
    import './forms.css';
    import InputField from "../input/InputField.svelte";
    import SelectField from "../input/SelectField.svelte";
    import SectionHeader from "../header/SectionHeader.svelte";
    import Boton from "../buttons/BotonSimple.svelte";
    import Alerta from "../alert/Alerta.svelte";
    import Icon from "../icons/Icon.svelte";
    import { mdiPlus } from '@mdi/js';

    let tipoEventoLista = [];
    let origenEventoLista = [];
    let ponentesLista = [];
    let presidiumLista = [];
    let recursosLista = [];

    export let formulario2 = {
        recinto: "",
        mes: "",
        dia: "",
        horaInicio: "",
        horaTermino: "",
    };
</script>

<div class="form-step">
    <SectionHeader
    titulo={"Ingresar datos del evento"} paddingTop={0} paddingBottom={0}
  ></SectionHeader>

    <form on:submit|preventDefault={nextStep} class="formulario">
        <div class="container-input">
            <InputField
                id={"nombreEvento"}
                type={"text"}
                label={"Nombre del evento"}
                placeholder={"Ingresar nombre del evento"}
                bind:value={formulario2.nombreEvento}
            ></InputField>
        </div>

        <div class="container-input doble-input">
            <SelectField
                id={"tipoEvento"}
                label={"Tipo de evento"}
                optionsList={tipoEventoLista}
            ></SelectField>

            <SelectField
                id={"origenEvento"}
                label={"Origen del evento"}
                optionsList={origenEventoLista}
            ></SelectField>
        </div>

        <div class="container-input">
            <div>
            <SelectField
                id={"recinto"}
                label={"Ponentes"}
                optionsList={ponentesLista}
                boton={mdiPlus}
            ></SelectField>
            </div>
        </div>

        <div class="container-input">
            <div>
                <SelectField
                    id={"recinto"}
                    label={"Integrantes del presidium"}
                    optionsList={presidiumLista}
                    boton={mdiPlus}
                ></SelectField>
            </div>
        </div>

        <Alerta
            titulo="¡Importante!"
            contenido="Recuerda que las reservaciones deben hacerse con al menos 3 días de anticipación."
            tipo="info"
            icono={true}
        ></Alerta>
    </form>
</div>

<style>
    
</style>
