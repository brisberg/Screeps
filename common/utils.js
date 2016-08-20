module.exports = {
    deserializeRoomPosition: function(string) {
        var obj = JSON.parse(string);
        return new RoomPosition(obj.x, obj.y, obj.roomName);
    }
};
