<script>
    import { postUsuario } from "$lib/services/usuarios.service";
    import '../../../../lib/components/forms/forms.css';
    import { listaRoles } from "$lib/data/usuario/usuarioRoles";
    import { listaAreas } from "$lib/data/usuario/usuarioAreas";
    import { listaFacultades } from "$lib/data/usuario/usuarioFacultades";
    import { listaPuestos } from "$lib/data/usuario/usuarioPuestos";

    import SectionHeader from "$lib/components/header/SectionHeader.svelte";
    import InputField from "$lib/components/input/InputField.svelte";
    import SelectField from "$lib/components/input/SelectField.svelte";
    import Boton from "$lib/components/buttons/BotonSimple.svelte";

    let postUsuarioForm = {
        nombreUsuario: "Juan",
        apellidoPaterno: "Pérez",
        apellidoMaterno: "Gómez",
        correo: "admin@mail.com",
        contrasena: "12345",
        telefonoFijo: "5512345678",
        telefonoContacto: "5553957151",
        rolUsuario: "user",
        facultadUsuario: "Informática",
        areaUsuario: "Administración",
        puestoUsuario: "Administrador",
    };

    let cleanForm = () => {
        postUsuarioForm = {
            nombreUsuario: "",
            apellidoPaterno: "",
            apellidoMaterno: "",
            correo: "",
            contrasena: "",
            telefonoFijo: "",
            telefonoContacto: "",
            rolUsuario: "",
            facultadUsuario: "",
            areaUsuario: "",
            puestoUsuario: "",
        };
    };

    async function postUser() {
        try {
            const response = await postUsuario(postUsuarioForm);
            cleanForm();
        } catch (err) {
            console.warn("Error al registrar usuario:", err);
        }
    }

    console.log(listaRoles);
</script>

<section class="container">
    <section class="form-container-center">
    <SectionHeader
    titulo={"Ingresar datos de usuario"} paddingBottom={0}
  ></SectionHeader>
    <form on:submit|preventDefault={postUser} class="formulario">
        <div class="container-input">
            <InputField
                id="nombreUsuario"
                type="text"
                label="Nombre de usuario"
                placeholder="Ingresar nombre"
                bind:value={postUsuarioForm.nombreUsuario}
            />
        </div>

        <div class="container-input">
            <InputField
                id="apellidoPaterno"
                type="text"
                label="Apellido paterno"
                placeholder="Ingresar apellido paterno"
                bind:value={postUsuarioForm.apellidoPaterno}
            />
        </div>

        <div class="container-input">
            <InputField
                id="apellidoMaterno"
                type="text"
                label="Apellido materno"
                placeholder="Ingresar apellido materno"
                bind:value={postUsuarioForm.apellidoMaterno}
            />
        </div>

        <div class="container-input">
            <InputField
                id="correo"
                type="email"
                label="Correo electrónico"
                placeholder="Ingresa correo"
                bind:value={postUsuarioForm.correo}
            />
        </div>

        <div class="container-input">
            <InputField
                id="contrasena"
                type="password"
                label="Contraseña"
                placeholder="Ingresa contraseña"
                bind:value={postUsuarioForm.contrasena}
            />
        </div>

        <div class="container-input">
            <InputField
                id="telefonoFijo"
                type="text"
                label="Teléfono fijo"
                placeholder="Ingresa teléfono fijo"
                bind:value={postUsuarioForm.telefonoFijo}
            />
        </div>

        <div class="container-input">
            <InputField
                id="telefonoContacto"
                type="text"
                label="Teléfono de contacto"
                placeholder="Ingresa teléfono de contacto"
                bind:value={postUsuarioForm.telefonoContacto}
            />
        </div>

        <div class="container-input">
            <SelectField
                id="rolUsuario"
                label="Rol"
                optionsList={listaRoles}
                bind:value={postUsuarioForm.rolUsuario}
            />
        </div>

        <div class="container-input">
            <SelectField
                id="facultadUsuario"
                label="Facultad"
                optionsList={listaFacultades}
                bind:value={postUsuarioForm.facultadUsuario}
            />
        </div>

        <div class="container-input">
            <SelectField
                id="areaUsuario"
                label="Área"
                optionsList={listaAreas}
                bind:value={postUsuarioForm.areaUsuario}
            />
        </div>

        <div class="container-input">
            <SelectField
                id="puestoUsuario"
                label="Puesto"
                optionsList={listaPuestos}
                bind:value={postUsuarioForm.puestoUsuario}
            />
        </div>
        <div class='form-footer'>
            <Boton botonId={'limpiarForm'} botonType={'button'} tipo={'secundario'} textoBoton={"Restablecer"} accion={() => cleanForm()}></Boton>
            <Boton botonId={'crearUsuario'} botonType={'submit'} tipo={'primario'} textoBoton={"Crear Usuario"}></Boton>
        </div>
    </form>
    </section>
</section>

<style>
    .formulario {
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 350px;
    }
    button {
        padding: 10px;
        border-radius: 6px;
        background: #007bff;
        color: white;
        border: none;
        cursor: pointer;
        margin-top: 12px;
    }
</style>
