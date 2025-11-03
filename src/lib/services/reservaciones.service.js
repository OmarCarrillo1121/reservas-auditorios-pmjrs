import { api } from "./api.service";

export async function postReservacion(auditorio) {
  try {
    const response = await api.post("/reservaciones", auditorio);
    return response;
  } catch (err) {
    console.error("Error cargando auditorios:", err);
    throw err;
  }
}