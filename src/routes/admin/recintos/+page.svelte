<script>
    import { onMount } from "svelte";
    import TablaBasica from "$lib/components/table/TablaBasica.svelte";
    import { tablaRecintos } from "$lib/data/tablas/tablaRecintos";
    import { getRecintos } from "$lib/services/recintos.service";
    console.log(tablaRecintos);

    let { columns } = tablaRecintos;
    let rows = [];

    onMount(async () => {
        try {
            rows = await getRecintos();
            console.log(rows);
        } catch (err) {
            console.warn(err);
        }
    });
</script>

<section class="container">
    <TablaBasica {columns} {rows}/>
</section>
    
<style>
    
</style>

