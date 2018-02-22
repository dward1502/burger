const connection = require('./connection.js');

function insertQuestionMarks(num){
    let arr = [];

    for(var i = 0; i<num; i++){
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob){
    let arr = [];

    for(let key in ob){
        let value = ob[key];

        if(Object.hasOwnProperty.call(ob,key)){
            if(typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            }

            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
    
}

const orm = {
    selectAll: function(table, callBack){
        const query = "SELECT * FROM " + table + ";";
        connection.query(query, function(err, result){
            if(err){
                throw err;
            }
            callBack(result);
        });
    },
    insertOne: function(table, columns ,values, callBack){
        let query = 'INSERT INTO ' + table;

        query += " (";
        query += columns.toString();
        query += ") ";
        query += "VALUES (";
        query += insertQuestionMarks(values.length);
        query += ") ";

        console.log(query);

        connection.query(query, values, function(err,result){
            if(err){
                throw err;
            }
            console.log("There is an error: " +err);
            callBack(result);
        });

    },
    updateOne: function (table, objColumnValues, condition, callBack) {
        let query = 'UPDATE ' + table;

        query += " SET ";
        query += objToSql(objColumnValues);
        query += " WHERE ";
        query += condition;

        console.log(query);
        
        connection.query(query, function(err,result){
            if(err){
                throw err;
            }
            console.log("There is an error: "+err);
            callBack(result);
        });
    }
}

module.exports = orm;