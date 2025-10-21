<script>
    import { goto } from "$app/navigation";
    function navigateTo(route) {
        goto(route);
    }
</script>
<!-- AQUI INICIA EL HTML -->
    <span>QuickSearch works!</span>
    <h1>Consulta de fechas</h1>
    <hr>
    <br>
    <hr>
    <table>
        <tbody>
            <tr>
                <td>Auditorio:</td>
                <td>
                    <div class="desplegable"> 
                        <button class="boton">Seleccionar auditorio</button>
                        <div class="links">
                            <a href="#">Auditorio Maestro Jose Antonio Echenique García</a>
                            <a href="#">Auditorio Alfonso Ochoa Ravisé</a>
                            <a href="#">Sala de profesores</a>
                        </div>
                    </div>
                </td>
                
                <td>Inicio:</td>
                <td>
                    <input type="time" value="10:00">
                </td>
                
                <!-- Línea vertical entre tiempo y botón Consultar -->
                <td>
                    <div class="linea-vertical"></div>
                </td>
                
                <td>
                    <div class="desplegable"> 
                        <button class="boton" onclick={()=> navigateTo('/user/dashboard')}>Consultar</button>
                    </div>
                </td>                
            </tr>
            <tr>
                <td>Fecha del evento:</td>
                <td>
                    <input type="date" value="2025-03-30" min="2021-04-30">
                </td>  
                <td>Fin:</td>
                <td>
                    <input type="time" value="10:00">
                </td>
                <td></td> <!-- Celda vacía para alineación -->
                <td></td> <!-- Celda vacía para alineación -->
            </tr>
        </tbody>
    </table>
    <hr>
    <br>
    <hr>
    <table>
        <tbody>
            <tr>
                <td>
                    <div class="contenedor-segunda-tabla">
                        <span>Fecha y hora de reservación no disponible</span>
                        
                        <!-- Línea vertical -->
                        <div class="linea-vertical" style="height: 40px;"></div>
                        
                        <div class="desplegable"> 
                            <button class="boton" onclick={()=> navigateTo('/user/dashboard')}>Elegir otra fecha</button>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
<!-- AQUI TERMINA EL HTML -->
<style>        h1 {
        font-size: 40px;
        font-family: var(--font-title);
    }
    .boton {
        background-color: var(--color-primary);  
        color: white;
        border-radius: 16px;
        padding: 16px 24px;
        margin: 16px;
        font-size: 20px;
        cursor: pointer;
        min-width: 48px;
        min-height: 48px;
        text-align: left;
        border: none;
        font-family: var(--font-body);
    }

    .boton:hover {
        background-color: var(--color-primary-hover);
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 32px;
        }
        .boton {
            font-size: 16px; 
        }
    }

    .desplegable {
        position: relative;
        display: inline-block;
    }

    .links {
        display: none;  
        position: absolute;
        background-color: var(--color-bg-cards);
        width: 300px;
        box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
        z-index: 1000;
    }

    .links a {
        text-decoration: none;
        color: var(--color-text-primary);
        display: block;
        padding: 13px;
        border-bottom: 1px solid var(--color-primary-25);
        font-family: var(--font-body); 
    }

    .links a:hover {
        background-color: var(--color-primary-25);
    }

    .desplegable:hover .links {
        display: block;
    }

    .linea-vertical {
        border-left: 2px solid var(--color-primary);
        height: 80px;
        margin: 0 15px;
    }

    .contenedor-segunda-tabla {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    table {
        border-collapse: collapse;
        width: 100%;
    }

    td {
        padding: 10px;
        vertical-align: top;
        font-family: var(--font-body); 
    }

    input[type="time"], input[type="date"] {
        padding: 10px;
        border: 1px solid var(--color-primary-50);
        border-radius: 4px;
        font-size: 13.5px;
        font-family: var(--font-body); 
    }
</style>