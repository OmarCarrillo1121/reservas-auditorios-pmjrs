<script>
    import { onMount } from "svelte";
    import { getAllUsuarios } from "$lib/services/usuarios.service.js";
    import { navigateTo } from "$lib/utils/navigate.utils";

    import TablaBasica from "$lib/components/table/TablaBasica.svelte";
    import TablaFiltros from "$lib/components/table/TablaFiltros.svelte";
    import { tablaUsuariosColumnas }from "./tablaUsuariosColumnas";
    import SectionHeader from "$lib/components/header/SectionHeader.svelte";
    let columns = tablaUsuariosColumnas;
    let rows = [];

    let filtros = [{}, {}];
    let acciones = [
        {
            botonId: "crearUsuario",
            botonType: "search",
            tipo: "primario",
            textoBoton: "Crear usuario",
            accion: () => {navigateTo("usuarios/crear-usuario");
            },
        },
    ];

    onMount(async () => {
        try {
            rows = await getAllUsuarios();
            console.log(rows);
        } catch (err) {
            console.warn(err);
        }
    });
</script>

<section class="container">
    <SectionHeader titulo={`Lista de usuarios`}></SectionHeader>
    <TablaFiltros buscar={true} {filtros} {acciones}></TablaFiltros>
    <TablaBasica {columns} {rows} />
</section>

<style>
</style>
