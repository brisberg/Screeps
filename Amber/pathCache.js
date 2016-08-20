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
  getPath: function(from, to) {
    console.log('from ' + from + ', to ' + to);
    var path = Memory.pathCache[_getPathKey(from, to)];
    if (path) { // found path
      return path;
    }
    else { // no path found
      var curRoom = Game.spawns.Spawn1.room;
      path = curRoom.findPath(from, to);
      debugger;
      console.log(path);
      Memory.pathCache[_getPathKey(from, to)] = Room.serializePath(path);
      return path;
    }
  }
};
