let countdown; 
const timerDisplay = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time'); 
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    // Clear any existing timers 
    clearInterval(countdown); 
    
    // Get when timer started 
    const now = Date.now(); 
    // Add amount of time passed using user input 
    const then = now + (seconds * 1000);
    // Display time immediately 
    displayTimeLeft(seconds); 

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000); 
        // Check if we should stop! 
        if(secondsLeft < 0) {
            clearInterval(countdown); 
            return; 
        }
        // Display after every interval 
        displayTimeLeft(secondsLeft); 
        displayEndTime(then); 
    }, 1000); 
}

function displayTimeLeft(seconds) {
    // Converting seconds to minutes 
    const minutes = Math.floor(seconds / 60); 
    // Seconds left
    const remainderSeconds = seconds % 60
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`; 
    document.title = display; 
    timerDisplay.textContent = display; 
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp); 
    const hour = end.getHours(); 
    const minutes = end.getMinutes();
    endTime.textContent = `Be back at ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? 0 : ''}${minutes}`;  
}

function startTimer() {
    const seconds = parseInt(this.dataset.time); 
    timer(seconds); 
}

buttons.forEach(button => button.addEventListener('click', startTimer)); 
document.customForm.addEventListener('submit', function(e) {
    // Stops new page from loading 
    e.preventDefault(); 
    const mins = this.minutes.value; 
    // Converts value to minutes 
    timer(mins * 60);  
    this.reset(); 
})