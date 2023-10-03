const newDate=new Date();

// console.log(newDate);
// output=> 2023-10-03T15:02:40.943Z


// console.log(newDate.toString());
// output=> Tue Oct 03 2023 15:03:26 GMT+0000 (Coordinated Universal Time)

// console.log(newDate.getDay());
// console.log(newDate.getDate());
// console.log(newDate.getFullYear());
// console.log(newDate.toJSON());
const anotherDate= new Date('03-09-2023');
const ranDate= Date.now();
console.log(ranDate);
// console.log(ranDate.toString());
console.log(anotherDate.getTime());
console.log(anotherDate.getTime()>= ranDate);

