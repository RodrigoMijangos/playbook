const User = require('../../twitter/index.js');

class UserService{
    static create(id, name, username){
        return new User(id, name, username, "No bio");
    }

    static getInfo(user){
        return [user.getId(), user.getName(), user.getUsername(), user.getBio(), user.getDateCreated(), user.getLastUpdated()];
    }
}

module.exports = UserService;