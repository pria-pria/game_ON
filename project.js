const prompt = require("prompt-sync")();
COLS= 3;
ROWS=3;


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


let balance= deposit();
const numberOfLines= getnumberOflines();
const numBet= getBet(balance, numberOfLines)
const reels = spin()
console.log(reels)