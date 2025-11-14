<script>
    import { goto } from "$app/navigation";
    import IntegrantesCard from "$lib/components/cards/IntegrantesCard.svelte";
    const integrantes = [
        {
            nombre: "Rosario",
            descripcion: "Estudiante de Informática. 3er Semestre. Aprendiz y colaboradora en el desarrollo de parte del fronted de la aplicación",
            imagen: "/images/integrantes/foto1.png",
            linkedin: "https://mx.linkedin.com/",
            github: "https://github.com/Rous307",
            email: "rousertqe@gmail.com"
        },
        {
            nombre: "Rocio",
            descripcion: "Estudiante de Informática. Participé en el desarrollo del frontend de la aplicación web como parte de mi proceso de formación en desarrollo web",
            imagen: "/images/integrantes/foto2.png",
            linkedin: "https://www.linkedin.com/in/rocio-santana-8a1a15346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            github: "https://github.com/rocio1984",
            email: "rocio31chan@gmail.com"
        },
        {
            nombre: "Omar",
            descripcion: "Desarrollador fullstack con 3 años de experiencia. Lideré el desarrollo de la aplicación y contribuí al diseño, frontend, backend y base de datos.",
            imagen: "/images/integrantes/foto4.png",
            linkedin: "https://www.linkedin.com/in/omar-rodriguez-carrillo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            github: "https://github.com/OmarCarrillo1121",
            email: "omarcarrillo1121@gmail.com"
        },
    {
    nombre: "Antonio",
    descripcion: "Estudiante de Informática. Colaboré en el desarrollo del frontend de la aplicación web.",
    imagen: "/images/integrantes/foto3.png",
    linkedin: "https://www.linkedin.com/in/joseantoniogarciasandoval87",
    github: "https://github.com/joseantoniogsmx",
    email: "joseantoniogsmx@gmail.com"
    }
    ];

    function navigateTo(route) {
        goto(route);
    }
</script>

<!-- AQUI INICIA EL HTML -->
<div class="full-container f-col team-page">
    <div class="header-content f-col f-center-center">
        <div class="contenedor1 container f-row f-center-center">
            <img class="imagen" src="/svg/unam-logo.svg" alt="logo unam">
            <img class="imagen" src="/svg/lema-logo.png" alt="logo unam">
            <img class="imagen" src="/svg/fca-logo.svg" alt="logo fca">
        </div>
        
        <div class="unam-info f-col f-center-center">
            <h4>Universidad Nacional Autónoma de México</h4>
            <h4>Facultad de Contaduría y Administración</h4>
            <h3 class="hackathon-title">Hackatón "40 años de la Licenciatura en Informática"</h3>
        </div>
    </div>
    
    </div>
<!--<div class="full-container f-col team-page">
    <div class="header-content f-col f-center-center">
    <div class="contenedor1 container f-row f-center-center">
        <img class="imagen" src="/svg/unam-logo.svg" alt="logo unam">
        <img class="imagen" src="/svg/lema-logo.png" alt="logo unam">
        <img class="imagen" src="/svg/fca-logo.svg" alt="logo fca">
    </div>
    </div>

    <div class="unam-info f-col f-center-center">
        <h4>Universidad Nacional Autónoma de México</h4>
        <h4>Facultad de Contaduría y Administración</h4>
        <h3 class="hackathon-title">Hackatón "40 años de la Licenciatura en Informática"</h3>
    </div>-->
    
    <div class="page-main-content f-col f-center-center">
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
    </div>

    <div class="creditos-footer">
        <p class="footer-text">
            &copy; 2025. Hecho en México.
            <span class="license">Bajo la licencia de Creative Commons Universal 1.0</span>
        </p>
    </div>
<!-- AQUI TERMINA EL HTML -->
<style>
     .header-content {
        width: 100%;
        background-color: var(--color-primario);
        padding: 2rem 0 3rem 0; 
    }
     .page-main-content {
        width: 100%;
        background-color: var(--color-primario);
        color: white;
        padding: 0 var(--container-padding) 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h1,h2,h3,h4{
        font-family: var(--fuente-titulos);
    }
    .team-page {
        background-color: var(--color-primario); 
        color: white;
        padding: 0;
        margin: 0;
        min-height: 100vh;
    }
    .Centrado {
        text-align: center;
        color: white;
        margin: 2rem 0;
        font-size: 2rem;
    }
     .team-intro {
        align-items: center;
        text-align: center;
        margin-bottom: 2rem; 
        max-width: 800px;
    }

    .team-intro h1 {
        color: white;
        margin: 0 0 1.5rem 0;
        font-weight: 600;
        font-size: 2.5rem;
    }
    .description-text {
        max-width: 700px;
        line-height: 1.6;
        color: rgba(255, 255, 255, 0.95);
        padding: 0 1rem;
        margin: 0;
        font-size: 1.1rem;
    }

     .contenedor1 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem; 
        gap: 4rem;
        padding: 0; 
    }

    .contenedor2 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;
    }

     .imagen {
        width: 140px;
        height: auto;
        object-fit: contain;
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
    }
     .creditos-footer {
        margin-top: 4rem;
        padding:2rem 0;
        border-top: 1px solid var(--color-acento);
        text-align: center;
        width: 100%;
        background: var(--color-primario-50); 
    }
    .footer-text {
        margin: 0;
        padding: 0.5rem 0;
        color: white;
        font-size: 1rem;
        font-family: var(--fuente-cuerpo);
        font-weight: 500;
    }
    .license {
        display: block;
        font-size: 0.85rem;
        margin-top: 0.5rem;
        color: var(--color-acento);
        font-family: var(--fuente-cuerpo);
    }

    .integrantes-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(300px, 1fr));
        grid-template-rows: repeat(2, auto);
        gap: 2rem;
        width: 90%;
        margin: 0 auto;
        padding: 2rem 0;
        justify-items: center;
        justify-content: center;
        max-width: 1000px;
    }
    .unam-info {
        text-align: center;
        margin-bottom: 1.5rem; 
    }

    .unam-info h4 {
        margin: 0.3rem 0;
        color: white;
        font-weight: 400;
        line-height: 1.3;
        font-size: 1.3rem;
    }

    .hackathon-title {
        color: var(--color-acento);
        margin: 1rem 0;
        font-weight: 500;
        padding: 0.8rem 1.5rem;
        border: 2px solid var(--color-acento);
        border-radius: 10px;
        display: inline-block;
        font-size: 1.5rem;
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
        .header-content {
            padding: 1.5rem 0 2rem 0; 
        }
        .unam-info h4 {
            font-size: 1.1rem;
        }
        .hackathon-title {
            font-size: 1.3rem;
            padding: 0.5rem 1rem;
        }

    }
</style>