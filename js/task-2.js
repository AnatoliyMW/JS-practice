class Client {
  #login;
  #email;

  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }

  get clientData() {
    return { login: this.#login, email: this.#email };
  }
  set clientData({ newLogin, newEmail }) {
    this.#login = newLogin;
    this.#email = newEmail;
  }
}

const newClient = new Client("Mango", "mango@gmail.com");
console.log(newClient);
newClient.clientData = { newLogin: "Poly", newEmail: "poly@gmail.com" };
console.log(newClient);
