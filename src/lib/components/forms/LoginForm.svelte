<script>
    import { navigateTo } from "$lib/utils/navigate.utils";
    import InputField from "../input/InputField.svelte";
    import Boton from "$lib/components/buttons/BotonSimple.svelte";
    import SectionHeader from "../header/SectionHeader.svelte";
    import { loginUsuario } from "$lib/services/auth.service";
    let datosParaLogin = {
        username: "",
        password: "",
    };
    async function loguearUsuario() {
        try {
            console.log(datosParaLogin);
            const response = await loginUsuario(datosParaLogin);
            console.log("Usuario logueado:", response);
            alert(`Usuario logueado:${response}`)
        } catch (err) {
            alert("Error al loguear usuario:", err);
        }
    }
</script>

<!-- AQUI INICIA EL HTML -->
<!-- <div class="imagen-container">
        <img src="imagen" alt=''/>
    </div> -->
<!-- <div class="componente-container">
    <h4>Iniciar sesión</h4>
    <form class="formulario-container">
        <label for="Usuario">Usuario</label>
        <input id="Usuario" type="text" value="" />
        <label for="Contraseña">Contraseña</label>
        <input id="Contraseña" type="text" value="" />
        <button onclick={() => navigateTo("/reservas")}>Ingresar</button>
        <label for="">Olvidé mi contraseña</label>
    </form>
</div> -->

<div class="formulario-container">
    <SectionHeader titulo="Iniciar sesion"></SectionHeader>
    <form>
        <!--div class="cajita">
       <label for="Usuario">Usuario</label>
       <br>
     	 <input type="usuario" class="cajita-input" placeholder="Ingrese Usuario" id="Usuario">
       </div-->
        <div class="cajita">
            <InputField label={"Usuario"} bind:value={datosParaLogin.username}></InputField>
        </div>
        <div class="cajita">
            <InputField label={"Contraseña"} bind:value={datosParaLogin.password}></InputField>
        </div>
        <!--div class="cajita">
       <label for="Contraseña">Contraseña</label>
       <br>
       <input type="password" class="cajita-input" placeholder="Ingrese Contraseña" id="Contraseña">
       </div>
       <br>
       <button type="button" onclick={() => navigateTo("/reservas")}>Ingresar</button-->
        <Boton
            botonId={"botonIngresar"}
            botonType={"button"}
            tipo={"exito"}
            textoBoton={"Ingresar"}
            accion={() => loguearUsuario()}
        ></Boton>
    </form>
    <p>Olvidé mi contraseña</p>
</div>

<!-- AQUI TERMINA EL HTML -->

<style>
    /* .contenedor {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 300px;
        height: 600px;
        align-items: center;
        border: 3px solid red;
    } */

    /* .imagen-container img {
        display: flex;
        max-width: 100%;
        height: auto;
    } */

    /* .componente-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        border: 2px solid red;
    }

    .formulario-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 2px solid #ccc;
    } */

    /*.contenedor { 
      display: flex;
      justify-content: center;
      gap: 300px;
      height: 500px;
      align-items: center;
      border: 3px solid #000;
     } */

    .formulario-container {
        text-align: center;
        width: 70%;
        margin: 30px auto;
        margin-top: 50px;
        padding: 5px;
        height: 500px;
    }

    .cajita {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 80px;
        margin: 5px 2px;
        padding: 7px;
    }

    .cajita-input {
        background-color: rgb(219, 214, 214);
        padding: 7px;
    }
    button {
        background-color: rgb(130, 130, 218);
        padding: 7px;
        width: 80%;
        margin: 5px;
    }
</style>
