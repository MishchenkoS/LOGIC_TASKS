async function obertka(func) {
  const time1 = performance.now();
  await func();
  const time2 = performance.now();

  console.log(time2 - time1);
}

function sync() {
  setTimeout(()=>{
    const a = Math.random() * 200;
    const b = Math.random() * 300;
    console.log(a * b);
  }, 1000);
}

obertka(sync);