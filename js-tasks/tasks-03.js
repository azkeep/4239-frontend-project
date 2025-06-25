// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

const circleCircumference = (circle) => 2 * Math.PI * circle.radius;

// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

function giveMeFive(obj) {
    const array = [];
    for (const key in obj) {
        if (key.length === 5) array.push(key);
        if (obj[key].length === 5) array.push(obj[key]);
    }
    return array;
}

// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript

function buildFun(n){
    const res = [];
    for (let i = 0; i< n; i++){
        res.push(() => i)
    }
    return res;
}

// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

const mammalLegCount = 4;
const fishLegCount = 0;

class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, fishLegCount, "shark", status);
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, mammalLegCount, "cat", status);
    }

    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, mammalLegCount, "dog", status);
        this.master = master;
    }

    greetMaster() {
        return `Hello ${this.master}`;
    }
}