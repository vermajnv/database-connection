const db = require('mysql');
const config = require('./config.js');

module.exports = class StudentDB {
    constructor() {
        this.connection = db.createConnection(config);
    }

    create(studentObj, cb)
    {
        this.connection.connect();
        this.connection.query('insert into student set ?', studentObj, (error, data) => {
            cb(data);
        });
        this.connection.end();
    }

    update(studentToBeUpdate, cb)
    {
        this.connection.connect();
        const {name, ...studentObj} = studentToBeUpdate;
        this.connection.query('update student set ? where ? ', [studentObj, {name : name}], (error, data) => {
            cb(data);
        });
        this.connection.end();
    }

    delete(studentParam, cb)
    {
        this.connection.connect();
        this.connection.query('delete from student where ?', studentParam, (error, data) => {
            cb(data);
        });
        this.connection.end();
    }

    retreiveWhere(studentParam, cb)
    {
        this.connection.connect();
        this.connection.query('select * from student where ?', studentParam, (error, data) => {
            cb(data);
        });
        this.connection.end();
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
