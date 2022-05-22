const Spiderman = require("../app/Spiderman");

describe('First suit case for spiderman test', () => {
    test('Case 1. Creating a new instance of Spiderman class', () => {
        const inst = new Spiderman("Peter Parker", 16, "Tom Holland", 4, "Marvel Studios");
        expect(inst.getName()).toBe(1);
        expect(inst.getAge()).toBe(1);
        expect(inst.getActor()).toBe(1);
        expect(inst.getMovies()).toBe(1);
        expect(inst.getStudio()).toBe(1);
    });
});