type User = {
  name: string;
  age: number;
  premiumUser: boolean;
};

const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;

const users: User[] = [];

const lines = data.split("\n");

for (const line of lines) {
  // 空行のスキップ、continueで次のループ処理
  if (line === "") {
    continue;
  }

  // 分割代入
  const [name, ageString, premiumUserString] = line.split(",");

  // ageを数値に変換
  const age = Number(ageString);

  // プレミアムユーザーの条件判定
  const premiumUser = premiumUserString === "1";

  users.push({
    name,
    age,
    premiumUser,
  });
}

console.log(users);

for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name}(${user.age})はプレミアムユーザーです。`);
  } else {
    console.log(
      `${user.name}(${user.age})はプレミアムユーザーではありません。`
    );
  }
}
