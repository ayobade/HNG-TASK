// Update current Time
function updateUTCTime() {
    const currentTimeUTCElement = document.getElementById('currentTimeUTC');
    
    const now = new Date();
    const utcHours = String(now.getUTCHours()).padStart(2, '0');
    const utcMinutes = String(now.getUTCMinutes()).padStart(2, '0');
    const utcSeconds = String(now.getUTCSeconds()).padStart(2, '0');
    const utcTime = `${utcHours}:${utcMinutes}:${utcSeconds}`;
    
    currentTimeUTCElement.textContent = utcTime;
}

updateUTCTime();
setInterval(updateUTCTime, 1000); 



// Update current Day
function updateCurrentDay() {
    const currentDayElement = document.getElementById('currentDay');
    
    const now = new Date();
    const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });
    
    currentDayElement.textContent = dayOfWeek;
}

updateCurrentDay();
setInterval(updateCurrentDay, 86400000);