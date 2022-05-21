export default class Post{
    #author = String;
    #body = String;
    #created = Date;
    #updated = Date;
    #comments = [String];
    #reactions = [Reaction];

    constructor(author, body, created, updated, comments, reactions){
        this.#author = author;
        this.#body = body;
        this.#created = created;
        this.#updated = updated;
        this.#comments = comments;
        this.#reactions = reactions;
    }

    getAuthor(){ return this.#author }
    setAuthor(author) { this.#author = author }
    getBody(){ return this.#body }
    setBody(body){ this.#body = body }
    getCreated(){ return this.#created }
    setCreated(created){ this.#created = created }
    getUpdated(){ return this.#updated }
    setUpdated(updated){ this.#updated = updated }
    getComments(){ return this.#comments }
    setComments(comments){ this.#comments = comments }
    getReactions(){ return this.#reactions }
    setReactions(reactions){ this.#reactions = reactions }
}