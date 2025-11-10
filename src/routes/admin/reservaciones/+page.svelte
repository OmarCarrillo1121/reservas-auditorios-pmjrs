<script>
    import TablaBasica from "$lib/components/table/TablaBasica.svelte";
    import TablaFiltros from "$lib/components/table/TablaFiltros.svelte";
    import reservationsData from "$lib/data/reservations";
    import SectionHeader from "$lib/components/header/SectionHeader.svelte";
    console.log(reservationsData);
    let { columns, rows } = reservationsData;
</script>

<section class="container">
    <SectionHeader titulo={`Lista de reservaciones`}></SectionHeader>
    <TablaFiltros></TablaFiltros>
    <TablaBasica {columns} {rows}/>
</section>
    
<style>
    
</style>

