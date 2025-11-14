<script>
    import { onMount } from "svelte";
    import { api } from "$lib/services/api.service.js";
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
    import { listaRecintos } from "$lib/data/recinto/recintos";
    import SectionHeader from "$lib/components/header/SectionHeader.svelte";

    let listaAuditorios = [];
    let usuario = null;

    onMount(async () => {
        usuario = getUsuarioLocal();
        console.log("Usuario actual:", usuario);

        usuario && usuario.rolUsuario == "user" ? navigationItems.push({
        label: "Panel usuario",
        icon: null,
        iconSize: 32,
        href: "/reservas",
    }) : null;

    usuario && usuario.rolUsuario == "admin" ? navigationItems.push({
        label: "Panel admin",
        icon: null,
        iconSize: 32,
        href: "/admin",
    }) : null;
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
    <SectionHeader titulo="Proximos eventos"></SectionHeader>
    <Carousel {images} slideFit={'cover'} duration={10000} style="height: 400px;">
        <Controls />
        <CarouselIndicators />
    </Carousel>
</section>

<section id="auditorios" class="container">
    <SectionHeader titulo="Auditorios"></SectionHeader>

    <div class="cards-container">
        {#each listaRecintos as auditorioData}
            <AuditoriumCard {auditorioData} />
        {/each}
    </div>
</section>

<section id="croquis" class="container">
    <SectionHeader titulo="Croquis de localizacion"></SectionHeader>
    <div style="height: 760px; filter: grayscale(40%);">
        <img src='/images/croquis/croquis.png' alt="croquis"/>
    </div>
</section>

<footer id="sobreNosotros" class="full-container">
    <SectionHeader></SectionHeader>
    <Footer />
</footer>

<style>
    .cards-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: center;
        align-items: center;
        padding: 2rem 0rem;
        gap: 2rem;
    }
</style>
