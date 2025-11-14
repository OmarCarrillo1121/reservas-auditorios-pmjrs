<script>
    import Boton from "../buttons/BotonSimple.svelte";
    export let auditorioData = [];
    
</script>

<!-- AQUI INICIA EL HTML -->
<section class="card-container">
    <div class="card-header">
        <img src={auditorioData.imagen1} alt="">
    </div>
    <div class="card-body">
        <h3 style='font-weight: 600;'>{auditorioData.nombre_recinto}</h3>
        <span style='font-weight: 600; padding-right: 0.5rem;'>Ubicacion: </span><span>{auditorioData.edificio_recinto}</span>
        <span style='font-weight: 600; padding-right: 0.5rem;'>Capacidad: </span><span>{auditorioData.capacidad_recinto}</span>
    </div>
    <div class="card-footer">
        <p style="color: white; font-weight: 600; font-size: 1.1rem">Ubicacion</p>
    </div>
</section>
<!-- AQUI TERMINA EL HTML -->

<style>
    .card-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--color-bg-cards);
        color: var(--color-text-primary);
        max-width: 100%;
    }

    .card-header {
        height: 12rem;
        width: 100%;
    }

    .card-body {
        padding: 2rem;
        background-color: var(--color-fondo-tarjeta);
        height: 11rem;
        width: 100%;
    }

    .card-footer {
        display: flex; 
        justify-content: center;
        align-items: center;
        padding: 2rem;
        background-color: var(--color-secundario);
        height: 4rem;
        width: 100%;
    }

    span {
        font-size: 1.1rem;
    }
    h3 {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
    }
</style>
