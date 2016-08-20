var Role = require('roles.baseRole');

var Builder = Object.create(Role());

/** @param {Creep} creep **/
Builder.execute = function (creep) {
    console.log("Builder execute called");
};

module.exports = Builder;
