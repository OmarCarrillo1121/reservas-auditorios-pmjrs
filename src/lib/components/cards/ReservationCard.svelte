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
  <div class="header">
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

<!-- AQUI TERMINA EL HTML -->




<style>
.reservaciones {
    font-family: sans-serif;
    padding: 1rem;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 0.5rem;
  }

  h2 {
    margin: 0;
    font-weight: 600;
    font-size: 1.2rem;
  }

  .ver-todas {
  background-color: var(--color-primary);  
  color: white;
  border-radius: 16px;
  padding: 16px 24px;
  margin: 16px;
  cursor: pointer;
  min-width: 48px;
  min-height: 48px;
  text-align: left;
  border: none;
  font-family: var(--font-body);
}

.ver-todas:hover {
  background-color: var(--color-primary-hover);
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
  }

  .ordenar select {
    padding: 0.4rem;
    border: 1px solid #000;
    border-radius: 4px;
  }
</style>
