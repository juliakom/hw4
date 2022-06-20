//1----------------------------------------------------------------------------

let arr = [
  '455',
  87.15,
  true,
  undefined,
  7,
  null,
  'false',
  ['sea', 'tea', 'rain'],
  {name: 'Julia', city: 'Odessa' },
]

for (i = 0; i < arr.length; i++) {
  console.log(typeof arr[i]);
}

for (i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number') {
    console.log(arr[i] + 3);
  }
}


//2------------------------------------------------------------------------------------------------

let length = Math.round((prompt('Enter an integer')));
while (isNaN(length)) {
  alert('Invalid. You should enter an integer');
  length = Math.round(prompt('Enter an integer again'));
}

let arrOne = [];

for(i = 0; i < length; i++) {
  arrOne.push(Math.floor(Math.random() * 10));
}
console.log(arrOne);

let arrTwo = arrOne.slice();

for (i = 2; i < arrTwo.length; i += 3) {
  arrTwo[i] *= 3;
}

console.log(arrTwo);

//3------------------------------------------------------------------------------------------------

let studentOne = {
  firstName: 'Nikola',
  lastName: 'Tesla',
  mark: 3,
}

let studentTwo = {...studentOne};
studentTwo.mark = 4;

let studentThree = Object.assign({}, studentOne);
studentThree.mark = 5;

let count = [ studentOne.mark, studentTwo.mark, studentThree.mark];
let sum = 0;
for(i = 0; i < count.length; i++) {
  sum += count[i];
}
count = sum / count.length;
console.log(count);

console.log(`${studentOne['mark']}, ${studentTwo['mark']}, ${studentThree['mark']}`);

for (let key in studentOne) {
  console.log(`${key} - ${studentOne[key]}`);
}