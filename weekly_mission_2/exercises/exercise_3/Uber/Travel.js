export default class Travel{
    #destination;
    #begin;
    #duration;
    #distance;

    constructor(destination, begin, duration, distance){
        this.#destination = destination;
        this.#begin = begin;
        this.#duration = duration;
        this.#distance = distance;
    }

    getDestination(){ return this.#destination }
    setDestination(destination){ this.#destination = destination }
    getBegin(){ return this.#begin }
    setBegin(begin){ this.#begin = begin }
    getDuration(){ return this.#duration }
    setDuration(duration){ this.#duration = duration }
    getDistance(){ return this.#distance }
    setdistance(distance){ this.#distance = distance }
}