const db = require('mysql');
const config = require('./config.js');

module.exports = class StudentDB {
    constructor() {
        this.connection = db.createConnection(config);
    }

    create(students)
    {

    }

    update(student_id)
    {

    }

    retreive(id)
    {

    }

    retreiveAll(rows)
    {
        this.connection.connect();
        this.connection.query('select * from student', (error, data) => {
            rows(data);
        });
        this.connection.end();
    }
}
