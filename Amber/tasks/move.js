var utils = require('utils');
var Task = require('tasks.baseTask');
var pathCache = require('pathCache');

var MoveTask = new Task();

MoveTask.execute = function(creep, task_id) {
  var mem = creep.memory.tasks[task_id];
  console.log('movement for creep ' + creep.name + ', test=' + mem.message);
  console.log('mem.start: ' + JSON.parse(mem.start).x + ', ' + JSON.parse(mem.start).y);
  var roomPos = utils.deserializeRoomPosition(mem.start);
  console.log('roomPos: ' + roomPos);
  creep.moveByPath(pathCache.getPath(utils.deserializeRoomPosition(mem.start), utils.deserializeRoomPosition(mem.goal)));
};

module.exports = MoveTask;
