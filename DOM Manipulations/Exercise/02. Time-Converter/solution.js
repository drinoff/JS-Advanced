function attachEventsListeners() {

    const mainElement = document.getElementsByTagName('main')[0];
    mainElement.addEventListener('click',function(ev){
        let daysOutput = document.getElementById('days');
        let hoursOutput = document.getElementById('hours');
        let minsOutput = document.getElementById('minutes');
        let secsOutput = document.getElementById('seconds');

        if(ev.target.id === 'daysBtn'){
            const targetValue = ev.target.parentElement.children[1].value;


            hoursOutput.value = Number(targetValue)*24;
            minsOutput.value = Number(targetValue)*24*60;
            secsOutput.value = Number(targetValue)*24*60*60;
        }else if(ev.target.id === 'hoursBtn'){

            const targetValue = ev.target.parentElement.children[1].value;
            daysOutput.value = Number(targetValue)/24
            minsOutput.value = Number(targetValue)*60;
            secsOutput.value = Number(targetValue)*60*60;
        }else if(ev.target.id === 'minutesBtn'){
            const targetValue = ev.target.parentElement.children[1].value;
            daysOutput.value = Number(targetValue)/24/60;
            hoursOutput.value = Number(targetValue)/60;
            secsOutput.value = Number(targetValue)*60;
        }else if(ev.target.id === 'secondsBtn'){
            const targetValue = ev.target.parentElement.children[1].value;
            daysOutput.value = Number(targetValue)/24/60/60;
            hoursOutput.value = Number(targetValue)/60/60;
            minsOutput.value = Number(targetValue)/60;
        }

    })
}