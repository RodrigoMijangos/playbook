const USER = {
    name : "Rodrigo",
    lastname : "Mijangos",
    birthday : '2000-04-24',
    profilepicture : "Esta es una imagen de perfil",
    profileBanner : "Esta es una imagen de portada",
    friends : [
        "Amigo 1",
        "Amigo 2",
        "Amigo 3"
    ],
    getFullName : function () { return `${this.name} ${this.lastname}`; },
    getAmountFriends : function () { return this.friends.length; },
    listFriends : function () {
        msg = "";
        this.friends.forEach(friend => {
            msg += "\t"+friend+"\n"
        });
        return msg;
    }
};

console.log(USER.getFullName());
console.log(USER.getAmountFriends() + " amigos");
console.log(USER.listFriends());
