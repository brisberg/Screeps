function Role(name) {
    this.name = name;
}

Role.prototype.execute = function(creep) {
    console.log('BaseRole execute, should never happen');
};

Role.prototype.initialize = function(creep) {
    console.log('BaseRole initialize, should never happen');
};

module.exports = Role;
