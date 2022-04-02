let camelCase = (txt) => {
  let tmp = txt.split("-");
  tmp[1] =
    tmp[1].substring(0, 1).toUpperCase() + tmp[1].substring(1, tmp[1].lenght);
  let tmp2 = tmp.join("");
  console.log(tmp2);
};

camelCase("background-color");
