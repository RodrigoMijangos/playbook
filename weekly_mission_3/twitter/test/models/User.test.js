'use strict';
const User = require('../../app/models/User');

describe('Suit test for User model: All parameters are strings.', () => {
    test('Case 1: Parameters are set with the name of same parameters', () => {
        //dateCreated and lastUpdated were any, now are Date instances.
        const usr = new User("id", "name", "username", "bio");
        
        expect(usr.getId()).toBe("id");
        expect(usr.getName()).toBe("name");
        expect(usr.getUsername()).toBe("username");
        expect(usr.getBio()).toBe("bio");
        expect(usr.getDateCreated()).not.toBeUndefined();
        expect(usr.getLastUpdated()).not.toBeUndefined();
    });
    test('Case 2: Parameters are set with "real" parameters', () => {
        const usr = new User("1", "Rodrigo Mijangos", "rodrigoMijangos", "Software developer in last grades of formation");

        expect(usr.getId()).toBe("1");
        expect(usr.getName()).toBe("Rodrigo Mijangos");
        expect(usr.getUsername()).toBe("rodrigoMijangos"); //Testing if Jest is uppercase sensible
        expect(usr.getBio()).toBe("Software developer in last grades of formation");
        expect(usr.getDateCreated()).not.toBe("may 24th, 2022");
        expect(usr.getLastUpdated()).not.toBe("may 24th, 2022");
    });
});
describe('Suit test for User model: Created and lastUpdated are Dates.', () => {
    test('Case 1: ', () => {
        const usr = new User();
    });
});