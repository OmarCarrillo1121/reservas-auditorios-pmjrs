import { api } from "./api.service";

export async function getAuditorios() {
  try {
    const response = await api.get("/auditorios");
    return response;
  } catch (err) {
    console.error("Error cargando auditorios:", err);
    throw err;
  }
}