'use strict';
export default class User {

    #username;
    #name;
    #lastname;
    #birthday;
    #joinedDate;
    #bio;
    #profilePicture;
    #profileBanner;

    constructor(username, name, lastname, birthday, joinedDate, bio, profilePicture, profileBanner){
        this.#username = username;
        this.#name = name;
        this.#lastname = lastname;
        this.#birthday = birthday;
        this.#joinedDate = joinedDate;
        this.#bio = bio;
        this.#profilePicture = profilePicture;
        this.#profileBanner = profileBanner;
    }

    getUsername(){
        return this.#username;
    }
    setUsername(username){
        this.#username = username;
    }
    getName(){
        return this.#name;
    }
    setName(name){
        this.#name = name;
    }
    getLastname(){
        return this.#lastname;
    }
    setLastname(lastname){
        this.#lastname = lastname;
    }
    getBirthday(){
        return this.#birthday;
    }
    setBirthday(birthday){
        this.#birthday = birthday;
    }
    getJoinedDate(){
        return this.#joinedDate;
    }
    setJoinedDate(joinedDate){
        this.#joinedDate = joinedDate;
    }
    getBio(){
        return this.#bio;
    }
    setBio(bio){
        this.bio = bio;
    }
    getProfilePicture(){
        return this.#profilePicture;
    }
    setProfilePicture(profilePicture){
        this.#profilePicture = profilePicture;
    }
    getProfileBanner(){
        return this.#profileBanner;
    }
    setProfileBanner(profileBanner){
        this.#profileBanner = profileBanner;
    }
};