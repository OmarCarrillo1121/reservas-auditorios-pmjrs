<script>
    export let paso;
    console.log(paso);
    $: claseBoton = `contenedor-step contenedor-step-${paso.estatus}`;
</script>

<div class={claseBoton}>
    {paso.nombre}
</div>

<style>
    .contenedor-step {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        height: 100%;
        padding: 1rem;
    }

    .contenedor-step:hover {
        cursor: pointer;
        background-color: #e0e0e0;
    }

    .contenedor-step-actual {
        background-color: aliceblue;
    }

    .contenedor-step-pendiente {
        color: red;
    }

    .contenedor-step-completado {
        color: green;
    }

</style>