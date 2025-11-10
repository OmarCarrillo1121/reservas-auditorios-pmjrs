<script>
    import { navigateTo } from "$lib/utils/navigate.utils";
    import { mdiAccount } from "@mdi/js";
    import Icon from "../icons/Icon.svelte";
    import { Dropdown, DropdownHeader, DropdownItem, DropdownGroup } from "flowbite-svelte";
    // export let accion = null;
</script>

<div class="container-perfil-usuario">
    <div class="nombre usuario">
        <h3>Usuario</h3>
    </div>
    <button
        class="boton-perfil-usuario"
        id="botonPerfil"
        type="button"
    >
        <Icon path={mdiAccount} size={48} color={"var(--color-fondo)"}></Icon>
    </button>
    <Dropdown triggeredBy="#botonPerfil">
        <DropdownHeader>
            <span class="block text-sm">Bonnie Green</span>
            <span class="block truncate text-sm font-medium"
                >name@flowbite.com</span
            >
        </DropdownHeader>
        <DropdownGroup>
            <DropdownItem>Mi perfil</DropdownItem>
            <DropdownItem>Configuracion</DropdownItem>
        </DropdownGroup>
        <DropdownGroup>
            <DropdownItem>Cerrar sesión</DropdownItem>
        </DropdownGroup>
    </Dropdown>
</div>

<style>
    .container-perfil-usuario {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        gap: 1rem;
    }

    .boton-perfil-usuario {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: var(--color-acento);
        height: 4rem;
        width: 4rem;
    }

    .boton-perfil-usuario:hover {
        cursor: pointer;
        background-color: var(--color-acento-hover);
    }

    h3 {
        color: var(--color-fondo);
        font-weight: 500;
    }
</style>
