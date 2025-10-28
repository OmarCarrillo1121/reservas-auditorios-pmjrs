<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sistema de Gestión de Auditorios</title>
    <link rel="stylesheet" href="app.css" />
  </head>

  <body>
    <!-- ====== HEADER ====== -->
    <header>
      <div class="header-container">
        <div class="logos-container">
          <img class="logos" src="/svg/unam-logo.svg" alt="Logo UNAM" />
          <img class="logos" src="/svg/fca-logo.svg" alt="Logo FCA" />
        </div>

        <div class="header-title">
          <h2>Sistema de Información para la Gestión de Auditorios</h2>
          <h3>Facultad de Contaduría y Administración</h3>
        </div>

        <div class="header-buttons">
          <button id="btn-login" class="header-button">Iniciar Sesión</button>
        </div>
      </div>
    </header>

    <!-- ====== MAIN SECTION ====== -->
    <section class="reservaciones-container">
      <div class="reservaciones-header">
        <h2>Mis reservaciones</h2>
        <button class="btn-ver-todas" id="btnVerTodas">Ver todas</button>
      </div>
      <hr />

      <div class="reservaciones-filtros">
        <div class="buscador">
          <input
            type="text"
            id="inputBuscar"
            placeholder="Buscar"
            aria-label="Buscar reservación"
          />
          <button id="btnBuscar" class="btn-icono">
            🔍
          </button>
        </div>

        <div class="ordenar">
          <label for="ordenar">Ordenar por:</label>
          <select id="ordenar">
            <option value="">Seleccionar</option>
            <option value="fecha">Fecha</option>
            <option value="auditorio">Auditorio</option>
            <option value="status">Estado</option>
          </select>
        </div>
      </div>

      <!-- ===== LISTADO DE RESERVAS ===== -->
      <div id="listaReservaciones" class="reservaciones-lista">
        <!-- Ejemplo de una tarjeta -->
        <div class="reserva-card">
          <div class="reserva-imagen">
            <!-- imagen del auditorio -->
          </div>


          <div class="reserva-acciones">
            <button class="btn-detalle" on:click={() => verDetalle('auditorio1')}>
              Ver detalle
            </button>
          </div>
        </div>
      </div>
    </section>

    <script src="script.js"></script>
  </body>
</html>
