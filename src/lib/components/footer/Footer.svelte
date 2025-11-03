<script>
    import { goto } from "$app/navigation";
    function navigateTo(route) {
        goto(route);
    }

</script>
<!-- AQUI INICIA EL HTML -->
<span>ReservationCard works!</span>

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
    
    <table class="tabla-integrantes">
        <thead>
        <tr>
            <td class="integrante">
                <!-- <img src="foto1.jpg" alt="Foto Rosario"> -->
                <h3>Rosario</h3>
                <p class="member-desc">Descripción breve, experiencia, contribuciones al proyecto u otra información que se quiera mostrar a manera de presentación del integrante.</p>
                <div class="f-row social-icons">
                    <span class="icon" title="LinkedIn">💼</span>
                    <span class="icon" title="GitHub">⚡</span>
                    <span class="icon" title="Email">📧</span>
                </div>
            </td>
            <td class="integrante">
                <!-- <img src="foto4.jpg" alt="Foto Rocio"> -->
                <h3>Rocio</h3>
                <p class="member-desc">Descripción breve, experiencia, contribuciones al proyecto u otra información que se quiera mostrar a manera de presentación del integrante.</p>
                <div class="f-row social-icons">
                    <span class="icon" title="LinkedIn">💼</span>
                    <span class="icon" title="GitHub">⚡</span>
                    <span class="icon" title="Email">📧</span>
                </div>
            </td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td class="integrante">
                <!-- <img src="foto3.jpg" alt="Foto Omar"> -->
                <h3>Ruben Omar</h3>
                <p class="member-desc">Desarrollador fullstack con 3 años de experiencia. Lideré el desarrollo de la aplicación y contribuí al diseño, frontend, backend y base de datos.</p>
                <div class="f-row social-icons">
                    <span class="icon" title="LinkedIn">💼</span>
                    <span class="icon" title="GitHub">⚡</span>
                    <span class="icon" title="Email">📧</span>
                </div>
            </td>
            <td class="integrante">
                <!-- <img src="foto2.jpg" alt="Foto Antonio"> -->
                <h3>Antonio</h3>
                <p class="member-desc">Descripción breve, experiencia, contribuciones al proyecto u otra información que se quiera mostrar a manera de presentación del integrante.</p>
                <div class="f-row social-icons">
                    <span class="icon" title="LinkedIn">💼</span>
                    <span class="icon" title="GitHub">⚡</span>
                    <span class="icon" title="Email">📧</span>
                </div>
            </td>
        </tr>
        </tbody>
    </table>

    <footer>
        2025. Hecho en México. Bajo la licencia de Creative Commons Universal 1.0
    </footer>
</div>

<style>
    .team-page {
        background-color: var(--color-primary);
        color: white;
        padding: 2rem var(--container-padding);
        font-family: var(--font-body);
        min-height: 100vh;
    }

    .Centrado {
        text-align: center;
        color: white;
        font-family: var(--font-title);
        margin: 2rem 0;
    }

    .team-intro {
        align-items: center;
        text-align: center;
        gap: 1rem;
        margin-bottom: 2rem;
        font-family: var(--font-title);
    }

    .team-intro h1 {
        color: white;
        font-weight: 500;
        font-size: 1.8rem;
        margin: 0;
    }

    .description-text {
        max-width: 800px;
        font-size: 1rem;
        line-height: 1.4;
        color: #f0f0f0;
        font-family: var(--font-body);
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

    .tabla-integrantes {
        width: 90%;
        margin: 0 auto;
        border-collapse: collapse;
    }
    
    .integrante {
        border: 1px solid var(--color-accent);
        padding: 2rem;
        text-align: center;
        vertical-align: top;
        background-color: var(--color-bg-cards);
        color: var(--color-text-primary);
    }
    
    .integrante img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 1rem;
        border: 3px solid var(--color-accent);
    }
    
    .integrante h3 {
        margin: 1rem 0;
        color: var(--color-primary);
        font-family: var(--font-title);
        font-size: 1.2rem;
    }
    
    .member-desc {
        font-size: 0.9rem;
        margin: 1rem 0;
        line-height: 1.4;
        color: var(--color-text-primary);
        font-family: var(--font-body);
    }

    .social-icons {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-top: 1rem;
    }

    .icon {
        color: var(--color-primary);
        font-size: 1.2rem;
    }

    footer {
        margin-top: 3rem;
        text-align: center;
        font-size: 0.75rem;
        color: var(--color-primary-75);
        font-family: var(--font-body);
    }
    
    .unam-info {
    font-family: var(--font-title);
    text-align: center;
    margin-bottom: 2rem;
}

.unam-info h4 {
    margin: 0;
    color: white;
}

.hackathon-title {
    color: var(--color-accent);
    margin: 0.5rem 0;
    font-family: var(--font-title);
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
        
        .tabla-integrantes {
            width: 100%;
        }
        
        .integrante {
            padding: 1rem;
        }
    }
</style>