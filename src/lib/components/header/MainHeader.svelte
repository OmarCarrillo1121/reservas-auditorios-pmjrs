<script>
    import { navigateTo } from "$lib/utils/navigate.utils";
</script>

<header>
    <section class="container flex flex-row justify-between">
        <section class="header-title-container">
            <a href="/">
                <span class="logos-container">
                    <img class="logos" src="/svg/unam-logo.svg" alt="" />
                    <img class="logos" src="/svg/fca-logo.svg" alt="" />
                </span>
            </a>
            <span class="header-title">
                <h4>Facultad de Contaduría y Administración</h4>
                <h3>Sistema de Información para la Gestión de Auditorios</h3>
            </span>
        </section>

        <section>
            <slot name="acciones" />
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
        border-right: solid 1px var(--color-fondo);
    }

    .logos {
        filter: invert(1);
        width: 4rem;
        height: 4rem;
    }
</style>
