'use strict';

class User{
    #id;
    #username;
    #name;
    #bio;
    #dateCreated;
    #lastUpdated;

    constructor(id, name, username, bio, dateCreated, lastUpdated){
        this.#id = id;
        this.#name = name;
        this.#username = username;
        this.#bio = bio;
        this.#dateCreated = dateCreated;
        this.#lastUpdated = lastUpdated;
    }

    getId(){ return this.#id; }
    setId(id){ this.#id = id; }
    getUsername(){ return this.#username; }
    setUsername(username){ this.#username = username; }
    getName(){ return this.#name; }
    setName(name){ this.#name = name; }
    getBio(){ return this.#bio; }
    setBio(bio){ this.#bio = bio; }
    getDateCreated(){ return this.#dateCreated; }
    setDateCreated(dateCreated){ this.#dateCreated = dateCreated; }
    getLastUpdated(){ return this.#lastUpdated; }
    setLastUpdated(lastUpdated){ this.#lastUpdated = lastUpdated}
}

module.exports = User;