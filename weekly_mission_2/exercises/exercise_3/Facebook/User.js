export default class User{
    #name;
    #lastname;
    #bio;
    #birthday;
    #profilePicture;
    #profileBanner;
    #friends;

    constructor(name, lastname, bio, birthday, profilePicture, profileBanner, friends){
        this.#name = name;
        this.#lastname = lastname;
        this.#bio = bio;
        this.#birthday = birthday;
        this.#profilePicture = profilePicture;
        this.#profileBanner = profileBanner;
        this.#friends = friends;
    }

    getName(){ return this.#name }
    setName(name){ this.#name = name }
    getLastname(){ return this.#lastname }
    setLastname(lastname){ this.lastname = lastname }
    getBio(){ return this.#bio }
    setBio(bio){ this.#bio = bio }
    getBirthday(){ return this.#birthday }
    setBirthday(birthday){ this.#birthday = birthday }
    getProfilePicture(){ return this.#profilePicture }
    setProfilePicture(profilePicture) { this.#profilePicture = profilePicture}
    getProfileBanner(){ return this.#profileBanner }
    setProfileBanner(profileBanner){ this.#profileBanner = profileBanner }
    getFriends(){ return this.#friends }
    setFriends(friends){ this.#friends = friends }
}