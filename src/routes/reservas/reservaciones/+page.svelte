<script>
    import BasicTable from "$lib/components/table/BasicTable.svelte";
    import reservationsData from "$lib/data/reservations";
    console.log(reservationsData);
    let { columns, rows } = reservationsData;
</script>

<section class="container">
    <BasicTable {columns} {rows}/>
</section>
    
<style>
    
</style>

