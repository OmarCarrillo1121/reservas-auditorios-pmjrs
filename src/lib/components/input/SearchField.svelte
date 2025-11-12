<script>
    import Icon from "../icons/Icon.svelte";
    import { mdiMagnify } from "@mdi/js";

    export let id;
    export let label = "";
    export let placeholder = "";
    export let value = "";
</script>

<div class="search-container">
    <div class="input-container">
        {#if label}
            <label for={id}>{label}</label>
        {/if}
        <input
            id={id}
            name={id}
            type="search"
            placeholder={placeholder}
            bind:value
        />
    </div>
    <button class="search-button-container" aria-label="Buscar">
        <Icon path={mdiMagnify} size={32} color={'var(--color-fondo)'} />
    </button>
</div>

<style>
    label {
        font-size: 1rem;
        margin-bottom: 0.25rem;
    }

    input {
        height: 3rem;
        border: solid 1px #000;
        border-radius: 1rem;
        background-color: var(--color-bg-cards);
        width: 100%;
        padding: 0 1rem;
        font-size: 1rem;
    }

    .input-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        flex: 1;
    }

    .search-container {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 0.5rem;
        width: 100%;
    }

    .search-button-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--color-acento, #000);
        border: none;
        border-radius: 0.75rem;
        padding: 0.5rem;
        cursor: pointer;
        transition: background 0.2s ease;
    }

    .search-button-container:hover {
        background: var(--color-acento-hover, #333);
    }
</style>
