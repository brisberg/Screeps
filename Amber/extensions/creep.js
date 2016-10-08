var Tasks = require('tasks.__init__');

module.exports = function () {
    Creep.prototype.execute = function() {
        if (!this.spawning) {
            return Tasks[this.memory.task.name].execute(this, this.memory.task);
        }
    };
};
