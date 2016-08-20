function Task(name) {
  this.name = name;
}

Task.prototype.execute = function(creep, task_id) {
  console.log('BaseTask execute, should never happen');
};

module.exports = Task;
