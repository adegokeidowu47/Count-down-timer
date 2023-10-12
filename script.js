
const semicircles = document.querySelectorAll('.semicircle');
      timer = document.querySelector('.timer');
      inputHour = document.querySelector('.hour');
      inputMinute = document.querySelector('.min');
      inputSecond = document.querySelector('.sec');
      btn = document.querySelector('.btn');
      container = document.querySelector('.container')
      warningMsg = document.querySelector('.warning');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    let hour = parseInt(inputHour.value);
        min = parseInt(inputMinute.value);
        sec =  parseInt(inputSecond.value);


   
    if(hour > 99999 || hour < 0 || min < 0 || sec < 0){
        warningMsg.innerHTML = "Please, enter valid input. Can't take more than 5 digits "; 
        setTimeout(() => warningMsg.remove(), 3000);
        inputSecond.value = '0'+0;
        inputMinute.value = '0'+0;
        inputHour.value = '0'+0;
        return; 
    }

    let hours =`${hour}`* 3600000;
        minutes =`${min}` *60000 ;
        seconds = `${sec}`* 1000;
        setTime = hours + minutes + seconds;
        startTime = Date.now();
        futureTime = startTime + setTime;
        timerLoop = setInterval(countDownTimer);    


        function countDownTimer(){
            const currentTime = Date.now();
                  remainingTime = futureTime - currentTime;
                  angle = (remainingTime / setTime) * 360;

                  container.style.color = "#088b8b";
                  timer.style.transition = 'all 1.5s ease-out';
                  
        
            if(angle > 180){
                semicircles[2].style.display = 'none';
                semicircles[0].style.transform = 'rotate(180deg)';
                semicircles[1].style.transform = `rotate(${angle}deg)`;
            }
            else{
                
                semicircles[2].style.display = 'block';
                semicircles[0].style.transform = `rotate(${angle}deg)`;
                semicircles[1].style.transform = `rotate(${angle}deg)`;
            }
        
            const hour = Math.floor(remainingTime / (1000 * 60 * 60)).toLocaleString('en-Us',{minimumIntegerDigits:2, useGrouping: false});
                  min = Math.floor(remainingTime / (1000 * 60) % 60).toLocaleString('en-Us',{minimumIntegerDigits:2, useGrouping: false});
                  sec = Math.floor(remainingTime / (1000) %60).toLocaleString('en-Us',{minimumIntegerDigits:2, useGrouping: false});
                  

      
            timer.innerHTML = `
            <div>${hour}</div>
            <div class = "colon">:</div>
            <div>${min}</div>
            <div class = "colon">:</div>
            <div>${sec}</div>
            `;
           
        
        
            if(remainingTime <= 16000){
                semicircles[0].style.backgroundColor = '#dfdb07';
                semicircles[1].style.backgroundColor = '#dfdb17';
                timer.style.color = '#dfdb17';
            }
           if (remainingTime <= 6000){
                semicircles[0].style.backgroundColor = 'red';
                semicircles[1].style.backgroundColor = 'red';
                timer.style.color = 'red';
            }
            
            if(remainingTime < 0){
                clearInterval(timerLoop);
                semicircles[0].style.display = 'none';
                semicircles[1].style.display = 'none';
                semicircles[2].style.display = 'none';
        
        
                timer.innerHTML = `
                <div>00</div>
                <div class = "colon">:</div>
                <div>00</div>
                <div class = "colon">:</div>
                <div>00</div>
                `;
                timer.style.color = 'lightgrey';
            }
        }


        countDownTimer();

        inputHour.value = '00';
        inputMinute.value = '00';
        inputSecond.value = '00';
});       



 





