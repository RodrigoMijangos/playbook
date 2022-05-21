export default class Review{
    #rate;
    #title;
    #body;
    #travel;

    constructor(rate, title, body, travel){
        this.#rate = rate;
        this.#title = title;
        this.#body = body;
        this.#travel = travel;
    }

    getRate(){ return this.#rate }
    setRate(rate){ this.#rate = rate }
    getTitle(){ return this.#title }
    setTitle(title){ this.#title = title }
    getBody(){ return this.#body }
    setBody(body){ this.#body = body }
    getTravel(){ return this.#travel }
    setTravel(travel){ this.#travel = travel}
}