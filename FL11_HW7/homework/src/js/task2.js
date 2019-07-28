let game = confirm('Do you want to play a game?');
let uknNumb, userTry, numberTry;
let maxTry = 3;
let multiRange = 2;
let prizeTry = 0;
let asking = true;
if (game === false) {
    alert(`You did not become a millionaire, but can.`);
} else {
    while (asking === true) {
        let totalSum = 0;
        let maxRange = 8;
        let maxSum = 100;
        let newAsk = true;
        while (newAsk === true) {
            uknNumb = Math.round(Math.random() * maxRange);
            numberTry = maxTry;
            prizeTry = maxSum;
            for (; numberTry > 0; numberTry--) {
                userTry = parseInt(prompt(
                    `Enter from 0 to ${maxRange}\n` +
                    `Try to win: ${numberTry}\n` +
                    `Total sum: ${totalSum}$\n` +
                    `Next prize: ${prizeTry}$`));
                if (userTry === uknNumb) {
                    totalSum += prizeTry;
                    maxSum *= multiRange;
                    maxRange += multiRange;
                    break;
                } else {
                    prizeTry /= multiRange;
                }
            }
        newAsk = confirm(`Congratulation, you won! 
Your prize is: ${totalSum}$. Do you want to continue?’`);
        } 
    alert(`Thank you for your participation. Your prize is: ${totalSum}$`);
    asking = confirm(`Do you want to play again?`);
    } 
}