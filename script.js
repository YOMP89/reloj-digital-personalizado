function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const dayName = days[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const dateString = `${dayName}, ${day} de ${month} de ${year}`;
    
    let greeting;
    if (hours >= 6 && hours < 12) {
        greeting = "Buenos días";
    } else if (hours >= 12 && hours < 18) {
        greeting = "Buenas tardes";
    } else {
        greeting = "Buenas noches";
    }
    
    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
    document.getElementById('greeting').textContent = greeting;
}

setInterval(updateClock, 1000);
updateClock(); // Inicializar el reloj inmediatamente
