<script>
  import { createEventDispatcher } from 'svelte';
  export let availableTimes = []; // ejemplo: ['07:00', '08:00', ...]
  export let selectedTimes = [];

  const dispatch = createEventDispatcher();

  function toggleTime(time) {
    let newSelection = [...selectedTimes];
    if (newSelection.includes(time)) {
      newSelection = newSelection.filter(t => t !== time);
    } else if (newSelection.length < 4) {
      newSelection.push(time);
    }
    dispatch('update', newSelection);
  }
</script>

<div class="flex flex-wrap gap-2 p-2">
  {#each availableTimes as time}
    <button
      class="px-3 py-1 rounded-full border 
             {selectedTimes.includes(time)
               ? 'bg-blue-500 text-white'
               : 'bg-gray-100 text-gray-800'}"
      on:click={() => toggleTime(time)}>
      {time}
    </button>
  {/each}
</div>