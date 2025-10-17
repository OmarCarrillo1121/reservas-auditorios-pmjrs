<html lang="es">
<head>
    <title>QuickSearch works!</title>
    <style type="text/css"> 
        .boton {
            background-color: #6B90E0;  
            color: white;
            border-radius: 16px;
            padding: 16px 24px;
            margin: 16px;
            font-size:13.5px;
            cursor: pointer;
            min-width:48px;
            min-height: 48px;
            text-align: left;
            border:none;
        }

        .desplegable {
            position: relative;
            display: inline-block;
        }

        .links {
            display: none;  
            position: absolute;
            background-color: #f8f8f8;
            width: 300px;
            box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
            z-index: 1000;
        }

        .links a {
            text-decoration: none;
            color: black;
            display: block;
            padding: 13px;
            border-bottom: 1px solid #ddd;
        }

        .links a:hover {
            background-color: #e0e0e0;
        }

        .desplegable:hover .links {
            display: block;
        }

        .linea-vertical {
            border-left: 2px solid #142C96;
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
        }

        input[type="time"], input[type="date"] {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 13.5px;
        }
    </style>
</head>
<body>
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
                        <button class="boton">Consultar</button>
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
                            <button class="boton">Elegir otra fecha</button>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>