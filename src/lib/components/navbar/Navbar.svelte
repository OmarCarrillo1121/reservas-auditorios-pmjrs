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
                <a href={item.href} onclick={() => navigateTo(item.href)}>{item.label}</a>
            </li>
            {/each}
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
