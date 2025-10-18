<script>
    import LoginForm from "$lib/components/forms/LoginForm.svelte";
</script>

<div class="center-div login-container">
    <div class="content-left">
        <span class="logos-container">
            <img class="logos" src="/svg/unam-logo.svg" alt="" />
            <img class="logos" src="/svg/fca-logo.svg" alt="" />
        </span>

        <span class="header-title">
            <!-- <h3>Universidad Nacional Autónoma de México</h3> -->
            <h3>Facultad de Contaduría y Administración</h3>
            <h2>Sistema de Información para la Gestión de Auditorios</h2>
        </span>
    </div>
    <div class="content-right">
        <LoginForm />
    </div>
</div>
    
<style>

    .center-div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .login-container {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .content-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--color-primary);
        width: 35%;
        height: 80vh;
        gap: 2rem;
    }

    .content-right {
        background-color: var(--color-bg);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 65%;
        height: 80vh;
    }

    .logos {
        filter: invert(1);
        width: 6rem;
        height: 6rem;
    }

    .logos-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    .header-title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: var(--color-text-primary);
    }

</style>
