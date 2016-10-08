require('extensions.__init__');

var roles = require('roles.__init__');
var Tasks = require('tasks.__init__');
var pathCache = require('pathCache');

// TODO move these to globals
var CACHE_CLEANUP_INTERVAL = 2000;

module.exports.loop = function () {
  if (Game.time % CACHE_CLEANUP_INTERVAL === 0) {
    pathCache.cleanCache();
  }

  for (var name in Game.creeps) {
    var creep = Game.creeps[name];
    // roles[creep.memory.role].execute(creep);
    creep.execute();
  }
};
