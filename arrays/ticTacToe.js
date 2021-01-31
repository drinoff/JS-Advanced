function solve(input){

    let winningPlayer = '';
    let result = '';
    let matrix = [['false', 'false', 'false'],
                  ['false', 'false', 'false'],
                  ['false', 'false', 'false']]

    let player = true;    // true = playerOne, false = playerTwo
    let moveX= 0;
    let moveY= 0;
    for (let i = 0; i < input.length; i++) {

            moveX = Number(input[i][0]);
            moveY = Number(input[i][2]);


        if(matrix[moveX][moveY] !== 'false'){
            console.log('This place is already taken. Please choose another!')
        }else{
            if(player){
                matrix[moveX][moveY] = 'X';
                player = false;
            }else{
                matrix[moveX][moveY] = 'O';
                player = true;
            }
        }
        result = checkWin(matrix);
        if(result === 'X'||result === 'O'){
            console.log(`Player ${result} wins!`)
            break;
        }
    }
    if(result===undefined){
       console.log('The game ended! Nobody wins :(')
    }
    printMatrix(matrix);


    function printMatrix(matrix){

        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(('\t')))
        }
    }

    function checkWin(matrix){
        //rows
        if(matrix[0][0] === 'X' && matrix[0][1] === 'X' && matrix[0][2] === 'X'){
            winningPlayer = 'X';
        }else if(matrix[0][0] === 'O' && matrix[0][1] === 'O' && matrix[0][2] === 'O'){
            winningPlayer = 'O';
        }

        if(matrix[1][0] === 'X' && matrix[1][1] === 'X' && matrix[1][2] === 'X'){
            winningPlayer = 'X';
        }else if(matrix[1][0] === 'O' && matrix[1][1] === 'O' && matrix[1][2] === 'O'){
            winningPlayer = 'O';
        }

        if(matrix[2][0] === 'X' && matrix[2][1] === 'X' && matrix[2][2] === 'X'){
            winningPlayer = 'X';
        }else if(matrix[2][0] === 'O' && matrix[2][1] === 'O' && matrix[2][2] === 'O'){
            winningPlayer = 'O';
        }
        //columns
        if(matrix[0][0] === 'X' && matrix[1][0] === 'X' && matrix[2][0] === 'X'){
            winningPlayer = 'X';
        }else if(matrix[0][0] === 'O' && matrix[1][0] === 'O' && matrix[2][0] === 'O'){
            winningPlayer = 'O';
        }

        if(matrix[0][1] === 'X' && matrix[1][1] === 'X' && matrix[2][1] === 'X'){
            winningPlayer = 'X';
        }else if(matrix[0][1] === 'O' && matrix[1][1] === 'O' && matrix[2][1] === 'O'){
            winningPlayer = 'O';
        }

        if(matrix[0][2] === 'X' && matrix[1][2] === 'X' && matrix[2][2] === 'X'){
            winningPlayer = 'X';
        }else if(matrix[0][2] === 'O' && matrix[1][2] === 'O' && matrix[2][2] === 'O'){
            winningPlayer = 'O';
        }

        //diagonals
        if(matrix[0][0] === 'X' && matrix[1][1] === 'X' && matrix[2][2] === 'X'){
            winningPlayer = 'X';
        }else if(matrix[0][0] === 'O' && matrix[1][1] === 'O' && matrix[2][2] === 'O'){
            winningPlayer = 'O';
        }

        if(matrix[0][2] === 'X' && matrix[1][1] === 'X' && matrix[2][0] === 'X'){
            winningPlayer = 'X';
        }else if(matrix[0][2] === 'O' && matrix[1][1] === 'O' && matrix[2][0] === 'O'){
            winningPlayer = 'O';
        }

        if(winningPlayer === 'X'){
            return 'X';
        }else if(matrix[0]==='O'){
            return 'O';
        }

    }


}
solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]

)