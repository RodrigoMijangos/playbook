const USER = {
    username : "RodrigoMijangos",
    name : "Rodrigo",
    lastname : "Mijangos",
    birthday : '2000-04-24',
    joinedDate : '2015-03-05',
    bio : "Esta es la Bio de Rodrigo Mijangos",
    profilePicture : "Imagen de Perfil",
    profileBanner : "Imagen de Portada",
    getFullName : function () {return `${this.name} ${this.lastname}`;},
    getDetailedInfo : function () {
        return `Nacido el ${this.birthday} y con usuario ${this.username}`;
    }
}

console.log(USER.getFullName());
console.log(USER.getDetailedInfo());