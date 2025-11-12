<script>
    import SearchField from "../input/SearchField.svelte";
    import SelectField from "../input/SelectField.svelte";
    import Boton from "../buttons/BotonSimple.svelte";
    export let buscar = false;
    export let filtros = [];
    export let acciones = [];
    console.log(acciones);
</script>

<section class="filter-container">
    <section class="left-container">
        {#if buscar}
            <SearchField id={"buscar"} label={"Buscar"} placeholder={"Buscar..."}/>
        {/if}
        {#if filtros && filtros.length > 0}
            {#each filtros as filtro}
        <SelectField/>
            {/each}
        {/if}
    </section>

    <section class="right-container">
        {#if acciones && acciones.length > 0}
            {#each acciones as accion}
                <Boton 
                    botonId={accion.botonId} 
                    botonType={accion.botonType} 
                    tipo={accion.tipo} 
                    textoBoton={accion.textoBoton} 
                    accion={accion.accion}
                />
            {/each}
        {/if}
        
    </section>

    <!-- <input type="search">
    <label for="select">Filtrar</label>
    <section></section>
    <select name="" id="select">
        <option value=""></option>
    </select> -->
</section>

<style>
    .filter-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 0 1rem 0;
    }

    .left-container {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding: 0 0 1rem 0;
    }

    .right-container {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        padding: 0 0 1rem 0;
    }
</style>
