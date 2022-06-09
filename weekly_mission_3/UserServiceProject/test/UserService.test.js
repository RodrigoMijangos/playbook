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
        expect(userInfo[3]).toBe("New bio"); //No bio instead New bio
        expect(userInfo[4]).not.toBeUndefined();
        expect(userInfo[5]).not.toBeUndefined();
    });
});