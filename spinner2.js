const spinner2 = (sighbar) => {
  let time = 0;
  for (let i = 0; i < sighbar.length; i++) {
    setTimeout(() => {
      process.stdout.write(sighbar[i]);
    }, time);
    time += 300;
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, time)
}
let sighbar = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
spinner2(sighbar);



