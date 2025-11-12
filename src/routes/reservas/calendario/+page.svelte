<script>
    import { Calendar, TimeGrid, DayGrid, List } from "@event-calendar/core";
    import SectionHeader from "$lib/components/header/SectionHeader.svelte";
    let events = [
        { id: 1, title: "Cumpleaños de Ana", start: "2025-11-12", allDay: true },
        { id: 2, title: "Cumpleaños de Sofia", start: "2025-11-12", allDay: true },
        { id: 3, title: "Cumpleaños de Claudia", start: "2025-11-12", allDay: true },
        { id: 4, title: "Cumpleaños de Yania", start: "2025-11-12", allDay: true }
    ];
    let options = $state({
        locale: "es-ES",
        // view: "listMonth",
        view: "dayGridMonth",
        buttonText: {
            today: "Hoy",
            dayGridMonth: "Mes",
            timeGridWeek: "Semana",
            timeGridDay: "Día",
            listMonth: "Lista Mensual"
        },
        events,
        noEventsContent: "No hay eventos"
    });
</script>

<div class="container">
    <SectionHeader titulo={`Calendario de eventos`} />
    <Calendar plugins={[DayGrid, TimeGrid, List]} {options} />
</div>

<style>
</style>
