function Role(name) {
  this.name = name;
}

Role.prototype.execute = function() {
  Console.log("BaseRole execute, should never happen");
};
