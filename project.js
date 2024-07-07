const prompt = require("prompt-sync")();
const COLS= 3;
const ROWS=3;


const SYMBOL_COUNT={
    A:2,
    B:4,
    C:6,
    D:8,
    E:10,
}

const SYMBOL_VALUES={
    A:1,
    B:2,
    C:3,
    D:4,
    E:5,
}


const deposit = () => {
    while (true){
        const depositAmount = prompt("Enter the amount you want to deposit ..");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount<=0){
            console.log("Invalid amount");
        }
        else{
            return numberDepositAmount;
        }
    }
};

const getnumberOflines = () => {
    while (true){
        const Lines= prompt("Enter number lines to bet on --(1-3) ");
        const numberOfLines = parseInt(Lines);

        if (isNaN(numberOfLines) || numberOfLines <=0 || numberOfLines > 3){
            console.log("Invalid number of lines");

        }
        else{
            return numberOfLines;
        }

    }
};

const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the amount you want to bet ..");
        const numberBet = parseFloat(bet);
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / numberOfLines) {
            console.log("Invalid bet amount");
        }
        else{
            return numberBet;
        }
}
};

const spin = () => {
    const symbols =[];
    for (const [symbol, count] of Object.entries(SYMBOL_COUNT)){
        for (let i = 0; i<count; i++){
            symbols.push(symbol);
        }
    }
    const reels = [[], [], []];
    for (let i=0; i< COLS ; i++){
        reels.push([]);

        const reelSymbols =[...symbols];
        for (j=0; j<ROWS; j++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length)
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
    }
}
return reels;
};

const transpose = (reels) =>{
    const rows =[];

    for (let i=0; i <ROWS; i++){
        rows.push([]);
        for (let j =0; j<COLS; j++){
            rows[i].push(reels[j][i]);
        }

    }
    return rows;
};

const printRows =(rows)=>{
    for (const row of rows){
        let rowString =" ";
        for (const [i, symbol] of row.entries()){
            rowString += symbol
            if (i != row.length -1){
                rowString  += " | ";

            }
        }
        console.log(rowString)
    }

};

const getWinnings = (rows, lines, bet ) =>{
    let winnings =0;
    
    for (let row=0; row< lines ; row++){
        const symbols = rows[row];
        let allSame =true;

        for (const symbol of symbols){
            if (symbol != symbol[0]){
                allSame =false;
                break;
            }
        }
        if (allSame) {
            winnigs += bet  *  SYMBOL_VALUES[symbols[0]]
        }

    }
    return winnings;
};

const game = () => {

    let balance= deposit();
    while (true){
        console.log("You have a balance of $" + balance);
        const numberOfLines= getnumberOflines();
        const numBet= getBet(balance, numberOfLines)
        balance -= bet * numberOfLines;
        const reels = spin()
        const rows= transpose(reels);
        printRows(rows);
        const winnings = getWinnings(rows, bet, numberOfLines);
            console.log("You won, $" + winnings.toString());

        if (balance <=0 ){
            console.log("You are out of money, you lost all your money")
            break;
        }
        const playAgain = prompt("Do you want to play again (y/n) ? ")

        if (playAgain != "y") break;
    }
};

game();

