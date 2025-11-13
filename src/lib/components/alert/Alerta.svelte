<script>
    import Icon from "../icons/Icon.svelte";
    import { mdiInformationOutline, mdiAlertRhombusOutline, mdiCheckCircleOutline, mdiCloseCircleOutline} from '@mdi/js';
    export let titulo = "";
    export let contenido = "";
    export let tipo = "";
    export let icono = false;

    $: claseTarjeta = `contenedor-tarjeta ${tipo}`;
</script>

<div class={claseTarjeta}>
    {#if icono == true}
        <div class="contenedor-icono">
            {#if tipo === 'error'}<Icon path={mdiCloseCircleOutline} size={32} color={'var(--color-error)'}></Icon>{/if}
            {#if tipo === 'exito'}<Icon path={mdiCheckCircleOutline} size={32} color={'var(--color-exito)'}></Icon>{/if}
            {#if tipo === 'advertencia'}<Icon path={mdiAlertRhombusOutline} size={32} color={'var(--color-advertencia)'}></Icon>{/if}
            {#if tipo === 'info'}<Icon path={mdiInformationOutline} size={32} color={'var(--color-info)'}></Icon>{/if}
        </div>
    {/if}
    <div class="contenedor-texto">
        <p>{titulo}</p>
        <p>{contenido}</p>
    </div>
</div>

<style>
    .contenedor-tarjeta {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        border-radius: 0rem;
        padding: 2rem;
        gap: 2rem;
    }

    .error {
        background-color: var(--fondo-tarjetas);
        border: 2px solid var(--color-error);
        border-radius: 1rem;
        color: var(--color-texto-primario);
    }
    .exito {
        background-color: var(--fondo-tarjetas);
        border: 2px solid var(--color-exito);
        border-radius: 1rem;
        color: var(--color-texto-primario);
    }
    .advertencia {
        background-color: var(--fondo-tarjetas);
        border: 2px solid var(--color-advertencia);
        border-radius: 1rem;
        color: var(--color-texto-primario);
    }
    .info {
        background-color: var(--fondo-tarjetas);
        border: 2px solid var(--color-info);
        border-radius: 1rem;
        color: var(--color-texto-primario);
    }
</style>
