const TRENDING ={
    position : 1,
    hashtag : "DoctorStrange2",
    category : "Entretenimiento",
    tweetsCounter : 2000,
    getDetailed : function () {
        return `Posición - ${this.position} - ${this.category}\n#${this.hashtag}\nTweets Totales: ${this.tweetsCounter}`;
    }
};

console.log(TRENDING.getDetailed());