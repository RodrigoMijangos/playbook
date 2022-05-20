'user strict';
export default class Hashtag{
    #title;
    #tweets;

    constructor(title, tweets){
        this.#title = title;
        this.#tweets = tweets;
    }

    getTitle(){
        return this.#title;
    }
    setTitle(title){
        this.#title = title;
    }
    getTweets(){
        return this.#tweets;
    }
    setTweets(tweets){
        this.#tweets = tweets;
    }
};