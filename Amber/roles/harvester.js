var Role = require('roles.baseRole');
var Tasks = require('tasks.__init__');

var state = {
    UNASSIGNED: -1,
    MOVE_TO_SOURCE: 1,
    HARVEST: 2,
    MOVE_TO_SPAWN: 3,
    TRANSFER: 4
};

var Harvester = new Role();

Harvester.initialize = function (creep, spawn, source) {
    creep.role_data = {
        state: state.MOVE_TO_SOURCE,
        spawn: spawn,
        source: source
    };

};

Harvester.execute =  function (creep) {
    result = Tasks[creep.memory.role_data.task];
    switch (creep.role_data.state) {
        case state.MOVE_TO_SOURCE:
            if (creep.harvest.energy < creep.carry_capacity)
            break;
    }
};

module.exports = Harvester;
