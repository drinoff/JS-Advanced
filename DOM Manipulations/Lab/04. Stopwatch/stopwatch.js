function stopwatch() {
    let time = document.getElementById('time');
    let startBtn = document.getElementById('startBtn');
    let stopBtn = document.getElementById('stopBtn');

    startBtn.addEventListener('click', function(){
        seconds = '00';
        minutes = '00';
        time.textContent = `${minutes}:${seconds}`;
        t = setInterval(add,1000);
        stopBtn.disabled = false;
        startBtn.disabled = true;

    })

    stopBtn.addEventListener('click', function(){

        startBtn.disabled = false;
        stopBtn.disabled = true;
        clearInterval(t);
    });

    function add(){
        seconds++;
        if(seconds<10){
            seconds = '0' + seconds;
        }
        if(seconds>=60){

            minutes++;
            seconds='0' + 0;
            if(minutes<10){
                minutes = '0' + minutes;
            }
        }
        if(minutes === 0){
            minutes = '0' + minutes;
        }
        time.textContent = `${minutes}:${seconds}`;

    }
}