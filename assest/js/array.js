const cars = ['Toyota ', 'BMW ', 'Bens ']

console.log(cars)
console.log(cars[0])

cars[1] = 'Tesla '
console.log(cars)

cars[4] = 'Ford '
console.log(cars)
console.log(cars[3])

document.getElementById('out-string').innerHTML = cars

console.log(cars.toString())

document.getElementById('out-string-2').innerHTML = cars.join('')

const cars2 = ['Honda ', 'Nissan ']

const allCars = cars.concat(cars2)
console.log(allCars)
allCars.pop()
console.log(allCars)