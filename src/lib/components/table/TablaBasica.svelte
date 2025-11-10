<script>
    import Icon from "../icons/Icon.svelte";
    import { mdiSquareEditOutline, mdiTrashCanOutline } from "@mdi/js";
    import { Toggle, Popover, Tooltip, Button, Modal } from "flowbite-svelte";
    import { slide } from "svelte/transition";
    import Boton from "../buttons/BotonSimple.svelte";
    let popupModal = $state(false);
    const { columns, rows } = $props();
</script>

<!-- AQUI INICIA EL HTML -->
<table>
    <thead>
        <tr>
            {#each columns as col}
                <th>{col.displayName}</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each rows as row}
            <tr>
                <td>{row.id}</td>
                <td>{row.auditorium}</td>
                <td>{row.date}</td>
                <td>{row.startTime}</td>
                <td>{row.endTime}</td>
                <td>{row.duration}</td>
                <td>{row.status}</td>
                <td>
                    <div class="contenedor-acciones">
                        <button onclick={() => (popupModal = true)}>
                            <Icon
                                path={mdiSquareEditOutline}
                                size={32}
                                color={"var(--color-advertencia)"}
                            ></Icon>
                        </button>
                        <Tooltip>Editar</Tooltip>

                        <Toggle checked={true}></Toggle>
                        
                    </div>
                </td>
            </tr>
        {/each}
    </tbody>
</table>

<Modal form bind:open={popupModal} size="xs" transition={slide} permanent>
    <div class="text-center">
        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this product?
        </h3>
        <div class="space-x-2">
            BUtton
            <!-- <Button type="submit" value="yes" color="red">Yes, I'm sure</Button>
      <Button type="submit" value="no" color="alternative">No, cancel</Button> -->
        </div>
    </div>
</Modal>

<!-- AQUI TERMINA EL HTML -->

<style>
    table {
        width: 100%;
        border-spacing: 0;
        border-collapse: collapse;
    }

    /* tbody {
        border: solid 1px #000;
        
    } */

    thead {
        text-align: left;
        background-color: var(--color-secundario);
        color: var(--color-fondo);
    }

    tr {
        border-bottom: solid 1px var(--color-bordes);
    }

    td,
    th {
        padding: 1rem 0.5rem;
    }

    tbody tr:hover {
        background-color: var(--color-fondo-tarjeta);
    }

    .contenedor-acciones {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
</style>
