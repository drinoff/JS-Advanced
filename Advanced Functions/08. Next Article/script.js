function getArticleGenerator(articles) {
    let divElement = document.getElementById('content');
    function showNext(){
        if(articles.length != 0) {
            divElement.textContent += `${articles[0]}`;
            articles.shift();
            return divElement.textContent;
        }else{
            return ''
        }


    }
    return showNext;
}
