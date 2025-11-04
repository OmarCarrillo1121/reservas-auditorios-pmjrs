<script>
    import { navigateTo } from "$lib/utils/navigate.utils";
    //Tipos de botones: 'principal', 'secundario', 'exito', 'error', 'advertencia', 'info'
    export let tipo = ""
    export let textoBoton = "";
    export let accion = null;
    console.log(tipo);
    $: claseBoton = `boton boton-${tipo}`;
</script>

<button class={claseBoton} on:click={accion}>
    {textoBoton}
</button>

<style>
    .boton {
        border-radius: 0.5rem;
        padding: 0.75rem 2rem;
        cursor: pointer;
        transition: background-color 0.2s;
        border: none;
        font-weight: 600;
    }

    .boton-principal {
        background-color: var(--color-boton);
        color: var(--color-fondo);
    }

    .boton-principal:hover { 
        background-color: #1B7B5C; 
    }

    .boton-secundario {
        background-color: var(--color-fondo);
        color: var(--color-texto-primario);
    }

    .boton-secundario:hover { 
        background-color: var(--color-fondo-tarjeta); 
    }

    .boton-exito {
        background-color: var(--color-exito);
        color: var(--color-fondo);
    }

    .boton-exito:hover { 
        background-color: #218838; 
    }

    .boton-error {
        background-color: var(--color-error);
        color: var(--color-fondo);
    }
    .boton-error:hover { 
        background-color: #c82333; 
    }

    .boton-advertencia {
        background-color: var(--color-advertencia);
        color: var(--color-fondo);
    }

    .boton-advertencia:hover { 
        background-color: #e0a800; 
    }

    .boton-info {
        background-color: var(--color-info);
        color: var(--color-fondo);
    }
    .boton-info:hover { 
        background-color: #138496; 
    }
</style>
