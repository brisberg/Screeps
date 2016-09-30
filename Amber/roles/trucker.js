var Role = require('roles.baseRole');
var Tasks = require('tasks.__init__');

var Trucker = new Role();

Trucker.initialize = function (creep) {
    console.log('Trucker init');
};

Trucker.execute = function (creep) {
    if (creep.spawning) {
        return;
    }

    var taskResult = Tasks.moveTask.execute(creep, creep.memory.task_data);

    if (taskResult == Tasks.enums.TASK_COMPLETE) {
        console.log('Carrier has arrived!');
    }
};

module.exports = Trucker;
