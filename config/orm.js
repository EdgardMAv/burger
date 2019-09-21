const connection = require("../config/connection");

function objToSql(ob) {
    var arr = []; 

    for (var key in ob){
        var value = ob[key];
        if(Object.hasOwnProperty.call(ob, key)) {
            if(typeof value === "string" && value.indexOf("") >=0){
                value = " ' " + value + " ' ";
            }
            arr.push(key + "=" + value);
        }  
    }
    return arr.toString();
}

var orm = {
    selectAll:(tableInput, cb) =>{
        const queryString = "SELECT * FROM" + tableInput + ";";
        connection.query(queryString, (err, result) =>{
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: (table, cols, vals, cb) =>{
        let queryString = "INSERT INTO" + table;
        console.log(queryString);

        connection.query(queryString, vals, (err, result) =>{
            if(err) throw err;
            cb(result);
        });
    },
    updateOne: (table, objColVals, condition, cb) =>{
        let queryString = "UPDATE" + table + "SET" + objToSql(objColVals) + "WHERE" + condition + ";";

        connection.query(queryString, (err, result) =>{
            if(err) throw err;
            cb(result);
        });

    }
};
module.exports = orm;