<script>
    import Icon from "$lib/components/icons/Icon.svelte";
    import { navigateTo } from "$lib/utils/navigate.utils";
    export let navbarItems = [];
</script>

<nav>
    <section class="container">
        <ul>
            {#each navbarItems as item}
                <li>
                    <button onclick={() => navigateTo(item.href)}>
                        <Icon
                            path={item.icon}
                            size={item.iconSize ? item.iconSize : 32}
                        />
                        <a href={item.href}>
                            <h4>{item.label}</h4>
                        </a>
                    </button>
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
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    ul {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    button {
        display: flex;
        align-items: center;
        padding: 1rem 1rem;
        transition: background-color 0.2s;
        cursor: pointer;
    }

    li:hover {
        background-color: var(--color-primario-50);
    }

    a {
        font-family: var(--font-title);
        color: var(--color-fondo);
        font-weight: 500;
        font-size: 1rem;
    }
</style>
