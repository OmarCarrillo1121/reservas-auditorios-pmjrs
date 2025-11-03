<script>
    import MainHeader from '$lib/components/header/MainHeader.svelte';
    import Navbar from '$lib/components/navbar/Navbar.svelte';
    import { mdiHomeOutline, mdiTicketOutline, mdiCalendarMonthOutline } from '@mdi/js';
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
        }
    ]
</script>

<MainHeader/>
<Navbar navbarItems={navigationItems}></Navbar>

<main>
	{@render children?.()}
</main>
    