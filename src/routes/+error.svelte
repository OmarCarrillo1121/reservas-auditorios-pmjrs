<script>
  export let error;
  export let status;
</script>

<svelte:head>
  <title>{status} - Página no encontrada</title>
</svelte:head>

<main class="flex flex-col items-center justify-center min-h-screen text-center">
  <h1 class="text-5xl font-bold text-red-600">{status}</h1>
  <p class="mt-2 text-2xl">
    {status === 404
      ? "La página que buscas no existe 🕵️‍♂️"
      : "Ocurrió un error inesperado."}
  </p>

  <a href="/" class="mt-4 text-blue-500 hover:underline">Volver al inicio</a>
</main>