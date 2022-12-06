// 1. Напишите функцию `sumInput()`, которая:
//     - Просит пользователя ввести значения, используя текстовое поле 
//     `input` и сохраняет их в массив
//     - Когда пользователь нажмёт кнопку «Готово»
//         - Выводит получившийся массив в отсортированном по возрастанию 
//         виде
//         - Подсчитывает и возвращает сумму элементов массива


const num = document.querySelector('#input');
let testArray = [];
const result = document.querySelector('#result');
const sumResult = document.querySelector('#sumResult');

function sumInput() {

    const userNum = +num.value;

    testArray.push(userNum);
    testArray.sort(function(a, b){return a-b});

    let test = testArray;
    let summa = test.reduce(function(sum, elem) {
        return sum + elem;
    }, 0);

    result.innerHTML = 'По возрастанию: ' + testArray;
    sumResult.innerHTML = 'Сумма: ' + summa;

}


// 2. Напишите калькулятор расчета стоимости автомобиля в 
// зависимости от комплектации. 
//     - Должен содержать выпадающие списки, чекбоксы, радиокнопки
//     - Выбор того или иного элемента должен влиять на результирующую 
//     цену (*подсказка - суммы опций и вариантов комплектации 
//         можно хранить в value соответствующих input-ов и option-ов, 
//         а потом просуммировать их в цикле*)