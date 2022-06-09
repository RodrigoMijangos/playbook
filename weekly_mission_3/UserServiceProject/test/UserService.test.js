const _userService = require('../app/UserService.js');

describe('Test case for User Service', () => {
    test('1. Create a new user using the service', () => {
        const user = _userService.create(1, "Rodrigo Mijangos", "RodrigoMijangos");
        
        expect(user.getId()).toBe(1);
        expect(user.getName()).toBe("Rodrigo Mijangos");
        expect(user.getUsername()).toBe("RodrigoMijangos");
        expect(user.getBio()).not.toBeUndefined();
    });
    test('2. Getting all info of user instances throught User Service.', () => {
        const user = _userService.create(1, "Rodrigo Mijangos", "RodrigoMijangos");
        const userInfo = _userService.getInfo(user);

        expect(userInfo[0]).toBe(1);
        expect(userInfo[1]).toBe("Rodrigo Mijangos");
        expect(userInfo[2]).toBe("RodrigoMijangos");
        expect(userInfo[3]).toBe("No bio"); //No bio instead New bio
        expect(userInfo[4]).not.toBeUndefined();
        expect(userInfo[5]).not.toBeUndefined();
    });
    test('3. Updating a username from Service.', () => {
        const user = _userService.create(1, "Rodrigo Mijangos", "RodrigoMijangos");

        expect(user.getUsername()).toBe("RodrigoMijangos");

        user = _userService.updateUsername("New Username", user);

        expect(user.getUsername()).not.toBe("RodrigoMijangos");
        expect(user.getUsername()).toBe("New Username");
    });

    test('4. Getting usernames from list of users', () => {
        const user1 = _userService.create(1, "Name 1", "Username1");
        const user2 = _userService.create(2, "Name 2", "Username2");
        const user3 = _userService.create(3, "Name 3", "Username3");

        expect(user1.getUsername()).toBe("Username1");
        expect(user2.getUsername()).toBe("Username2");
        expect(user3.getUsername()).toBe("Username3");

        const USERNAMES = _userService.getAllUsernames([user1, user2, user3]);

        expect(USERNAMES[0]).toBe("Username1")
        expect(USERNAMES[1]).toBe("Username2")
        expect(USERNAMES[2]).toBe("Username3")

    });
});