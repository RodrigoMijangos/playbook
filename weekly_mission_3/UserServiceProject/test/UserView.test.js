const UserView = require('../app/UserView.js');

describe('Test for UserView', () => {
    test('Nullable payload error', () => {
        const payload = null;
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/Nullable Object/);
    });
    test('Invalid payload: Some data is null', () => {
        const payload = {id: null, username: "Username", name: "Name"};
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/Some parameters haven't valid arguments/)
    });
    test('Invalid Payload: Some data is missed', () => {
        const payload = {id: 1};
        const result = UserView.createUser(payload);
        console.log(result);
    });
});