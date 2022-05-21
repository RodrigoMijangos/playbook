export default class Profile{
    #username;
    #raiting;
    #reviews;
    #car;

    constructor(username, raiting, reviews, car){
        this.#username = username;
        this.#raiting = raiting;
        this.#reviews = reviews;
        this.#car = car;
    }

    getUsername(){ return this.#username }
    setUsername(username){ this.#username = username }
    getRaiting(){ return this.#raiting }
    setRaiting(raiting){ this.#raiting = raiting }
    getReviews(){ return this.#reviews }
    setReviews(reviews){ this.#reviews = reviews }
    getCar(){ return this.#car }
    setCar(car){ this.#car = car }
}