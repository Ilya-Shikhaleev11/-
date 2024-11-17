// Домашняя работа 2
//№1
// var a = Number(prompt("Введите начало диапазона")); 
// var n = Number(prompt("Введите конец диапазона")); 
// var sum = 0;
// while (a <= n) {
//   sum += a;
//   a++;
// }
// alert(sum); 

//№2
// alert('Введите 2 число, что бы найти НОД')
// let numb1 = prompt('Введите первое число');
// let numb2 = prompt('Введите второе число');
// let numb3;

// calc(numb1, numb2)
// alert('НОД чисел ' + numb1 + ' и ' + numb2 + ' будет: ' + numb3)

// function calc(a, b) {
//   let c;
//   while (a != b) {
//     if (a > b) {
//       a = a - b;

//     } else
//     if (a < b) {
//       c = a;
//       a = b;
//       b = c;
//     }

//   }
//   return numb3 = a
// }

//№3
// let n = +prompt("Введите число: ")
// let new_n = Math.abs(n)
// let divisors = ""
// let i = 1
// do {
//     if (new_n % i == 0) {
//         divisors += i + ","
//     }
//     i++;
// } while (i <= new_n)
// alert(`У числа ${n} следующие делители: ${divisors}`)

//№4
// var numb1 = prompt("Введите  число :");
// function getDigitAmount(n) {
//     var c = 0;
//    while(c < n.length) c++;
//     return c;
// }
// alert( getDigitAmount(numb1));

//№5
// let n = 0;
// let positive_number = 0;
// let negative_number = 0;
// let null_number = 0;
// let even_number = 0;
// let odd_number = 0;
// for (let i = 0; i < 10; i++) {
//   n = +prompt("Введите число: ");
//   if (n > 0) {
//     positive_number += 1;
//   } else if (n < 0) {
//     negative_number += 1;
//   } else {
//     null_number += 1;
//   }
//   !(n % 2) ? (even_number += 1) : (odd_number += 1);
// }
// alert(
//   `Из 10 введеных вами чисел ${positive_number} положительных, ${negative_number} отрицательных, ${null_number} равных нулю, ${even_number} четных и ${odd_number} нечетных.`
// );

//№6
// while (true) {
//   const a = +prompt('Введите первое число');
//   const b = +prompt('Введите второе число');
//   const op = prompt('Выберете знак - + / *');
//   const action = {
//     '+': () => a + b,
//     '-': () => a - b,
//     '/': () => a / b,
//     '*': () => a * b
//   }[op];
//   if (action) alert(action());
 
//   if (!confirm('Хотите ли вы решить еще один пример?')) break;
// }

//№7
// let str = prompt("Введите число!");
// let k = prompt("На сколько цифр его сдвинуть?");
// console.log(str.replace(RegExp("(\\d{" + k + "})(\\d*)$"), "$2$1"));

//№8
// const days = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
// for (let iDay = 0; confirm(`${days[iDay]}. Хотите увидеть следующий день?`); iDay = (iDay + 1) % days.length);

//№9
// for (let i = 2; i <= 9;  i += 1) 
//     for (let j = 1; j <= 10; j += 1) {
//       console.log(`${i} x ${j} = ${i * j}`);
//     }

//№10
// let N = 0;
//   do {
//     N = Math.trunc(
//       +prompt("Введите целое число в диапазоне от 0 до 100 включительно: ")
//     );
//   } while (N < 0 || N > 100);
//   alert(`Итак, будем играться с числом ${N}.`);

//   let counter = 0; 
//   let low = 0; 
//   let middle = 0; 
//   let high = 100; 
//   let condition = ""; 

//   while (low <= high) {
//    middle = Math.trunc((low + high) / 2);
//    condition = prompt(
//    `Вы загадали число ${middle}? Введите без кавычек "=", если это так. В противном случае, если искомое число меньше, введите "<", либо же ">", если оно больше. Опять же, без кавычек.`
//     );
    

//     if (condition != "=" && condition != "<" && condition != ">") {
//       alert(
//         "Вы вводите посторонние символы, я вас не понимаю! Будьте внимательнее!"
//       );
//       continue;
      
//     }
//     if (
//       (condition != "=" && middle == N) ||
//       (condition == "<" && middle < N) ||
//       (condition == ">" && middle > N) ||
//       (condition == "=" && middle != N)
//     ) {
//       alert(
//         `Кто-то мухлюет! Знак "${condition}" здесь совсем неуместен! Попробуйте снова!`
//       );
//       continue;
//     } 
//     if (condition == ">") {
//       low = middle + 1;
//     } else if (condition == "<") {
//       high = middle - 1;
//     } else {
//       low = high + 1;
//     }
    
//   }
//   alert(
//     `Итак бинарным поиском мы установили, что вы загадали число ${middle}!`
//   );