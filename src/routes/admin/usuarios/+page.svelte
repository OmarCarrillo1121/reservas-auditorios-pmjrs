<script>
    import TablaBasica from "$lib/components/table/TablaBasica.svelte";
    import TablaFiltros from "$lib/components/table/TablaFiltros.svelte";
    import reservationsData from "$lib/data/reservations";
    import SectionHeader from "$lib/components/header/SectionHeader.svelte";
    console.log(reservationsData);
    let { columns, rows } = reservationsData;
    let filtros = [
        {

        },
        {

        }
    ]
    let acciones = [
        {}
    ]
</script>

<section class="container">
    <SectionHeader titulo={`Lista de usuarios`}></SectionHeader>
    <TablaFiltros buscar={true} filtros={filtros} accion={acciones}></TablaFiltros>
    <TablaBasica {columns} {rows}/>
</section>
    
<style>
    
</style>

