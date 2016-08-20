function Role(name) {
  this.name = name;
}

Role.prototype.execute = function() {
  console.log('BaseRole execute, should never happen');
};

module.exports = Role;
