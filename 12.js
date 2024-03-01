const a = async (text, n = 3) => {
  return new Promise((resolve,) => {
    setTimeout(() => {
      resolve(text)
    }, 1000 * n)
  })
}

(
  async () => {
    let text = await a("Hello")
    console.log(text)
    text = await a("World")
    console.log(text)
  }
)()

function sum(a, b, c) {
  return a + b + c
}

let x = [16, 12, 18]
console.log(sum(...x));

(async () => {
  let text = await a("After 2 second", 2)
  console.log(text)
  text = await a("After 5 seconds", 5)
  console.log(text)
}
)()

function simpleInterest(p, r, t) {
  return (p * r * t) / 100;
}

console.log(simpleInterest(6000, 15, 10))
