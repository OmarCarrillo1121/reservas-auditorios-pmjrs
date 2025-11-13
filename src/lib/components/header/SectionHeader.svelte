<script>
    import Icon from "../icons/Icon.svelte";
    export let titulo = '';
    export let paddingTop = '2';
    export let paddingBottom = '1';
    export let justify = 'flex-start';
    export let icono = null;
    export let accion = null;

    $: claseHeader = `section paddingTop-${paddingTop} paddingBottom-${paddingBottom} justify-${justify}`;
</script>

<section class={claseHeader}>
    <h2>{titulo}</h2>
    {#if icono}
    <button on:click={accion}>
        <Icon path={icono} size={32} color={'var(--color-texto-primario)'}></Icon>
    </button>
    {/if}
</section>

<style>
    section {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
    }

    .paddingTop-0 {
        padding-top: 0rem;
    }
    .paddingTop-1 {
        padding-top: 1rem;
    }
    .paddingTop-2 {
        padding-top: 2rem;
    }
    .paddingBottom-0 {
        margin-bottom: 0rem;
    }
    .paddingBottom-1 {
        padding-bottom: 2rem;
    }
    .paddingBottom-2 {
        padding-bottom: 2rem;
    }

    .justify-left {
        justify-content: flex-start;
    }
    .justify-center {
        justify-content: center;
    }
    .justify-right {
        justify-content: flex-end;
    }
    h2 {
        font-weight: 500;
    }

    button {
        background-color: transparent;
        border: none;
        padding: 0;
        margin: 0;
    }

    button:hover {
        cursor: pointer;
        background-color: var(--color-fondo-tarjeta);
        border-radius: 50%
    }
</style>