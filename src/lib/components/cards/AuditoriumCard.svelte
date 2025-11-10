<script>
    export let auditorioData = [];
</script>

<!-- AQUI INICIA EL HTML -->
<section class="card-container">
    <div class="card-header">IMAGEN</div>
    <div class="card-body">
        <p>{auditorioData.nombreRecinto}</p>
        <p>UBICACION: {auditorioData.ubicacionRecinto}</p>
        <p>EDIFICIO: {auditorioData.edificioRecinto}</p>
        <p>CAPACIDAD: {auditorioData.capacidadRecinto}</p>
    </div>
    <div class="card-footer">
        <button>Ver ubicacion</button>
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
        max-width: 200px;
        border: solid 1px #000;
        border-radius: 1rem;
    }

    .card-header {
        border: solid 1px black;
        height: 12rem;
        width: 100%;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
    }

    .card-body {
        border: solid 1px black;
        height: 11rem;
        width: 100%;
    }

    .card-footer {
        border: solid 1px black;
        height: 4rem;
        width: 100%;
        button {
            border: solid 1px #000;
            border-radius: 1rem;
        }
    }
</style>
