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

    import { mdiEmailOutline, mdiGithub, mdiLinkedin } from '@mdi/js'
    import Icon from '../icons/Icon.svelte';
    
</script>

<div class="card-container">
    <div class="card-header">
        {#if integrante.imagen}
            <img src={integrante.imagen} alt='Foto de {integrante.nombre}' />
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
            {#if integrante.linkedin}
                <button class="icon-btn" on:click={handleLinkedIn} title="LinkedIn">
                    <Icon path={mdiLinkedin} size={32} color={'var(--color-texto-secundario)'}/>
                </button>
            {/if}
            {#if integrante.github}
                <button class="icon-btn" on:click={handleGitHub} title="GitHub">
                    <Icon path={mdiGithub} size={32} color={'var(--color-texto-secundario)'}/>
                </button>
            {/if}
            {#if integrante.email}
                <button class="icon-btn" on:click={handleEmail} title="Email">
                    <Icon path={mdiEmailOutline} size={32} color={'var(--color-texto-secundario)'}/>
                </button>
            {/if}
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
        border: 2px solid var(--color-acento); 
        border-radius: 1.5rem; 
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); 
        transition: transform 0.3s ease;
        height: 100%; 
    }

    .card-container:hover {
        transform: translateY(-5px); 
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    }

    .card-header {
        height: 14rem; 
        width: 100%;
        border-top-left-radius: 1.3rem;
        border-top-right-radius: 1.3rem;
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
        font-size: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: var(--color-primario-25);
    }
    .card-body {
    
        height: auto; 
        min-height: 10rem; 
        width: 100%;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start; 
        align-items: center;
        gap: 0.75rem;
        box-sizing: border-box;
    }
    .integrante-nombre {
        margin: 0;
        color: var(--color-primario);
        font-family: var(--fuente-titlo);
        text-align: center;
        font-size: 1.5rem;
    }
    .member-desc {
        color: var(--color-texto-primario);
        font-family: var(--fuente-cuerpo);
        margin: 0;
        text-align: center;
        line-height: 1.4;
        flex-grow: 1; 
    }
    .card-footer {
        height: 4.5rem; 
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        box-sizing: border-box;
        background-color: var(--color-fondo-tarjeta);
        border-top: 1px solid var(--color-acento); 
        border-bottom-left-radius: 1.3rem;
        border-bottom-right-radius: 1.3rem;
    }
    .social-icons {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
    }
    .icon-btn {
        background: none;
        border: 2px solid var(--color-acento); 
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 50%;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-acento); 
        font-size: 1.5rem;
    }

    .icon-btn:hover {
        background-color: var(--color-acento);
        color: white;
        transform: scale(1.15);
        border-color: var(--color-acento);
    }
    @media (max-width: 480px) {
        .card-container {
            border-radius: 1rem;
        }
        .card-header {
            height: 12rem;
            border-top-left-radius: 0.8rem;
            border-top-right-radius: 0.8rem;
        }
        .card-body {
            padding: 1rem;
            min-height: 8rem;
        }
        .integrante-nombre {
            font-size: 1.3rem;
        }
        .member-desc {
            font-size: 0.85rem;
        }
        .card-footer {
            height: 4rem;
            border-bottom-left-radius: 0.8rem;
            border-bottom-right-radius: 0.8rem;
        }
    }
</style>