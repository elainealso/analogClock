// console.clear();

const secondsHand = document.getElementById('seconds-hand');
const minutesHand = document.getElementById('minutes-hand');
const hoursHand = document.getElementById('hours-hand');

function getTime(){
    const now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const timeInterval = 6;
    // 360 (degrees in a circle) / 60 (minutes) = 6 (timeInterval)
    
    // console.log(now);
    // console.log(seconds * timeInterval);
    // console.log(minutes * timeInterval + seconds / 10);
    // console.log(hours * 30 + minutes / 2);


    // console.log(seconds);
    secondsHand.style.transform = 'rotate(' + (seconds * timeInterval) + 'deg)';
    
    // console.log(minutes);
    minutesHand.style.transform = 'rotate(' + (minutes * timeInterval + seconds/10)+'deg)';
      
    // console.log(hours);
     hoursHand.style.transform = "rotate("+(hours *30+minutes/2)+ "deg)";
      
}
// getTime()
setInterval(getTime, 100)