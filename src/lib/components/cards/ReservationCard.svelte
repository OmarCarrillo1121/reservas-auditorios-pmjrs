<script>

  let searchQuery = "";
  let orderBy = "";

  function handleSearch() {
  }

  function handleOrderChange(event) {
    orderBy = event.target.value;
  }

  function verTodas() {
  }

  import { mdiBookSearchOutline } from '@mdi/js';

</script>

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
      <button class="btn-buscar" on:click={handleSearch} aria-label="Buscar" title="Buscar"> 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path d={mdiBookSearchOutline} />
        </svg> 
      </button>
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
  /* fuente global */
  * {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  .reservaciones {
    border-top: 1px solid #000;
    padding-top: 1rem;
    margin-top: 2rem;
  }

  .titulo-reservaciones {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 1rem 1rem 0;
  }

  .titulo-reservaciones h2 {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: #3b3b3b;
    margin: 0;
    padding-left: 0rem;
  }

  .ver-todas {
    background-color: #21806A;
    color: #ffffff;
    border-radius: 8px;
    padding: 8px 20px;
    cursor: pointer;
    border: none;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    transition: background-color 0.3s ease;
  }

  .ver-todas:hover {
    background-color: #1B7B5C;
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
    color: #3b3b3b;
  }

  .ordenar select {
    padding: 0.4rem 1.8rem 0.4rem 0.4rem;
    border: 1px solid #000;
    border-radius: 4px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background-color: #fff;
    color: #3b3b3b;
    background-image: none; /*icono con sombra */
    appearance: none; /*estilo del sistema */
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  /* Flecha personalizada opcional*/
  .ordenar select::-ms-expand {
    display: none;
  }
</style>
