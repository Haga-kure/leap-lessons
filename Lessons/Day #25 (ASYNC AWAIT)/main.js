function prepareCoffe() {
  const coffePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Preperad coffee");
    }, 10000);
  });
  return coffePromise;
}

function fryEgg() {
  const eggPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Fried egg");
    }, 5000);
  });
  return eggPromise;
}

async function startMorning() {
  const coffee = await prepareCoffe();
  console.log(coffee);
  const egg = await fryEgg();
  console.log(egg);
}
