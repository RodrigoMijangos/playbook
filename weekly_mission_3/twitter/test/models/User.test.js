'use strict';
const User = require('../../app/models/User');

describe('Suit test for User model: All parameters are strings', () => {
    test('Case 1: Parameters are set with the name of same parameters', () => {
        const usr = new User("id", "name", "username", "bio", "dateCreated", "lastUpdated");
        
        expect(usr.getId()).toBe("id");
        expect(usr.getName()).toBe("name");
        expect(usr.getUsername()).toBe("username");
        expect(usr.getBio()).toBe("bio");
        expect(usr.getDateCreated()).toBe("dateCreated");
        expect(usr.getLastUpdated()).toBe("lastUpdated");
    });
    test('Case 2: Parameters are set with "real" parameters', () => {
        const usr = new User("1", "Rodrigo Mijangos", "rodrigoMijangos", "Software developer in last grades of formation", "may 24th, 2022", "may 24th, 2022");

        expect(usr.getId()).toBe("1");
        expect(usr.getName()).toBe("Rodrigo Mijangos");
        expect(usr.getUsername()).toBe("rodrigomijangos"); //Testing if Jest is uppercase sensible
        expect(usr.getBio()).toBe("Software developer in last grades of formation");
        expect(usr.getDateCreated()).toBe("may 24th, 2022");
        expect(usr.getLastUpdated()).toBe("may 24th, 2022");
    });
});