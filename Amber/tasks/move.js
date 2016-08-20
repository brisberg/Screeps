var Task = require('tasks.baseTask');

var MoveTask = new Task();

MoveTask.execute = function(creep, task_id) {
  console.log('movement for creep ' + creep.name + ', test=' + creep.memory.tasks[task_id].message);
};

module.exports = MoveTask;
