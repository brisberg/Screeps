function Task(name) {
    this.name = name;
}

Task.prototype.execute = function(creep, mem) {
    console.log('BaseTask execute, should never happen');
};

module.exports = Task;
