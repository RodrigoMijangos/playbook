export default class TrendingTopic{
    #position;
    #hastag;
    #categoryName;

    constructor(position, hashtag, categoryName){
        this.#position = position;
        this.#hastag = hashtag;
        this.#categoryName = categoryName;
    }

    getPosition(){
        return this.#position;
    }
    setPosition(position){
        this.#position = position;
    }
    getHashtag(){
        return this.#hashtag;
    }
    setHashatg(hashtag){
        this.#hashtag = hashtag;
    }
    getCategoryName(){
        return this.#categoryName;
    }
    setCategoryName(categoryName){
        this.#categoryName = categoryName;
    }
};