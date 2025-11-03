<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let selectedDate;
  const today = new Date();

  const days = Array.from({ length: 30 }, (_, i) => {
    const d = new Date();
    d.setDate(today.getDate() + i);
    return d;
  });

  function selectDay(day) {
    dispatch('select', day);
  }
</script>

<div class="flex overflow-x-auto gap-2 p-2">
  {#each days as day}
    <button
      class="px-3 py-2 rounded-lg min-w-[70px] text-center border 
             {selectedDate?.toDateString() === day.toDateString()
               ? 'bg-blue-500 text-white'
               : 'bg-white text-gray-700'}"
      on:click={() => selectDay(day)}>
      <div>{day.toLocaleDateString('es-MX', { weekday: 'short' })}</div>
      <div class="font-bold">{day.getDate()}</div>
    </button>
  {/each}
</div>