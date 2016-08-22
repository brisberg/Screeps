var _ = require('lodash');

if (!Memory.pathCache) {
  Memory.pathCache = {};
}

function _getPathKey(from, to) {
  return _getPosKey(from) + '$' + _getPosKey(to);
}

function _getPosKey(pos) {
  return pos.x + 'x' + pos.y + pos.roomName;
}

module.exports = {
  CACHE_MAX_SIZE: 1500,
  CACHE_STALE_LIMIT: 2000,

  getPath: function(from, to) {
    var pathKey = _getPathKey(from, to);
    var pathObj = Memory.pathCache[pathKey];

    if (pathObj && Game.time - pathObj.lastUsed < this.CACHE_STALE_LIMIT) { // found path
      console.log('Game.time: ' + Game.time + ' - lastUsed: ' + pathObj.lastUsed + ' < CACHE_STALE_LIMIT: ' + this.CACHE_STALE_LIMIT);
      pathObj.lastUsed = Game.time;
      Memory.pathCache[pathKey] = pathObj;
      return pathObj.path;
    }
    else { // no path found ot path expired
      if (_.size(Memory.pathCache) > this.CACHE_MAX_SIZE) {
        this.cleanCache();
      }

      var curRoom = Game.spawns.Spawn1.room;
      var path = curRoom.findPath(from, to);

      Memory.pathCache[pathKey] = {
        path: Room.serializePath(path),
        lastUsed: Game.time
      };
      return path;
    }
  },

  /* Clear all cached paths older than CACHE_STALE_LIMIT */
  cleanCache: function() {
    var stale_limit = this.CACHE_STALE_LIMIT;
    Memory.pathCache = _.pick(Memory.pathCache, function(pathObj, pathKey) {
      return Game.time - pathObj.lastUsed < stale_limit;
    });
  }
};
