<!-- <script>
    import Icon from "../icons/Icon.svelte";
    export let id = "";
    export let label = "";
    export let optionsList = [];
    export let boton = null;
    export let accion = null;
    export let value = "";
    export let selectedItems = [];
    export let placeholder = "";

    let isOpen = false;
    let inputValue = "";
    let filteredOptions = [];

    $: filteredOptions = optionsList.filter(option =>
        option.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    function toggleDropdown() {
        isOpen = !isOpen;
    }

    function selectOption(option) {
        if (!selectedItems.some(item => item.id === option.id)) {
            selectedItems = [...selectedItems, option];
            inputValue = "";
        }
    }

    function removeItem(optionId) {
        selectedItems = selectedItems.filter(item => item.id !== optionId);
    }

    function handleClickOutside(event) {
        if (!event.target.closest(".combo-box-container")) {
            isOpen = false;
        }
    }
</script>

<svelte:window on:click={handleClickOutside} />

<div class="input-container">
    <label for={id}>
        {label}
    </label>
    <div class="combo-box-container">
        <div class="input-area-container">
            <div class="selected-items">
                {#each selectedItems as item (item.id)}
                    <div class="tag">
                        <span>{item.name}</span>
                        <button
                            type="button"
                            class="remove-btn"
                            on:click={() => removeItem(item.id)}
                        >
                            ✕
                        </button>
                    </div>
                {/each}
                <input
                    {id}
                    name={id}
                    type="text"
                    {placeholder}
                    bind:value={inputValue}
                    on:focus={() => (isOpen = true)}
                    class="combo-input"
                />
            </div>
            {#if boton}
                <button type="button" class="contenedor-icono" on:click={accion}>
                    <Icon
                        path={boton}
                        size={32}
                        color={"var(--color-fondo)"}
                    ></Icon>
                </button>
            {/if}
        </div>

        {#if isOpen && filteredOptions.length > 0}
            <div class="dropdown-list">
                {#each filteredOptions as option (option.id)}
                    <div
                        class="option"
                        on:click={() => selectOption(option)}
                        role="button"
                        tabindex="0"
                    >
                        {option.name}
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</div>

<style>
    label {
        font-size: 1rem;
    }

    .input-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .combo-box-container {
        width: 100%;
        position: relative;
    }

    .input-area-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 1rem;
    }

    .selected-items {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.5rem;
        width: 100%;
        min-height: 3rem;
        border: solid 1px var(--color-bordes);
        border-radius: 1rem;
        background-color: var(--color-bg-cards);
        padding: 0.5rem 1rem;
    }

    .combo-input {
        border: none;
        background-color: transparent;
        flex: 1;
        min-width: 150px;
        height: 2rem;
        padding: 0;
        font-size: 1rem;
    }

    .combo-input:focus {
        outline: none;
    }

    .tag {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background-color: var(--color-texto-primario);
        color: var(--color-fondo);
        padding: 0.25rem 0.75rem;
        border-radius: 0.5rem;
        font-size: 0.9rem;
    }

    .remove-btn {
        background: none;
        border: none;
        color: var(--color-fondo);
        cursor: pointer;
        font-size: 1rem;
        padding: 0;
        display: flex;
        align-items: center;
    }

    .remove-btn:hover {
        opacity: 0.8;
    }

    .dropdown-list {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: var(--color-bg-cards);
        border: solid 1px var(--color-bordes);
        border-top: none;
        border-radius: 0 0 1rem 1rem;
        max-height: 200px;
        overflow-y: auto;
        z-index: 10;
    }

    .option {
        padding: 0.75rem 1rem;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    .option:hover {
        background-color: var(--color-texto-primario);
        color: var(--color-fondo);
    }

    .contenedor-icono {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 2rem;
        background-color: var(--color-texto-primario);
        border-radius: 50%;
        border: none;
        cursor: pointer;
    }

    .contenedor-icono:hover {
        background-color: var(--color-texto-secundario);
    }
</style> -->