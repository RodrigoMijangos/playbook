'use strict';

const issue = {
    title: "First Issue",
    repositoryNameAssociated: "LaunchX",
    status: "Closed",
    numberOfComents: 17,
    labels:[
        "First Label",
        "Second Label"
    ],
    author: "Rodrigo Mijangos",
    dateCreated: '2022-01-05T22:00:00-06:00',
    lastUpdate: '2022-01-05T23:44:00-06:00',
    getTitleAndAuthor: function (){
        return `Issue title: ${this.title}\nIssue Author: ${this.author}`;
    },
    getGeneralInfo: function (){
        let message = `Created: ${new Date(this.dateCreated)}\n`
        message += `Status: ${this.status}\nLabels: \n`
        this.labels.forEach(item => message += `\t${item}\n`);

        message += `Last updated: ${new Date(this.lastUpdate)}\n`;
        message += `Amount of comments: ${this.numberOfComents}\n`;

        return message;
    }
};

console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo());