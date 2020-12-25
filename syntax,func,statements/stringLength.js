function lentghSum (first,second,third){
    let result;
    let averageLenght;
    let firstLength = first.length;
    let secondLength = second.length;
    let thirdLength = third.length;
    result = firstLength + secondLength + thirdLength;
    averageLenght = Math.floor(result/3);
    console.log(result);
    console.log(averageLenght);
}

lentghSum('chocolate', 'ice cream', 'cake')