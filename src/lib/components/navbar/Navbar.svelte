<script>
    import { mdiHomeOutline, mdiTicketOutline, mdiCalendarMonthOutline } from '@mdi/js';
    import Icon from "$lib/components/icons/Icon.svelte";
    import { navigateTo } from "$lib/utils/navigate.utils";
</script>

<nav>
    <section class="container">
        <ul>
            <li>
                <Icon path={mdiHomeOutline} size={32} /><a
                    href="dashboard"
                    onclick={() => navigateTo("/dashboard")}>Inicio</a
                >
            </li>
            <li>
                <Icon path={mdiTicketOutline} size={32} /><a
                    href="reservations"
                    onclick={() => navigateTo("/reservations")}
                    >Mis reservaciones</a
                >
            </li>
            <li>
                <Icon path={mdiCalendarMonthOutline} size={32} /><a
                    href="calendar"
                    onclick={() => navigateTo("/calendar")}>Calendario</a
                >
            </li>
        </ul>
    </section>
</nav>

<style>
    nav {
        background-color: aquamarine;
        section {
            padding: 1rem;
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 1rem;
            ul {
                display: flex;
                flex-direction: row;
                gap: 3rem;
            }
            a {
                font-family: var(--font-title);
                font-weight: 500;
                font-size: 1.1rem;
                cursor: pointer;
            }
        }
    }
</style>
