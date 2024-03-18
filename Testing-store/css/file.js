'use strict'

// const a = 4 + 6;
// const b = 10 + 3;
// console.log( a+b )
// =================================================
// const productName = "Droid";
// console.log("🚀 ~ productName:", productName)

// const pricePerItem = 2000;
// console.log("🚀 ~ pricePerItem:", pricePerItem)

// =================================================
// let productName = "Droid";
// console.log("🚀 ~ productName:", productName)
// let pricePerItem = 2000;
// console.log("🚀 ~ pricePerItem:", pricePerItem)

// // Change code below this line
// productName = "Repair droid";
// console.log("🚀 ~ productName:", productName)
// pricePerItem = 3500;
// console.log("🚀 ~ pricePerItem:", pricePerItem)
// =================================================
// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;
// ==================================================

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;
// console.log("🚀 ~ totalPrice:", totalPrice)

// ==================================================
//Kombinowane operatory

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// ===================================================
// Konkatynacja

// const username = "Poly";
// const message = "Welcome " + username + "!"
// console.log("🚀 ~ message:", message)

// =================================================
// Szablonowe wiersze (Рядки)

// const guestName = "Mango";
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting);

// ================================================

// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line

// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log("🚀 ~ massage:", message)

// ===============================================

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits`;

// console.log("🚀 ~ message:", message)

// =================================================
// Długość  wiersza (рядка)

// const productName = "Droid";
// console.log("🚀 ~ productName:", productName.length)

// ===============================================

// let username = "Poly";
// let message = `Username ${username} is ${username.length} characters long`;

// console.log("🚀 ~ message:", message)

// username = "Harambe";
// message = `Username ${username} is ${username.length} characters long`;
// console.log("🚀 ~ message:", message)
// username = "Billy";
// message = `Username ${username} is ${username.length} characters long`;
// console.log("🚀 ~ message:", message)
// username = "Joe";
// message = `Username ${username} is ${username.length} characters long`;
// console.log("🚀 ~ message:", message)

// ================================================
// Indeksacja symbolu

// const product = "Repair droid";
// const lastElementIndex = product.length - 1;
// console.log(product[lastElementIndex])
// const product = "Repair droid";
// console.log(product[product.length - 1]);

// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;
// console.log("🚀 ~ courseTopicLength:", courseTopicLength)
// const firstElement = courseTopic[0];
// console.log("🚀 ~ firstElement:", firstElement)
// const lastElement = courseTopic[courseTopic.length - 1];
// console.log("🚀 ~ lastElement:", lastElement)

// ==============================================
// Operatory Rownosci (Порівняння)

// let age = 16;
// let isAdult = age >= 18;

// age = 8;
// isAdult = age >= 18;

// age = 14;
// isAdult = age >= 18;

// age = 20;
// isAdult = age >= 18;

// age = 37;
// isAdult = age >= 18;

// =================================================
// strogie i nie stroge równości

// const correctPassword = "jqueryismyjam";
// const userPassword = "mangodab3st";

// const isValid = correctPassword === userPassword;
// console.log("🚀 ~ isValid:", isValid)

// =============================================
//  Przetwarzanie wiersza w numer

// const value = "24.5px";
// const numerical = Number.parseFloat(value);
// console.log("🚀 ~ numerical:", numerical)

// ============================================


// ================ОСНОВИ ФУНКЦІЇ===================
// ================================================

// function sayHi() {
//     console.log("Hello, this is my first function!");
// }
// sayHi()

// ===========================================
// Parametry i argumenty

// function add (a, b, c,) {
//   console.log(`Addition result equals ${a + b + c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// ==============================================
// RETURN

// function add (a, b, c) {
//     const result = a + b + c;
//     return result;
// }

// add(15, 27, 10)
// add(10, 20, 30)
// add(5, 10, 15)

// ==========================================

// function makeMessage (name, price) {
// return `You picked ${name}, price per item is ${price} credits`
// };

// =========================================

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//     const result = orderedQuantity * pricePerItem;
//     return result;
// }

// ========================================
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function makeMessage(username) {
//     console.log(`Hello ${username}`);
// }

// makeMessage('Jacob');

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


//  Module II

//  Розгалуження
// Інструкція IF

// ======================================

// function checkAge(age) {
//     if (age >= 18) {
//         return "You are an adult";
//     }
// }
// console.log(checkAge(20))

// ========================================
// Інструкція IF / ELSE

// function checkStorage(available, ordered) {
//     if (available <= ordered) {
//         return "Not enough goods in stock!"
//     } else {
//         return "Order is processed, our manager will contact you"
//     }
// }

// console.log(checkStorage(200, 300));

// =======================================
// ELSE.....IF

// function checkStorage(available, ordered) {
// if (ordered === 0) {
//     return "There are no products in the order!"
// } else if (available < ordered) {
//     return "Your order is too large, there are not enough items in stock!"
// } else {
//     return "The order is accepted, our manager will contact you"
// }
// }

// console.log(checkStorage(80, 80));


// ========================================
// Тернарний оператор

// function checkPassword(password) {
//     const correctPassword = "jqueryismyjam";
//     return password === correctPassword ? "Access granted" : "Access denied, wrong password!";
// }
// console.log(checkPassword("angul4r1sl1f3"));

// ========================================
// Оператор SWITCH та BREAK

// function getSubscriptionPrice(type) {
    
//     switch (type) {
//         case "professional":
//             return 20;
//             break;
//         case "organization":
//             return 50;
//             break;
//         case "starter":
//             return 0;
//             break;
//         default:
//             return "Invalid subscription type!";
//     }
// }

// console.log(getSubscriptionPrice("organization"));

// ========================================
// Логічні Оператори
// Логічне І , оператор (&&)

// function isNumberInRange(start, end, number) {
//     return start <= number && end >= number;
// }

// console.log(isNumberInRange(20, 50, 76));

// ========================================
// Логічне АБО  (||)

// function checkAccess(subType) {
//     return subType === "pro" || subType === "vip";
    
// }

// console.log(checkAccess("free"));

// ========================================
// Логічне «НІ» (!)

// function toggleModalVisibility(isVisible) {
//    return isVisible = !isVisible
// }

// console.log(toggleModalVisibility(true));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Методи рядків
//  Метод SLICE

// function getSubstring(string, length) {
    
//     return string = string.slice(0, length);
// }

// console.log(getSubstring("Hello world", 5));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Метод .toLowerCase() & .toUpperCase()

// function normalizeInput(input, to) {
//     if (to === "upper") {
//     return input.toUpperCase()
//     } else if (to === "lower"){
//         return input.toLowerCase()
//     }
// }

// console.log(normalizeInput("Stay Awhile and Listen", "upper"));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Метод includes()

// function checkForName(fullName, firstName) {
//     let mainName = fullName.toLowerCase();
//     let spamName = firstName.toLowerCase()
//     firstName = mainName.includes(spamName)
//     return firstName
// }

// console.log(checkForName("Caty Stars", "Andromeda"));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Методи startsWith() і endsWith()

// function checkFileExtension(fileName, ext) {
//     const fullName = fileName.toLowerCase()
//     const lookingName = ext.toLowerCase()
//     if (fullName.endsWith(lookingName)) {
//         return "File extension matches"
//     } else {
//         return "File extension does not match"
//     }
// }

// console.log(checkFileExtension("index.html", ".css"));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Метод indexOf()

// function getFileName(file) {
//     const findName = file.indexOf(".")
//     if (findName !== -1) {
//         return file.slice(0, findName);
//     } else {
//         return file
//     }
// }

// console.log(getFileName("index.js"));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Метод trim()

// function createFileName(name, ext) {
//     const fileName = name.trim();
//     const expance = ext.trim();
//     return `${fileName}.${expance}`
// }

// console.log(createFileName(" presentation", "xml"));

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// _____________Цикли___________________

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Цикл while

// function calculateTotal(number) {
//     let sum = 0
//     let a = 1;
//     while (a <= number) {
//         sum += a;
//         a++
//     }
//     return sum;
// }

// console.log(calculateTotal(3));


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Цикл for

// function calculateTotal(number) {
//     let sum = 0
//     for (let i = 1; i <= number; i += 1) {
//         sum += i;
//     }
// return sum
// }


// console.log(calculateTotal(24));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Інкремент і декремент

// function calculateEvenTotal(number) {
//     let sum = 0
//     for (let i = 2; i <= number; i += 2) {
//          sum += i;
//      }
//  return sum
//  }

// console.log(calculateEvenTotal(27));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Оператор break

// const start = 2;
// const end = 11;
// let number;

// for (let i = start; i <= end; i++) {
//     if (i % 5 === 0) {
//         number = i;
//         break;
//     }
// }

// console.log(number);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Оператор break і функції

// function findNumber(start, end, divisor) {
//     for (let i = start; i < end; i++) {
//         if (i % divisor === 0) {
//             return i;
//         }
        
//     }
// }

// console.log(findNumber(16, 35, 7));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//   Mодуль 3. Масиви і функції


// Масиви

// const fruits = ["apple", "plum", "pear", "orange"]

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Масиви

// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement	 = fruits[1];
// const lastElement = fruits[3];

// console.log(secondElement);
    
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Перевизначення значення елемента

// const fruits = ["apple", "plum", "pear", "orange"];

// fruits[1] = 'peach';
// fruits[3] = 'banana';

// console.log(fruits);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Довжина масиву

// function getOrderQuantity(order) {
//     return order.length;
// }

// console.log(getOrderQuantity(["apple", "peach", "pear", "banana"]));
// console.log(getOrderQuantity(["apple", "banana"]));
// console.log(getOrderQuantity(["apple", "banana", "pear"]));
// console.log(getOrderQuantity([]));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Індекс останнього елемента

// function getLastElementMeta(array) {
//     const secondElement = array[array.length - 1];
//     const firstIndex = array.length - 1;
//     return [firstIndex, secondElement]
// }

// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));

//
// А тепер давай виконаємо трохи складнішу задачу "Крайні елементи масиву"

// function getExtremeElements(array) {

//     const firstElement = array[0];
//     const secondElement = array[array.length - 1];

//     return [firstElement, secondElement]
// }

// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Присвоєння за посиланням і за значенням

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Методи масиву
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Метод join()


// function getLength(array) {
//     const wordsSum = array.join("");
//     return wordsSum.length
// }

// console.log(getLength(["Mango", "hurries", "to", "the", "train"]));
// console.log(getLength(["M", "a", "n", "g", "o"]));
// console.log(getLength(["top", "picks", "for", "you"]));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Метод split()

// function calculateEngravingPrice(message, pricePerWord) {
//     const oneWord = message.split(" ");
//     return oneWord.length * pricePerWord;
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Метод slice()

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// console.log(firstTwoEls);
// const nonExtremeEls = fruits.slice(1, -1);
// console.log(nonExtremeEls);
// const lastThreeEls = fruits.slice(-3);
// console.log(lastThreeEls);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Метод concat()

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients);
// console.log(allClients);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Метод indexOf()

// function getSlice(array, value) {
//     const arrayIndex = array.indexOf(value);
//     if (arrayIndex === -1) {
//         return [];
//     } else {
//         return array.slice(0, array.indexOf(value) + 1)
//     }
// }

// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey"));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Метод push()

// function createArrayOfNumbers(min, max) {
//     let element = []
//    for (let i = min; i <= max; i++) {
//     element.push(i);
//     }
//     return element
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(10, 87));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Ітерація по масиву
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// ==========
// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }
// ==========

// function calculateTotalPrice(order) {
//     let totalPrice = 0;
//     for (let i = 0; i < order.length; i++) {
//         totalPrice += order[i];
//     }
//     return totalPrice
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// ========================

// function getEvenNumbers(start, end) {
//     let finalArray = [];
//     for (let i = start; i <= end; i++) {
//        if (i % 2 === 0) {
//         finalArray.push(i)
//        }
//     }
//     return finalArray
// }
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));
// console.log(getEvenNumbers());

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Метод includes()

// function checkStorage(storage, item) {
//     const allGoods = storage;
//     const orderItem = item.toLowerCase();

//     if (allGoods.includes(orderItem)) {
//         return `${item.toLowerCase()} is available to order!`
//     } else {
//         return "Sorry! We are out of stock!"
//     }
// }

// console.log(checkStorage(["apple", "plum", "pear"], "plum"));
// console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));

// ===========================================
// спробуємо розв'язати трохи складнішу "Спільні елементи".

// function getCommonElements(array1, array2) {
//     const finalArray = [];
//     for (let i = 0; i < array1.length; i++) {
//        let newArray = array1[i]
//     if (array2.includes(newArray)) {
//         finalArray.push(newArray);
//         }
//         }
//     return finalArray;
// }


// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Цикл for...of

// function calculateTotalPrice(order) {
//     let totalOrder = 0;
//    for (const itemPrice of order) {
//        totalOrder += itemPrice;
//        }
//        return totalOrder
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([]));


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Функції (частина 2)
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Псевдомасив arguments

// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// sum(2, 5);

// ========================

// function createReversedArray() {
//     const arg = Array.from(arguments)
//     return arg.toReversed()
// }

// console.log(createReversedArray(12, 85, 37, 4));
// console.log(createReversedArray(164, 48, 291));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Параметри за замовчуванням

// function count(from, to, step = 1) {
//   console.log(`from: ${from}, to: ${to}, step: ${step}`);

//   for (let i = from; i <= to; i += step) {
//   // ...
//   }
// }

// count(1, 15, 4); // "from: 1, to: 15, step: 4"
// count(1, 15); // "from: 1, to: 15, step: 1"
// count()

// ================================

// function calculateTax(amount, taxRate = 0.2) {
// return amount * taxRate
// }

// console.log(calculateTax(100));
// console.log(calculateTax(200));
// console.log(calculateTax(200, 0.3));
// console.log(calculateTax(100, 0.1));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Функціональний вираз


// =======================================


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// МОДУЛЬ IV  ОБЄКТИ
// =======================
// Створення об'єкта


// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// }

// console.log(apartment);

// ============================

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     }
// }
// console.log(apartment);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Доступ до властивостей через крапку

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

// console.log(aptPrice, aptTags, aptDescr, aptRating);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Доступ до вкладених властивостей

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];

// console.log(ownerName, ownerPhone, ownerEmail,numberOfTags, firstTag, lastTag);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Доступ до властивостей через квадратні дужки

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// console.log(aptRating, aptDescr, aptPrice, aptTags);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Зміна значення властивостей

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// console.log(apartment.price, apartment.rating, apartment.owner.name);

// console.log(apartment.tags);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Додавання властивостей

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//     country: "Jamaica",
//     city: "Kingston",
// }

// console.log(apartment);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Короткі властивості

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//     name,
//     price,
//     image,
//     tags,
// };
// console.log(product);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Обчислювальні властивості

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//     [emailInputName]:"henry.carter@aptmail.com",
//         [passwordInputName]:"jqueryismyjam",
// };

// console.log(credentials.email);
// console.log(credentials.password);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Перебір обєкта

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Цикл for...in

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
// }

// console.log(keys, values);
    
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Метод Object.keys() -> переводит у масив усі ключі

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = [];

// const keysArray = Object.keys(apartment)

// for (const key of keysArray) {
//     keys.push(key);
//     values.push(apartment[key]);
// }

// console.log(values, keys)

// ====================================================

// function countProps(object) {
//     const array = []
//     const arrayItems = Object.keys(object);

//   for (const key of arrayItems) {
//       array.push(key);
//   }

//   return array.length;
// }

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Метод Object.values() -> переводит у масив усі властивості

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys, values);

// ====================================================

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     const salariesArray = Object.values(salaries)

//     for (const salary of salariesArray) {
//         totalSalary += salary
//     }
//     return totalSalary
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Масив об’єктів

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// типу доступ до обєктів у масиві (перебір з for..of)

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const objectItem of colors) {
//     hexColors.push(objectItem.hex)
// }
// for (const objectItem of colors) {
//     rgbColors.push(objectItem.rgb)
// }

// console.log(hexColors);
// console.log(rgbColors);


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Пошук об'єкта за значенням властивості

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//     ];
    
//     for (const object of products) {
//         if (productName === object.name)
//             return object.price;
//     }
//     return null
// }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Колекція значень властивості

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//     ];
    
//     const nameValue = [];
//     for (const object of products) {
//         nameValue.push(object[propName])
//         if (object[propName] === undefined) {
//             return []
//         }
//     }
//     return nameValue
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

// ====================================================

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//     ];
    
//     for (const productObject of products) {
//         const objectKeys = Object.values(productObject)
//         if (objectKeys.includes(productName)) {
//             return productObject.price * productObject.quantity
//         }
//     }
//     return `Product ${productName} not found!`
    
// }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Методи об'єкта

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Методи об'єкта

// const atTheOldToad = {
//     potions: [],
//     getPotions() {
//         return "List of all available potions";
//     },
//     addPotion(potionName) {
//         return `Adding ${potionName}`
//     }
// }

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log(atTheOldToad.addPotion("Power potion"));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Доступ до властивостей об'єкта

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//       return this.potions;
//     },
// };

// console.log(atTheOldToad.getPotions());

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Доступ до властивостей об'єкта

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//     addPotion(potionName) {
//         this.potions.push(potionName);
//   },
// };

// atTheOldToad.addPotion("Invisibility");
// atTheOldToad.addPotion("Power potion");

// console.log(atTheOldToad.potions);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Масив об’єктів

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//     getTotalPrice() {
//         let totalPrice = 0;
//         for (const potionItem of this.potions) {
//             totalPrice += potionItem.price;
//         }
//         return totalPrice
//     },
    
// };

// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// atTheOldToad.addPotion({ name: "Power potion", price: 270 });


// console.log(atTheOldToad.getTotalPrice());


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Зміна об'єкта в масиві

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//     updatePotionName(oldName, newName) {
//         for (const potionsObject of this.potions) {
//             if (potionsObject.name === oldName) {
//                 potionsObject.name = newName;
//           }
//       }
//   },
// };

// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Синтаксис spread і rest

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Залишкові параметри

// function add(...args) {
//     let sum =0
//      for (const i of args) {
//          sum += i;
//     }
//     return sum
// }

// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Збір частини аргументів

// function addOverNum(value, ...args) {
//     let sum = 0;
//     for (const nr of args) {
//         if (nr > value) {
//             sum += nr;
//         }
//     }
//     return sum;
// }

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Входження параметрів (...SPREAD)| (...[1,2,3]) //=> 1 2 3

// function getExtremeScores(scores) {
//     const scoreResult = {
//         best:  Math.max(...scores),
//         worst: Math.min(...scores)
//     }
//     return scoreResult
// }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Створення масиву  [...]

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores, bestScore, worstScore);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Створення об'єкта {...}

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = {...defaultSettings, ...overrideSettings};

// console.log(finalSettings);
