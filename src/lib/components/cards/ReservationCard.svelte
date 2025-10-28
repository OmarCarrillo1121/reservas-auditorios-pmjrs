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
    <main>
      <section class="consulta-section">
        <h2>Consulta de fechas</h2>
        <hr />

        <form id="consulta-form" class="consulta-form">
          <div class="form-group">
            <label for="auditorio">Auditorio:</label>
            <select id="auditorio" name="auditorio">
              <option value="">Seleccione...</option>
              <!-- Opciones dinámicas -->
            </select>

            <label for="inicio">Inicio:</label>
            <input type="date" id="inicio" name="inicio" />
          </div>

          <div class="form-group">
            <label for="fecha-evento">Fecha del evento:</label>
            <div class="fecha-inputs">
              <input type="text" id="dia" placeholder="DD" maxlength="2" />
              <input type="text" id="mes" placeholder="MM" maxlength="2" />
              <input type="text" id="anio" placeholder="AAAA" maxlength="4" />
            </div>

            <label for="fin">Fin:</label>
            <input type="date" id="fin" name="fin" />
          </div>

          <div class="form-buttons">
            <button type="button" id="btn-consultar">Consultar</button>
          </div>
        </form>
      </section>
    </main>

    <script src="script.js"></script>
  </body>
</html>
