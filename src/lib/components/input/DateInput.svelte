<script>
    export let label = '';

    let fechaActual = new Date().toISOString().split('T')[0];
    export let fechaSeleccionada = new Date().toISOString().split('T')[0];
</script>

<div class="input-container">
    <label for='fecha'>{label}</label>
    <input 
        id='fecha'
        name='fechaInput'
        type='date'
        min={fechaActual}  
        bind:value={fechaSeleccionada} />
</div>

<style>
    label {
        font-size: 1rem;
    }
    input {
        height: 3rem;
        border: solid 1px #000;
        border-radius: 1rem;
        background-color: var(--color-bg-cards);
        width: 100%;
        padding: 1rem;
    }
    .input-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
</style>
