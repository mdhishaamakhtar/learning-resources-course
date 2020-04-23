//jshint esversion:6

let fruits = ["Apple", "Banana", "Orange"];

const getFruits = () => {
    setTimeout(() => {
        fruits.forEach(data => {
            console.log(data);
        });
    }, 1000);
};

const postFruit = (fruit, callback) => {
    setTimeout(() => {
        fruits.push(fruit);
        callback();
    }, 2000);
};

postFruit("Kiwi", getFruits);