"use strict";
const foo = { obj: { num: 1234 } };
const bar = Object.assign({}, foo);
bar.obj.num = 0;
console.log(foo.obj.num);
