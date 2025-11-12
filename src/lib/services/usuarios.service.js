import { api } from "./api.service";

const urlBase = "/usuarios"
const modelName = 'usuarios'

export async function getAllUsuarios() {
  try {
    const response = await api.get(urlBase);
    return response;
  } catch (err) {
    console.error(`Error al obtener ${modelName}:`, err);
    throw err;
  }
}