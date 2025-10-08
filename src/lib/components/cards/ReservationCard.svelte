<script>
    
</script>

<!-- AQUI INICIA EL HTML -->
<span>ReservationCard works!</span>

<div class="reservation-card">
  <!-- Imagen del auditorio -->
  <div class="reservation-image">
    <img src="/ruta/a/tu/imagen-auditorio.jpg" alt="Auditorio Mtro. José Antonio Echeinque" />
  </div>

  <!-- Información del evento -->
  <div class="reservation-info">
    <p><strong>Auditorio “Mtro. José Antonio Echeinque”</strong></p>
    <p>Fecha del evento: 25/oct/2025</p>
    <p>Inicio: 11:00 hrs &nbsp;&nbsp; Fin: 13:00 hrs</p>
    <p>Status: <span class="status">Aprobado</span></p>
  </div>

  <!-- Botón de acción -->
  <div class="reservation-action">
    <button>Ver detalle</button>
  </div>
</div>

<!-- AQUI TERMINA EL HTML -->

<style>
  
  .reservation-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  max-width: 750px;
  margin: 20px auto;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
}

.reservation-card:hover {
  transform: translateY(-3px);
}

/* Imagen del auditorio */
.reservation-image {
  flex: 1.2;
  min-width: 150px;
  height: 150px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.reservation-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Información del evento */
.reservation-info {
  flex: 2;
  padding: 15px 20px;
  font-family: 'Segoe UI', sans-serif;
  font-size: 14px;
  color: #333;
}

.reservation-info p {
  margin: 5px 0;
  line-height: 1.4;
}

.reservation-info strong {
  font-size: 15px;
  color: #000;
}

/* Status */
.status {
  background-color: #7d9ecc;
  color: #fff;
  padding: 3px 8px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 13px;
}

/* Botón de acción */
.reservation-action {
  flex: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #ccc;
  height: 100%;
  background-color: #fafafa;
}

.reservation-action button {
  background-color: #7d9ecc;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.reservation-action button:hover {
  background-color: #6b8ac0;
}

/* --- RESPONSIVE DESIGN --- */
@media (max-width: 768px) {
  .reservation-card {
    flex-direction: column;
    max-width: 95%;
  }

  .reservation-image {
    width: 100%;
    height: 180px;
  }

  .reservation-info {
    text-align: center;
    padding: 10px 15px;
  }

  .reservation-action {
    border-left: none;
    border-top: 1px solid #ccc;
    width: 100%;
    padding: 10px 0;
  }

  .reservation-action button {
    width: 90%;
  }
}

  
</style>
