const countdown = document.querySelector('.countdown');

//Set Launch Date
const launchDate = new Date('Mar 14, 2020 00:00:00').getTime();
//console.log(launchDate);

//update every second
const intvl = setInterval( () => {
    //Get Today's date and time in ms;
    const now = new Date().getTime();

    //Distance from now to launch date
    const distance = launchDate - now;
    //console.log(distance);

    //Time Calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / (1000));

    //Display the results
    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Minutes</span></div>
        <div>${seconds}<span>Seconds</span></div>
    `;

    //If Launch Date passed
    if(distance < 0)
    {
        //Stop Timer
        clearInterval(intvl);
        //Style and Output text
        countdown.style.color = '#17a2b8';
        countdown.innerHTML = "Launched";
    }
}, 1000)