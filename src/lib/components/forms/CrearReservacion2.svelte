<script>
    import './forms.css';
    import InputField from "../input/InputField.svelte";
    import SelectField from "../input/SelectField.svelte";
    import SectionHeader from "../header/SectionHeader.svelte";
    import { Modal, Drawer } from "flowbite-svelte";
    import Boton from "../buttons/BotonSimple.svelte";
    import Alerta from "../alert/Alerta.svelte";
    import Icon from "../icons/Icon.svelte";
    import { mdiPlus, mdiClose } from '@mdi/js';

    let tipoEventoLista = [];
    let origenEventoLista = [];
    let ponentesLista = [];
    let presidiumLista = [];
    let recursosLista = [];

    let abrirPonenteForm = false;
    let abrirPresidiumForm = false;

    export let formulario2 = {
        nombreEvento: "",
        tipoEvento: "",
        origenEvento: "",
        bannerEvento: null,
        ponentes: [],
        presidium: [],
    };

    let tempPonente = {
        nombre: "",
        grado: "",
        semblanza: ""
    };

    let tempPresidium = {
        nombre: "",
        grado: "",
        semblanza: ""
    };
</script>

<div class="form-step">
    <SectionHeader
    titulo={"Ingresar datos del evento"} paddingTop={0} paddingBottom={0}
  ></SectionHeader>

    <form class="formulario">
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
                bind:value={formulario2.tipoEvento}
            ></SelectField>

            <SelectField
                id={"origenEvento"}
                label={"Origen del evento"}
                optionsList={origenEventoLista}
                bind:value={formulario2.origenEvento}
            ></SelectField>
        </div>

        <div class="container-input">
                    <InputField
                        id={"bannerEvento"}
                        type={"file"}
                        label={"Banner"}
                        placeholder={"Cargar banner del evento"}
                        boton={mdiPlus}
                        accion={() => console.log('subir archivo')}
                        bind:value={tempPonente.semblanza}
                    ></InputField>
                </div>

        <div class="container-input">
            <div>
            <SelectField
                id={"ponentes"}
                label={"Ponentes"}
                optionsList={ponentesLista}
                boton={mdiPlus}
                accion={() => (abrirPonenteForm = true)}
            ></SelectField>
            </div>
        </div>

        {#if abrirPonenteForm} 
        <div class="modal-input">
            <SectionHeader titulo={'Agregar ponente'} paddingTop=0 paddingBottom=0 icono={mdiClose} accion={() => abrirPonenteForm = false}></SectionHeader>

            <div class="formulario">
                <div class="container-input">
                    <InputField
                        id={"nombrePonente"}
                        type={"text"}
                        label={"Nombre del ponente"}
                        placeholder={"Nombre del ponente"}
                        bind:value={tempPonente.nombre}
                    ></InputField>
                </div>
                <div class="container-input">
                    <InputField
                        id={"gradoPonente"}
                        type={"text"}
                        label={"Grado académico"}
                        placeholder={"Grado académico del ponente"}
                        bind:value={tempPonente.grado}
                    ></InputField>
                </div>
                <div class="container-input">
                    <InputField
                        id={"institucionPonente"}
                        type={"file"}
                        label={"Semblanza"}
                        placeholder={"Añadir semblanza del ponente"}
                        boton={mdiPlus}
                        accion={() => console.log('subir archivo')}
                        bind:value={tempPonente.semblanza}
                    ></InputField>
                </div>
                <div class="container-input boton-centro">
                    <Boton botonId={'agregarPonente'} botonType={'button'} tipo={'secundario'} textoBoton={"Agregar ponente"} accion={() => agregarPonente()}></Boton>
                </div>
            </div>
        </div>
        {/if}
        
        <div class="container-input">
            <div>
            <SelectField
                id={"presidium"}
                label={"Integrantes del presidium"}
                optionsList={presidiumLista}
                boton={mdiPlus}
                accion={() => (abrirPresidiumForm = true)}
            ></SelectField>
            </div>
        </div>

        {#if abrirPresidiumForm} 
        <div class="modal-input">
            <SectionHeader titulo={'Agregar integrante del presidium'} paddingTop=0 paddingBottom=0 icono={mdiClose} accion={() => abrirPresidiumForm = false}></SectionHeader>

            <div class="formulario">
                <div class="container-input">
                    <InputField
                        id={"nombrePresidium"}
                        type={"text"}
                        label={"Nombre del integrante"}
                        placeholder={"Nombre del  integrante"}
                        bind:value={tempPresidium.nombre}
                    ></InputField>
                </div>
                <div class="container-input">
                    <InputField
                        id={"gradoPresidium"}
                        type={"text"}
                        label={"Grado académico"}
                        placeholder={"Grado académico del integrante"}
                        bind:value={tempPresidium.grado}
                    ></InputField>
                </div>
                <div class="container-input">
                    <InputField
                        id={"institucionPonente"}
                        type={"file"}
                        label={"Semblanza"}
                        placeholder={"Añadir semblanza del integrante"}
                        boton={mdiPlus}
                        accion={() => console.log('subir archivo')}
                        bind:value={tempPresidium.semblanza}
                    ></InputField>
                </div>
                <div class="container-input boton-centro">
                    <Boton texto={"Agregar ponente"} tipo={"submit"} accion={() => agregarPonente()}></Boton>
                </div>
            </div>
        </div>
        {/if}

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
