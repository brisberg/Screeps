module.exports = {
  spawnCreep: function(name, role) {
    Game.spawns.Spawn1.createCreep([WORK, MOVE], name, { 'role': role });
  },
  testSpawnTrucker: function(name) {
    Game.spawns.Spawn1.createCreep( [MOVE], name, {
      'role': 'trucker',
      'tasks': {
        1: {
          message: 'this is a test',
          start: JSON.stringify(Game.spawns.Spawn1.room.getPositionAt(21, 27)),
          goal: JSON.stringify(Game.spawns.Spawn1.room.getPositionAt(27, 17)),
        }
      }
    });
  }
};
