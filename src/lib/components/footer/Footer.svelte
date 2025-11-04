<script>
    import { goto } from "$app/navigation";
    import IntegrantesCard from "$lib/components/cards/IntegrantesCard.svelte";
    const integrantes = [
        {
            nombre: "Rosario",
            descripcion: "Descripción breve, experiencia, contribuciones al proyecto u otra información que se quiera mostrar a manera de presentación del integrante.",
            imagen: "foto1.jpg",
            linkedin: "#",
            github: "#",
            email: "#"
        },
        {
            nombre: "Rocio",
            descripcion: "Descripción breve, experiencia, contribuciones al proyecto u otra información que se quiera mostrar a manera de presentación del integrante.",
            imagen: "foto4.jpg",
            linkedin: "#",
            github: "#",
            email: "#"
        },
        {
            nombre: "Ruben Omar",
            descripcion: "Desarrollador fullstack con 3 años de experiencia. Lideré el desarrollo de la aplicación y contribuí al diseño, frontend, backend y base de datos.",
            imagen: "foto3.jpg",
            linkedin: "#",
            github: "#",
            email: "#"
        },
        {
            nombre: "Antonio",
            descripcion: "Descripción breve, experiencia, contribuciones al proyecto u otra información que se quiera mostrar a manera de presentación del integrante.",
            imagen: "foto2.jpg",
            linkedin: "#",
            github: "#",
            email: "#"
        }
    ];

    function navigateTo(route) {
        goto(route);
    }
</script>

<!-- AQUI INICIA EL HTML -->
<div class="full-container f-col team-page">
    
    <div class="contenedor1 container f-row f-center-center">
        <img class="imagen" src="##" alt="logo unam">
        <img class="imagen" src="##" alt="logo unam">
        <img class="imagen" src="##" alt="logo fca">
    </div>
    
    <div class="unam-info f-col f-center-center">
        <h4>Universidad Nacional Autónoma de México</h4>
        <h4>Facultad de Contaduría y Administración</h4>
        <h3 class="hackathon-title">Hackatón "40 años de la Licenciatura en Informática"</h3>
    </div>
    
    
    <div class="contenedor2 container f-col team-intro">
        <h1>Equipo Pumitas Juniors</h1>
        <p class="description-text">
            Somos alumnos del tercer semestre de la Licenciatura en Informática, modalidad a distancia, 
            apasionados por la tecnología y el trabajo colaborativo. Buscamos generar soluciones creativas, innovadoras y de alto nivel.
        </p>
    </div>

    <h2 class="Centrado">Integrantes</h2>
    
    <div class="integrantes-grid">
        {#each integrantes as integrante}
            <IntegrantesCard {integrante} />
        {/each}
    </div>

    <footer>
        2025. Hecho en México. Bajo la licencia de Creative Commons Universal 1.0
    </footer>
</div>
<!-- AQUI TERMINA EL HTML -->
<style>
    .team-page {
        background-color: var(--color-primario);
        color: white;
        padding: 2rem var(--container-padding);
        min-height: 100vh;
    }

    .Centrado {
        text-align: center;
        color: white;
        margin: 2rem 0;
    }

    .team-intro {
        align-items: center;
        text-align: center;
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .team-intro h1 {
        color: white;
        margin: 0;
    }

    .description-text {
        max-width: 800px;
        line-height: 1.4;
        color: #f0f0f0;
        padding: 0 1rem;
        margin: 0;
    }

    .contenedor1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
    }

    .contenedor2 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;
    }

    .imagen {
        width: 120px;
        height: 150px;
        object-fit: contain;
    }

    .integrantes-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, auto);
        gap: 2rem;
        width: 90%;
        margin: 0 auto;
        padding: 1rem 0;
    }

    footer {
        margin-top: 3rem;
        text-align: center;
        font-size: 0.75rem;
        color: var(--color-primario-75);
    }
    
    .unam-info {
        text-align: center;
        margin-bottom: 2rem;
    }

    .unam-info h4 {
        margin: 0;
        color: white;
    }

    .hackathon-title {
        color: var(--color-acento);
        margin: 0.5rem 0;
    }

    @media (max-width: 768px) {
        .contenedor1 {
            flex-direction: column;
            gap: 1rem;
        }
        
        .imagen {
            width: 100px;
            height: 120px;
        }
        
        .integrantes-grid {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(4, auto);
            width: 100%;
            gap: 1.5rem;
        }
    }
</style>