/*

Honesty Statement: 
I declare that my assessment is wholly my own work in accordance with Seneca Academic Policy. 
No part of this assessment has been copied manually or electronically from any other source 
(including web sites) except for the information supplied by the WEB222 instructors and / or 
made available in this assessment for my use. I also declare that no part of this assignment has 
been distributed to other students. 

*/
document.addEventListener('DOMContentLoaded', function () {
    
    const hiringRadio = document.getElementById('hiring');
    const hourlyRateField = document.getElementById('hourly_rate_field');

    hiringRadio.addEventListener('change', function () {
        if (this.checked) {
            hourlyRateField.style.display = 'block';
        } else {
            hourlyRateField.style.display = 'none';
        }
    });
});
