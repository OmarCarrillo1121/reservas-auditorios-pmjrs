<script>
    import { onMount } from "svelte";
    import StepperStep from "./StepperStep.svelte";
    import Boton from "../buttons/BotonSimple.svelte";

    let pasoActual = 0;

    export let pasos = [];

    function actualizarStepper() {
        pasos.forEach((paso, index) => {
            if (index < pasoActual) paso.estatus = "completado";
            else if (index === pasoActual) paso.estatus = "actual";
            else paso.estatus = "pendiente";
        });
        pasos = pasos;
    }

    function siguienteStep() {
        if (pasoActual < pasos.length - 1) {
            pasoActual++;
            actualizarStepper();
        }
    }

    function anteriorStep() {
        if (pasoActual > 0) {
            pasoActual--;
            actualizarStepper();
        }
    }

    onMount(actualizarStepper);
</script>

<div class="contenedor-stepper">
    <div class="contenedor-steps">
        {#each pasos as paso, index}
            <StepperStep
                {paso}
                on:click={() => {
                    pasoActual = index;
                    actualizarStepper();
                }}
            />
        {/each}
    </div>
    <div class="contenedor-forms">
        <div class="contenedor-contenido">
            {#each pasos as paso, index}
                {#if pasoActual === index}
                    <svelte:component this={paso.contenido} />
                {/if}
            {/each}
            <div class="contenedor-footer">
                <Boton
                    botonId={"ant"}
                    botonType={"button"}
                    tipo={"secundario"}
                    textoBoton={"Anterior"}
                    accion={() => anteriorStep()}
                ></Boton>
                <Boton
                    botonId={"sig"}
                    botonType={"button"}
                    tipo={"primario"}
                    textoBoton={"Siguiente"}
                    accion={() => siguienteStep()}
                ></Boton>
            </div>
        </div>
    </div>
</div>

<style>
    .contenedor-stepper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        height: 100%;
    }

    .contenedor-steps {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
        background-color: var(--color-fondo-tarjeta);
        height: 100%;
        padding: 1rem 2rem;
    }

    .contenedor-forms {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 4;
        height: 100%;
        padding: 0 2rem 4rem 2rem;
    }

    .contenedor-contenido {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 66%;
        height: 100%;
        gap: 2rem;
    }

    .contenedor-footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-top: 2rem;
    }
</style>
