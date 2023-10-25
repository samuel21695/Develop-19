function Capsule(id, password, email) {
  this.id = id;
  this.password = password;
  this.email = email;
}

const capsule1 = new Capsule("kongukjae", "305", "kongukjae@example.com");
console.log(capsule1);