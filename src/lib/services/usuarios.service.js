import { api } from "./api.service";
import Swal from 'sweetalert2'

let loading = false;
const urlBase = "/usuarios"
const urlBaseAuth = "/auth"
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

export async function postUsuario(nuevoUsuario) {
  console.log(nuevoUsuario)
  try {
    Swal.fire({
				title: "Creando usuario...",
				text: "Por favor espera",
				allowOutsideClick: false,
				didOpen: () => {
					Swal.showLoading();
				}
			});
    const response = await api.post(`${urlBaseAuth}/register`, nuevoUsuario);

    Swal.close();
    await Swal.fire({
				icon: "success",
				title: "Usuario creado",
				text: "El usuario se guardó correctamente",
				timer: 1800,
				showConfirmButton: false
			});
    return response;
  } catch (err) {
    Swal.close();
    Swal.fire({
				icon: "error",
				title: "Error",
				text: error?.message || "No se pudo crear el usuario"
			});
    console.error(`Error al crear ${modelName}:`, err);
    throw err;
  }
}

