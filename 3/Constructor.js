function User(name, lastname, age) {
  this.name = name;
  this.lastame = lastname;
  this.age = age;

  this.print = () => {
    console.log(`Name: ${this.name}, last name: ${this.lastame}, age: ${this.age}`);
  }
}

const user = new User('John', 'Smith', 30);
user.print();
