// function makeTransaction(quantity, priceDroid, discount) {
//   let totalPrice = quantity * priceDroid;

//   if (discount) {
//     console.log("Discount", discount);
//     totalPrice = totalPrice - discount;
//   }

//   return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }

// console.log(makeTransaction(2, 6));
// console.log(makeTransaction(5, 300));
// console.log(makeTransaction(3, 10));
// ------------------------------------------
// const result = makeTransaction(2, 15);

// console.log("result", result);

// const newResult = `диви як вмію: ${result}`;

// console.log(newResult);
// ------------------------------------------
// function sayHello(name) {
//   return `Hello ${name}`;
// }
// let result = sayHello("Tolik");
// console.log(result);
// ------------------------------------------
// function makeTransaction(quantity, priceDroid, customerCredits) {
//   const totalPrice = quantity * priceDroid;

//   if (totalPrice > customerCredits) {
//     return "Insufficient funds!";
//   } else if (totalPrice < customerCredits) {
//     return "You ordered <quantity> droids worth <totalPrice> credits!";
//   }
// }

// console.log(makeTransaction(2, 1, 5));
// console.log(makeTransaction(3, 8, 1));
// console.log(makeTransaction(3, 6, 9));
// console.log(makeTransaction(1, 1, 4));
// ------------------------------------------
// let count = 0;
// for (let i = 100000; i > 2000; i) {
//   makeTransaction(2, 1, 5);
//   count = count + 1;
// }

// console.log(count);
// ------------------------------------------
// function makeTransaction(quantity, priceDroid) {
//   const totalPrice = quantity * priceDroid;
//   return "You ordered ${quantity} droids worth ${totalPrice} credits!";
// }

// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
// ------------------------------------------
// function isEven(number) {
//   return number % 2 === 0;
// }
// const number1 = 4;
// const number2 = 7;
// const number3 = 8;

// console.log(isEven(number1));
// console.log(isEven(number2));
// ------------------------------------------
// const age = 36;
// const message = "Anatoliy is " + age + " years old";

// console.log(message);
// ------------------------------------------
// function info(name, age, city) {
//   name = Tolik;
//   age = 36;
//   city = Kyiv;
// }

// console.log(info);
// ------------------------------------------
// function makeTransaction(quantity, pricePerDroid) {
//   let totalPrice = quantity * pricePerDroid;
//   return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }
// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
// ------------------------------------------
// function getShippingMessage(country, price, deliveryFee) {
//   let totalPrice = price + deliveryFee;
//   return `Shipping to ${country} will cost ${totalPrice} credits`;
// }

// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
// ------------------------------------------
// function getElementWidth(content, padding, border) {
//   const contentWidth = parseFloat(content);
//   const paddingWidth = parseFloat(padding);
//   const borderWidth = parseFloat(border);
//   const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;
//   return totalWidth;
// }

// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200
// ------------------------------------------
// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//   const totalPrice = quantity * pricePerDroid;
//   if (totalPrice > customerCredits) {
//     return "Insufficient funds!";
//   } else {
//     return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//   }
// }

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"
// ------------------------------------------
// function formatMessage(message, maxLength) {
//   if (length <= maxLength) {
//     return message;
//   } else {
//     return message.slice(0, maxLength - 3) + "...";
//   }
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"
// ------------------------------------------
// function sayHi() {
//   console.log("Hello, this is my first function!");
// }
// sayHi();
// ------------------------------------------
// function multiply(x, y, z) {
//   console.log(`Result: ${x * y * z}`);
// }
// multiply(2, 3, 5); // "Result: 30"
// multiply(4, 8, 12); // "Result: 384"
// multiply(17, 6, 25); // "Result: 2550"
// ------------------------------------------
// function add(a, b, c) {
//   const result = a + b + c;
//   console.log(`Addition result equals ${result}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);
// ------------------------------------------
// function multiply(x, y, z) {
//   const product = x * y * z;
//   // Повертаємо результат виразу множення
//   return product;
// }

// // Результат роботи функції можна зберегти у змінну
// const result = multiply(2, 3, 5);
// console.log(result); // 30
// ------------------------------------------
// function multiply(x, y, z) {
//   return x * y * z;
// }

// const result = multiply(2, 3, 5);
// console.log(result); // 30
// ------------------------------------------
// // Глобальна змінна
// const value = "I'm a global variable";

// function foo() {
//   // Можна звернутися до глобальної змінної
//   console.log(value); // "I'm a global variable"
// }

// foo();
// // Можна звернутися до глобальної змінної
// console.log(value);
// // "I'm a global variable"
// ------------------------------------------
// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };
// ------------------------------------------
// employee.getWage();
// let selectedColors = ["red", "blue"];
// selectedColors[2] = "green";
// console.log(selectedColors);
// ------------------------------------------
// const correctPassword = "jqueryismyjam";
// const userPassword = "mangodab3st";
// let isValid = correctPassword === userPassword;

// console.log(isValid);
// ------------------------------------------
// const value = "24.5px";
// const numerical = parseFloat(value);
// console.log(numerical);
// ------------------------------------------
// function sayHi() {
//   console.log("Hello, this is my first function!");
// }
// sayHi();
// ------------------------------------------
// function multiply(x, y, z) {
//   console.log(`Result: ${x * y * z}`);
// }
// multiply(20, 33, 44);
// multiply(27, 50, 48);
// ------------------------------------------
// let price = 0;
// const subscription = "pro";

// if (subscription === "pro") {
//   price = 100;
// }

// console.log(price); // 100

// ------------------------------------------
// const grade = 85;

// if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }

// -------------------------------------------
// const grade = 85;

// if (grade >= 90) {
//   console.log("Perfectly");
// } else if (grade >= 80) {
//   console.log("Good");
// } else if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }
// ------------------------------------------
// const fruit = "apple";

// switch (fruit) {
//   case "apple":
//     console.log("Apple selected");
//     break;
//   case "banana":
//     console.log("Banana selected");
//     break;
//   case "orange":
//     console.log("Orange selected");
//     break;
//   default:
//     console.log("The fruit is unknown");
// }
// ------------------------------------------
// const day = 3;

// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log("This is a working day");
//     break;
//   case 6:
//   case 7:
//     console.log("It is a day off");
//     break;
//   default:
//     console.log("Invalid");
// }
// ------------------------------------------

// const a = 20;
// console.log(a > 10 && a < 30); // true && true -> true

// const b = 50;
// console.log(b > 10 && b < 30); // true && false -> false
// console.log(b > 80 && b < 120); // false && true -> false

// ------------------------------------------
// const a = 5;
// console.log(a < 10 || a > 30); // true || false -> true

// const b = 50;
// console.log(b < 10 || b > 30); // false || true -> true

// const c = 20;
// console.log(c - 20 || c * 2); // 0 || 40 -> 40

// ------------------------------------------

// const screenWidth = 700;
// const sm = 320;
// const md = 768;
// const lg = 1200;

// if (screenWidth <= sm || screenWidth > md) {
//   console.log("Mobile or Desktop screen");
//   // у консолі буде пусто, оскільки жодна з умов не перетворилась на true
// }
// ------------------------------------------
// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !"" -> !false -> true
// console.log(!null); // !null -> !false -> true
// ------------------------------------------
// const isBlocked = false;
// const canChat = !isBlocked; // !false -> true

// if (canChat) {
//   console.log("Can type in chat!");
// } else {
//   console.log("Blocked from typing in chat!");
// }
// ------------------------------------------
// const isOnline = true;
// const isBlocked = false;
// const canChat = isOnline && !isBlocked;
// // true && !false -> true && true -> true

// if (canChat) {
//   console.log("Can type in chat!");
// } else {
//   console.log("Blocked from typing in chat!");
// }
// ------------------------------------------

// function makeTransaction(quantity, pricePerDroid) {
//   const totalPrice = quantity * pricePerDroid;
//   return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }

// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
// ------------------------------------------

// function getShippingMessage(country, price, deliveryFee) {
//   const totalPrice = price * deliveryFee;
//   return `Shipping to ${country} will cost ${totalPrice} credits`;
// }

// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
// ------------------------------------------
// function getElementWidth(content, padding, border) {
//   const contentWidth = parseInt(content);
//   const paddingWidth = parseInt(padding);
//   const borderWidth = parseInt(border);

//   return contentWidth + paddingWidth + borderWidth;
// }

// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200
// ------------------------------------------

// const message = "JavaScript is awesome";
// console.log(message.toUpperCase()); // "JAVASCRIPT IS AWESOME"
// ------------------------------------------
