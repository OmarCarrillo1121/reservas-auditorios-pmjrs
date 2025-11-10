<script>
    export let id = "";
    export let label = "";
    export let value = "";
    export let optionsList = "";
</script>

<!-- 
INPUT TYPES
TEXT: text, password, email, url, tel, seatch 
SELECTION: checkbox, radio
SPECIALIZED: number, range, date, time, datetime-local, month, week, color, file
BUTTONS: submit, reset, button, image
HIDDEN: hidden
 -->
<div class='input-container'>
    <label for={id}>
        {label}
    </label>
    <select id={id} name={id} bind:value>
        {#each optionList as option}
        <option value="">{option.name}</option>
        {/each} 
    </select>
</div>

<style>
    label {
        font-size: 1rem;
    }
    input {
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
