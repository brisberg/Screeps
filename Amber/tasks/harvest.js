var Task = require('tasks.basetask');
var codes = require('tasks.enums');

var HarvestTask = new Task();

HarvestTask.initialize = function(source) {
    return {
        source: source.id
    };
};

HarvestTask.execute = function(creep, mem) {
    if (creep.carry.energy >= creep.carryCapacity) {
        return codes.TASK_COMPLETE;
    }

    var result = creep.harvest(Game.getObjectById(mem.source));
    if (result == ERR_NOT_IN_RANGE) {
        return codes.TASK_FAIL;
    }

    return codes.TASK_EXEC;
};

module.exports = HarvestTask;
