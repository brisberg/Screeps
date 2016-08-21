var utils = require('utils');
var Task = require('tasks.baseTask');
var codes = require('tasks.enums');
var pathCache = require('pathCache');

var MoveTask = new Task();

MoveTask.execute = function(creep, mem) {
  if (creep.fatigue > 0) {
    return codes.TASK_EXEC;
  }

  if (creep.pos.getRangeTo(utils.deserializeRoomPos(mem.goal)) <= mem.distance) {
    return codes.TASK_COMPLETE;
  }

  var path = pathCache.getPath(utils.deserializeRoomPos(mem.start), utils.deserializeRoomPos(mem.goal));
  creep.moveByPath(path);
  return codes.TASK_EXEC;
};

module.exports = MoveTask;
