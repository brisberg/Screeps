var Role = require('roles.baseRole');

var Builder = new Role();

/** @param {Creep} creep **/
Builder.execute = function (creep) {
    console.log("Builder execute called");
};

module.exports = Builder;
