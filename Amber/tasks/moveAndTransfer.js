var moveTask = require('tasks.move');
var transferTask = require('tasks.transfer');
var Task = require('tasks.basetask');
var codes = require('tasks.enums');

var MoveAndTransferTask = new Task();

var state = {
    MOVE: 1,
    TRANSFER: 2,
};

MoveAndTransferTask.initialize = function(start, target) {
    return {
        name: 'moveAndTransferTask',
        state: -1,
        target: { id: target.id, pos: target.pos },
        subtask: moveTask.initialize(start, target.pos, 1)
    };
};

MoveAndTransferTask.execute = function(creep, mem) {
    switch (mem.state) {
        case state.MOVE:
            var result = moveTask.execute(creep, mem.subtask);
            if (result == codes.TASK_COMPLETE) {
                mem.state = state.TRANSFER;
                mem.subtask = transferTask.initialize(Game.getObjectById(mem.target.id));
                return codes.TASK_EXEC;
            }
            else if (result == codes.TASK_FAIL) {
                console.log('MoveAndTransferTask: Move step TASK_FAIL, recalc');
                mem.subtask = moveTask.initialize(creep.pos, mem.target.pos, 1);
                return codes.TASK_EXEC;
            }
            return codes.TASK_EXEC;
        case state.TRANSFER:
            result = transferTask.execute(creep, mem.subtask);
            if (result == codes.TASK_COMPLETE) {
                return codes.TASK_COMPLETE;
            }
            else if (result == codes.TASK_FAIL) {
                mem.state = state.MOVE;
                mem.subtask = moveTask.initialize(creep.pos, mem.target.pos, 1);
                return codes.TASK_EXEC;
            }
            return codes.TASK_EXEC;
        default:
            mem.state = state.MOVE;
            mem.subtask = moveTask.initialize(creep.pos, mem.target.pos, 1);
            return codes.TASK_EXEC;
    }
};

module.exports = MoveAndTransferTask;
