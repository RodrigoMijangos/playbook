const Spiderman = require("../app/Spiderman");

describe('First suit case for spiderman test', () => {
    test('Case 1. Creating a new instance of Spiderman class', () => {
        const inst = new Spiderman("Peter Parker", 16, "Tom Holland", 4, "Marvel Studios");
        expect(inst.getName()).toBe("Peter Parker");
        expect(inst.getAge()).toBe(16);
        expect(inst.getActor()).toBe("Tom Holland");
        expect(inst.getMovies()).toBe(4);
        expect(inst.getStudio()).toBe("Marvel Studios");
    });
    test('Case 2. Adding a info function to Spiderman class', () => {
        const inst = new Spiderman("Peter Parker", 16, "Tom Holland", 4, "Marvel Studios");
        expect(inst.getInfo()).toBe("Hey I'm Tom Holland and I'm the Spiderman from Marvel Studios");
    });
});