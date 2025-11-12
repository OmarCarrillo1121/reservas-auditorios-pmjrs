<script>
    import { postUsuario } from "$lib/services/usuarios.service";

    let postUsuarioForm = {
        nombreUsuario: "Juan",
        apellidoPaterno: "Pérez",
        apellidoMaterno: "Gómez",
        correo: "juan@example.com",
        contrasena: "123456",
        telefonoFijo: "123456789",
        telefonoContacto: "987654321"
    };

    async function postUser() {
        try {
            const response = await postUsuario(postUsuarioForm);
            console.log("Usuario registrado:", response);
        } catch (err) {
            console.warn("Error al registrar usuario:", err);
        }
    }
</script>

<form on:submit|preventDefault={postUser}>
    <input type="text" bind:value={postUsuarioForm.nombreUsuario} placeholder="Nombre de usuario">
    <input type="text" bind:value={postUsuarioForm.apellidoPaterno} placeholder="Apellido paterno">
    <input type="text" bind:value={postUsuarioForm.apellidoMaterno} placeholder="Apellido materno">
    <input type="email" bind:value={postUsuarioForm.correo} placeholder="Correo electrónico">
    <input type="password" bind:value={postUsuarioForm.contrasena} placeholder="Contraseña">
    <input type="text" bind:value={postUsuarioForm.telefonoFijo} placeholder="Teléfono fijo">
    <input type="text" bind:value={postUsuarioForm.telefonoContacto} placeholder="Teléfono de contacto">
    <button type="submit">Enviar</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 300px;
    }
    input, button {
        padding: 8px;
        border-radius: 6px;
        border: 1px solid #ccc;
    }
    button {
        background: #007bff;
        color: white;
        cursor: pointer;
    }
</style>