<script>
    import { navigateTo } from "$lib/utils/navigate.utils";
    import { onMount } from "svelte";
    import { mdiAccount } from "@mdi/js";
    import Icon from "../icons/Icon.svelte";
    import {
        Dropdown,
        DropdownHeader,
        DropdownItem,
        DropdownGroup,
    } from "flowbite-svelte";
    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        if (window.location.pathname == "/") {
            window.location.reload();
        } else {
            navigateTo("/login");
        }
    }
    // export let accion = null;
    let user = null;
    onMount(() => {
        const userString = localStorage.getItem("user");

        if (userString) {
            console.log(JSON.parse(userString));
            user = JSON.parse(userString);
        }
    });
</script>

<div class="container-perfil-usuario">
    <div class="nombre usuario">
        <h3>{user?.nombreUsuario}</h3>
    </div>
    <button class="boton-perfil-usuario" id="botonPerfil" type="button">
        <Icon path={mdiAccount} size={40} color={"var(--color-fondo)"}></Icon>
    </button>
    <Dropdown triggeredBy="#botonPerfil">
        <DropdownHeader>
            <span class="block text-sm"
                >{user?.nombreUsuario} {user?.apellidoPaterno}</span
            >
            <span class="block truncate text-sm font-medium"
                >{user?.correo}</span
            >
        </DropdownHeader>
        <DropdownGroup>
            <DropdownItem>Mi perfil</DropdownItem>
            <DropdownItem>Configuracion</DropdownItem>
        </DropdownGroup>
        <DropdownGroup>
            <DropdownItem>
                <button
                    on:click={logout}
                    class="w-full text-left px-2 py-1 clickable"
                    type="button"
                >
                    Cerrar sesión
                </button>
            </DropdownItem>
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
        height: 3.5rem;
        width: 3.5rem;
    }

    .boton-perfil-usuario:hover {
        cursor: pointer;
        background-color: var(--color-acento-hover);
    }

    h3 {
        color: var(--color-fondo);
        font-weight: 500;
    }

    .clickable {
        cursor: pointer;
    }
</style>
