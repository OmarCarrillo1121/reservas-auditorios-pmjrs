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
<section class="container">
    <ReservationCard></ReservationCard>
</section>
    
<style>

</style>
