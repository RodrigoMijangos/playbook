const HASHTAG = {
    title : "DoctorStrange2",
    tweets : [
        {
            body : "La película me encanta, de verdad amo #DoctorStrange2",
            user : "_LoverStrange",
            likes : 30
        },
        {
            body : "A mi no me gustó mucho #DoctorStrange2",
            user : "MarvelHater",
            likes : 6
        },
        {
            body : "Sam Raimi se ha superado por mucho con #DoctorStrange2",
            user : "MarvelLover",
            likes : 127
        }
    ],
    getTweetsAmount : function () {
        return this.tweets.length;
    },
    getTweets : function () {
        msg = `\t----------------------------------\n`;
        this.tweets.forEach(tweet => {
            msg += `\t@${tweet.user}\n\t${tweet.body}\n\tLikes: ${tweet.likes}\n`;
            msg += `\t----------------------------------\n`;
        })
        return msg;
    }
};

console.log(`${HASHTAG.title} tiene ${HASHTAG.getTweetsAmount()} tweets`)
console.log("Tweets:\n" + HASHTAG.getTweets())