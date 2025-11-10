<script>
    import MainHeader from '$lib/components/header/MainHeader.svelte';
    import Navbar from '$lib/components/navbar/Navbar.svelte';
    import { mdiTicketConfirmationOutline, mdiAccountOutline, mdiTheater, mdiFormatListBulleted } from '@mdi/js';
	let { children } = $props();
    const navigationItems = [
        {
            label: 'Reservaciones',
            icon: mdiTicketConfirmationOutline,
            iconSize: 32,
            href: '/admin/reservaciones'
        },
        {
            label: 'Usuarios',
            icon: mdiAccountOutline,
            iconSize: 32,
            href: '/admin/usuarios'
        },
        {
            label: 'Recintos',
            icon: mdiTheater,
            iconSize: 32,
            href: '/admin/recintos'
        },
        {
            label: 'Catalogos',
            icon: mdiFormatListBulleted,
            iconSize: 32,
            href: '/admin/catalogos'
        }
    ]
</script>

<MainHeader/>
<Navbar navbarItems={navigationItems}></Navbar>

<main>
	{@render children?.()}
</main>
    