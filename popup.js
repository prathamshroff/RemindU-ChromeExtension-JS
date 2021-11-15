// Future JavaScript will go here

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {
        const appt = document.querySelector('#appt').value;    // e.g. s = "21:00"
        const reminder = document.querySelector('#reminder').value;

        hour = parseInt(appt.slice(0, 2)); // 21
        min = parseInt(appt.slice(3, 5));
        if (hour >= 12) {
            meridian = "PM";
            hour = hour - 12;
        }
        else {
            meridian = "AM";
        }

        if (hour === 0) {
            hour = 12;
        }
        // alert(`Your reminder is: ${reminder} at ${hour} & ${min} & ${meridian}`);

        //  9 , 0, AM, pratham

        const r = new Reminder(hour, min, meridian, reminder);
        array.push(r);
        
    };
});