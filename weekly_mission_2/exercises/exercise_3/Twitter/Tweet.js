'use strict';
export default class Tweet{
    #body;
    #user;
    #likes;

    constructor(body, user, likes){
        this.#body = body;
        this.user = user;
        this.likes = likes;
    }

    getBody(){
        return this.#body;
    }
    setBody(body){
        this.#body = body;
    }
    getUser(){
        return this.#user;
    }
    setUser(user){
        this.#user = user;
    }
    getLikes(){
        return this.#likes;
    }
    setLikes(likes){
        this.#likes = likes;
    }
}