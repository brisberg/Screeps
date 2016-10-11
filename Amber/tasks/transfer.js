var Task = require('tasks.basetask');
var codes = require('tasks.enums');

var TransferTask = new Task();

TransferTask.initialize = function(target) {
    return {
        target: target.id
    };
};

TransferTask.execute = function(creep, mem) {
    var target = Game.getObjectById(mem.target);

    if (creep.carry[RESOURCE_ENERGY] === 0 || target.energy === target.energyCapacity) {
        return codes.TASK_COMPLETE;
    }

    var result = creep.transfer(target, RESOURCE_ENERGY);
    if (result == ERR_NOT_IN_RANGE) {
        return codes.TASK_FAIL;
    }

    return codes.TASK_EXEC;
};

module.exports = TransferTask;
