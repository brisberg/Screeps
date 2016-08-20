var Role = require('roles.baseRole');
var Tasks = require('tasks.__init__');

var Trucker = new Role();

Trucker.execute =  function (creep) {
    Tasks.moveTask.execute(creep, 1);
};

module.exports = Trucker;
