import { api } from "./api.service";

const urlBaseAuth = "/auth"
const modelName = 'auth'

export async function loginUsuario(datosUsuario) {
  
  try {
    const response = await api.post(`${urlBaseAuth}/login`, datosUsuario);
    return response;
  } catch (err) {
    console.error(`Error al loguear:`, err);
    throw err;
  }
}

export async function postUsuario(nuevoUsuario) {
  console.log(nuevoUsuario)
  try {
    const response = await api.post(`${urlBaseAuth}/register`, nuevoUsuario);
    return response;
  } catch (err) {
    console.error(`Error al crear ${modelName}:`, err);
    throw err;
  }
}