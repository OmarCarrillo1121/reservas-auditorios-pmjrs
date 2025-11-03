<script>
    import { onMount } from "svelte";
    import { api } from "$lib/services/api.service.js";
    import { getAuditorios } from "$lib/services/auditorios.service";
    import AuditoriumCard from "$lib/components/cards/AuditoriumCard.svelte";
    // import Carousel from "$lib/components/carousel/Carousel.svelte";
    import Footer from "$lib/components/footer/Footer.svelte";
    import { Carousel, Controls, CarouselIndicators } from "flowbite-svelte";
    import { images } from "$lib/data/carousel";
    import { navigateTo } from "$lib/utils/navigate.utils";
    import MainHeader from "$lib/components/header/MainHeader.svelte";
    import Navbar from "$lib/components/navbar/Navbar.svelte";

    let listaAuditorios = [];

    onMount(async () => {
        try {
            listaAuditorios = await getAuditorios();
            console.log(listaAuditorios);
        } catch (err) {
            console.warn(err);
        }
    });


</script>

<MainHeader/>
<Navbar></Navbar>

<section class="container">
    <h2>PROXIMOS EVENTOS</h2>
    <Carousel {images} duration={10000}>
        <Controls />
        <CarouselIndicators />
    </Carousel>
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
    <Footer />
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
    nav {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        background-color: var(--color-primary-50);
        height: 2rem;
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
