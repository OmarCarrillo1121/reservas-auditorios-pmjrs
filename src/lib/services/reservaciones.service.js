import { api } from "./api.service";

const urlBase = "/reservaciones"
const modelName = 'reservaciones'

export async function getReservaciones() {
  try {
    const response = await api.get(urlBase);
    return response;
  } catch (err) {
    console.error(`Error al obtener ${modelName}:`, err);
    throw err;
  }
}

export async function postReservacion(auditorio) {
  console.log(auditorio)
  try {
    const response = await api.post(urlBase, auditorio);
    return response;
  } catch (err) {
    console.error(`Error al crear ${modelName}:`, err);
    throw err;
  }
}