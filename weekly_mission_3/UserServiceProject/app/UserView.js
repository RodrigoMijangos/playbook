const _service = require('./UserService.js');

class UserView{

    static createUser(payload){

        if(payload == null){
            //throw Error("Nullable Object");
            return {error: "Nullable Object"}
        }
        if(Object.keys(payload).some((key) =>
                payload[key] === null || payload[key] === "" || payload[key] === undefined
            )){
            return {error: "Some parameters haven't valid arguments"};
        }

        try {
            const newst = _service.create(payload['id'], payload['name'], payload['username']);
            return newst;
        } catch (error) {
            return {error: error};
        }
    }
}

user = UserView.createUser({id: 1});

console.log(user.getId());
console.log(user.getName());
console.log(user.getUsername());

module.exports = UserView;