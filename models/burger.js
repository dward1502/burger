const orm = require('../config/orm.js');

//call the ORM functions using burger specific input for the ORM, possibly coming from HTML

const burg = {
    all: function(callBack){
        orm.selectAll("burgers", function(res){
            callBack(res);
        });
    },

    create: function(columns, values, callBack){
        orm.insertOne("burgers", columns, values, function(res){
            callBack(res);
        });
    },

    update: function(objColumnValues, condition, callBack){
        orm.updateOne("burgers", objColumnValues, condition, function(res){
            callBack(res);
        });
    }
};

module.exports = burg;