//  let number = 5;
//  const width = 1;

//  number = 22;
//  console.log(number);

//  const obj = {
// 	a: 50
//  };

//  obj.a = 10;
//  console.log(obj );

//  { 
// 	let result = 50;
// 	var result = 50;
//  }

//  console.log(result);

//  стили переменніх
// snake_case
// UPPER_SNAKE_CASE для констант
// Kebab-case
// PascalCase


// Масивы это переень данных по порядку,который начинается с 0
const arr = [1, 2, 3];
arr[10] = "3456";
console.log(arr[10]);
console.log(arr);

// Масивы это частный случай объекта
// Получения данных

console.log(arr[1]);
// Объекты это структура хранения данных в парном формате
// const obj = {a: 1, b: 2};
const obj = {
	"Anna": 500,
	"Alice": 1800,
	Katrine: 900,
	19: 300
};
// Получения данных
console.log(obj.Katrine);
console.log(obj[19]);
// Добавление новых данных
// 1 способ
obj.Kate = "2000";
console.log(obj.Kate);
console.log(obj["Kate"]);
// 2 способ
obj["Kate"] = "4000";
console.log(obj.Kate);
// это не работает
const Kate = "Kate";
obj[Kate] = "1234";
