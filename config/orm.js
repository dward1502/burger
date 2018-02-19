const connection = require('./connection.js');

const orm = {
    selectAll: function(table, callBack){
        const query = "SELECT * FROM " + table + ";";
        connection.query(query, function(err, result){
            if(err){
                throw err;
            }
            callBack(err,result);
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