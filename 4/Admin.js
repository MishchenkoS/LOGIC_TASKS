class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  print() {
    console.log(`Name: ${this.firstName}; Last Name: ${this.lastName}; age: ${this.age}`);
  }
}

class Admin extends User {
  constructor(firstName, lastName, age, role) {
    super(...arguments);
    
    this.role = role;
  }
}

const admin = new Admin('John', 'Connor', '32', 'admin');
