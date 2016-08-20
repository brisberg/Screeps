var roles = require('roles.__init__');

module.exports.loop = function () {
    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        roles[creep.role].execute(creep);
    }
};
