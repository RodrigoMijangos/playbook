export default class Pokemon{
    constructor (name) {
        this.name = name;
    }

    sayHello(){
        console.log(`${this.name} dice hola ^^`);
    }

    sayMessage(message){
        console.log(`${this.name} dice ${message} :0`);
    }
}