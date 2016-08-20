module.exports = {
  spawnBuilder: function(){
    Game.spawns.Spawn1.createCreep([WORK, MOVE], 'builder', { 'role': 'builder', 'test' : 'test1' });
  }
};
