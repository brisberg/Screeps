var Role = require('roles.baseRole');
var Tasks = require('tasks.__init__');

var Trucker = new Role();

Trucker.execute =  function (creep) {
    if (creep.spawning) {
        return;
    }

    var taskResult = Tasks.moveTask.execute(creep, creep.memory.tasks[1]);

    if (taskResult == Tasks.enums.TASK_COMPLETE) {
        console.log('Carrier has arrived!');
    }
};

module.exports = Trucker;
