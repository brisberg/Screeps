module.exports = {
  spawnCreep: function(name, role) {
    Game.spawns.Spawn1.createCreep([WORK, MOVE], name, { 'role': role });
  },
  testSpawnTrucker: function(name) {
    Game.spawns.Spawn1.createCreep( [CARRY, CARRY, MOVE, MOVE], name, {
      'role': 'trucker',
      'tasks': {
        1: {
          message: 'this is a test'
        }
      }
    });
  }
};
