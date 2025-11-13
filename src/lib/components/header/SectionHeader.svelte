<script>
    export let titulo = '';
    export let paddingTop = '2';
    export let paddingBottom = '1';
    export let justify = 'flex-start';

    $: claseHeader = `section paddingTop-${paddingTop} paddingBottom-${paddingBottom} justify-${justify}`;
</script>

<section class={claseHeader}>
    <h2>{titulo}</h2>
</section>

<style>
    section {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }

    .paddingTop-0 {
        padding-top: 0rem;
    }
    .paddingTop-1 {
        padding-top: 1rem;
    }
    .paddingTop-2 {
        padding-top: 2rem;
    }
    .paddingBottom-0 {
        margin-bottom: 0rem;
    }
    .paddingBottom-1 {
        padding-bottom: 2rem;
    }
    .paddingBottom-2 {
        padding-bottom: 2rem;
    }

    .justify-left {
        justify-content: flex-start;
    }
    .justify-center {
        justify-content: center;
    }
    .justify-right {
        justify-content: flex-end;
    }
    h2 {
        font-weight: 500;
    }
</style>