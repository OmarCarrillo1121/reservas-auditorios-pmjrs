<script>
    import { navigateTo } from "$lib/utils/navigate.utils";
    import Button from "$lib/components/buttons/BotonSimple.svelte"
    export let buttons = [];
</script>

<header>
    <section class="container flex flex-row justify-between">
        <section class="header-title-container">
            <span class="logos-container">
                <img class="logos" src="/svg/unam-logo.svg" alt="" />
                <img class="logos" src="/svg/fca-logo.svg" alt="" />
            </span>
            <span class="header-title">
                <h4>Facultad de Contaduría y Administración</h4>
                <h3>Sistema de Información para la Gestión de Auditorios</h3>
            </span>
        </section>
        <section>
            {#each buttons as boton}
                <Button tipo={boton.tipo} 
                        textoBoton={boton.label} 
                        accion={boton.accion}>
                </Button>
            {/each}
        </section>
    </section>
</header>

<style>
    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: var(--color-primario);
        padding: 1rem 8rem;
    }

    .header-title-container {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
    }

    .header-title {
        color: var(--color-fondo);
    }

    .logos-container {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
        padding-right: 1rem;
        border-right: solid 1px var(--color-fondo)
    }

    .logos {
        filter: invert(1);
        width: 4rem;
        height: 4rem;
    }

</style>
