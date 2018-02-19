const connection = require('./connection.js');

const orm = {
    selectAll: function(table, onResult){
        const query = 'SELECT * FROM ??';
        connection.query(query,[table],  function(err, result){
            console.log(err);
            onResult(err,result);
        });
    },
    insertOne: function(){
        const query = 'INSERT INTO ?? (??) VALUES (?)';
        connection.query(query, [table,columns,values], function(err,result){
            console.log(err);
            onResult(err,result);
        });

    },
    updateOne: function(table, column, value, id , onResult) {
        const query = 'UPDATE ?? SET ?? = ? WHERE id = ?';
        connection.query(query, [table,column,value,id], function(err,result){
            console.log(err);
            onResult(err,result);
        });
    }
}

module.exports = orm;