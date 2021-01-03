function focus() {
    let allInputElemenets = document.getElementsByTagName('input');
    let allSectionElements = document.querySelector('body > div').children;

    let allSectionElementsArray = Array.from(allSectionElements);    
    let allInputElemenetsArray = Array.from(allInputElemenets);

    allInputElemenetsArray.map(e => {
        e.addEventListener('focus',function(e){
            e.target.parentNode.style.background = 'grey';
            e.target.parentNode.className = 'focused'
            
            
        })
    });

    allInputElemenetsArray.map(e => {
        e.addEventListener('blur',function(e){
            e.target.parentNode.style.background = 'white';
            e.target.parentNode.className = 'blurred';
            
        })
    });

   
}