<script>
    import Icon from "../icons/Icon.svelte";
    export let id = "";
    export let label = "";
    export let optionsList = "";
    export let boton = null;
    export let accion = null;
    export let value = "";
</script>

<div class="input-container">
    <label for={id}>
        {label}
    </label>
    <div class="input-area-container">
        <select {id} name={id} bind:value>
            <option value="0">Sin seleccion</option>
            {#if optionsList.length > 0}
                {#each optionsList as option}
                    <option value={option.value}>{option.name}</option>
                {/each}
            {/if}
        </select>
        {#if boton}
            <button type="button" class="contenedor-icono" on:click={accion}>
                <Icon path={boton} size={32} color={"var(--color-fondo)"}
                ></Icon>
            </button>
        {/if}
    </div>
</div>

<style>
    label {
        font-size: 1rem;
    }
    select {
        height: 3rem;
        border: solid 1px var(--color-bordes);
        border-radius: 1rem;
        background-color: var(--color-bg-cards);
        width: 100%;
    }
    .input-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .input-area-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 1rem;
    }

    .contenedor-icono {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 2rem;
        background-color: var(--color-texto-primario);
        border-radius: 50%;
    }

    .contenedor-icono:hover {
        cursor: pointer;
        background-color: var(--color-texto-secundario);
    }
</style>
