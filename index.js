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


// - 1. Дан массив `['js', 'css', 'html']`. Выведите на экран первый элемент.

const it = ['js', 'css', 'html'];

console.log(it[0]);

//ИЛИ в див по кнопке

const button = document.querySelector('#firstProblem');
const div = document.querySelector('#problem1');

button.onclick = function () {
    div.innerHTML = it[0];
}


// - 2. Отфильтруйте массив `[0, 1, false, 2, undefined, '', 3, null]` от 
//нежелательных значений, таких как `false`, `undefined`, пустые строки, 
//`0`, `null` с помощью метода `filter`.  Ожидаемый результат: `[1, 2, 3]`.

const wierdArray = [0, 1, false, 2, undefined, '', 3, null];
const filterWierdArray = document.querySelector('#filterWierdArray');
const wierdArrayContainer = document.querySelector('#wierdArrayContainer');

const wierdArrayResult = wierdArray.filter(function(elem) {
    if (elem = Number(elem)) {
        return true; 
    }
        else {
            return false;
        }
    });

    filterWierdArray.onclick = function () {
        wierdArrayContainer.innerHTML = wierdArrayResult;
    }



// - 3. Дан массив `[[1,2], [1,2,3], [1,2,3,4]]`. Найдите индекс массива,
//длина которого `> 3`. Ожидаемый результат: `2`


const threesomeArray = [[1,2], [1,2,3], [1,2,3,4]];

for (let i=0; i<threesomeArray.length; i++) {
    
    //console.log(threesomeArray[i].length);

    if (threesomeArray[i].length > 3) {
        console.log(i);
    }
}
