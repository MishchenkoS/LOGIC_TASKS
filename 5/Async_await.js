function wait() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  })
}

async function f() {
  try {
    const data = await wait();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
  console.log('Promise complete');
}