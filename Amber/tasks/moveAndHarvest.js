var moveTask = require('tasks.move');
var harvestTask = require('tasks.harvest');
var Task = require('tasks.basetask');
var codes = require('tasks.enums');

var MoveAndHarvestTask = new Task();

var state = {
    UNASSIGNED: -1,
    MOVE: 1,
    HARVEST: 2,
};

MoveAndHarvestTask.initialize = function(start, source) {
    return {
        name: 'moveAndHarvestTask',
        state: state.MOVE,
        source: source.id,
        subtask: moveTask.initialize(start, source.pos, 1)
    };
};

MoveAndHarvestTask.execute = function(creep, mem) {
    switch (mem.state) {
        case state.MOVE:
            var result = moveTask.execute(creep, mem.subtask);
            if (result == codes.TASK_COMPLETE) {
                mem.state = state.HARVEST;
                mem.subtask = harvestTask.initialize(Game.getObjectById(mem.source));
                return codes.TASK_EXEC;
            }
            else if (result == codes.TASK_FAIL) {
                console.log('MoveAndHarvestTask: Move step TASK_FAIL, recalc');
                mem.subtask = moveTask.initialize(creep.pos, source.pos, 1);
                return codes.TASK_EXEC;
            }
            return codes.TASK_EXEC;
        case state.HARVEST:
            result = harvestTask.execute(creep, mem.subtask);
            if (result == codes.TASK_COMPLETE) {
                return codes.TASK_COMPLETE;
            }
            else if (result == codes.TASK_FAIL) {
                mem.state = state.MOVE;
                mem.subtask = moveTask.initialize(creep.pos, source.pos, 1);
                return codes.TASK_EXEC;
            }
            return codes.TASK_EXEC;
        default:
            mem.state = state.MOVE;
            mem.subtask = moveTask.initialize(creep.pos, source.pos, 1);
            return codes.TASK_EXEC;
    }
};

module.exports = MoveAndHarvestTask;
