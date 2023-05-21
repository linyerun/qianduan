function Animal(name) {
  this.name = name;
}

Animal.color = "black"

Animal.prototype.say = function () {
  console.log("I'm " + this.name)
}

let cat = new Animal("cat")

console.log(
    cat.name,  //cat
    cat.height //undefined
)
cat.say() //I'm cat

console.log(
    Animal.name, //Animal
    Animal.color //back
);
// Animal.say(); //Animal.say is not a function