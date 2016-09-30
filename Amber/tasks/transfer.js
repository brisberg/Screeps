var Task = require('tasks.baseTask');
var codes = require('tasks.enums');

var TransferTask = new Task();

MoveTask.execute = function(creep, mem) {
    var target = Game.findById(mem.target);

    if (creep.carryCapacity === 0 || target.energy === target.energyCapacity) {
        return codes.TASK_COMPLETE;
    }

    var result = creep.transfer(target);
    if (result == ERR_NOT_IN_RANGE) {
        return codes.TASK_FAIL;
    }

    return codes.TASK_EXEC;
};

module.exports = MoveTask;
