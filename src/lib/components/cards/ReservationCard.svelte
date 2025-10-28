<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ReservationCard Component</title>
  </head>

<body>
<header>
    <span class="header-container">
        <span class="logos-container">
            <img class="logos" src="/svg/unam-logo.svg" alt="" />
            <img class="logos" src="/svg/fca-logo.svg" alt="" />
        </span>

        <span class="header-title">
            <!-- <h3>Universidad Nacional Autónoma de México</h3> -->
            <h3>Facultad de Contaduría y Administración</h3>
            <h2>Sistema de Información para la Gestión de Auditorios</h2>
        </span>
    </span>

    <button onclick={() => navigateTo("/login")} class="header-button">Iniciar Sesión</button
    >
</header>
  <section class="reservaciones">
    <div class="encabezado">
      <h2>Mis reservaciones</h2>
      <button>Ver todas</button>
    </div>

<div class="filtros">
  <input type="text" placeholder="Buscar">
  <button>🔍</button>

  <label for="ordenar">Ordenar por:</label>
  <select id="ordenar">
    <option>Fecha</option>
    <option>Status</option>
  </select>
</div>


    <div class="tarjeta-reservacion">
      <div class="imagen"></div>

      <div class="detalle">
        <p><strong>Auditorio “Mtro. José Antonio Echeinque”</strong></p>
        <p>Fecha del evento: 25/oct/2025</p>
        <p>Inicio: 11:00 hrs &nbsp;&nbsp; Fin: 13:00 hrs</p>
        <p>Status: <span class="aprobado">Aprobado</span></p>
      </div>

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


