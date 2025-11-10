import { api } from "./api.service";

const nombreTabla = 'recintos'

export async function getRecintos() {
  try {
    const response = await api.get("/recintos");
    return response;
  } catch (err) {
    console.error(`Error cargando ${nombreTabla}: `, err);
    throw err;
  }
}