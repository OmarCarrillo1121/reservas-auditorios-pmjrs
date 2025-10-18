<script>
    import { goto } from "$app/navigation";
    import auditoriumsList from "$lib/data/auditoriums.js";
    function navigateTo(route) {
        goto(route);
    }
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

    <button onclick={() => navigateTo("/login")} class="header-button">Iniciar Sesión</button
    >
</header>

<section id="slider" class="container slider h-70">
    <article class="slider-image">Proximos eventos</article>
</section>

<section id="events" class="container">
    <h3>Auditorios</h3>
    <div class="cards-container">
        {#each auditoriumsList as auditorio}
        <article class=card>{auditorio.name}</article>
    {/each}
    </div>
    
</section>
<section id="events" class="container">
    <h3>Croquis de localizacion</h3>
    <div style="height: 800px; border: solid 1px #000"></div>
    
</section>

<a href="/login">Iniciar sesión</a>
<a href="user/reservations">Reservaciones</a>
<a href="user/search">Buscar</a>
<a href="user/dashboard">Administrador</a>

<nav></nav>
<main></main>
<footer>
    <p>Hackaton "40 años de la Licenciatura en Informática"</p>
    <p>Equipo Pumitas Juniors</p>
</footer>

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
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        background-color: var(--color-primary-50);
        height: 2rem;
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

    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--color-primary-25);
        color: var(--color-text-primary);
        padding: 1rem 8rem;
    }

    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--color-bg-cards);
        color: var(--color-text-primary);
        padding: 1rem 8rem;
        max-width: 200px;
        border: solid 1px #000;
    }

    .cards-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-content: center;
        align-items: center;
        background-color: var(--color-bg-cards);
        color: var(--color-text-primary);
        padding: 1rem 8rem;
    }

</style>
