<script>
    import QuickSearch from "$lib/components/search/QuickSearch.svelte";
    import ReservationCard from "$lib/components/cards/ReservationCard.svelte"
    import Button from "$lib/components/buttons/BotonSimple.svelte"
    import SectionHeader from "$lib/components/header/SectionHeader.svelte";
    import TablaFiltros from "$lib/components/table/TablaFiltros.svelte";
    let textoBoton1 = "Ver"
    let textoBoton2 = "Crear reservacion"
</script>

<section class="container">
  <SectionHeader titulo={'Busqueda rápida'}/>
  <QuickSearch/>
</section>

<section class="container">
  <SectionHeader titulo={'Mis reservaciones'}/>
  <TablaFiltros></TablaFiltros>
  <ReservationCard></ReservationCard>
  
</section>
    
<style>

</style>
