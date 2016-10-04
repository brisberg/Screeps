function Task(name) {
    this.name = name;
}

Task.prototype.initialize = function() {
    console.log('BaseTask initialize, should never happen');
};

Task.prototype.execute = function(creep, mem) {
    console.log('BaseTask execute, should never happen');
};

module.exports = Task;
