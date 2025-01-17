"use strict";
const data = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;
// const users: User[] = [];
// const lines = data.split("\n");
// for (const line of lines) {
//   if (line === "") {
//     continue;
//   }
//   const [name, ageString, premiumUserString] = line.split(",");
//   const age = Number(ageString);
//   const premiumUser = premiumUserString === "1";
//   users.push({
//     name,
//     age,
//     premiumUser,
//   });
// }
// console.log(users);
const users = data.split("\n")
    // 空行をフィルタリング
    .filter(line => line !== "")
    .map(line => {
    const [name, ageString, premiumUserString] = line.split(",");
    return {
        name,
        age: Number(ageString),
        premiumUser: premiumUserString === "1",
    };
});
for (const user of users) {
    if (user.premiumUser) {
        console.log(`${user.name}(${user.age})はプレミアムユーザーです。`);
    }
    else {
        console.log(`${user.name}(${user.age})はプレミアムユーザーではありません。`);
    }
}
