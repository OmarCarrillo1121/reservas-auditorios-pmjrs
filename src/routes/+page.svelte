<script>
    import { onMount } from "svelte";
    import { api } from "$lib/services/api.service.js";
    import { getAuditorios } from "$lib/services/auditorios.service";
    import AuditoriumCard from "$lib/components/cards/AuditoriumCard.svelte";
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

    const headerButtons = [
        {
            tipo: 'secundario',
            label: "Iniciar sesion",
            accion: () => navigateTo('/login')
        }
    ];

    const navigationItems = [
        {
            label: "Proximos eventos",
            icon: null,
            iconSize: 32,
            href: "#proximosEventos",
        },
        {
            label: "Auditorios",
            icon: null,
            iconSize: 32,
            href: "#auditorios",
        },
        {
            label: "Croquis",
            icon: null,
            iconSize: 32,
            href: "#croquis",
        },
        {
            label: "Sobre nosotros",
            icon: null,
            iconSize: 32,
            href: "#sobreNosotros",
        },
    ];
</script>

<MainHeader buttons={headerButtons}></MainHeader>
<Navbar navbarItems={navigationItems}></Navbar>

<section id="proximosEventos" class="container">
    <h3>Próximos eventos</h3>
    <Carousel {images} duration={10000}>
        <Controls />
        <CarouselIndicators />
    </Carousel>
</section>

<section id="auditorios" class="container">
    <h3>Auditorios</h3>

    <div class="cards-container">
        {#each listaAuditorios as auditorioData}
            <AuditoriumCard {auditorioData} />
        {/each}
    </div>
</section>

<section id="croquis" class="container">
    <h3>Croquis de localizacion</h3>
    <div style="height: 800px; border: solid 1px #000"></div>
</section>

<footer id="sobreNosotros">
    <Footer />
</footer>

<style>
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
