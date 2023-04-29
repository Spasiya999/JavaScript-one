const car = {
  manufacture: "toyota",
  year: 2015,
  modle: "corolla",
  age: function(){
     return 2023-this.year
  }

}
// car.age =20
car.year = 2010

console.log(car['year']);
// console.log(car['age']);
console.log(car.modle);
console.log(car.age());