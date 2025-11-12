<script>
    import QuickSearch from "$lib/components/search/QuickSearch.svelte";
    import ReservationCard from "$lib/components/cards/ReservationCard.svelte"
    import Button from "$lib/components/buttons/BotonSimple.svelte"
    let textoBoton1 = "Ver"
    let textoBoton2 = "Crear reservacion"
</script>

<section class="container">
    <div class="section-title">
        <h3>Busqueda rápida</h3>
    </div>
    
    <QuickSearch>

    </QuickSearch>
</section>

<section class="reservaciones">
  <div class="titulo-reservaciones">
    <h2>Mis reservaciones</h2>
    <button class="ver-todas" on:click={verTodas}>Ver todas</button>
  </div>

  <!-- <div class="filtros">
    <div class="buscar">
      <input 
        type="text" 
        placeholder="Buscar" 
        bind:value={searchQuery}
      />
      <button class="btn-buscar" on:click={handleSearch}>🔍</button>
    </div>

    <div class="ordenar">
      <label for="orden">Ordenar por:</label>
      <select id="orden" bind:value={orderBy} on:change={handleOrderChange}>
        <option value="">Seleccionar</option>
        <option value="fecha">Fecha</option>
        <option value="auditorio">Auditorio</option>
        <option value="status">Status</option>
      </select>
    </div>
  </div> -->
</section>

<section class="container">
    <ReservationCard></ReservationCard>
</section>
    
<style>

</style>
