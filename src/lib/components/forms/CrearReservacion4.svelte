<script>
    import "./forms.css";
    import SelectField from "../input/SelectField.svelte";
    import SectionHeader from "../header/SectionHeader.svelte";
    import Boton from "../buttons/BotonSimple.svelte";
    import Alerta from "../alert/Alerta.svelte";

    let crearReservacion = () => {
        // Lógica para crear la reservación
    };
</script>

<div class="form-step">
    <SectionHeader titulo={"Confirmar y crear"} paddingTop={0} paddingBottom={0}
    ></SectionHeader>
    <form class="formulario justify-start">
        <p>Lugar y fecha</p>
        <p>Recinto:</p>
        <p>Fecha:</p>
        <p>Hora inicio:</p>
        <p>Hora termino:</p>
        <p>Datos del evento</p>
        <p>Nombre del evento:</p>
        <p>Tipo de evento:</p>
        <p>Origen del evento:</p>
        <p>Ponentes:</p>
        <p>Presidium:</p>
        <p>Recursos</p>
        <p>Recursos solicitados:</p>
        <div class="container-input justify-end">
            <Boton
                botonId={"crearReservacion"}
                botonType={"submit"}
                textoBoton={"Crear reservación"}
                tipo={"secundario"}
                accion={() => crearReservacion()}
            ></Boton>
        </div>
    </form>
</div>

<style>
</style>
