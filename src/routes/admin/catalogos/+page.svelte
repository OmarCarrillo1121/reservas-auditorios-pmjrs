<script>
    import TablaBasica from "$lib/components/table/TablaBasica.svelte";
    import reservationsData from "$lib/data/reservations";
    console.log(reservationsData);
    let { columns, rows } = reservationsData;
</script>

<section class="container">
    <TablaBasica {columns} {rows}/>
</section>
    
<style>
    
</style>

