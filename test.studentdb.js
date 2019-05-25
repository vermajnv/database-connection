const Student = require('./studentdb.js');

let student = new Student();
// student.retreiveAll((rows) => {
//     console.log(rows);
// });

// student.retreiveWhere({'age' : 24}, (rows) => {
//     console.log(rows);
// });

// student.delete({name : 'Golu'}, (rows) => {
//     console.log(rows);
// });

// student.create({name : 'Prabhat', age : 20, address : 'Allahabad'}, (rows) => {
//     console.log(rows);
// });

student.update({name : 'Prabhat', age : 44, address : 'Lucknow'}, (rows) => {
    console.log(rows);
});
