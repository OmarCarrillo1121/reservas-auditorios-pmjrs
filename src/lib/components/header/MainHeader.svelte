<script>
    import { navigateTo } from "$lib/utils/navigate.utils";
</script>

<header>
    <section class="container flex flex-row justify-between">
        <article>
            <span class="logos-container">
                <img class="logos" src="/svg/unam-logo.svg" alt="" />
                <img class="logos" src="/svg/fca-logo.svg" alt="" />
            </span>

            <span class="header-title">
                <!-- <h3>Universidad Nacional Autónoma de México</h3> -->
                <h3>Facultad de Contaduría y Administración</h3>
                <h2>Sistema de Información para la Gestión de Auditorios</h2>
            </span>
        </article>
        <article>
            <button onclick={() => navigateTo("/login")} class="header-button"
                >Iniciar Sesión</button
            >
            <button
                title="Mi perfil"
                onclick={() => navigateTo("/login")}
                class="round-button"
            >
            </button>
        </article>
    </section>
</header>

<style>
    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: var(--color-primary);
        font-family: var(--font-title);
        padding: 1rem 8rem;
    }

    .header-container {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
    }

    .header-title {
        color: var(--color-text-primary);
    }

    .logos-container {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
    }

    .logos {
        filter: invert(1);
        width: 4rem;
        height: 4rem;
    }

    .header-button {
        background-color: var(--color-accent);
        color: var(--color-text-primary);
        border-radius: 0.5rem;
        padding: 0.75rem 2rem;
        cursor: pointer;
    }

    .round-button {
        background-color: var(--color-accent);
        color: var(--color-text-primary);
        border-radius: 50%;
        height: 3rem;
        width: 3rem;
        padding: 1rem;
        cursor: pointer;
    }
</style>
