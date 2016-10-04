var roles = require('roles.__init__');
var Tasks = require('tasks.__init__');
// var c = require('creep');
var pathCache = require('pathCache');

Creep.prototype.execute = function() {
    Tasks[this.memory.task.name].execute(this, this.memory.task);
};

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
