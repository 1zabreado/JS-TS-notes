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
var user = {
    name: "za breado#0001",
    age: 16,
    hobbies: ["gaming", "anime", "coding"],
    role: Role.ADMIN
};
// user.role.push('admin'); - this works but not recommended
// user.role[1] = 10;
var favouriteActivities;
favouriteActivities = user.hobbies;
console.log(user.name);
for (var _i = 0, _a = user.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map())
}
if (user.role === Role.ADMIN) {
    console.log("".concat(user.name, " is an admin"));
}
