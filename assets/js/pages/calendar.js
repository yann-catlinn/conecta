document.addEventListener("DOMContentLoaded", function() {
    var calendarEl = document.getElementById("calendar");

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialDate: "2022-05-12",
        editable: true,
        selectable: true,
        businessHours: true,
        dayMaxEvents: true, // allow "more" link when too many events
        events: [{
                title: "All Day Event",
                start: "2020-09-01",
            },
            {
                title: "Long Event",
                start: "2020-09-07",
                end: "2020-09-10",
            },
            {
                groupId: 999,
                title: "Coffee Break con Juan Edwards",
                start: "2022-05-25T16:00:00",
            },
            {
                groupId: 999,
                title: "Coffee Break con Juan Edwards",
                start: "2020-09-16T16:00:00",
            },
            {
                title: "Reunión en oficina",
                start: "2022-05-11",
                end: "2022-05-11",
            },
            {
                title: "Meeting Teams",
                start: "2022-05-01",
                end: "2022-05-01",
            },
            {
                title: "Lunch",
                start: "2020-09-12T12:00:00",
            },
            {
                title: "Meeting",
                start: "2020-09-12T14:30:00",
            },
            {
                title: "Happy Hour",
                start: "2020-09-12T17:30:00",
            },
            {
                title: "Dinner",
                start: "2020-09-12T20:00:00",
            },
            {
                title: "Birthday Party",
                start: "2020-09-13T07:00:00",
            },
            {
                title: "Click for Google",
                url: "http://google.com/",
                start: "2020-09-28",
            },
        ],
    });

    calendar.render();
});