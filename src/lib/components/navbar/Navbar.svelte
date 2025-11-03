<script>
    import Icon from "$lib/components/icons/Icon.svelte";
    import { navigateTo } from "$lib/utils/navigate.utils";
    export let navbarItems = []
</script>

<nav>
    <section class="container">
        <ul>
            {#each navbarItems as item}
            <li>
                <Icon path={item.icon} size={item.iconSize ? item.iconSize : 32} />
                <a href={item.href} onclick={() => navigateTo(item.href)}>
                    <h4>{item.label}</h4>
                </a>
            </li>
            {/each}
        </ul>
    </section>
</nav>

<style>
    nav {
        background-color: var(--color-primario-75);
    }
        section {
            padding: 1rem;
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 1rem;
        }
            ul {
                display: flex;
                flex-direction: row;
                gap: 3rem;
            }
            a {
                font-family: var(--font-title);
                color: var(--color-fondo);
                font-weight: 500;
                font-size: 1rem;
                cursor: pointer;
            }
    
</style>
