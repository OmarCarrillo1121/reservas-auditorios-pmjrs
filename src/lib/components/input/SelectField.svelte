<script>
    let { id, label, value, optionsList = [] } = $props();
</script>

<div class='input-container'>
    <label for={id}>
        {label}
    </label>
    <select id={id} name={id} bind:value>
        <option value="0">Sin seleccion</option>
        {#if optionsList.length > 0}
            {#each optionList as option}
            <option value="">{option.name}</option>
            {/each} 
        {/if}
    </select>
</div>

<style>
    label {
        font-size: 1rem;
    }
    select {
        height: 3rem;
        border: solid 1px #000;
        border-radius: 1rem;
        background-color: var(--color-bg-cards);
        width: 100%;
    }
    .input-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
</style>
