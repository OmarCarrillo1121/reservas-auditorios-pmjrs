import { api } from "./api.service";
import { navigateTo } from "$lib/utils/navigate.utils";

const urlBaseAuth = "/auth"
const modelName = 'auth'

export async function loginUsuario(datosUsuario) {

  try {
    const response = await api.post(`${urlBaseAuth}/login`, datosUsuario);

    const token = response.token;

    if (token) {
      localStorage.setItem("token", token);
    }

    const user = await getUsuarioActual();
    console.log("Usuario logueado:", user);

    localStorage.setItem("user", JSON.stringify(user));

    if (user.rolUsuario === "admin") {
      navigateTo("/admin");
    } else {
      navigateTo("/reservas");
    }

  } catch (err) {
    console.error(`Error al loguear:`, err);
    throw err;
  }
}

export function getUsuarioActual() {
  return api.get('/auth/me');
}

export function getUsuarioLocal() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

