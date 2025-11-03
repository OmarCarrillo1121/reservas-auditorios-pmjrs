<script>
    import QuickSearch from "$lib/components/search/QuickSearch.svelte";
    import ReservationCard from "$lib/components/cards/ReservationCard.svelte"
    import Button from "$lib/components/buttons/BotonSimple.svelte"
    let textoBoton1 = "Ver"
    let textoBoton2 = "Crear reservacion"
</script>

<section class="container">
    <QuickSearch>

    </QuickSearch>
</section>
<section class="container">
    <ReservationCard></ReservationCard>
</section>

<Button textoBoton={textoBoton1}></Button>
<Button textoBoton={textoBoton2}></Button>
    
<style>

</style>
