class Password {
  constructor() {
    console.log("Welcome")
    this.pass = ""
  }
  generatePassword(len) {
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    let numeric = "1234567890"
    let special = "!@#$%^&*()"
    if (len < 5) {
      return this.pass +="Minimum Length 5 Required"
    }
    else {
      let i = 0
      while (i < len) {
        this.pass += alpha[Math.floor(Math.random() * alpha.length)]
        this.pass += numeric[Math.floor(Math.random() * numeric.length)]
        this.pass += special[Math.floor(Math.random() * special.length)]
        i += 3
      }
      this.pass = this.pass.substr(0, len)
      return this.pass
    }
  }
}

let p = new Password()
console.log(p.generatePassword(7))
