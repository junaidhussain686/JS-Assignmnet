var ramadanStartDate = new Date("2025-03-01T00:00:00+03:00"); 

 console.log("Current Time:", new Date());
 console.log("Ramadan Start Date:", ramadanStartDate);

 function updateCountdown() {
     var now = new Date(); 
     var timeDifference = ramadanStartDate - now;

     console.log("Time Difference:", timeDifference);

     if (timeDifference <= 0) {

         document.getElementById('countdown').style.display = "none"; 
         document.getElementById('message').innerHTML = "<span class='highlight'>Ramadan Mubarak!</span><br>It's time to begin the blessed month of Ramadan!";
     } else {

         var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
         var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

         document.getElementById('countdown').innerHTML =
             `${days} <span>Days</span> ${hours} <span>Hours</span> ${minutes} <span>Minutes</span> ${seconds} <span>Seconds</span>`;
     }
 }

 setInterval(updateCountdown, 1000);

 updateCountdown();