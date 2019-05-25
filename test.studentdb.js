const Student = require('./studentdb.js');

let student = new Student();
student.retreiveAll((rows) => {
    console.log(rows);
});
