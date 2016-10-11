var Role = require('roles.baseRole');
var Tasks = require('tasks.__init__');

var state = {
    UNASSIGNED: -1,
    HARVEST: 1,
    TRANSFER: 2
};

var Harvester = new Role();

Harvester.initialize = function (target, source) {
    return {
        name: 'harvester',
        state: state.UNASSIGNED,
        source: { id: source.id, pos: source.pos },
        target: { id: target.id, pos: target.pos },
        subtask: {}
    };
};

Harvester.execute =  function (creep, mem) {
    switch (mem.state) {
        case state.HARVEST:
            var result = Tasks.moveAndHarvestTask.execute(creep, mem.subtask);
            if (result == Tasks.enums.TASK_COMPLETE) {
                mem.state = state.TRANSFER;
                mem.subtask = Tasks.moveAndTransferTask.initialize(creep.pos, Game.getObjectById(mem.target.id));
                return Tasks.enums.TASK_EXEC;
            }
            return Tasks.enums.TASK_EXEC;
        case state.TRANSFER:
            result = Tasks.moveAndTransferTask.execute(creep, mem.subtask);
            if (result == Tasks.enums.TASK_COMPLETE) {
                mem.state = state.HARVEST;
                mem.subtask = Tasks.moveAndHarvestTask.initialize(creep.pos, Game.getObjectById(mem.source.id));
                return Tasks.enums.TASK_EXEC;
            }
            return Tasks.enums.TASK_EXEC;
        default:
            mem.state = state.HARVEST;
            mem.subtask = Tasks.moveAndHarvestTask.initialize(creep.pos, Game.getObjectById(mem.source.id), 1);
            return Tasks.enums.TASK_EXEC;
    }
};

module.exports = Harvester;
