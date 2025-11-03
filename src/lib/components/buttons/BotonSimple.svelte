<script>
    import { navigateTo } from "$lib/utils/navigate.utils";
    // export let auditorioData = {};
    export let textoBoton = ""
</script>

<!-- <button>
    {auditorioData}
</button> -->
<button onclick={() => navigateTo("/login")} class="header-button"
        >{textoBoton}</button
    >

<style>
    .header-button {
        background-color: var(--color-accent);
        color: var(--color-text-primary);
        border-radius: 0.5rem;
        padding: 0.75rem 2rem;
        cursor: pointer;
    }
</style>