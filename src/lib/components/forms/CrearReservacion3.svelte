<script>
    import "./forms.css";
    import InputField from "../input/InputField.svelte";
    import SelectField from "../input/SelectField.svelte";
    import SectionHeader from "../header/SectionHeader.svelte";
    import Boton from "../buttons/BotonSimple.svelte";
    import Alerta from "../alert/Alerta.svelte";
    import { mdiPlus, mdiClose } from "@mdi/js";

    let fechaSeleccionada = "";

    let areasLista = [];
    let recursosLista = [];
    let abrirRecursosForm = false;

    let tempRecurso = {
        area: "",
        recurso: "",
    };

    let agregarRecurso = () => {
        recursosSeleccionados = [
            ...recursosSeleccionados,
            { ...tempRecurso },
        ];
        tempRecurso = {
            area: "",
            recurso: "",
        };
        abrirRecursosForm = false;
    };

    export let recursosSeleccionados = [];
</script>

<div class="form-step">
    <SectionHeader
        titulo={"Ingresar recursos requeridos"}
        paddingTop={0}
        paddingBottom={0}
    ></SectionHeader>
    <form class="formulario">
        <div class="container-input">
            <SelectField id={"areas"} label={"Area"} optionsList={areasLista}
            ></SelectField>
        </div>

        <div class="container-input">
            <SelectField
                id={"recursos"}
                label={"Recursos"}
                optionsList={recursosLista}
                boton={mdiPlus}
                accion={() => (abrirRecursosForm = true)}
            ></SelectField>
        </div>

        {#if abrirRecursosForm}
            <div class="modal-input">
                <SectionHeader
                    titulo={"Solicitar recurso"}
                    paddingTop="0"
                    paddingBottom="0"
                    icono={mdiClose}
                    accion={() => (abrirRecursosForm = false)}
                ></SectionHeader>

                <div class="formulario">
                    <div class="container-input">
                        <SelectField
                            id={"area"}
                            label={"Area"}
                            optionsList={areasLista}
                            bind:value={tempRecurso.area}
                        ></SelectField>
                    </div>
                    <div class="container-input">
                        <InputField
                            id={"recurso"}
                            type={"text"}
                            label={"Nombre del recurso"}
                            placeholder={"Ingresar nombre del recurso"}
                            bind:value={tempRecurso.recurso}
                        ></InputField>
                    </div>

                    <div class="container-input justify-end">
                        <Boton
                            botonId={"Agregar ponente"}
                            botonType={"submit"}
                            textoBoton={"Agregar"}
                            tipo={"secundario"}
                            accion={() => agregarRecurso()}
                        ></Boton>
                    </div>
                </div>
            </div>
        {/if}
    </form>
</div>

<style>
</style>
