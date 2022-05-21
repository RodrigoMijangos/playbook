import Post from "./Post.js"
import User from "./User.js"

export default class Biografy{
    #posts;
    #user;
    
    constructor(user, post){
        this.#user = user;
        this.#posts = post;
    }

    getUser(){ return this.#user }
    setUser(user = User){ this.#user = user }
    getPosts(){ return this.#posts }
    setPosts(posts = [Post]) { this.#posts = posts }
}