<script>
    import { onMount } from "svelte";
    import { api } from "$lib/services/api.service.js";
    import { getRecintos } from "$lib/services/recintos.service";
    import AuditoriumCard from "$lib/components/cards/AuditoriumCard.svelte";
    import Footer from "$lib/components/footer/Footer.svelte";
    import { Carousel, Controls, CarouselIndicators } from "flowbite-svelte";
    import { images } from "$lib/data/carousel";
    import { navigateTo } from "$lib/utils/navigate.utils";
    import MainHeader from "$lib/components/header/MainHeader.svelte";
    import Navbar from "$lib/components/navbar/Navbar.svelte";
    import Boton from "$lib/components/buttons/BotonSimple.svelte";
    import { getUsuarioLocal } from "$lib/services/auth.service";
    import BotonPerfilUsuario from "$lib/components/buttons/BotonPerfilUsuario.svelte";

    let listaAuditorios = [];
    let usuario = null;

    onMount(async () => {
        usuario = getUsuarioLocal();
        console.log("Usuario actual:", usuario);
    });

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

{#if usuario && Object.keys(usuario).length > 0}
    <MainHeader>
        <BotonPerfilUsuario slot="acciones"></BotonPerfilUsuario>
    </MainHeader>
{:else}
    <MainHeader>
        <Boton
            slot="acciones"
            botonId={"iniciarSesion"}
            botonType={"button"}
            tipo={"primario-acento"}
            textoBoton={"Iniciar sesion"}
            accion={() => navigateTo("/login")}
        ></Boton>
    </MainHeader>
{/if}

<Navbar navbarItems={navigationItems}></Navbar>

<section id="proximosEventos" class="container">
    <section class="section-title">
        <h3>Próximos eventos</h3>
    </section>
    <Carousel {images} duration={10000}>
        <Controls />
        <CarouselIndicators />
    </Carousel>
</section>

<section id="auditorios" class="container">
    <section class="section-title">
        <h3>Auditorios</h3>
    </section>

    <div class="cards-container">
        {#each listaAuditorios as auditorioData}
            <AuditoriumCard {auditorioData} />
        {/each}
    </div>
</section>

<section id="croquis" class="container">
    <section class="section-title">
        <h3>Croquis de localizacion</h3>
    </section>
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
        background-color: var(--color-fondo-tarjeta);
        color: var(--color-texto-primario);
        padding: 1rem 8rem;
    }
</style>
