<script>
    export let columns = [];
    export let rows = [];
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
                <td>{row.actions}</td>
            </tr>
        {/each}
    </tbody>
</table>

<!-- AQUI TERMINA EL HTML -->

<style>
    table {
        width: 100%;
        thead {
            text-align: left;
        }
    }
</style>
