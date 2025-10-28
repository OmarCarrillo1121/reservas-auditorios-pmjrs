// ==== Simulación de llamada a base de datos ====
const reservaciones = [
  {
    id: 1,
    auditorio: 'Mtro. José Antonio Echeinque',
    fecha: '25/oct/2025',
    inicio: '11:00 hrs',
    fin: '13:00 hrs',
    status: 'Aprobado',
  },
];

// ==== Renderizado de tarjetas ====
const lista = document.getElementById('listaReservaciones');

function renderReservaciones() {
  lista.innerHTML = '';
  reservaciones.forEach((r) => {
    const card = document.createElement('div');
    card.classList.add('reserva-card');
    card.innerHTML = `
      <div class="reserva-imagen"></div>
      <div class="reserva-info">
        <h3>Auditorio “${r.auditorio}”</h3>
        <p><strong>Fecha del evento:</strong> ${r.fecha}</p>
        <p><strong>Inicio:</strong> ${r.inicio} &nbsp;&nbsp; <strong>Fin:</strong> ${r.fin}</p>
        <p><strong>Status:</strong> <span class="status">${r.status}</span></p>
      </div>
      <div class="reserva-acciones">
        <button class="btn-detalle" onclick="verDetalle(${r.id})">Ver detalle</button>
      </div>
    `;
    lista.appendChild(card);
  });
}

renderReservaciones();

// ==== Función del botón ====
function verDetalle(id) {
  const reserva = reservaciones.find((r) => r.id === id);
  alert(`Detalles de la reservación:\n\nAuditorio: ${reserva.auditorio}\nFecha: ${reserva.fecha}\nStatus: ${reserva.status}`);
}
