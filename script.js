'use strict';

function isNumber(num) {
    num = !(isNaN(num) || num == 0 || num == "" || num == null || num == 'indefined');
    return num;
}

const game = function() {
    function getMinMaxNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const randonNum = getMinMaxNumber(1, 100);
    console.log(randonNum);
    let counTry = 10;

    function usersTry() {
        console.log(counTry);
        let userNumber = prompt('Угадай число от 1 до 100! Введите число:');
        userNumber = parseInt(userNumber);
        let newGame;
        console.log(isNumber(userNumber));
        if(isNumber(userNumber)) {
            if(counTry > 1) {
                if(userNumber > randonNum) {
                    counTry--;
                    alert(`Число ${userNumber} больше загаданного. Количество попыток осталось: ${counTry}`);
                    usersTry();
                } else if(userNumber < randonNum) {
                    counTry--;
                    alert(`Число ${userNumber} меньше загаданного. Количество попыток осталось: ${counTry}`);
                    usersTry();
                } else {
                    newGame = confirm(`Поздравляем Вы угадали число! Это число ${randonNum}! Хотите продолжить игру? `);
                    if (newGame) {
                        game();
                    } else {
                        alert(`Очень жаль что Вы не хоттите больше играть! Ждем Вас снова!`);
                    }
                }
            } else {
                newGame = confirm(`Попытки закончились, хотите сыграть еще?`);
                if (newGame) {
                   game();
                } else {
                    alert(`Очень жаль что Вы не хоттите больше играть! Ждем Вас снова!`);
                }
            }
        } else {
            alert(`Вы ввели не число!!! Введите целое число от 1 до 100!`);
            usersTry();
        }
    }
    usersTry();
};

game();