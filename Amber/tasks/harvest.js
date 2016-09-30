var Task = require('tasks.baseTask');
var codes = require('tasks.enums');

var HarvestTask = new Task();

MoveTask.execute = function(creep, mem) {
    if (creep.carry.energy >= creep.carryCapacity) {
        return codes.TASK_COMPLETE;
    }


    var source = Game.findById(mem.source);
    var result = creep.harvest(source);
    if (result == ERR_NOT_IN_RANGE) {
        return codes.TASK_FAIL;
    }

    return codes.TASK_EXEC;
};

module.exports = MoveTask;
