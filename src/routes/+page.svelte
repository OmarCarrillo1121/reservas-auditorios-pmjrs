<script>
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import { api } from "$lib/services/api.js";
    import AuditoriumCard from "$lib/components/cards/AuditoriumCard.svelte";
    import Footer from "$lib/components/footer/Footer.svelte";

    let listaAuditorios = [];

    onMount(async () => {
        try {
            listaAuditorios = await api.get("/auditorios");
            console.log(listaAuditorios);
        } catch (err) {
            console.error("Error cargando auditorios:", err);
        }
    });

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

    <button onclick={() => navigateTo("/login")} class="header-button"
        >Iniciar Sesión</button
    >
</header>

<section class="container">
    PROXIMOS EVENTOS
</section>

<section id="events" class="container">
    <h3>Auditorios</h3>

    <div class="cards-container">
        {#each listaAuditorios as auditorioData}
            <AuditoriumCard {auditorioData} />
        {/each}
    </div>
</section>

<section id="events" class="container">
    <h3>Croquis de localizacion</h3>
    <div style="height: 800px; border: solid 1px #000"></div>
</section>

<nav></nav>
<main></main>
<footer>
    <Footer/>
    <!-- <div>
        <p>Universidad Nacional Autónoma de México</p>
        <p>Facultad de Contaduría y Administración</p>
        <p>Licenciatura en Informática</p>
        <p>Hackaton "40 años de la Licenciatura en Informática"</p>
    </div>
    <div>
        <p>Equipo Pumitas Juniors</p>
    </div>
    <div>
        <p>Nombre del integrante</p>
        <p>Estudiante de tercer semestre de la carrera de Informática</p>
        <p>Colaboración principal:</p>
        <p>Contacto:</p>
    </div>
    <div>
        <p>Hecho en México. D.R. © 2025</p>
    </div> -->
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
