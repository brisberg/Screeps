var Tasks = require('tasks.__init__');

module.exports = {
  spawnCreep: function(name, role) {
    Game.spawns.Spawn1.createCreep([WORK, MOVE], name, { 'role': role });
  },
  testSpawnTrucker: function(name) {
    Game.spawns.Spawn1.createCreep( [WORK, CARRY, MOVE], name, {
      'role': 'trucker',
      'tasks': {
        1: {
          message: 'this is a test',
          distance: 1,
          start: JSON.stringify(Game.spawns.Spawn1.room.getPositionAt(21, 27)),
          goal: JSON.stringify(Game.spawns.Spawn1.room.getPositionAt(27, 17)),
        }
      }
    });
  },
  testSpawnHarvester: function(name) {
    Game.spawns.Spawn1.createCreep( [WORK, CARRY, MOVE], name, {
        task: Tasks.moveAndHarvestTask.initialize(Game.spawns.Spawn1.pos,
                                  Game.spawns.Spawn1.pos.findClosestByRange(FIND_SOURCES), 1)
    });
  },
  moveCreepTo: function(name, x, y) {
    var creep = Game.creeps[name];
    if (!creep) return;

    var goal = creep.room.getPositionAt(x, y);
    creep.memory.tasks[1].start = JSON.stringify(creep.pos);
    creep.memory.tasks[1].goal = JSON.stringify(goal);

    return;
  }
};
