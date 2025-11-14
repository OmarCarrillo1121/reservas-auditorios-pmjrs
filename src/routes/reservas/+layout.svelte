<script>
    import MainHeader from '$lib/components/header/MainHeader.svelte';
    import Navbar from '$lib/components/navbar/Navbar.svelte';
    import { mdiHomeOutline, mdiTicketOutline, mdiCalendarMonthOutline, mdiPlus } from '@mdi/js';
    import BotonPerfilUsuario from '$lib/components/buttons/BotonPerfilUsuario.svelte';
    
	let { children } = $props();
    const navigationItems = [
        {
            label: 'Inicio',
            icon: mdiHomeOutline,
            iconSize: 32,
            href: '/reservas'
        },
        {
            label: 'Mis reservaciones',
            icon: mdiTicketOutline,
            iconSize: 32,
            href: '/reservas/mis-reservaciones'
        },
        {
            label: 'Calendario',
            icon: mdiCalendarMonthOutline,
            iconSize: 32,
            href: '/reservas/calendario'
        },
        {
            label: 'Crear reservacion',
            icon: mdiPlus,
            iconSize: 32,
            href: '/reservas/crear-reservacion'
        }
    ]
</script>

<MainHeader>
    <BotonPerfilUsuario
        slot="acciones"
        accion={() => navigateTo("/login")}
    ></BotonPerfilUsuario>
</MainHeader>
<Navbar navbarItems={navigationItems}></Navbar>

<main>
	{@render children?.()}
</main>
    