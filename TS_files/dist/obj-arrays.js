"use strict";
// const user: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: "za breado#0001",
//     age: 16,
//     hobbies: ["gaming", "anime", "coding"],
//     role: [2, 'author']
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const user = {
    name: "za breado#0001",
    age: 16,
    hobbies: ["gaming", "anime", "coding"],
    role: Role.ADMIN
};
// user.role.push('admin'); - this works but not recommended
// user.role[1] = 10;
let favouriteActivities;
favouriteActivities = user.hobbies;
console.log(user.name);
for (const hobby of user.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map())
}
if (user.role === Role.ADMIN) {
    console.log(`${user.name} is an admin`);
}
