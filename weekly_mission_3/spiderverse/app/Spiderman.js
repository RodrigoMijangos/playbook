class Spiderman{
    #name;
    #age;
    #actor;
    #movies;
    #studio;

    constructor(name, age, actor, movies, studio){
        this.#name = name;
        this.#age = age;
        this.#actor = actor;
        this.#movies = movies;
        this.#studio = studio;
    }

    getName(){ return this.#name; }
    setName(name){ this.#name = name; }
    getAge(){ return this.#age; }
    setAge(age){ this.#age = age; }
    getActor(){ return this.#actor; }
    setActor(actor){ this.#actor = actor; }
    getMovies(){ return this.#movies; }
    setMovies(movies){ this.#movies = movies; }
    getStudio(){ return this.#studio; }
    setStudio(studio){ this.#studio = studio; }

    getInfo(){ return `Hey I'm ${this.#actor} and I'm the Spiderman from ${this.#studio}`; }
}

module.exports = Spiderman;