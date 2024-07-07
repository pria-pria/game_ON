const prompt = require("prompt-sync")();

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
}

let balance= deposit();
const numberOfLines= getnumberOflines();
