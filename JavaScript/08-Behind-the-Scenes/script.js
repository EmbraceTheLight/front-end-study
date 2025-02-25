/* jshint -W097 */
"use strict";

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 2005) {
      var millennial = true;

      //创建一个新的与外部作用域名称相同的变量 firstName
      const firstName = "Steven";

      // 重新分配外部作用域的 output 变量
      output = `NEW OUTPUT`;

      const str = `Oh, and you are a millennial, ${firstName}!`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millennial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = "Ey";
calcAge(2003);
