const TWEET = {
    body : "A mi no me gustó mucho #DoctorStrange2",
    user : "MarvelHater",
    likes : 6,
    getBodyLength : function () {
        return this.body.length;
    },
    getDetailed : function () {
        msg = `----------------------------------\n`;
        msg += `@${this.user}\n${this.body}\nLikes: ${this.likes}\n`;
        msg += `----------------------------------\n`;
        return msg;
    }
};

console.log(TWEET.getDetailed());