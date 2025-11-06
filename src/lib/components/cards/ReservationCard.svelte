<script>

      // Aquí puedes agregar la lógica de búsqueda, filtrado u ordenamiento
  let searchQuery = "";
  let orderBy = "";

  function handleSearch() {
    // Lógica de búsqueda
  }

  function handleOrderChange(event) {
    orderBy = event.target.value;
    // Lógica para ordenar
  }

  function verTodas() {
    // Acción al hacer clic en "Ver todas"
  }
</script>

<!-- AQUI INICIA EL HTML -->

<section class="reservaciones">
  <div class="titulo-reservaciones">
    <h2>Mis reservaciones</h2>
    <button class="ver-todas" on:click={verTodas}>Ver todas</button>
  </div>

  <div class="filtros">
    <div class="buscar">
      <input 
        type="text" 
        placeholder="Buscar" 
        bind:value={searchQuery}
      />
      <button class="btn-buscar" on:click={handleSearch}>🔍</button>
    </div>

    <div class="ordenar">
      <label for="orden">Ordenar por:</label>
      <select id="orden" bind:value={orderBy} on:change={handleOrderChange}>
        <option value="">Seleccionar</option>
        <option value="fecha">Fecha</option>
        <option value="auditorio">Auditorio</option>
        <option value="status">Status</option>
      </select>
    </div>
  </div>
</section>

<style>
  /* Línea separadora superior de la sección */
  .reservaciones {
    border-top: 1px solid #000; /* línea negra */
    padding-top: 1rem;
    margin-top: 2rem;
  }

  /* Contenedor del título y botón */
  .titulo-reservaciones {
    display: flex;
    justify-content: space-between; /* empuja el botón a la derecha */
    align-items: center; /* alinea verticalmente h2 y el botón */
    margin: 1rem 1rem 1rem 0;
  }

  .titulo-reservaciones h2 {
    font-family: sans-serif;
    font-size: 1rem;
    margin: 0;
    padding-left: 1rem; /* alineado con “Búsqueda rápida” */
  }

  /* Botón igual al de Iniciar sesión */
  .ver-todas {
    background-color: #21806A; /* mismo tono verde */
    color: #ffffff;
    border-radius: 8px;
    padding: 8px 20px;
    cursor: pointer;
    border: none;
    font-family: var(--font-body, Arial, sans-serif);
    font-weight: 600;
    transition: background-color 0.3s ease;
  }

  .ver-todas:hover {
    background-color: #1B7B5C; /* tono más oscuro al pasar el cursor */
  }

  .filtros {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }

  .buscar {
    display: flex;
    align-items: center;
    border: 1px solid #000;
    border-radius: 4px;
    overflow: hidden;
    width: 50%;
  }

  .buscar input {
    border: none;
    padding: 0.5rem;
    flex: 1;
    outline: none;
  }

  .btn-buscar {
    background-color: white;
    border: none;
    padding: 0.4rem 0.6rem;
    cursor: pointer;
    border-left: 1px solid #000;
  }

  .ordenar {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: sans-serif;
  }

  .ordenar select {
    padding: 0.4rem;
    border: 1px solid #000;
    border-radius: 4px;
  }
</style>
