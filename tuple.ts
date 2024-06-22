
// TUPLES
// SPECIFIC ARRANGEMENT OF MULTIPLE TYPES OF DATA 

let user: [string, number, boolean] = ["shahrukh", 1, true]  //NO MORE ELEMENTS CAN BE ADDED LIKE THIS

type shah = [number, string]
let newUser: shah = [1, "rukh"]


// DRAWBACKS OF TUPLE HERE
newUser[1] = "CHANGED TEXT"            //ITS ALLOWED
newUser.push("SHah", 21, 25, "sha")    //ITS ALLOWED  
console.log(newUser)

