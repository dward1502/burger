const orm = require('../config/orm.js');

//call the ORM functions using burger specific input for the ORM, possibly coming from HTML

const burg = {
    all: function(callBack){
        orm.selectAll("burgers", function(res){
            callBack(res);
        });
    },


};

module.exports = burg;