var Tasks = require('tasks.__init__');
var Roles = require('roles.__init__'); // TODO Remove

module.exports = function () {
    Creep.prototype.execute = function() {
        if (!this.spawning) {
            return Roles[this.memory.task.name].execute(this, this.memory.task);
        }
    };
};
