/*
 * Функція конструктор: Vehicle
 * Властивості:
 * --------------------------------------
 * | Аргументи  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 */

// 11111111111111111111111111111111111111111111111111111111111111111111111
// Створюємо функцію конструктор Vehicle.
function Vehicle(brand, model, year, mileage) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.mileage = mileage;
  //  Записуєм в this.brand значення аргументу brand, в this.model значення аргументу model і так далі зі всіми аргументами
}

// Рядковому представленю Vehicle призначаємо функцію яка повертає рядок: <brand> <model> <year>
Vehicle.prototype.toString = function () {
  return `${this.brand} ${this.model} ${this.year}`;
};
// valueOf - це метод, який використовується JavaScript для конвертації об'єкта в примітивне значення.
// Ми перевизначаємо його тут, щоб він повертав this.mileage.
Vehicle.prototype.valueOf = function () {
  return this.mileage;
};

// 222222222222222222222222222222222222222222222222222222222222222222222222
/*

 * Функція конструктор: Car
 * Властивості:
 * ----------------
 * | Властивість  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 * | fuelType     |
 * | speed        |
 */

//Створюємо Car - це ще один конструктор, який наслідує властивості і методи з Vehicle за допомогою функції apply.
 // Викликаємо конструктор Vehicle за допомогою apply, передаємо в нього this, [brand, model, year, mileage].
  function Car(brand, model, year, mileage, fuelType, speed) {
  Vehicle.apply(this, [brand, model, year, mileage]);
  
  //  Записуєм в this.fuelType значення аргументу fuelType, в this.speed значення аргументу speed
this.fuelType = fuelType;
this.speed = speed;
}

// Ми можемо перевизначити методи з Vehicle в Car.
// Рядковому представленю прототипу Car призначаємо функцію яка повертає рядок: <brand> <model> <year> - <fuelType>.
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.toString = function () {
  return `${this.brand} ${this.model} ${this.year} - ${this.fuelType}`;
};
// Cтворюємо метод accelerate для прискорення швидкості прототипу Car, збільшує this.speed на передане число та виводить рядок в консоль: Автомобіль <make> <model> прискорився до швидкості <speed> км/год
Car.prototype.accelerate = function (speedIncrement) {
  this.speed += speedIncrement;
  console.log(`Автомобіль ${this.brand} ${this.model} прискорився до швидкості ${this.speed} км/год`);
};
// Метод brake для гальмування прототипу Car,зменшує this.speed на передане число та виводить рядок в консоль в консоль: Автомобіль <make> <model> зменшив до швидкості <speed> км/год
Car.prototype.brake = function (speedDecrement) {
  this.speed -= speedDecrement;
  console.log(`Автомобіль ${this.brand} ${this.model} зменшив до швидкості ${this.speed} км/год`);
};
// 333333333333333333333333333333333333333333333333333333333333333333333333333333333
console.log ("===Car_Audi======================================")
// Створюємо новий екземпляр об'єкта Car
/*
 * Екземпляр об'єкту: Car
 * Властивості:
 * --------------------------------------
 * | Властивість  |  Значення           |
 * |--------------|---------------------|
 * | brand        |  "Audi"             |
 * | model        |  "A6"               |
 * | year         |  2018               |
 * | mileage      |  30000              |
 * | fuelType     |  "Petrol"           |
 * | speed        |  0                  |
 */
var car = new Car("Audi", "A6", 2018, 30000, "Petrol", 0);
// Викличемо функції toString та valueOf об'єкта car
console.log(car.toString());

console.log("/car.valueOf/ повертає примітивне значення: mileage", car.valueOf()); 
// Використовуємо методи для прискорення та передаємо 50
car.accelerate(50);
// Використовуємо методи для гальмування та передаємо 20
car.brake(20);

// 444444444444444444444444444444444444444444444444444444444444444


/*
 * Функція конструктор Truck
 * Властивості:
 * --------------------
 * | Властивість      |
 * |------------------|
 * | brand            |
 * | model            |
 * | year             |
 * | mileage          |
 * | color            |
 * | engineType       |
 * | towingCapacity   |
 * | fuelType         |
 * | transmissionType |
 * | doors            |
 * | weight           |
 */

// Конструктор Truck наслідуємо Vehicle викликавши його в конструкторі з call
function Truck(
  brand,
  model,
  year,
  mileage,
  color,
  engineType,
  towingCapacity,
  fuelType,
  transmissionType,
  doors,
  weight
) {
  // Викликаємо Vehicle.call та передаємо в нього: this, brand, model, year, mileage
  //  Записуєм в this.color значення аргументу color, в this.engineType значення аргументу engineType і так далі зі всіми аргументами
  Vehicle.call(this, brand, model, year, mileage);
    this.color = color;
    this.engineType = engineType;
    this.towingCapacity = towingCapacity;
    this.fuelType = fuelType;
    this.transmissionType = transmissionType;
    this.doors = doors;
    this.weight = weight;
}
Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;
// Додатковий метод specific для прототипу Trucks, примає число якщо воно більше towingCapacity виводить рядок в консоль: Навантаження занадто важке для буксирування, якщо ні то рядок Тягнення навантаження...
Truck.prototype.tow = function(weight) {
  if (weight <= this.towingCapacity) {
    console.log("Тягнення навантаження...");
  } else {
    console.log("Навантаження занадто важке для буксирування");
  }
};
console.log ("===Truck=====================================")

// 55555555555555555555555555555555555555555555555555555555555555555555
// Створюємо новий екземпляр об'єкта Truck
/*
 * Екземпляр об'єкту: myTruck
 * Властивості:
 * ---------------------------------------------------
 * | Властивість      | Значення                     |
 * |------------------|------------------------------|
 * | brand            | "Toyota"                     |
 * | model            | "Tundra"                     |
 * | year             | 2019                         |
 * | mileage          | 20000                        |
 * | color            | "Red"                        |
 * | engineType       | "V8"                         |
 * | towingCapacity   | 10000                        |
 * | fuelType         | "Gasoline"                   |
 * | transmissionType | "Automatic"                  |
 * | doors            | 4                            |
 * | weight           | 5600                         |
 */
var myTruck = new Truck(
  "Toyota",
  "Tundra",
  2019,
  20000,
  "Red",
  "V8",
  10000,
  "Gasoline",
  "Automatic",
  4,
  5600
);
// Викликаємо метод tow з вагою меншою за towingCapacity
myTruck.tow(8000);
// Викликаємо метод tow з вагою більшою за towingCapacity
myTruck.tow(12000);
// Додаємо метод drive для прототипу Car, який збільшує kilometers на передане число, та виводить Подорожуємо <kilometers> кілометрів у <brand> <model>.
Car.prototype.drive = function(kilometers) {
  this.kilometers += kilometers;
  console.log(`Подорожуємо ${kilometers} кілометрів у ${this.brand} ${this.model}`);
};
// Використовуємо bind для зв'язування методу drive з конкретним об'єктом car.
// Це створює нову функцію, в якій this постійно встановлено на car, незалежно від того, як функцію викликають.
// Викликаємо функцію зі значенням 100,
var boundDrive = car.drive.bind(car);
boundDrive(100);

// 66666666666666666666666666666666666666666666666666666666666666666
/*
 * Функція конструктор: ElectricCar
 * Властивості:
 * --------------------------------------
 * | Властивість   |
 * |---------------|
 * | brand         |
 * | model         |
 * | year          |
 * | mileage       |
 * | batteryCapacity|
 */

function ElectricCar(brand, model, year, mileage, batteryCapacity) {
  if (!(this instanceof ElectricCar)) {
    throw new Error("Конструктор має бути викликаний з 'new'");
  }
  // Викликаємо Car.call та передаємо в нього this, brand, model, year, mileage
  Car.call(this, brand, model, year, mileage);
  this.batteryCapacity = batteryCapacity; // Записуємо в this.batteryCapacity значення аргументу batteryCapacity
}

// Наслідування прототипу ElectricCar від прототипу Car
ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

// Перевизначення методу toString для прототипу ElectricCar
ElectricCar.prototype.toString = function() {
  return `${this.brand} ${this.model} ${this.year} - Батарея: ${this.batteryCapacity} kWh`;
};

console.log ("==ElectricCar========================================")
// 7777777777777777777777777777777777777777777777777777777777777777
// Створюємо новий екземпляр ElectricCar
/*
 * Екземпляр об'єкту: ElectricCar
 * Властивості:
 * --------------------------------------
 * | Властивість     | Значення          |
 * |-----------------|-------------------|
 * | brand           | Tesla             |
 * | model           | Model S           |
 * | year            | 2020              |
 * | mileage         | 10000             |
 * | batteryCapacity | 100               |
 */
var tesla = new ElectricCar("Tesla", "Model S", 2020, 10000, 100);
// Викликаємо метод toString об'єкту tesla та виводимо в консоль
console.log(tesla.toString()); // Виведе: Tesla Model S 2020 - Батарея: 100 kWh

console.log ("==додаткові операції з Truck========================================")

// Метод tow для прототипу Truck
Truck.prototype.tow = function () {
  if (this.weight <= this.towingCapacity) {
    console.log(`${this.brand} ${this.model} ${this.year} з двигуном '${this.engineType}' тягне навантаження ${this.weight} кг.`);
  } else {
    console.log("Навантаження занадто важке для буксирування");
  }
};

myTruck.tow(); // Виведе: Toyota Tundra 2019 з двигуном 'V8' тягне навантаження 5600 кг.