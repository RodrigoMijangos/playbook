'use strict';

const pull_request = {
    title: "Requesting a pull",
    author: "Rodrigo Mijangos",
    branchName: "main",
    dateCreated: '2022-01-05T22:00:00-06:00',
    status: "In process",
    repositoryNameAssociated: "LaunchX",
    getStatus: function(){
        return `Status: ${this.status}`;
    },
    getTitleAndAuthor: function() {
        return `Title: ${this.title}\nAuthor: ${this.author}`;
    }
};

console.log(pull_request.getTitleAndAuthor());
console.log(pull_request.getStatus());