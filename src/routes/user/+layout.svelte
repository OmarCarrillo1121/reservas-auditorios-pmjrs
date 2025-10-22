<script>
	import '../../app.css';
	let { children } = $props();
</script>

<header>
    <span class="header-container">
        <span class="logos-container">
            <img class="logos" src="/svg/unam-logo.svg" alt="" />
            <img class="logos" src="/svg/fca-logo.svg" alt="" />
        </span>

        <span class="header-title">
            <!-- <h3>Universidad Nacional Autónoma de México</h3> -->
            <h3>Facultad de Contaduría y Administración</h3>
            <h2>Sistema de Información para la Gestión de Auditorios</h2>
        </span>
    </span>

    <button title='Mi perfil' onclick={() => navigateTo("/login")} class="round-button">
        </button
    >
</header>
<nav >
    <section class="container">
        <ul>
            <li><a href="dashboard" onclick={() => navigateTo("/dashboard")}>Inicio</a></li>
            <li><a href="reservations" onclick={() => navigateTo("/reservations")}>Reservaciones</a></li>
            <li><a href="calendar" onclick={() => navigateTo("/calendar")}>Calendario</a></li>
        </ul>
    </section>
    
</nav>
<main>
	{@render children?.()}
</main>
    
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

    nav {
        background-color: aquamarine;
        section {
            padding: 1rem;
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 1rem;
            ul {
                display: flex;
                flex-direction: row;
                gap: 3rem;
            } a {
                font-family: var(--font-title);
                font-weight: 500; 
                font-size: 1.1rem;
                cursor: pointer;
            }
        }

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

    .round-button {
        background-color: var(--color-accent);
        color: var(--color-text-primary);
        border-radius: 50%;
        height: 3rem;
        width: 3rem;
        padding: 1rem;
        cursor: pointer;
    }

    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--color-primary-25);
        color: var(--color-text-primary);
        padding: 1rem 8rem;
    }

</style>
