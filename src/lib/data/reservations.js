const reservationsData = {
    columns: [
        {
            name: 'id',
            displayName: 'Id',
            visible: true
        },
        {
            name: 'auditorium',
            displayName: 'Id',
            visible: true
        },
        {
            name: 'date',
            displayName: 'Fecha de reservacion',
            visible: true
        },
        {
            name: 'startTime',
            displayName: 'Hora de inicio',
            visible: true
        },
        {
            name: 'endTime',
            displayName: 'Hora de termino',
            visible: true
        },
        {
            name: 'duration',
            displayName: 'Duracion',
            visible: true
        },
        {
            name: 'status',
            displayName: 'Estatus',
            visible: true
        },
        {
            name: 'actions',
            displayName: 'Acciones',
            visible: true
        }
    ],
    rows: [
        {
            id: 1,
            auditorium: "Aula Magna de Profesores Eméritos",
            date: "2025-10-25",
            startTime: "09:00",
            endTime: "11:00",
            duration: "2",
            status: "Pendiente",
            actions: "Ver detalles"
        },
        {
            id: 2,
            auditorium: "Maestro Carlos Pérez del Toro",
            date: "2025-10-26",
            startTime: "12:00",
            endTime: "13:00",
            duration: "1",
            status: "Pendiente",
            actions: "Ver detalles"
        },
        {
            id: 3,
            auditorium: "Maestro Carlos Pérez del Toro",
            date: "2025-10-28",
            startTime: "14:00",
            endTime: "16:00",
            duration: "2",
            status: "Aprobada",
            actions: "Ver detalles"
        },
        {
            id: 4,
            auditorium: "C.P. Alfonso Ochoa Ravizé",
            date: "2025-10-29",
            startTime: "16:00",
            endTime: "17:00",
            duration: "1",
            status: "Pendiente",
            actions: "Ver detalles"
        },
        {
            id: 5,
            auditorium: "Aula Magna de Profesores Eméritos",
            date: "2025-10-25",
            startTime: "13:00",
            endTime: "15:00",
            duration: "2",
            status: "Pendiente",
            actions: "Ver detalles"
        },
    ]
};

export default reservationsData;


let obj = {
    'animal1': 'perro',
    'animal2': 'gato'
}

let obj2 = [
    'perro',
    'gato'
]


console.log (obj2[0])
console.log (obj.animal2)
