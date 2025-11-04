<script>
    export let integrante = {};

    function handleGitHub(){
        console.log('Abrir GitHub de', integrante.nombre);
        if (integrante.github) window.open(integrante.github, '_blank');
    }
    function handleLinkedIn(){
        console.log('Abrir LinkedIn de', integrante.nombre);
        if (integrante.linkedin) window.open(integrante.linkedin, '_blank');
    }
    function handleEmail(){
        console.log('Enviar email a', integrante.nombre);
        if (integrante.email) window.location.href = 'mailto:${integrante.email}';
    }
</script>

<div class="card-container">
    <div class="card-header">
        {#if integrante.imagen}
            <img src={integrante.imagen} alt='Foto de integrante.nombre' />
        {:else}
            <div class="placeholder-img">
                <span>📷</span>
            </div>
        {/if}
    </div>
    
    <div class="card-body">
        <h3 class="integrante-nombre">{integrante.nombre}</h3>
        <p class="member-desc">{integrante.descripcion}</p>
    </div>
    
    <div class="card-footer">
        <div class="social-icons">
            <button class="icon-btn" on:click={handleLinkedIn} title="LinkedIn">
                💼
            </button>
            <button class="icon-btn" on:click={handleGitHub} title="GitHub">
                ⚡
            </button>
            <button class="icon-btn" on:click={handleEmail} title="Email">
                📧
            </button>
        </div>
    </div>
</div>

<style>
    .card-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--color-fondo-tarjeta);
        color: var(--color-texto-primario);
        max-width: 200px;
        border: 1px solid var(--color-acento);
        border-radius: 1rem;
        overflow: hidden;
        font-family: var(--fuente-cuerpo);
    }

    .card-header {
        border: 1px solid var(--color-acento);
        height: 12rem;
        width: 100%;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-fondo-tarjeta);
        overflow: hidden;
    }

    .card-header img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .placeholder-img {
        color: var(--color-primario-50);
        font-size: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: var(--color-primario-25);
    }
    .card-body {
        border: 1px solid var(--color-acento);
        height: 11rem;
        width: 100%;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        box-sizing: border-box;
    }
    .integrante-nombre {
        margin: 0;
        color: var(--color-primario);
        font-family: var(--fuente-titlo);
        text-align: center;
    }
    .member-desc {
        color: var(--color-texto-primario);
        font-family: var(--fuente-cuerpo);
        margin: 0;
        text-align: center;
        font-size: 0.8rem;
        line-height: 1.3;
    }
    .card-footer {
        border: 1px solid var(--color-acento);
        height: 4rem;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        box-sizing: border-box;
        background-color: var(--color-fondo-tarjeta);
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }
    .social-icons {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }
    .icon-btn {
        background: none;
        border: 1px solid var(--color-borde);
        cursor: pointer;
        padding: 0.4rem;
        border-radius: 50%;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-primario);
        font-size: 1.2rem;
    }

    .icon-btn:hover {
        background-color: var(--color-primario);
        color: white;
        transform: scale(1.1);
        border-color: var(--color-primario);
    }
    @media (max-width: 480px) {
        .card-container {
            max-width: 100%;
        }   
        .card-body {
            padding: 0.8rem;
            height: 10rem;
        }
        .integrante-nombre {
            font-size: 1.1rem;
        }
        .member-desc {
            font-size: 0.75rem;
        }
    }
</style>