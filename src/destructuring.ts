const obj = {
  // プロパティ名が数値リテラルでもオブジェクトは文字列に
  1: "one",
  2.05: "two point o five",
};

console.log(obj["1"]);
console.log(obj["2.05"]);
